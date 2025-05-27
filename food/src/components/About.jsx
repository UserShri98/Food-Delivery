import React from "react";
import User from "./User";
import UserFunc from "./UserFunc";

class About extends React.Component{

  constructor(props){
    super(props)

   this.state={
    userInfo:{
     name:"dummy",
     location:"mumbai"
    }
  }
  
  }

  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/shrinath");
    const json=await data.json();

    this.setState({
      userInfo:json
    })

    console.log(json)
  }

 render(){
  const {login,id,avatar_url}=this.state.userInfo

  return (
        <div>
       <img className="avatar-img"src={avatar_url}/>
       <h2>{id}</h2>
       <h2>{login}</h2>

      <h1>I am an About Page</h1>
      <User />
        </div>
    )
 }
}

export default About;

// const About=()=>{
//     return (
//         <div>
//       <h1>I am an About Page</h1>
//       <User name={"Shinu ji"}/>
//       <UserFunc names={"Shreenath from func"}/>
//         </div>
//     )
// }

