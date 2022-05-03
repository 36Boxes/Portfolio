import React from "react";
import AltHeroBanner from "../../../components/shared/banners/altHeroBanner";
import MyFooter from "../../../components/shared/footer/myFooter";
import MyNavbar from "../../../components/shared/navbar/myNavbar";

function PageNotFound (props) {

    return (
        <React.Fragment>
            <MyNavbar/>
            <AltHeroBanner props={props.props.heroBanner}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default PageNotFound