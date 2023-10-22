<template>
  <div>
    <SectionInnerBanner title="About" slug="about" />

    <SectionOverview />

    <!-- START ABOUT US HOME ONE -->
    <section class="ab_one section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="ab_img">
              <img
                src="@/images/all-img/about2.png"
                class="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <!--- END COL -->
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="ab_content">
              <h2>
                Learn new skills to go
                <u><span>ahead for your </span></u> career.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et simply. From blogs
                to emails to ad copies, auto-generate catchy, original, and
                high-converting copies in popular tones languages.From blogs to
                emails to ad copies, auto-generate catchy, original and
                high-converting copies.
              </p>
              <p>
                <strong
                  >Auto-generate catchy original and high-converting copies in
                  popular tones languages. From blogs to emails to ad copies
                  auto-generate catchy</strong
                >
              </p>
              <a class="btn_one" href="about.html">Read More us</a>
            </div>
          </div>
          <!--- END COL -->
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END ABOUT US HOME ONE -->

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
                src="@/images/all-img/faq.png"
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
import { useFrontStore } from "../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore,
    };
  },
};
</script>
