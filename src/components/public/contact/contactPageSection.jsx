import React from "react";
import EnquiryForm from "../../shared/forms/enquiryForm";
import PreContactPageCard from "./preContactPageCard";



const ContactPageSection = (props) => {
    return (
        <section class="section section-lg pt-lg-0 section-contact-us">
            <PreContactPageCard props={props.props.preContact}/>
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

export default ContactPageSection;