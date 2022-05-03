import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col } from "reactstrap";
import BlogPostHeader from "./blogPostHeader";
import FeaturedPost from "./featuredPost";
import MySearchBar from "./mySearchBar";
import RecentPost from "./recentPost";
import RecentPostList from "./recentPostList";

const SideBar = (props) => {

    const navigate = useNavigate()

    const [featuredPosts, setState] = useState([])

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_URL}blog/all`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }).then(res => {
                setState(res.data)
            })
    })

    let getLast =  (arr = null, n = null) => {
        if (arr == null) return void 0;
        if (n === null) return arr[arr.length - 1];
        return arr.slice(Math.max(arr.length - n, 0));  
      };

      let fPosts = getLast(featuredPosts, 3)

      const posts = fPosts.map((data, id) => {
          return    <React.Fragment>
                        <br/>
                        <RecentPost/>
                        <br/>
                    </React.Fragment>
      })





    return (
        <Card className="shadow">
            <Container>
                {/* <MySearchBar/> */}
                <BlogPostHeader props={{name : "Featured Posts"}}/>
                {posts}
                {/* <RecentPostList/> */}
            </Container>
        </Card>
    );

}

export default SideBar;