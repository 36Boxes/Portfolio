import React from "react";
import { Card } from "reactstrap";
import BlogPostHeader from "./blogPostHeader";
import BlogPostList from "./blogPostList";


const BlogPostListCard = (props) => {

    return (
            <Card className="shadow">
                <div class="px-4">
                    <BlogPostHeader props={props.props}/>
                    <BlogPostList/>
                </div>
            </Card>
            
    );

}

export default BlogPostListCard;