import React from "react";
import { Button } from "reactstrap";

function GithubLink(props) {
    
    if (props.props.github_live){
        return  <a href={props.props.github_link} target="_blank">
                    <Button className="btn-icon btn-3" color="primary">
                        <span className="btn-inner--icon">
                            <i class="fas fa-code-branch"></i>
                        </span>
                        <span className="btn-inner--text">Github Link</span>
                    </Button>
                </a>
    
    } else {
        return  <Button disabled className="btn-icon btn-3" color="primary">
                    <span className="btn-inner--icon">
                        <i class="fas fa-code-branch"></i>
                    </span>
                    <span className="btn-inner--text">Github Link</span>
                </Button>
    }


}

export default GithubLink