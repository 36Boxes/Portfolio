import axios from "axios";
import React, { useEffect, useState } from "react";
import PastProjectSection from "../../../components/public/projects/pastProjectSection";
import BannerNoSkew from "../../../components/shared/banners/bannerNoSkew";
import CallToAction from "../../../components/shared/cards/callToAction";
import MyFooter from "../../../components/shared/footer/myFooter";
import MyNavbar from "../../../components/shared/navbar/myNavbar";

function PastProjects (props) {

    
    const [projectsList, setState] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}projects/all`,{
            headers : {
                'Access-Control-Allow-Origin' : '*'
            }
        }).then(res => {
            setState(res.data)
        })
    })

    const projects = projectsList.map((data, id) => {
        return <React.Fragment>
            <br/>
            <PastProjectSection props={data}/>
        </React.Fragment>
    })


    return (
        <main className="profile-page">
            <MyNavbar/>
            <BannerNoSkew props={props.props.heroBanner}/>
            {projects}
            <br/>
            <CallToAction props={props.props.callToAction}/>
            <MyFooter/>
        </main>
    )

}

export default PastProjects;