import React from 'react'

export default function Apartment() {
  return (
    <>
      <div class="my-3 p-3 container bg-white rounded">
        <h5 class="pl-3 pb-2 mb-3">Service Apartment Pilihan</h5>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item carousel-banner active">
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                        <img src="/assets/apartment/jakarta.jpg" height="200" alt="Jakarta"/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Jakarta</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                        <img src="/assets/apartment/bali.jpg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Bali</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                      <img src="/assets/apartment/bandung.jpeg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Bandung</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                        <img src="/assets/apartment/surabaya.jpg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Surabaya</h6>
                        </div>
                      </div>
                    </div>
                    </div>
                  <div class="carousel-item carousel-banner active">
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                      <img src="/assets/apartment/batam.jpg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Batam</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                      <img src="/assets/apartment/bogor.jpg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Bogor</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                      <img src="/assets/apartment/depok.jpg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Depok</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 float-left">
                      <div class="card border-0">
                      <img src="/assets/apartment/malang(1).jpg" height="200" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title text-center">Malang</h6>
                        </div>
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
      <div class="container mb-3">
        <div className="row">
          <div className="col-lg-6">
            <a href="#">
              <img src="/assets/promo/v-office-banner.jpeg" class="card-img-top img-fluid btmspace rounded" height="230" class="m-3" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
