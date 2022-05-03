import React from "react";
import LoginCard from "../../../../../components/admin/users/loginCard";
import AltHeroBanner from "../../../../../components/shared/banners/altHeroBanner";
import MyFooter from "../../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../../components/shared/navbar/myNavbar";

function AdminUsersLogin (props) {

    return (
        <React.Fragment>
            <MyNavbar/>
            <AltHeroBanner props={props.props.heroBanner}/>
            <br/>
            <LoginCard props={props.props.card}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminUsersLogin;