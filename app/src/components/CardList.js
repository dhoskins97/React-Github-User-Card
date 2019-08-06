import React from 'react';

import UserCard from './UserCard';

class CardList extends React.Component {
    
    constructor(){
        super();

    };


    render(props){
        return (<div>
            { props == [] ? <p>Loading...</p> : props.map(follower => {return <UserCard userData={follower} />})}
        </div>
        );
    };
}

export default CardList;
