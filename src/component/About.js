import User from "./user"
import UserClass from "./userClass";


const About =()=>{
    return (
        <div>
            <h1>about</h1>
            <User/>

            <UserClass   name ={"akshay"} location={"pune"}/>
            <h2> this is namste react web series </h2>
        </div>
    );

};

export default About ;