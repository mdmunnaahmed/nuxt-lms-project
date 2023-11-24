<template>
  <!-- START NAVBAR -->
  <div
    id="navigation"
    class="fixed-top navbar-light bg-faded site-navigation py-1"
    :class="{ navShadow: isScrolled }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2 col-md-3 col-sm-4">
          <div class="site-logo">
            <NuxtLink to="/"
              ><img src="/images/all-img/logo.png" alt="" class="mt-0"
            /></NuxtLink>
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
                    <!-- <li>
                      <NuxtLink class="nav-link" to="/index-two"
                        >Home 02</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/index-three"
                        >Home 03</NuxtLink
                      >
                    </li> -->
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
                      <NuxtLink class="nav-link" to="/team"
                        >Instructor</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/faq">FAQ's</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/event">Event</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink class="nav-link" to="javascript:void(0)"
                    >Courses <span class="ti-angle-down"></span
                  ></NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink class="nav-link" to="/courses"
                        >Courses One</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/courses-two"
                        >Courses Two</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink class="nav-link" to="/courses-sidebar"
                        >Course Sidebar</NuxtLink
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
                      <NuxtLink class="nav-link" to="/cart">Cart Page</NuxtLink>
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
              <span class="gactive">{{ cartCount }}</span>
            </NuxtLink>
            <NuxtLink class="btn_one text-white" to="/profile"
              >Profile</NuxtLink
            >
          </div>
          <div v-if="!authStore.isLoggedIn" class="call_to_action">
            <NuxtLink class="btn_one text-white" to="/login">Login</NuxtLink>
            <NuxtLink class="btn_two" to="/register">Sign Up</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useAuthStore } from "~/stores/AuthStore";
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();

    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };
    onMounted(() => {
      // Attach the scroll event listener when the component is mounted
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      // Remove the scroll event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    });

    const cartCount = computed(() => {
      return frontStore.cart.length;
    });

    return {
      frontStore,
      authStore,
      isScrolled,
      handleScroll,
      cartCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #2eca7f;
}
.navbar-light {
  border-bottom: 1px solid #00000012;
}
.navShadow {
  box-shadow: 0 3px 15px #00000015;
}
</style>
