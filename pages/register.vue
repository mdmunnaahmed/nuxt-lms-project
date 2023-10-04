<template>
  <div>
    <!-- START SECTION TOP -->
    <section class="section-top hidden">
      <div class="container">
        <div class="col-lg-10 offset-lg-1 text-center">
          <div class="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
            <h1>Register Page</h1>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>/ Register</li>
            </ul>
          </div>
          <!-- //.HERO-TEXT -->
        </div>
        <!--- END COL -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END SECTION TOP -->

    <!-- START LOGIN AND REGISTER -->
    <section class="login_register section-padding mt-10">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-xs-12">
            <div class="register">
              <h4 class="login_register_title">Create a new account:</h4>
              <div class="form-group">
                <label for="">Username</label>
                <input type="text" id="contact-name" class="form-control requiredField input-label" name="uname" />
              </div>
              <div class="form-group">
                <label for="">Full Name</label>
                <input type="text" id="contact-name" class="form-control requiredField input-label" name="name" />
              </div>
              <div class="form-group">
                <label for="">Email Address</label>
                <input type="email" id="contact-email" class="form-control requiredField input-label" name="email" />
              </div>
              <div class="form-group">
                <label for="">Password</label>
                <input type="password" id="contact-email" class="form-control requiredField input-label" name="password" />
              </div>
              <div class="form-group col-lg-12">
                <button class="btn_one" type="submit" name="submit">Signup Now</button>
              </div>
              <p>Already have an account? <a href="login.html">Login</a></p>
            </div>
          </div>
          <!--- END COL -->
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END LOGIN AND REGISTER -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
