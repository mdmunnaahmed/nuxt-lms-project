<template>
  <!-- START NAVBAR -->
  <div id="navigation" class="fixed-top navbar-light bg-faded site-navigation">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2 col-md-3 col-sm-4">
          <div class="site-logo">
            <NuxtLink to="/"><img src="images/all-img/logo.png" alt="" /></NuxtLink>
          </div>
        </div>
        <!--- END Col -->

        <div class="col-lg-6 col-md-9 col-sm-8">
          <div class="header_right">
            <nav id="main-menu" class="ms-auto">
              <ul>
                <li>
                  <NuxtLink class="nav-link" to="javascript:void(0)"
                    >Home <span class="ti-angle-down"></span
                  ></NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink class="nav-link" to="/">Home 01</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/index-two">Home 02</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/index-three">Home 03</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink class="nav-link" to="javascript:void(0)"
                    >Pages <span class="ti-angle-down"></span
                  ></NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/team">Instructor</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/faq">FAQ's</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/event">Event</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/login">Login</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/register">Register</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink class="nav-link" to="javascript:void(0)"
                    >Courses <span class="ti-angle-down"></span
                  ></NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink class="nav-link" to="/course">Courses 01</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/course-two">Courses 02</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/course-three">Courses 03</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/course-sidebar"
                        >Course Sidebar</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/single_course"
                        >Course details</NuxtLink
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink class="nav-link" to="javascript:void(0)"
                    >Shop <span class="ti-angle-down"></span
                  ></NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink class="nav-link" to="/shop">Shop</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/single_shop">Single Shop</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/cart">Cart Page</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/checkout">Checkout page</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink class="nav-link" to="javascript:void(0)"
                    >Blog <span class="ti-angle-down"></span
                  ></NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink class="nav-link" to="/blog">Blog List</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/blog_single">Single Blog</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
                </li>
              </ul>
            </nav>
            <div id="mobile_menu"></div>
          </div>
        </div>

        <div class="col-lg-4 col-md-3 col-sm-8 text-end">
          <div
            v-if="authStore.isLoggedIn"
            class="home_lc d-flex align-items-center justify-content-end mt-0"
          >
            <NuxtLink to="/wishlist" class="hlc">
              <i class="ti-heart"></i>
              <span class="gactive">0</span>
            </NuxtLink>
            <NuxtLink to="/cart" class="hlc">
              <i class="ti-shopping-cart-full"></i>
              <span class="gactive">2</span>
            </NuxtLink>
            <NuxtLink class="btn_one text-white" to="/my-profile">Profile</NuxtLink>
          </div>
          <div v-if="!authStore.isLoggedIn" class="call_to_action">
            <NuxtLink class="btn_one" to="/login">Login</NuxtLink>
            <NuxtLink class="btn_two" to="/register">Sign Up</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "~/stores/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #2eca7f;
}
</style>
