import React from "react";
import EnquiryForm from "../forms/enquiryForm";
import PreContactCard from "./preContactCard";

const ContactSection = (props) => {
    return (
        <section class="section section-lg pt-lg-0 section-contact-us">
            <PreContactCard props={props.props.preContact}></PreContactCard>
            <div class="container">
                <div class="justify-content-center mt--300 row">
                    <div class="col-lg-8">
                        <EnquiryForm props={props.props.getInContact}></EnquiryForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;