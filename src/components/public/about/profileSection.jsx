import React from "react";
import ProfileDetails from "./profileDetails";
import ProfileParagraph from "./profileParagraph";
import TopProfileSection from "./topProfileSection";


const ProfileSection = (props) => {
    return (
        <section class="section">
        <div class="container">
            <div class="card-profile shadow mt--300 card">
                <div class="px-4">
                    <TopProfileSection/>
                    <ProfileDetails props={props.props}/>
                    <ProfileParagraph props={props.props}/>
                </div>
            </div>
        </div>
    </section>
    );

}

export default ProfileSection