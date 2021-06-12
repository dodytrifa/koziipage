import React from 'react'

export default function Apartment() {
  return (
    <div class="container mt-3 mb-3">
      <h4 class="mb-2">Service Apartment Pilihan</h4>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/apartment/jakarta.jpg" class="d-inline-block w-25 " height="300" alt="..."/>
            <img src="/assets/apartment/bali.jpg" class="d-inline-block w-25 " height="300" alt="..."/>
            <img src="/assets/apartment/bandung.jpeg" class="d-inline-block w-25" height="300" alt="..."/>
            <img src="/assets/apartment/surabaya.jpg" class="d-inline-block w-25" height="300" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="/assets/apartment/bali.jpg" class="d-inline-block w-25 " height="300" alt="..."/>
            <img src="/assets/apartment/jakarta.jpg" class="d-inline-block w-25 " height="300" alt="..."/>
            <img src="/assets/apartment/surabaya.jpg" class="d-inline-block w-25" height="300" alt="..."/>
            <img src="/assets/apartment/bandung.jpeg" class="d-inline-block w-25" height="300" alt="..."/>
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

      <img src="/assets/promo/v-office-banner.jpeg" height="230" class="m-3" alt=""/>

    </div>
  )
}
