<template>
  <div>
    <div class="sidebar-post">
      <div class="blog_search">
        <input
          type="text"
          class="form-control"
          placeholder="Type to search course"
          @input="updateSearch"
        />
      </div>
    </div>
    <!-- END SINGLE POST -->
    <div class="rs-slider">
      <h4>Price Filter</h4>
      <div class="range-slider">
        <input
          type="range"
          step="10"
          min="0"
          max="300"
          range="true"
          v-model="priceRange"
          @change="searchByPrice"
        />
        <span class="range-value">{{ priceRange }}</span>
      </div>
    </div>
    <!-- END SIDEBAR POST -->
    <div class="sidebar-post">
      <div class="sidebar_title"><h4>CATEGORIES</h4></div>
      <div class="single_category">
        <ul>
          <li @click="selectCate('')">
            <button
              class="cate-item text-capitalize"
              :class="{ active: selectedCate == '' }"
            >
              All Categories <sup>{{ cateCount }}</sup>
            </button>
          </li>
          <li v-for="[cate, count] in categories" :key="cate">
            <button
              class="cate-item text-capitalize"
              @click="selectCate(cate)"
              :class="{ active: selectedCate == cate.trim().toLowerCase() }"
            >
              {{ cate }} <sup>{{ count }}</sup>
            </button>
          </li>
        </ul>
      </div>
      <!-- END SOCIAL MEDIA POST -->
    </div>
    <!-- END SIDEBAR POST -->
    <div class="sidebar-post">
      <div class="sidebar_title"><h4>Language</h4></div>
      <label class="single_langu d-flex align-items-center gap-2 mb-2">
        <input type="radio" name="lang" @change="selectLang('')" checked />
        <span>All Languages</span>
      </label>
      <label
        class="single_langu d-flex align-items-center gap-2 mb-2"
        v-for="(l, index) in frontStore.allLanguages"
        :key="index"
      >
        <input type="radio" name="lang" @change="selectLang(l)" />
        <span>{{ l }}</span>
      </label>
      <!-- END SINGLE LANGU -->
    </div>
    <!-- END SIDEBAR POST -->
    <div class="sidebar-post">
      <div class="sidebar_title"><h4>Skill Level</h4></div>
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="radio" name="skill" checked @change="selectSkill('')" />
        <span>All Levels ({{ skillCount }})</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="radio" name="skill" @change="selectSkill('beginner')" />
        <span>Beginner Levels ({{ frontStore.allSkills.beginner }})</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex gap-2 mb-2">
        <input
          type="radio"
          name="skill"
          @change="selectSkill('intermediate')"
        />
        <span>
          Intermediate Level ({{ frontStore.allSkills.intermediate }})</span
        >
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="radio" name="skill" @change="selectSkill('expert')" />
        <span> Expert Level ({{ frontStore.allSkills.expert }})</span>
      </label>
      <!-- END SINGLE LANGU -->
    </div>
    <!-- END SIDEBAR POST -->
    <div class="sidebar-post">
      <div class="sidebar_title"><h4>Rating by</h4></div>
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-1.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-2.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-3.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-4.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-5.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
    </div>
    <!-- END SIDEBAR POST -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    // search course
    const searchCourse = ref("");
    const updateSearch = (event) => {
      frontStore.searchCourses(event.target.value.trim());
    };
    const priceRange = ref(0);
    const searchByPrice = (event) => {
      frontStore.searchCoursesByPrice(event.target.value.trim());
    };
    const selectLang = (lang) => {
      const regex = /[\s\W]/g;

      frontStore.searchCoursesByLang(lang.replace(regex, "").toLowerCase());
    };
    const selectSkill = (skill) => {
      frontStore.searchCoursesBySkill(skill.toLowerCase());
    };
    const skillCount = computed(() => {
      return (
        parseInt(frontStore.allSkills.beginner) +
        parseInt(frontStore.allSkills.intermediate) +
        parseInt(frontStore.allSkills.expert)
      );
    });
    const cateCount = computed(() => {
      const value = Object.values(frontStore.allCategories);
      let total = 0;
      for (let i = 0; i < value.length; i++) {
        total += value[i];
      }
      return total;
    });
    const categories = computed(() => {
      return Object.entries(frontStore.allCategories);
    });
    const selectedCate = ref("");
    const selectCate = (cate) => {
      selectedCate.value = cate.toLowerCase().trim();
      frontStore.searchCoursesByCate(cate.toLowerCase().trim());
    };
    return {
      frontStore,
      updateSearch,
      searchCourse,
      searchCourse: frontStore.searchCourse,
      priceRange,
      searchByPrice,
      selectLang,
      skillCount,
      selectSkill,
      categories,
      selectCate,
      selectedCate,
      cateCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.cate-item {
  text-decoration: underline;
  color: rgb(26, 65, 109);
}
.cate-item.active {
  font-weight: 700;
  color: #2eca7f;
}
</style>