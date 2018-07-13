import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayInfo from "./DisplayInfo";
import { updateUsername, updatePassword, updateId } from "./ducks/reducer";

class ComponentOnFly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      id: ""
    };
  }
  handleUsername = val => {
    this.setState({ username: val });
  };
  handleId(val) {
    this.setState({ id: val });
  }
  handlePassword(val) {
    this.setState({ password: val });
  }
  sendToReducer() {
    let { updateId, updatePassword, updateUsername } = this.props;
    updateId(this.state.id);
    updatePassword(this.state.password);
    updateUsername(this.state.username);
  }
  clearFields() {
    this.setState({ username: "", password: "", id: "" });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <DisplayInfo />
        <header className="App-header" />
        <input
          value={this.state.username}
          onChange={e => this.handleUsername(e.target.value)}
          placeholder="New Username"
        />
        <input
          value={this.state.password}
          onChange={e => this.handlePassword(e.target.value)}
          placeholder="New password"
        />
        <input
          value={this.state.id}
          onChange={e => this.handleId(e.target.value)}
          placeholder="New id"
        />
        <button onClick={() => this.sendToReducer()}>UPDATE CREDENTIALS</button>
        <button onClick={() => this.clearFields()}>clear me</button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { updateUsername, updatePassword, updateId }
)(ComponentOnFly);
