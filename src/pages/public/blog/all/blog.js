import React from "react";
import BlogSection from "../../../../components/public/blog/blogSection";
import BannerNoSkew from "../../../../components/shared/banners/bannerNoSkew";
import MyFooter from "../../../../components/shared/footer/myFooter";
import MyNavbar from "../../../../components/shared/navbar/myNavbar";

function Blog (props) {

    return (
        <main className="profile-page">
            <MyNavbar/>
            <BannerNoSkew props={props.props.heroSection}/>
            <br/>
            <BlogSection props={props.props}/>
            <MyFooter/>
        </main>
    )

}

export default Blog;