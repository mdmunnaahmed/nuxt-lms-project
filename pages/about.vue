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
        <div class="section-title">
          <h2>Frequently Asked Question</h2>
          <p>
            General <span><u>Questions</u></span>
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What does it take excellent author?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Great value and so easy to use and saves me so much time! I
                    was shocked by how much time and brain energy it saved me.
                    Simple & easy gotta love that. Great value and so easy to
                    use.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END COL  -->
          <div class="col-lg-6 col-sm-6 col-xs-12">
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
export default {
  setup() {
    // definePageMeta({
    //   middleware: ["auth"],
    //   // or middleware: 'auth'
    // });
  },
};
</script>
