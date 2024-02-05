<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const slides = [
  { id: "1", title: "BK Breakfast", src: "/assets/img/bkBreakfast.jpg" },
  { id: "2", title: "BK Tamales", src: "/assets/img/bkTamales.jpg" },
  { id: "3", title: "BK Tacos", src: "/assets/img/bkTacos.png" },
  { id: "4", title: "BK Window", src: "/assets/img/bkWindow.jpg" },
];

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
}
</script>

<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000">
    <Slide v-for="slide in slides" :key="slide.id">
      <img class="carousel__item" v-bind:src="slide.src" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__item {
  width: 100%;
  max-height:800px;
  min-height: 200px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
