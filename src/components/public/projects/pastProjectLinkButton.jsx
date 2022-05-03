import React from "react";
import { Button } from "reactstrap";

function PastProjectLink(props) {
    
    if (props.props.project_live){
        return  <a href={props.props.project_link} target="_blank">
                    <Button className="btn-icon btn-3" color="primary">
                        <span className="btn-inner--icon">
                            <i class="fas fa-project-diagram"></i>
                        </span>
                        <span className="btn-inner--text">Project Link</span>
                    </Button>
                </a>
    
    } else {
        return  <Button disabled className="btn-icon btn-3" color="primary">
                    <span className="btn-inner--icon">
                        <i class="fas fa-project-diagram"></i>
                    </span>
                    <span className="btn-inner--text">Project Link</span>
                </Button>
    }


}

export default PastProjectLink