import React from "react";

import ExternalLink from "../ExternalLink";
import GitHubIcon from "../icons/GitHub";
import LinkedInIcon from "../icons/LinkedIn";
import MailIcon from "../icons/Mail";

import "./ProfileCardLinks.css";

export default () => (
    <div className="ProfileCardLinks">
        <ExternalLink href="mailto:ianschmitz@gmail.com" target="_self">
            <MailIcon />
        </ExternalLink>
        <ExternalLink href="https://github.com/ianschmitz" aria-label="GitHub">
            <GitHubIcon />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/ianschmitz/" aria-label="LinkedIn">
            <LinkedInIcon />
        </ExternalLink>
    </div>
);
