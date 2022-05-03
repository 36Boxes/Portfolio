import React, { useEffect } from "react";
import AllUsersCard from "../../../../components/admin/users/allUsersCard";
import AltHeroBanner from "../../../../components/shared/banners/altHeroBanner";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function AdminAllUsers (props) {
        
    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {

        const body = {
            token : cookies.token
        }

        axios.post(`${process.env.REACT_APP_URL}refresh`, body,{
            headers : {
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : cookies.token
            }
        }).then(res => {
            setCookie('token', res.data.token, { path: '/' })
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
        }).catch(err => {
            navigate("/", { state : {
                message : "You do not have admin privileges"
            }})
        })
    })

    return (
        <React.Fragment>
            <MyNavbar/>
            <AltHeroBanner props={props.props.heroBanner}/>
            <AllUsersCard props={props.props.list}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminAllUsers;