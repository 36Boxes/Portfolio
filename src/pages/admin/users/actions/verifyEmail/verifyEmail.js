import axios from "axios";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";
import BannerWithAlert from "../../../../../components/shared/banners/bannerWithAlert";
import MyFooter from "../../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../../components/shared/navbar/myNavbar";


function VerifyEmail (props) {

    const { jwt } = useParams()

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);


    useEffect(() => {
        console.log(cookies)
        axios.get(
            `${process.env.REACT_APP_URL}verify/email/${jwt}`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }).catch(err => {
                if (err){
                    navigate("/users/signup", { state : {
                        message : "Please Provide A Valid JWT"
                    }})
                }
            }).then(res => {
                console.log(res.data)
                setCookie('token', res.data.token, { path: '/' })
                navigate("/", { state : {
                    message : "Email Verified"
                }})
            })
    }, [])

    

    return (
        <React.Fragment>
            <MyNavbar/>
            <BannerWithAlert props={props.props.heroBanner}/>
            <br/>
                <section className="section">
                    <div className="row">
                        <div  className="col" ></div>
                        <div  className="col-8" >
                            <Card className="shadow mt--300">
                                <CardHeader>
                                    <h3>Email Verification</h3>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-center">If you got here from your verification email then you should be automatically redirected soon.</p>
                                </CardBody>
                            </Card>
                        </div>
                        <div  className="col" ></div>
                    </div>
                </section>
            <MyFooter/>
        </React.Fragment>
    )

}

export default VerifyEmail