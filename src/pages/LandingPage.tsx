import React, {Component} from 'react';
import Header from '../components/header';
import Layout from "../components/Layout";
import Steps from "../components/Steps";
import Slider from "../components/Slider";
import Survey from "../components/Survey";
import Contacts from "../components/Contacts";

function LandingPage() {
    return (
        <div className="LandingPage">
            <Header />
            <Layout />
            <Steps />
            <Slider />
            <Survey />
            <Contacts />
        </div>
    );
}

export default LandingPage;
