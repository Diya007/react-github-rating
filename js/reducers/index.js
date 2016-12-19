var actions = require('../actions/index');
var initialRepositoryState = [];

var repositoryReducer = function(state, action) {
	//state is either initial state or returned state
	//action is what user request 
	if (action.type == actions.ADD_REPOSITORY) {
		return state.concat ({
		//merge array to state array
			name: action.repository,
			rating: null
		});
		
	}
	else if (action.type === actions.RATE_REPOSITORY) {
		var index = -1;
		//looking for the repo in state i want to change 
		for(var i = 0; i<state.length; i++){
			var repository = state[i];
			if(repository.name == action.repository) {
			//this is the repo i'm looking for !
				index = i;
				break
				//what is the break for? 
			}
		if (index = -1) {
			throw new Error ('could not find repostory');
		}

		var before = state.slice(0,i);
		//arrays before the changed repository 
		var after = state.slice(i+1);
		//arrays after the changed repository
		var newRepository = Object.assign({}, repository, {rating: action.rating});
		state = before.concat(newRepository, after);

		}

		return  state
		//new state with rating 
	}
}



exports.repositoryReducer = repositoryReducer;