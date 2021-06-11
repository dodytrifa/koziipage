import React from 'react'
import { Button, Jumbotron, InputGroup,FormControl } from 'react-bootstrap';

 function Jumbo() {
  return (
    <>
      <Jumbotron className="jumbo">
        <h1>Hemat Waktu Hemat Biaya</h1>
        <p>
          Berlangganan dengan Kozii dapatkan info menarik
        </p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Masukkan email untuk berlangganan."
            aria-label="Masukkan email untuk berlangganan."
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2" class="btn btn-warning">Subscribe</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Jumbotron>
    </>
  )
}

export default Jumbo