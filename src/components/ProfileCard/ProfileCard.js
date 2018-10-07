import React from "react";

import ProfileCardBackgroundImage from "./ProfileCardBackgroundImage";
import ProfileCardHeadshot from "./ProfileCardHeadshot";
import ProfileCardLinks from "./ProfileCardLinks";

import "./ProfileCard.css";

export default () => (
    <div className="ProfileCard">
        <ProfileCardBackgroundImage />
        <ProfileCardHeadshot />
        <h1 className="ProfileCard-name">Ian Schmitz</h1>
        <div className="ProfileCard-title">Developer</div>
        <ProfileCardLinks />
    </div>
);
