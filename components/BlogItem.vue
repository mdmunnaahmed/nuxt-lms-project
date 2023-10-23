<template>
  <div class="single_blog">
    <img :src="'/images/blog/' + thumb" class="img-fluid" alt="image" />
    <div class="content_box">
      <span
        >{{ formattedDate }} | <a href="blog_single.html">{{ tag }}</a></span
      >
      <h2>
        <NuxtLink :to="'/blog/' + slug">{{ title }}</NuxtLink>
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
    const date = ref(props.date);
    const stitle = title.value
      .trim()
      .toLowerCase()
      .replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
    function formatDate(inputDate) {
      const parts = inputDate.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);

      // Create an array of month names
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Get the month name
      const monthName = monthNames[month - 1];

      // Format the date
      const formattedDate = `${day} ${monthName}, ${year}`;

      return formattedDate;
    }
    const formattedDate = formatDate(date.value);
    return { slug, formattedDate };
  },
};
</script>