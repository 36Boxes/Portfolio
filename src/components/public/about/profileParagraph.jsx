import React from "react";

const ProfileParagraph = (props) => {

    return (
        <div class="mt-5 py-5 border-top text-center">
            <div class="justify-content-center row">
                <div class="col-lg-9">
                    <p>{props.props.paragraph1}</p>
                    <br/>
                    <br/>
                    <p>{props.props.paragraph2}</p>
                    <br/>
                    <a href="/projects" className={`mt-4 btn btn-success`}>Learn more</a>
                </div>
            </div>
        </div>
    );

}

export default ProfileParagraph