<template>
  <div class="about">
    <h1>Our Story</h1>
  </div>
  <div class="aboutstory">
    <div class="storefront"></div>
    <div class="story">
      <p>
        Burrito King is a Lawrence original. For over 20 years, Burrito King has
        fulfilled Lawrence's craving for quick, quality, and authentic Mexican
        food at an affordable price.
      </p>
      <p style="margin-top: 30px">
        Recently under new ownership, BK looks forward to continuing the
        tradition!
      </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    color: #fff;
    font-family: "CactusTequila";
    font-size: 2rem;
    text-align: center;
  }

  .aboutstory {
    display:flex;
    justify-content: center;
    margin-top:40px;
  }

  .storefront {
    background-image:url('/assets/img/bkStoreFront.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 100%;
  }

  .story {
    background-color: #00bf63;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #402e15;
    font-family: "Barbaro";
    font-size: 2rem;
    margin: auto;
    padding:40px;
    text-align: center;
    width: 70%;
  }
}
</style>
