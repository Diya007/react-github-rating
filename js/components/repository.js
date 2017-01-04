var React = require('react');
var connect = require('react-redux').connect;
var StarRater = require('./star-rater');
var actions = require('../actions/index')

var Repository = React.createClass({

	changeRating: function(rating) {
		this.props.dispatch(
			actions.rateRepository(this.props.repository.name, rating)
		);
		//Todo: change the rating 
	},

	render: function() {
		  return (
            <div className="repository">
                {this.props.repository.name}
                &nbsp;
                <StarRater rating={this.props.repository.rating}
                           onChange={this.changeRating} />
            </div>
							// 不是当StarRater作为tag时是被赋予值的吗

				//still don't know what is this.props indicate state??

		)
	}

})

var Container = connect()(Repository);
//module.exports = Repository;
//don't pass a mapStateToProps function to connect.
// This means that only the dispatch prop will be added.
module.exports = Container;