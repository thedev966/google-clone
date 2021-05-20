import React, { useEffect, useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchBox from "../components/SearchBox";
import "../css/SearchPage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DescriptionIcon from "@material-ui/icons/Description";
import { useSelector } from "react-redux";
import { selectTerm } from "../features/termSlice";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";

const SearchPage = () => {
  const term = useSelector(selectTerm);
  const result = useGoogleSearch(term);
  //   const responseObject = response.data;

  return (
    <div className="search">
      <div className="search__header">
        <div className="search__headerTop">
          <div className="search__headerLeft">
            <Link className="search__logo" to="/">
              <img
                className="search__logoImg"
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="google-logo"
              />
            </Link>

            <SearchBox
              query={term}
              className="search__inputBox"
              inSearchResults
            />
          </div>

          <div className="search__headerRight">
            <div className="search__headerIconWrapper">
              <AppsIcon className="search__headerIcon" />
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
        <div className="search__headerBottom">
          <div className="search__headerCategories">
            <a href="#" className="search__headerCategory">
              <SearchIcon className="search__categoryIcon" fontSize="small" />
              <span className="search__categoryName">All</span>
            </a>
            <a href="#" className="search__headerCategory">
              <ImageSearchIcon
                className="search__categoryIcon"
                fontSize="small"
              />
              <span className="search__categoryName">Images</span>
            </a>
            <a href="#" className="search__headerCategory">
              <OndemandVideoIcon
                className="search__categoryIcon"
                fontSize="small"
              />
              <span className="search__categoryName">Videos</span>
            </a>
            <a href="#" className="search__headerCategory">
              <RoomIcon className="search__categoryIcon" fontSize="small" />
              <span className="search__categoryName">Maps</span>
            </a>
            <a href="#" className="search__headerCategory">
              <DescriptionIcon
                className="search__categoryIcon"
                fontSize="small"
              />
              <span className="search__categoryName">News</span>
            </a>
            <a href="#" className="search__headerCategory">
              <MoreVertIcon className="search__categoryIcon" fontSize="small" />
              <span className="search__categoryName">More</span>
            </a>
          </div>
          <div className="search__headerLinks">
            <a className="search__headerLink" href="#">
              Settings
            </a>
            <a className="search__headerLink" href="#">
              Tools
            </a>
          </div>
        </div>
      </div>
      {term && (
        <div className="search__results">
          <span className="search__totalResults">
            {`About ${result?.searchInformation.formattedTotalResults} results (${result?.searchInformation.formattedSearchTime} seconds) for ${term}`}
          </span>
          {result?.items.map((item) => (
            <div className="search__searchItem">
              <a className="search__itemURL" href={item?.link} target="_blank">
                {item?.displayLink}
              </a>
              <a
                className="search__itemTitleLink"
                href={item?.link}
                target="_blank"
              >
                <h3 className="search__itemTitle">{item?.title}</h3>
              </a>
              <p className="search__itemSnippet">{item?.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
