import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SwipeCard from './SwipeCard';
import PreferencePage from './PreferencePage';


// const config = {
//   headers: {'Authorization': 'Bearer 8PFnRjBdeczBvlqjph1bzECWVbJDj_p4wpjf1fHFinCrNBfw5bjhsRF60TpwjjEQoyEesUm8vjG8taEzjXxI1XIRNYiPm8akqUgjxk6gUaVGMnKvsic8zIy-XfeYWnYx'},
//   params: {
//     // term: this.props.navigation.state.params.term,
//     term: this.props.term,    
//     // term: "vegan",
//     location: '2 South PineHurst Ave'
//   }
// };


class SwipeFunction extends Component {

  constructor(){
    super(props)
  }

  state = { 
    businesses: [], 
    profileIndex: 0 
  };
  
  config = {
    headers: {'Authorization': 'Bearer 8PFnRjBdeczBvlqjph1bzECWVbJDj_p4wpjf1fHFinCrNBfw5bjhsRF60TpwjjEQoyEesUm8vjG8taEzjXxI1XIRNYiPm8akqUgjxk6gUaVGMnKvsic8zIy-XfeYWnYx'},
    params: {
      term: this.props.navigation.state.params.term,
      // term: this.props.term,    
      // term: "vegan",
      location: '2 South PineHurst Ave'
    }
  };

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => this.setState({ businesses: response.data.businesses }));


  upcomingCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1});
  }



  render() {
    const {profileIndex, businesses} = this.state;
    console.log(businesses);

    return (
     <View style={{flex:1}}>
       {businesses.slice(profileIndex, profileIndex + 3).map(place => {
         return(
           <SwipeCard
             key={place.id}
             place={place}
             onSwipeOff={this.upcomingCard}
           />
         )
       })}
     </View>
   );
 }
}

export default SwipeFunction;
