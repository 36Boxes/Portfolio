import React from "react";
import MyCard from "../cards/myCard";

const ThreeTiles = (props) => {
    const text = props.props
    return (
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-lg-12">
                        <div class="row-grid row">
                            <div class="col-lg-4">
                                <MyCard props={text.card1}></MyCard>
                            </div>
                            <div class="col-lg-4">
                                <MyCard props={text.card2}></MyCard>
                            </div>
                            <div class="col-lg-4">
                                <MyCard props={text.card3}></MyCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeTiles;