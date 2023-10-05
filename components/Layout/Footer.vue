<template>
  	<!-- START FOOTER -->
	<div class="footer section-padding">
		<div class="container">				
			<div class="row">						
				<div class="col-lg-3 col-sm-6 col-xs-12">
					<div class="single_footer">
						<NuxtLink to="/"><img src="@/images/all-img/logo2.png" alt=""></NuxtLink>         
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p>
					</div>
					<div class="foot_social">
						<ul>
							<li><NuxtLink to="#">TW</NuxtLink></li>
							<li><NuxtLink to="#">FB</NuxtLink></li>
							<li><NuxtLink to="#">INS</NuxtLink></li>
							<li><NuxtLink to="#">YT</NuxtLink></li>
						</ul>						
					</div>				
				</div><!--- END COL -->						
				<div class="col-lg-3 col-sm-6 col-xs-12">
					<div class="single_footer">
						<h4>Courses</h4>
						<ul>
							<li><NuxtLink to="#">Creative Writing</NuxtLink></li>
							<li><NuxtLink to="#">Digital Marketing</NuxtLink></li>
							<li><NuxtLink to="#">SEO Business</NuxtLink></li>
							<li><NuxtLink to="#">Social Marketing</NuxtLink></li>
							<li><NuxtLink to="#">Graphic Design</NuxtLink></li>
							<li><NuxtLink to="#">Website Development</NuxtLink></li>
						</ul>
					</div>
				</div><!--- END COL -->	
				<div class="col-lg-3 col-sm-6 col-xs-12">
					<div class="single_footer">
						<h4>Company</h4>
						<ul>
							<li><NuxtLink to="#">About us</NuxtLink></li>
							<li><NuxtLink to="#">Knowledge Base</NuxtLink></li>
							<li><NuxtLink to="#">Affiliate Program</NuxtLink></li>
							<li><NuxtLink to="#">Community</NuxtLink></li>
							<li><NuxtLink to="#">Market API</NuxtLink></li>						
							<li><NuxtLink to="#">Support team</NuxtLink></li>						
						</ul>
					</div>
				</div><!--- END COL -->	
				<div class="col-lg-3 col-sm-6 col-xs-12">
					<div class="single_footer">
						<h4>Contact Info</h4>
						<div class="sf_contact">
							<span class="ti-mobile"></span>
							<h3>Phone number</h3>
							<p>+88 457 845 695</p>
						</div>
						<div class="sf_contact">
							<span class="ti-email"></span>
							<h3>Email Address</h3>
							<p>example#yourmail.com</p>
						</div>
						<div class="sf_contact">
							<span class="ti-map"></span>
							<h3>Office Address</h3>
							<p>California, USA</p>
						</div>
					</div>
				</div><!--- END COL -->	
			</div><!--- END ROW -->		
			<div class="row fc">
				<div class="col-lg-6 col-sm-6 col-xs-12">
					<div class="footer_copyright">
						<p>&copy; {{ new Date().getFullYear() }}. All Rights Reserved.</p>
					</div>
				</div>
				<div class="col-lg-6 col-sm-6 col-xs-12">
					<div class="footer_menu">
						<ul>
							<li><NuxtLink to="#">Terms of use</NuxtLink></li>
							<li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
							<li><NuxtLink to="#">Cookie Policy</NuxtLink></li>
						</ul>
					</div>
				</div><!-- END COL -->
			</div>				
		</div><!--- END CONTAINER -->
	</div>
	<!-- END FOOTER -->		
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>