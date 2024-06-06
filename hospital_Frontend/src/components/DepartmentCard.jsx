import React from "react";
import "../assets/Styles/style.css";

function DepartmentCard(props) {
  return (
    <div className="Departments_info flex px-2">
      <div className="image_departments w-2/12">
        <img src={props.image}></img>
      </div>
      <div className="w-10/12">
        <div className="tittle_depart font-bold">
          <h2>{props.tittle_depart}</h2>
        </div>
        <div className="content_depart">
          <p>{props.content_depart}</p>
        </div>
      </div>
    </div>
  );
}
export default DepartmentCard;
