import React from "react";
import BannerWithAlert from "../../../components/shared/banners/bannerWithAlert";
import BulletPointBanner from "../../../components/shared/banners/bulletPointBanner";
import CallToAction from "../../../components/shared/cards/callToAction";
import ContactSection from "../../../components/shared/cards/contactSection";
import MyFooter from "../../../components/shared/footer/myFooter";
import MyNavbar from "../../../components/shared/navbar/myNavbar";
import ThreeTiles from "../../../components/shared/orientation/threeTiles";


function Home (props) {

    return (
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <br/>
            <ThreeTiles props={props.props.threeTiles}/>
            <BulletPointBanner props={props.props.bulletPointBanner}/>
            <CallToAction props={props.props.callToAction}/>
            <ContactSection props={props.props.contactSection}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default Home