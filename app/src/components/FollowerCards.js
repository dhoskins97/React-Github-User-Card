import React from 'react';

import UserCard from './UserCard';

class CardList extends React.Component {
    
    constructor(props){
        super(props);

    };


    render(){
        return (<div>
            { this.props.userInfo.length === 0 ? <p>Loading...</p> : this.props.userInfo.map(follower => {return <UserCard userData={follower} />})}
        </div>
        );
    };
}

export default CardList;
