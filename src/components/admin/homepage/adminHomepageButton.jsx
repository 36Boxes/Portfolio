import React from "react";
import { Col, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const AdminHomepageButton = (props) => {

    const navigate = useNavigate();

    const navigator = () => {
        navigate(props.button.path)
    }

    return(
        <Col>
            <Button className="btn-block btn-outline-primary" onClick={navigator} >{props.button.title}</Button>
        </Col>
    )
}

export default AdminHomepageButton;