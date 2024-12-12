import React from "react";

function Home (){
    return (
<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFRA9Hw1ddaiN8vczDH5awGUi4JQ7XTjwF2YTlnGfAZTGUAcQDXv.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>เมนูที่ 1</h5>
        <p>ต้มยำกุ้ง</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSDsxtz2w72aIAyf9iOjncow0cvYfP.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>เมนูที่ 2</h5> 
        <p>กระเพราหมูสับ</p>
      </div>    
    </div>
    <div class="carousel-item">
      <img src="https://static.thairath.co.th/media/00_A5B2824678C1E1280.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>เมนูที่ 3</h5>
        <p>ปลาราดพริก</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Home;
