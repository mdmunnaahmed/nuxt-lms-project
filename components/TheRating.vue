<template>
  <div class="ratings">
    <span v-for="i in 5" :key="i"><i :class="getStarClass(i)"></i></span>
  </div>
</template>

<script>
export default {
  props: ["rating"],
  setup(props) {
    const getStarClass = (index) => {
      const floorRating = Math.floor(props.rating);
      if (index <= floorRating) {
        return "fa fa-star cl-theme"; // Full star
      } else if (index === floorRating + 1 && props.rating % 1 !== 0) {
        return "fa fa-star-half-empty cl-theme"; // Half star
      } else {
        return "fa fa-star text-black-400"; // Empty star
      }
    };
    return {
      getStarClass,
    };
  },
};
</script>
<style>
.rtng_cmnt_area .single_rtng_cmnt .rtngs i {
  color: #80808099;
}
</style>