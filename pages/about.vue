<template>
  <div>
    <SectionInnerBanner title="About" slug="about" />
    <SectionOverview />
    <SectionAbout />
    <SectionWhyChoose />
    <SectionCounter />
    <SectionTeamTwo />
    <!-- START FAQ -->
    <section class="faq_area section-padding">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 col-sm-6 col-xs-12">
            <div class="section-title">
              <h2>Frequently Asked Question</h2>
              <p>
                General <span><u>Questions</u></span>
              </p>
            </div>
            <FaqItem
              v-for="(f, index) in frontStore.faqs"
              :key="index"
              :title="f.title"
              :pera="f.pera"
              :index="index"
            />
          </div>
          <!-- END COL  -->
          <div class="col-lg-5 col-sm-6 col-xs-12">
            <div class="pt_faq">
              <img
                src="/images/all-img/faq.png"
                class="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <!-- END COL  -->
        </div>
        <!--END  ROW  -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END FAQ -->
    <SectionPartner />
  </div>
</template>

<script>
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore,
    };
  },
};
</script>
