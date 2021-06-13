import React from 'react'

function Promo() {
  return (
    <>
      <div class="my-3 p-3 container bg-white rounded mt-3 mb-3">
        <h5 class="pl-3 pb-2 mb-3">Promo Menarik</h5>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/assets/promo/pr1.jpg" class="col-md-4 float-left" height="300" alt="..."/>
                    <img src="/assets/promo/pr2.jpg" class="col-md-4 float-left" height="300" alt="..."/>
                    <img src="/assets/promo/pr3.jpg" class="col-md-4 float-left" height="300" alt="..."/>
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
    </>
  )
}

export default Promo