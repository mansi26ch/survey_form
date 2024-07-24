import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      questions: {
        q1: null,
        q2: null,
        q3: null,
        other:null,
      },
      isSubmitted: false,
    };
  }

  detailsSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email }, () => console.log(this.state));
    event.preventDefault();
  };
  
  questionSubmitHandler = (event) => {
    const questions = {};
    const q1 = event.target.q1.value;
    const q2 = event.target.q2.value;
    const q3 = event.target.q3.value;
    const other = event.target.other.value;
    this.setState({ questions });
    event.preventDefault();
   };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">WebTech Course Survey</h1>
          </div>
        </div>

        
        {this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsSubmitHandler} />
        ) : (
            <Question  submit={this.questionSubmitHandler}/>
        )}
      </div>
    );
  }
}

export default Container;
