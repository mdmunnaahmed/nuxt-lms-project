<template>
  <div @click="$emit('close')"></div>
  <dialog open>
    <header class="text-center">
      <slot name="ico"></slot>
    </header>

    <section>
      <slot></slot>
    </section>

    <footer>
      <slot name="actions">
        <button
          class="btn btn-danger shadow-lg w-auto px-5 py-2 h-auto"
          @click="$emit('close')"
        >
          Close
        </button>
      </slot>
    </footer>
  </dialog>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["clsoe"],
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: hsla(0, 0%, 93%, 1);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  z-index: 100;
  border-radius: 12px;
  border: none;
  background: #fff;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.05);
  padding: 50px 40px;
  margin: 0;
  overflow: hidden;
  max-width: 360px;
  width: 100%;
}

section {
  padding: 2rem 0rem;
}
button {
  box-shadow: 0 5px 25px #0e9e4d;
}
</style>
