import React from "react";
import classNames from "classnames";

import "./ExternalLink.css";

const ExternalLink = ({ children, className, ...other }) => (
    <a
        className={classNames("ExternalLink", className)}
        target="_blank"
        {...other}
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

export default ExternalLink;
