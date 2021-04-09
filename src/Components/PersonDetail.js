import React from "react";
import { useHistory } from "react-router-dom";

const PersonDetail = (props) => {
  const history = useHistory();
  console.log("props from PersonDetail", props);

  const handleBackBtnClick = () => {
    history.push("/");
  }

  return (
    <div>
      <p>
        <b>- name: {props.name}</b>
      </p>
      <p>
        <b>- username: {props.username}</b>
      </p>
      <p>
        <b>- email: {props.email}</b>
      </p>
      <p>
        <b>- phone: {props.phone}</b>
      </p>
      <p>
        <b>- company: {props.company}</b>
      </p>
      <p>
        <b>- website: {props.website}</b>
      </p>
      <p><b>- address: </b></p>
      <div className="address-block">
      <ul>
        <li>
          <b>street: {props.street}</b>
        </li>
        <li>
          <b>suite: {props.suite}</b>
        </li>
        <li>
          <b>city: {props.city}</b>
        </li>
        <li>
          <b>zipcode: {props.zipcode}</b>
        </li>
      </ul>
      </div>

      <button onClick={handleBackBtnClick}>Back</button>
    </div>
  );
};

export default PersonDetail;