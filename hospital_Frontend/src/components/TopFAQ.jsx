import "../assets/Styles/style.css";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

function TopFAQ(props) {
  const [status, setStatus] = React.useState(!true);
  const collapse = () => {
    if (status == true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };
  return (
    <div class="panel_group" id="accordion">
      <div className="panel ">
        <div class="panel_default">
          <div className="flex relative justify-between">
            <div class="panel_heading">
              <h4 class="panel_title">
                <a href={props.href}>{props.tittle_faq}</a>
              </h4>
            </div>
            <div className="icon_panel items-center">
              <AddIcon onClick={() => collapse()} />
            </div>
          </div>
          <div>
            <div class="panel_body relative">
              {status ? <p className="w-[280px]">{props.content_faq}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFAQ;
