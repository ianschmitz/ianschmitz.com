import React from "react";

import AboutCard from "../components/AboutCard";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

import "./index.css";

const IndexPage = () => (
    <Layout>
        <div className="IndexPage">
            <div className="IndexPage-content">
                <ProfileCard />
                <AboutCard />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
