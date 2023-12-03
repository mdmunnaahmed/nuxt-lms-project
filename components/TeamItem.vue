<template>
  <div class="single-team-home">
    <div class="img">
      <img :src="'/images/all-img/' + thumb" class="img-fluid" alt="team" />
    </div>
    <div class="team-content-home">
      <h3>{{ name }}</h3>
      <p>{{ profession }}</p>
      <div class="sth_det pt-2 pb-2">
        <span class="d-flex align-items-center gap-1 justify-content-center"
          ><i class="ti-file"></i>
          <span>{{ info[index].courses.length }}</span>
        </span>
      </div>
      <ul class="social-home flex justify-content-center gap-2">
        <li>
          <a href="" class="facebook-home"><i class="fa fa-facebook"></i></a>
        </li>
        <li>
          <a href="" class="twitter-home"><i class="fa fa-twitter"></i></a>
        </li>
        <li>
          <a href="" class="instagram-home"><i class="fa fa-instagram"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "profession", "info", "thumb", "index"],
};
</script>