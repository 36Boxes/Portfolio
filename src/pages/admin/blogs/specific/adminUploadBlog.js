import axios from "axios";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import BlogPostEditor from "../../../../components/admin/blogs/blogPostEditor";
import AltHeroBanner from "../../../../components/shared/banners/altHeroBanner";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";

function AdminUploadBlog (props) {

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
            <BlogPostEditor props={props.props}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default AdminUploadBlog