import React, { Component } from "react";

class BurgerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      burgers: {
        notDevoured: [],
        devoured: []
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    alert("A name was submitted" + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="bg-4 h3 mw6 center pa3 ba b--white br2 bw1">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BurgerInput;
