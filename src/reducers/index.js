const initState = {
	vehicles_loaded:false,
	token_available:false,
	token:'',
	destinations : ['donlon','enhai','pingasor','sapir'], 
	vehicles : ['space pod', 'rocket', 'shuttle', 'ship']
};

export default function planet(state = initState, action){

	switch(action.type){
        case 'SET_TOKEN' :
        	return {...state,
              token_available:true,
              token:action.token 
        	};
        case 'SET_VEHICLES':
            return {
            	...state,
            	vehicles: action.vehicles,
            	vehicles_loaded: true
            };
        case 'VEHICLE_SELECTED':
            let vehicles = state.vehicles.slice();
            vehicles.splice(vehicles.indexOf(action.vehicle),1);
            return {
            	...state,
                vehicles
            };
        case 'PLANET_SELECTED':
            let destinations = state.destinations.slice();
            destinations.splice(destinations.indexOf(action.destination),1);
            return {
            	...state,
                destinations
            };
        default:
          return state
	}

};