import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";
import { useCookies } from "react-cookie";
import AdminAllBlogsCard from "../../../../components/admin/blogs/adminAllBlogsCard";
import BannerWithAlert from "../../../../components/shared/banners/bannerWithAlert";

function AdminAllBlogs (props) {

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

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

    return (
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <br/>
            <AdminAllBlogsCard props={props.props.list}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminAllBlogs;