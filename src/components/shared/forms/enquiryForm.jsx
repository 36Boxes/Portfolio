import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Form, Row, Input, NavLink } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EnquiryForm = (props) => {

    const navigate = useNavigate()

    const sendEmail = (event) => {
        event.preventDefault()
        const body = {
            name : event.target.name.value,
            email : event.target.email.value,
            message : event.target.message.value
        }

        

        axios.post(
            `${process.env.REACT_APP_URL}send/email`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                },
                body
            }).then(res => {
                navigate("/", { state : {
                    message : "Message Sent!"
                }})
                window.location.reload(false)
            })

    }
    
    const text = props.props
    return (
        <div class="bg-gradient-secondary shadow card">
            <div class="p-lg-5 card-body">
                <Form onSubmit={sendEmail}>
                <h4 class="mb-1 text-center">{text.contactTitle}</h4>
                <p class="mt-0 text-center">{text.contactSubtitle}</p>
                <div class="mt-5 form-group">
                    <div class="input-group-alternative input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="ni ni-user-run"></i>
                            </span>
                        </div>
                        <input placeholder="Your name" type="text" name="name" class="form-control"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group-alternative input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="ni ni-email-83"></i>
                            </span>
                        </div>
                        <input placeholder="Email address" type="email" name="email" class="form-control"/>
                    </div>
                </div>
                <div class="mb-4 form-group">
                    <textarea cols="80" name="message" placeholder="Type a message..." rows="4" class="form-control-alternative form-control"></textarea>
                </div>
                <div>
                    <button type="submit" class="btn-round btn btn-default btn-lg btn-block">Send Message</button>
                </div>
                </Form>
            </div>
        </div>
    );
};

export default EnquiryForm;