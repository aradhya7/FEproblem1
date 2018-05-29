import React, {Component} from 'react';

export default class SelectPlanent extends Component{
   constructor(props){
   	 super(props);
   	 this.state = { destination : 'hello'};
   	 this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e){
   	  const {dispatch} = this.props;
      //let value = e.target.checked;
      let name = e.target.value;
      console.log(name);
      this.setState({destination: name});
      // dispatch({type:'PLANET_SELECTED', destination:e.target.value})
      // if(e.target.checked){
      //    dispatch({type:'VEHICLE_SELECTED', vehicle:e.target.value})
      // }
   }

   render(){
   	const {destination_num, destinations, vehicles} = this.props;
   	//console.log(this.props);
   	  return(
          <div>
            <div>Destination {destination_num}</div>
            <select defaultValue="select_here" onChange={this.handleChange}>
                <option value='select_here' disabled hidden>Choose here</option>
	            {destinations.map((destination, index)=>
	               <option value={destination} key={index.toString()}>{destination}</option>
	            )}
	        </select>
	          <div>
	            {vehicles.map((vehicle)=>
	            	<div key={vehicle}>
                       <input type="radio" name="vehicles" value={vehicle} onChange={this.handleChange} />{vehicle}
                    </div>
	             )}
	           </div> 
          </div>
   	  );
   }
}