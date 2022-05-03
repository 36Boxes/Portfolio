import axios from "axios";
import React, { useEffect } from "react";
import AdminHomepageCard from "../../../components/admin/homepage/adminHomepageCard";
import MyFooter from "../../../components/shared/footer/myFooter";
import MyNavbar from "../../../components/shared/navbar/myNavbar";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import BannerWithAlert from "../../../components/shared/banners/bannerWithAlert";

function AdminHomepage (props) {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_URL}admin/auth`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                }
            }).catch(err => {
                if (err){
                    navigate("/users/signup", { state : {
                        message : "You do not have admin privileges"
                    }})
                }
            }).then(res => {
                if (res.data === "Not Allowed"){
                    navigate("/", { state : {
                        message : "You do not have admin privileges"
                    }})
                }
            })
    }, [])


    return(
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <AdminHomepageCard props={props.props}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminHomepage;