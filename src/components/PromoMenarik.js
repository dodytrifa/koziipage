import React from 'react'
import { Carousel } from 'react-bootstrap';

function Promo() {
  return (
    <>
      <div class="container mt-3 mb-3">
      <h4 class="mb-2">Promo Menarik</h4>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/promo/pr1.jpg" class="d-inline-block w-25" height="300" alt="..."/>
            <img src="/assets/promo/pr2.jpg" class="d-inline-block w-25" height="300" alt="..."/>
            <img src="/assets/promo/pr3.jpg" class="d-inline-block w-25" height="300" alt="..."/>
          </div>
          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    </>
  )
}

export default Promo