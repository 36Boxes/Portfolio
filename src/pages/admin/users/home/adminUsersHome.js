import axios from "axios";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import UsersHomepageCard from "../../../../components/admin/users/usersHomepage";
import BannerWithAlert from "../../../../components/shared/banners/bannerWithAlert";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";


function AdminUserHome (props) {

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_URL}auth`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                }
            }).catch(err => {
                if (err){
                    navigate("/users/signup", { state : {
                        message : "You are not signed in"
                    }})
                }
            }).then(res => {
                if (res.data === "Not Allowed"){
                    navigate("/", { state : {
                        message : "You are not signed in"
                    }})
                }
            })
    }, [])

    return (
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <UsersHomepageCard props={props.props}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminUserHome;