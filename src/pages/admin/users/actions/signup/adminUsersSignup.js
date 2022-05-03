import React from "react";
import SignupCard from "../../../../../components/admin/users/signupCard";
import BannerWithAlert from "../../../../../components/shared/banners/bannerWithAlert";
import MyFooter from "../../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../../components/shared/navbar/myNavbar";


function AdminUsersSignup (props) {

    return (
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <br/>
            <br/>
            <SignupCard props={props.props.card}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminUsersSignup