import React from "react";

const MyFooter = () => {

    return (
        <footer class="footer has-cards">
            <div class="container">
                <div class="row-grid align-items-center my-md row">
                    <div class="col-lg-6">
                        <h3 class="text-primary font-weight-light mb-2">Thank you for supporting me!</h3>
                        <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                    </div>
                    <div class="text-lg-center btn-wrapper col-lg-6">
                        <a href="https://twitter.com/36boxes" id="tooltip475038074" target="_blank" class="btn-icon-only rounded-circle btn btn-twitter">
                            <span class="btn-inner--icon">
                                <i class="fa fa-twitter"></i>
                            </span>
                        </a>
                        <a href="https://www.instagram.com/36boxes" id="tooltip837440414" target="_blank" class="btn-icon-only rounded-circle ml-1 btn btn-instagram">
                            <span class="btn-inner--icon">
                                <i class="fa fa-instagram"></i>
                            </span>
                        </a>
                        <a href="https://github.com/36boxes" id="tooltip495507257" target="_blank" class="btn-icon-only rounded-circle ml-1 btn btn-github">
                            <span class="btn-inner--icon">
                                <i class="fa fa-github"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <hr/>
                <div class="align-items-center justify-content-md-between row">
                    <div class="col-md-6">
                        <div class="copyright">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav-footer justify-content-end nav">
                            <li class="nav-item">
                                <a href="/" class="nav-link">Sign-Up</a>
                            </li>
                            <li class="nav-item">
                                <a href="/about" class="nav-link">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="/blogs" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="/projects" class="nav-link">Past Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;