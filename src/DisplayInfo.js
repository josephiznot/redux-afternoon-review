import React from "react";
import { connect } from "react-redux";

function DisplayInfo(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.userName}</h1>
      <h2>{props.password}</h2>
      <h3>{props.id}</h3>
    </div>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(DisplayInfo);
