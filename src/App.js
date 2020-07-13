import React from 'react';
import './App.scss';
import DataApi from "./DataApi"

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }

    this.TEST = this.TEST.bind(this);
  }


  TEST() {
    let cb = (data) => {
        console.log(data)
    }

    cb.bind = cb.bind(this)

    DataApi.TEST(cb)
  }

  render(){
    return(
      <div>
        <a href="/auth/google">Redirect</a>
        <div onClick={this.TEST}>
          Fetch
        </div>
      </div>
    )
  }
}
