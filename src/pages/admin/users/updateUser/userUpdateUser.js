import axios from "axios";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import UpdateUserCard from "../../../../components/admin/users/updateUserCard";
import AltHeroBanner from "../../../../components/shared/banners/altHeroBanner";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";

function UserUpdateUser (props) {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const navigate = useNavigate()

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
                        message : "You do not have privileges"
                    }})
                }
            }).then(res => {
                if (res.data === "Not Allowed"){
                    navigate("/", { state : {
                        message : "You do not have privileges"
                    }})
                }
            })
    }, [])

    return (
        <React.Fragment>
            <MyNavbar/>
            <AltHeroBanner props={props.props.heroBanner}/>
            <UpdateUserCard/>
            <MyFooter/>
        </React.Fragment>
    );

}

export default UserUpdateUser