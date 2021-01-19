import React, { Component } from 'react';
import Another from './Another'

class Welcome extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: 'Terry'
    }
  }

  render(){
    console.log(this.state.name);
    return(
      <div>
        <h2>My Movie List</h2>
        <Another />
      </div>
    )
  }

}

export default Welcome
