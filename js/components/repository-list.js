var React = require('react');
var connect = require('react-redux').connect;
var Repository = require('./repository');
var actions = require('../actions/index')

var RepositoryList = React.createClass({
    addRepository: function() {
        var repositoryName = this.refs.repositoryName.value;
        this.props.dispatch(actions.addRepository(repositoryName));
        // TODO: Add the repository to the state
    },

    render: function() {
        var repositories = this.props.repositories.map(function(repository) {
            //this.props.reposiotires means repositories are from parent componet,
            //only parent component can change repositories
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
});
// in index.js , provider has include store.js/ reducers into repository list
var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};
// assign state to RepositoryList's repositories

var Container = connect(mapStateToProps)(RepositoryList)
// in this way, you can use action to change the state on RepositoryList

module.exports = Container;