import React from "react"

class User extends React.Component{
   
    constructor(props){
      super(props)

      this.state={
        count:0
      }

      
    }

 
  render(){

    const {count}=this.state
return(
      <div className="user-card">
          <h1>{this.props.name}</h1>
        <h2>Location</h2>
        <h2>Email:shri@gmail.com</h2>
        <h2>Count={count}</h2>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increase</button>

      </div>
)    
  }
}

export default User;