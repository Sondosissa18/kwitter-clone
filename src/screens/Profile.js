import React from "react";
import { MenuContainer } from "../components";
import ProfileCard from "../components/profile/ProfileCard";
import { MessageFeedContainer } from "../components";

//import { MessageList } from "../components";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Card from "react-bootstrap/Card";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2 style={{ color: "purple", marginLeft: "5%" }}>Profile</h2>

    <div className="container">
      <div className="UserCard">
        <ProfileCard username={true} />
      </div>
      <div className="ListOfMessages">
        <h3 style={{ margin: "auto", color: "purple" }}> Your Posts</h3>{" "}
        <MessageFeedContainer username={true} />
      </div>
    </div>
  </>
);
