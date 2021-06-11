import React from 'react'
import { Carousel } from 'react-bootstrap';

function Promo() {
  return (
    <>
      <Carousel>
        <h4>Promo Menarik</h4>
        <Carousel.Item>
          <img
            className="d-inline-block w-25"
            src="/assets/icons/icon-fashion.png"
            alt="First slide"
          />
          <p>test</p>
          <img
            className="d-inline-block w-25"
            src="/assets/icons/icon-fashion.png"
            alt="First slide"
          />
          <img
            className="d-inline-block w-25"
            src="/assets/icons/icon-fashion.png"
            alt="First slide"
          />
          <img
            className="d-inline-block w-25"
            src="/assets/icons/icon-fashion.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousel/cr2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousel/cr3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousel/cr4.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousel/cr5.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousel/cr6.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousel/cr7.jpg"
            alt="First slide"
          />
        </Carousel.Item>

      </Carousel>
    </>
  )
}

export default Promo