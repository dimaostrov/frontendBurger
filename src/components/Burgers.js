import React, { Component } from "react";
import axios from "axios";

import BurgersInput from "./BurgersInput";
import Burger from "./Burger";

class Burgers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        devoured: [], notDevoured: []
    };
    this.eatIt = this.eatIt.bind(this);
  }
  componentDidMount() {
    //call api to get burgers from db here
    axios.get(
      axios
        .get("http://localhost:3000/api/allburgers")
        .then((response) => {
          console.log(response.data);
          let arr = response.data;
          let devoured = [];
          let notDevoured = [];
          arr.map(x => x.devoured ? devoured.push(x) : notDevoured.push(x))
          this.setState({ devoured, notDevoured});
        })
    );
  }

  eatIt(id){
    console.log('click');
    axios.post(`/http://localhost:3000/api/allburgers/${id}`,)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    //e.preventDefault();
  }

  render() {
    const display = (devoured, notDevoured) => 
      <div className="bg-3 h5 ba b--white br2 bw1">
        <div>{notDevoured.map(x => <Burger burger_name={x.burger_name} key={x.id} onClick={this.eatIt} />)}</div>
        <BurgersInput />
        <div>{devoured.map(x => <Burger burger_name={x.burger_name} key={x.id} devoured />)}</div>
      </div>
    
    const {devoured, notDevoured} = this.state;

    return ( <div>
        {devoured.length && devoured.length ? (display(devoured, notDevoured)) : ( <div>
            Please input a burger!<BurgersInput />
          </div>
        )}
      </div>
    );
  }
}

export default Burgers;
