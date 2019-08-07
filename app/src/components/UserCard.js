import React from 'react';

class UserCard extends React.Component {
    
    constructor(props){
        super(props);

    };


    render(){
        return (
            <div className="cardContainer">
                <img src={this.props.userInfo.avatar_url} />
                <h2>GitHub Handle: {this.props.userInfo.login}</h2>
            </div>
        )
    };
}

export default UserCard;