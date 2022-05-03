import React, { useEffect, useState} from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import BannerNoSkew from "../../../../components/shared/banners/bannerNoSkew";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import ReactMarkdown from "react-markdown";


function SpecificBlogPost (props) {

    const navigate = useNavigate();

    const [state, setState ] = useState({
        title : '',
        post : ''
    })

    const { blog_id } = useParams()

    useEffect(() => {
        if (blog_id === undefined){
            navigate('/blogs')
        } else {
            axios.get(`${process.env.REACT_APP_URL}blogs/${blog_id}`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                    },
                }).then(res => {
                    if (res.data.length === 0){

                        navigate("/blogs")

                    } else {
                        var title = res.data[0].title
                        title = title.replace(/\s/g, "-")
                        navigate(`/blogs/${blog_id}/${title}`)
                    }
                })
        }
    }, [])

    return (
        <React.Fragment>
            <MyNavbar/>
            <BannerNoSkew props={{title : state.title}}/>
            <section className="section">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10">
                        <Card className="card-profile shadow mt--300 card">
                            <CardBody>
                                <ReactMarkdown>
                                    {state.post}
                                </ReactMarkdown>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col"></div>
                </div>
            </section>
            <MyFooter/>
        </React.Fragment>
    )

}

export default SpecificBlogPost;