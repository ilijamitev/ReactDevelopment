import React from "react";

export default class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("HELLO FROM CONSTRUCTOR");

    this.state = {
      message: "LS methods class",
    };
  }

  setNewMessage = () => {
    this.setState({
      message: "Hello class =)",
    });
  };
  /**
   * EVERY LIFECYCLE METHOD GIVES US ACCESS
   * TO THAT SPECIFIC LIFECYCLE PERIOD OF THE COMPONENT
   */

  //WE MUST AVOID THIS LS METHOD
  //IT IS DEPRECATED
  //   componentWillMount() {
  //     console.log("COMPONENT WILL MOUNT");
  //   }

  /**
   * If we want to manipulate with the lifecycle period of the component
   * we call the lifecycle method
   */
  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }

  //This ls methods MUST return BOOLEAN
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Next props: ", nextProps);
    console.log("Next state: ", nextState);

    if (nextState.message === "Hello class =)") {
      return true; // since we return false we will force not-rerender of the component
    }

    // if (nextProps.products.length === 4) {
    //   return false;
    // }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT DID UPDATE");
    console.log("Prev props: ", prevProps);
    console.log("Prev state: ", prevState);
    console.log("This props:", this.props);

    if (prevProps.products.length !== this.props.products.length) {
      alert("We have added a new product =)");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount, component will die :/");
  }

  render() {
    console.log("HELLO FROM RENDER");
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.setNewMessage}>Click me</button>
        <ul>
          {this.props.products.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>

        <button onClick={() => this.props.handleAddNewProduct("Coffee")}>
          Click me
        </button>
      </>
    );
  }
}
