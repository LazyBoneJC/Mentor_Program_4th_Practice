import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    console.log("Constructor.");
  }

  componentDidMount() {
    console.log("Did mount.", this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState:", prevState);
    console.log("update!");
  }

  componentWillUnmount() {
    console.log("Unmount.");
  }

  // 這個寫法會自動做好 bind
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>+1</button>
        counter: {counter}
      </div>
    );
  }
}
