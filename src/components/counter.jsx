import React, { Component } from "react";

class Counter extends Component {
  /*   state = {
    //special component that includes data  that this component needs
    //State: Local or private to that components
    //Props: data that we give to our components
    count: this.props.counter.value
  }; */

  /*   handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    //This tells react that a state is changed. then the render method will be called. react compares old state and new state only changed elements will change
  }; */

  styles = {
    //Sets a style for a specific element e.g. just the formatCount
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    console.log("props", this.props);
    return (
      //React.Fragment does not wrap this in another div
      //User {} to render values dynamically
      //Src sets attributes. "" rendered as plain static text
      //className sets class attributes
      //style sets a specifc element
      //ul renders tag as a list
      //Each tag maps it to the <li>
      //key each tag has a unique key
      //OnDelete raises an event to the handler, because events should happen in the same component. We use props because it is global

      <React.Fragment>
        <h1>{this.props.counter.id}</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    ); //JSX expression = gets compiled to calls React.createElement (single element) Wrapsping with a div does React.createlement (div)
  }

  getBadgeClasses() {
    //classes set classes dynamically
    //if count '0' then the colour is 0 otherwise it is blue
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; //Deconstruct the object from this.state.count to just cojunt
    // const x = <h2>Zero</h2>; //You can set Jsx exh2reesion
    return value === 0 ? <h6>Zero</h6> : value; //If the count is '0' return "Zero", otherwise return the number
  }
}

/*
  renderTags() {
    //seperate helper method, where we can use if and else statements here, we can't do it in render()
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
*/
export default Counter;
