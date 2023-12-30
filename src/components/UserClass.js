import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h2>Muzaffarpur, Bihar</h2>
        <h3>g3vind@gmail.com</h3>
      </>
    );
  }
}

export default UserClass;
