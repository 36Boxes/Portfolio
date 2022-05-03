import React from "react";
import ContactPageSection from "../../../components/public/contact/contactPageSection";
import ContactSection from "../../../components/shared/cards/contactSection";
import MyFooter from "../../../components/shared/footer/myFooter";
import MyNavbar from "../../../components/shared/navbar/myNavbar";


function ContactPage (props) {

    return (
        <React.Fragment>
            <MyNavbar/>
            <ContactPageSection props={props.props.contactSection}/>
            <MyFooter/>
        </React.Fragment>
    )

}

export default ContactPage