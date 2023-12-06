<template>
  <div>
    <SectionInnerBanner title="Contact Us" slug="contact" />
    <!-- START ADDRESS -->
    <section class="address_area section-padding">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="single_address">
              <i class="ti-map"></i>
              <h4>Our Location</h4>
              <p>
                R/07 - Khoksha, Kushtia, <br />
                Khulna, Bangladesh
              </p>
            </div>
          </div>
          <!-- END COL -->
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="single_address sabr">
              <i class="ti-mobile"></i>
              <h4>Telephone</h4>
              <p>(+1) 517 397 7100</p>
              <p>(+1) 411 315 8138</p>
            </div>
          </div>
          <!-- END COL -->
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="single_address">
              <i class="ti-email"></i>
              <h4>Send email</h4>
              <p>munnatpsi21@gmail.com</p>
              <p>munnatpsi21@gmail.com</p>
            </div>
          </div>
          <!-- END COL -->
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END ADDRESS -->

    <!-- CONTACT -->
    <div id="contact" class="contact_area section-padding">
      <div class="container">
        <div class="section-title-two">
          <h2>Send your message.</h2>
        </div>
        <div class="row">
          <div class="offset-lg-1 col-lg-10 col-sm-12 col-xs-12">
            <div class="contact">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model.trim="name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">Email Address</label>
                    <input
                      type.trim="email"
                      class="form-control"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="">Subject</label>
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      v-model.trim="subject"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="">Message</label>
                    <textarea
                      rows="6"
                      class="form-control"
                      v-model.trim="message"
                    ></textarea>
                  </div>
                  <div class="col-md-12 text-center">
                    <button class="btn_one">
                      Send Message
                    </button>
                    <br />
                    <small class="text-danger fw-bold" v-if="fillError"
                      >Fill out all the inputs</small
                    >
                    <small class="text-danger fw-bold" v-if="alreadyError"
                      >you already made a request</small
                    >
                    <small
                      class="text-success fw-bold"
                      v-if="success"
                      >Successfully Submitted!</small
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "~/stores/AuthStore";
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();
    const name = ref("");
    const email = ref(authStore.authUser ? authStore.authUser.email : "");
    const subject = ref("");
    const message = ref("");
    const alreadyError = ref(false);
    const fillError = ref(false);
    const success = ref(false);
    const submitForm = () => {
      success.value = false;
      if (!name.value || !email.value || !subject.value || !message.value) {
        fillError.value = true;
        return;
      }
      fillError.value = false;
      const data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
      const already = frontStore.checkIfAlready(data);
      if (already.length) {
        alreadyError.value = true;
        return;
      }
      alreadyError.value = false;

      frontStore.addContactRequest(data);
      success.value = true;
    };
    return {
      frontStore,
      submitForm,
      name,
      email,
      subject,
      message,
      alreadyError,
      fillError,
      success,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  
}
</style>