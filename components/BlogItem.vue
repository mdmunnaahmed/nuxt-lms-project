<template>
  <div class="single_blog">
    <img :src="thumb" class="img-fluid" alt="image" />
    <div class="content_box">
      <span
        >{{ date }} | <a href="blog_single.html">{{ tag }}</a></span
      >
      <h2>
        <NuxtLink :to="slug"
          >Professional Ceramic Moulding for Beginner</NuxtLink
        >
      </h2>
      <NuxtLink :to="slug" class="cta d-inline-flex align-items-center"
        ><span class="mb-0">READ MORE</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "thumb", "title", "tag"],
  setup(props) {
    const title = ref(props.title);
    const stitle = title.value.toLowerCase().replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
    return { slug };
  },
};
</script>