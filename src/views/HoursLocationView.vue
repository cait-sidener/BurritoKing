<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 38.96738052368164, lng: -95.24494934082031 },
      markers: [
        {
          position: {
            lat: 38.96738052368164, lng: -95.24494934082031
          }
        }
      ]
    };
  },
};
</script>
<template>
  <div class="hourslocation">
    <h1>Hours & <br />Location</h1>
  </div>
  <div class="location">
    <a
      target="_blank"
      href="https://www.google.com/maps/place/Burrito+King/@38.967291,-95.2475091,17z/data=!3m1!4b1!4m6!3m5!1s0x87bf6f46e2898ab5:0x25e8f87a4f3d156f!8m2!3d38.967291!4d-95.2449342!16s%2Fg%2F1thw_zbn?entry=ttu"
    >
      900 Illinois Street<br />
      Lawrence, Kansas 66044 </a
    ><br />
    <a href="tel:785-841-3663">785.841.3663</a>
  </div>
  <GMapMap class="gMap"
  :center="center"
  :zoom="17"
  map-type-id="terrain"
  style="width: 1000px; height: 800px"
 ><GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<style scoped>
@media (min-width: 1024px) {
  a {
    text-decoration: underline;
  }
  a:hover {
    border: none;
    border-radius: 0;
  }

  .gMap {
    display: flex;
    justify-content: center;  
    margin: 20px auto;
  }

  .hourslocation {
    color: #fff;
    font-family: "CactusTequila";
    font-size: 2rem;
    text-align: center;
  }

  .location {
    color: #402e15;
    font-family: "Barbaro";
    font-size: 2rem;
    text-align: center;
  }
}
</style>
