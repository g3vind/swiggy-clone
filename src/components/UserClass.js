import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state variables in class based components
    this.state = {
      count: 0,
      location: "Velore",
    };
  }
  render() {
    const { name } = this.props;
    const { count, location } = this.state;
    return (
      <>
        <h4>Count: {count}</h4>
        <button
          className="bg-blue-500 p-4"
          //   NEVER UPDATE YOUR STATE VARIABLES DIRECTLY
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.state.count > 0 &&
              this.setState({ count: this.state.count - 1 });
          }}
          className="bg-red-500 p-4"
        >
          Decrease
        </button>
        <button
          onClick={() => {
            this.setState({ location: "Muzaffarpur" });
          }}
        >
          Muzaffarpur
        </button>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>g3vind@gmail.com</h3>
      </>
    );
  }
}

export default UserClass;
