import React, { useEffect } from "react";
import UploadProjectCard from "../../../../components/admin/projects/uploadProjectCard";
import AltHeroBanner from "../../../../components/shared/banners/altHeroBanner";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminUploadProject (props) {
    
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
            <AltHeroBanner props={props.props.heroBanner}/>
            <section class="section section-lg pt-sm-0 mt--100">
                <div class="container">
                    <div class="justify-content-center row">
                        <div class="col-sm-12">
                            <UploadProjectCard props={props.props}/>
                        </div>
                    </div>
                </div>
            </section>
            <MyFooter/>
        </React.Fragment>
    )
}

export default AdminUploadProject;