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
                3481 Melrose Place, Beverly Hills <br />
                CA 90210
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
              <p>msdmunna77@gmail.com</p>
              <p>msdmunna77@gmail.com</p>
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
                    <label for="">Name</label>
                    <input v-model="name" type="text" class="form-control" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">Your Email</label>
                    <input type="email" class="form-control" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="">Your Subject</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="">Your Message</label>
                    <textarea rows="6" class="form-control"></textarea>
                  </div>
                  <div class="col-md-12 text-center">
                    <button class="btn_one">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END COL  -->
        </div>
        <!-- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </div>
    <!-- END CONTACT -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const submitForm = () => {
      console.log(name.value);
    };
    return {
      submitForm,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>