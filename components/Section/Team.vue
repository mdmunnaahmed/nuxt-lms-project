<template>
  <section class="team_home_area section-padding">
    <div class="container">
      <div class="section-title">
        <h2>Team Member</h2>
        <p>
          Our Expert <span><u>Instructors</u></span>
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-sm-6 col-xs-12"
          v-for="(i, index) in instructorsWithCourses"
          :key="index"
        >
          <TeamItem
            :name="i.name"
            :profession="i.profession"
            :info="instructorsWithCourses"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useFrontStore } from "~/stores/frontStore";
import { useAuthStore } from "~/stores/AuthStore";

export default {
  setup() {
    const frontStore = useFrontStore();
    const authStore = useAuthStore();
    const courses = ref(frontStore.courses);
    const instructors = ref(authStore.instructorAccounts);

    const instructorsWithCourses = computed(() => {
      const groupedCourses = courses.value.reduce((acc, course) => {
        if (!acc[course.uname]) {
          acc[course.uname] = [];
        }
        acc[course.uname].push(course);
        return acc;
      }, {});
      // Map instructors with their courses
      return instructors.value.map((instructor) => ({
        ...instructor,
        courses: groupedCourses[instructor.uname] || [],
      }));
    });
    return {
      frontStore,
      authStore,
      instructorsWithCourses,
    };
  },
};
</script>