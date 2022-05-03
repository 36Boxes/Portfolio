import React, { useEffect } from "react";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BannerWithAlert from "../../../../components/shared/banners/bannerWithAlert";
import AdminAllProjectsCard from "../../../../components/admin/projects/adminAllProjectsCard";

function AllProjectsAdmin(props){

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
    },[])


    return(
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <br/>
            <AdminAllProjectsCard props={props.props.list}/>
            <MyFooter/>
        </React.Fragment>
    )
}

export default AllProjectsAdmin;