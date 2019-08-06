import React from 'react';

import './App.scss';

import CardList from './components/CardList';

class App extends React.Component {
  
  constructor(){
    super(); //imports 'this' keyword
    this.state = { 
      userInfo: [] //creates state variable of userInfo with the value of an empty array
    }
  };
  
  fetchUserInfo = () => { //retrieves api data response
    fetch(`https://api.github.com/users/dhoskins97`)
    .then(res => {return res.json();}) //formats response into json
    .then(githubInfo => this.setState( {userInfo: githubInfo} )) //takes json format and sets it to state of userInfo
  }

  render(){
    return (
      <div className="App">
        <CardList />
      </div>
    ); //end of return block
  }; //end of render method
} //end of App

export default App;
