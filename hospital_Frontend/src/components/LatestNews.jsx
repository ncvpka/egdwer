import React from "react";
import "../assets/Styles/style.css";

function CardNews(props) {
  return (
    <div className="card_news col-md-4 mb-sm-30 mb-xs-30">
      <div className="img_news pb-2">
        <img src={props.image_news}></img>
      </div>
      <div className="info_news -mt-2">
        <div className="time_post">
          <p>{props.time_up}</p>
        </div>
        <a className="tittle_news">{props.tittle_news}</a>
        <p className="content_news">{props.content_news}</p>
        <div className="more_btn">
          <a className="more_btn__block" href={props.href}>
            More {">"}
          </a>
        </div>
      </div>
    </div>
  );
}
export default CardNews;
