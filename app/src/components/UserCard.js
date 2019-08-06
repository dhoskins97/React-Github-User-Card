import React from 'react';

class UserCard extends React.Component {
    
    constructor(){
        super();

    };


    render(props){
        return (
            <div>
                <img src={props.avatar_url} />
                <h2>GitHub Handle: {props.login}</h2>
            </div>
        )
    };
}

export default UserCard;