<template>
  <NuxtLink :to="'/blog/' + slug" class="single_blog mb-3 border-b">
    <div class="content_box p-4">
      <span
        >{{ formattedDate }} | {{ tag }}</span
      >
      <h6>
        {{ title }}
      </h6>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["date", "title", "tag"],
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