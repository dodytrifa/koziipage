import React from 'react'
import '../App.css';
// import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div class=" container sticky-top">

    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <a class="navbar-brand" href="/home">
        <img src="/assets/icons/logo.png" height="40" class="d-inline-block align-top" alt=""/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Produk
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/home">Properti</a>
              <a class="dropdown-item" href="/home">Fashion</a>
              <a class="dropdown-item" href="/home">Makanan & Minuman</a>
              <a class="dropdown-item" href="/home">Kecantikan</a>
              <a class="dropdown-item" href="/home">Kesehatan</a>
              <a class="dropdown-item" href="/home">UMKM</a>
              <a class="dropdown-item" href="/home">Rumah Tangga</a>
              <a class="dropdown-item" href="/home">Keuangan</a>
              <a class="dropdown-item" href="/home">Jasa</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Daftar Member</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Masuk Akun</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" >
          <input class="form-control mr-sm-2" type="search" placeholder="Cari Produk/Brand..." aria-label="Search" />
          <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </div>  
  )
}

export default Navbar


