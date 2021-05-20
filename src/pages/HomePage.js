import React from "react";
import "../css/HomePage.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__headerContent">
          <Link className="homepage__headerLink" to="/mail">
            Gmail
          </Link>
          <Link className="homepage__headerLink" to="/images">
            Images
          </Link>
          <div className="homepage__headerIconWrapper">
            <AppsIcon className="homepage__headerIcon" />
          </div>
          <Avatar>
            <img
              className="homepage__headerAvatar"
              src="https://i.pinimg.com/originals/24/6b/da/246bda2f5f1b0c108db82571c37b3b3f.jpg"
              alt="avatar"
            />
          </Avatar>
        </div>
      </div>
      <div className="homepage__body">
        <img
          className="homepage__bodyLogo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google-logo"
        />
        <div className="homepage__inputWrapper">
          <SearchBox showButtons inSearchResults={false} />
        </div>
        <div className="homepage__bodyInfo">
          Google offered in: <a href="#">bosanski</a> <a href="#">српски</a>{" "}
          <a href="#">hrvatski</a>
        </div>
      </div>
      <div className="homepage__footer"></div>
    </div>
  );
};

export default HomePage;
