import React from "react";
import { Container } from "reactstrap";

const PastProjectImageCard = (props) => {

  

    if (props.props.carousel){
      return (
        <div class="bg-default shadow border-0 card">
            <Container>
            <div id={`carouselExampleIndicators${props.props.id}`} class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target={`#carouselExampleIndicators${props.props.id}`} data-slide-to="0" class="active"></li>
    <li data-target={`#carouselExampleIndicators${props.props.id}`} data-slide-to="1"></li>
    <li data-target={`#carouselExampleIndicators${props.props.id}`} data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={`${process.env.REACT_APP_URL}${props.props.image1_path}`} alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={`${process.env.REACT_APP_URL}${props.props.image2_path}`} alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={`${process.env.REACT_APP_URL}${props.props.image3_path}`} alt="Third slide"/>
      </div>
    </div>
  <a class="carousel-control-prev" href={`#carouselExampleIndicators${props.props.id}`} role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href={`#carouselExampleIndicators${props.props.id}`} role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</Container>
        </div>
    );
    } else {
      return (
        <div>
            <Container>
            <div>
  <div>
      <div >
        <img class="d-block w-100" src={`${process.env.REACT_APP_URL}${props.props.image1_path}`} alt="First slide"/>
      </div>
    </div>
</div>
</Container>
        </div>
    );
    }
};

export default PastProjectImageCard;