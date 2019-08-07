import React from 'react';

import './App.scss';

import UserCard from './components/UserCard';

// import CardList from './components/CardList';

// class App extends React.Component {
  
//   constructor(){
//     super(); //imports 'this' keyword
//     this.state = { 
//       userInfo: [] //creates state variable of userInfo with the value of an empty array
//     }
//   };
  
//   fetchUserInfo = () => { //retrieves api data response
//     fetch(`https://api.github.com/users/dhoskins97`)
//     .then(res => {return res.json();}) //formats response into json
//     .then(githubInfo => this.setState( {userInfo: githubInfo} )) //takes json format and sets it to state of userInfo
//     .catch(error => console.log(error));
//   }

//   componentDidMount(){
//     this.fetchUserInfo();
//   }

//   render(){
//     console.log(this.state)
//     return (
//       <div className="App">
//         <CardList userInfo={this.state.userInfo}/>
//       </div>
//     ); //end of return block
//   }; //end of render method
// } //end of App

class App extends React.Component {
  constructor(props){

    super(props);

    this.state = { userInfo: [], followerInfo: [] }
  };

  fetchUserInfo = () => {
    fetch(`https://api.github.com/users/dhoskins97`)
    
    .then(res=> {return res.json()} )
    
    .then(param => this.setState( {userInfo: param} ) )
    
    .catch(err=>console.log(err))
  }

  fetchFollowerInfo = () => {
    fetch(`https://api.github.com/users/dhoskins97/followers`)
    
    .then(res=> {return res.json()} )
    
    .then(param => this.setState( {followerInfo: param} ) )
    
    .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.fetchUserInfo();
    this.fetchFollowerInfo();
  }

  render(){
    console.log("User Info", this.state.userInfo)
    console.log("Follower Info", this.state.followerInfo)
    return (
      <div className="App">
        { this.state.userInfo.length === 0 ? <p>Loading...</p> : <UserCard userInfo={this.state.userInfo} />}
        { this.state.followerInfo.length === 0 ? <p></p> : this.state.followerInfo.map(follower => { return <UserCard userInfo={follower}/> }) }
      </div>
    )
  };
}


// { this.props.userInfo.length === 0 ? <p>Loading...</p> :

// <UserCard userInfo={this.state.userInfo} />

export default App;
