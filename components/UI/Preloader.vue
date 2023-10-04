<!-- components/Preloader.vue -->
<template>
  <div class="preloader">
    <!-- Add your preloader content or animation here -->
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
      <g>
        <circle cx="3" cy="12" r="2" fill="green" />
        <circle cx="21" cy="12" r="2" fill="green" />
        <circle cx="12" cy="21" r="2" fill="green" />
        <circle cx="12" cy="3" r="2" fill="green" />
        <circle cx="5.64" cy="5.64" r="2" fill="green" />
        <circle cx="18.36" cy="18.36" r="2" fill="green" />
        <circle cx="5.64" cy="18.36" r="2" fill="green" />
        <circle cx="18.36" cy="5.64" r="2" fill="green" />
        <animateTransform
          attributeName="transform"
          dur="1.5s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
/* Add styling for your preloader here */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999999; /* Make sure it's above other content */
}
</style>
