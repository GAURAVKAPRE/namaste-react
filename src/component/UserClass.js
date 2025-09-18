import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
    }

    render(){
        const{ name , location}= this.props ;

        return (
           <div className="card">
            <h2>{name}</h2>
           </div>
        )
    }
}

export default UserClass ;