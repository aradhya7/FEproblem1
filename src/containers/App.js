import React, {Component} from 'react';
import SelectPlanet from '../components/SelectPlanet';
import {connect} from 'react-redux';

class App extends Component{

	constructor(props){
		super(props);
	}
   
    componentDidMount(){
    	console.log(this.props);
    	//const {vehicles, dispatch} = this.props;
   //  	let temp_veh = [ {
   //  		max_distance: 200,
			// name:"Space pod",
			// speed:2,
			// total_no:2
   //  	    },
   //  	     {
   //  		max_distance: 300,
			// name:"Space pod",
			// speed:4,
			// total_no:1
   //  	    },
   //  	     {
   //  		max_distance: 400,
			// name:"Space pod",
			// speed:5,
			// total_no:1
   //  	    },
   //  	    {
   //  		max_distance: 600,
			// name:"Space pod",
			// speed:10,
			// total_no:2
   //  	    }]
    	//dispatch({type:'SET_VEHICLES', vehicles: temp_veh});
    	//dispatch({type:'SET_TOKEN',token:'1234'});
    	// fetch('https://findfalcone.herokuapp.com/token',{
    	// 	method:'POST',
    	// 	headers:{
    	// 		'Accept':'application/json'
    	// 	}
    	// })
    	// .then(response=>response.json())
    	// .then(response=>console.log(response))
    	// fetch('https://findfalcone.herokuapp.com/vehicles')
    	// .then(response=>response.json())
    	// .then(response=>dispatch({type:'SET_VEHICLES', vehicles: response}))
    	// 
    	// 
    }

	render(){
		const {vehicles_loaded, vehicles} = this.props;
		return(
			<div>
			  <SelectPlanet dispatch={this.props.dispatch} destination_num={1} destinations={this.props.destinations}  vehicles={this.props.vehicles} />
			  <SelectPlanet dispatch={this.props.dispatch} destination_num={2} destinations={this.props.destinations}  vehicles={this.props.vehicles} />
              <select name='country' defaultValue='no-value'>
				    <option value='no-value' disabled hidden>Please select</option>
				    <option value='o1'>Option 1</option>
				    <option value='o2'>Option 2</option>
				    <option value='o3'>Option 3</option>
				</select>
			</div>
		);
	}
} 

const mapStateToProps = (state)=>{
  return { vehicles:state.vehicles, 
           destinations: state.destinations
  }
}

export default connect(mapStateToProps)(App);
