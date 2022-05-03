import React from "react";
import ImageSection from "../../../components/public/about/imageSection";
import ProfileSection from "../../../components/public/about/profileSection";
import HeroBanner from "../../../components/shared/banners/heroBanner";
import CallToAction from "../../../components/shared/cards/callToAction";
import ContactSection from "../../../components/shared/cards/contactSection";
import MyFooter from "../../../components/shared/footer/myFooter";
import MyNavbar from "../../../components/shared/navbar/myNavbar";

function About (props) {

    return (
        <main className="profile-page">
            <MyNavbar/>
            <HeroBanner/>
            <ProfileSection props={props.props.profileSection}/>
            <ImageSection props={props.props.imageSection}/>
            <br/>
            <br/>
            <CallToAction props={props.props.callToAction}/>
            <ContactSection props={props.props.contactSection}/>
            <MyFooter/>
        </main>
    )

}

export default About;