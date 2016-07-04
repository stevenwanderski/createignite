<div id="wrapper">
<div id="header"><div class="inner">
	<div id="logo"><a href=""><img src="/sites/all/themes/bx/images/logo.png" /></a></div>
	<div id='nav'>
		<?php // print theme('links', array('links' => $main_menu, 'attributes' => array('class' => 'links main-menu'))) ?>
		<ul>
			<li class="home"><a class="active" href="">home</a></li>
			<li class="about"><a href="">about</a></li>
			<li class="branding"><a href="">branding</a></li>
			<li class="print"><a href="">print</a></li>
			<li class="packaging"><a href="">packaging</a></li>
			<li class="web"><a href="">web</a></li>
			<li class="product"><a href="">product</a></li>
			<li class="contact"><a href="">contact</a></li>
		</ul>
	</div>
	
	<a href="" class="btn-green btn-contact">Got Questions?</a>
	
	<?php if ($page['help'] || ($show_messages && $messages)): ?>
	  <div id='console'><div class='limiter clearfix'>
	    <?php print render($page['help']); ?>
	    <?php if ($show_messages && $messages): print $messages; endif; ?>
	  </div></div>
	<?php endif; ?>
	
	<?php print render($action_links); ?>
	
</div></div>

<div id='page'><div class='limiter clearfix page-inner'>
	
	<?php if(arg(0) == 'user'): ?>
		
		<?php print render($page['content']); ?>
		
	<?php else: ?>
	
	<div id="content-home" class="content-wrap">
		<img class="main-img" src="/sites/all/themes/bx/images/pic_spark_plug_color.png" width="394" height="364" />
		<a href="" class="btn-green btn-about">Curious? Learn More.</a>
		<?php print $content_home; ?>
	</div>
	
	<div id="content-about" class="content-wrap">
		<h2 class="page-title">About</h2>
		<?php print $content_about; ?>
	</div><!-- end content-about -->
	
	<div id="content-branding" class="content-wrap project-wrap">
		<h2 class="page-title">Branding</h2>
		<?php print $content_branding; ?>
	</div><!-- end content-branding -->
	
	<div id="content-print" class="content-wrap project-wrap">
		<h2 class="page-title">Print</h2>
		<?php print $content_print; ?>
	</div><!-- end content-print -->
	
	<div id="content-packaging" class="content-wrap project-wrap">
		<h2 class="page-title">Packaging</h2>
		<?php print $content_packaging; ?>
	</div><!-- end content-print -->
	
	<div id="content-web" class="content-wrap project-wrap">
		<h2 class="page-title">Web</h2>
		<?php print $content_web; ?>
	</div><!-- end content-print -->
	
	<div id="content-product" class="content-wrap project-wrap">
		<h2 class="page-title">Product</h2>
		<?php print $content_product; ?>
	</div><!-- end content-print -->	
	
	<div id="content-contact" class="content-wrap">
		<h2 class="page-title">Contact</h2>
		<?php print $content_contact; ?>
	</div><!-- end content-contact -->
	
	<?php endif; ?>
	
</div></div>

<div class="clear"></div>

</div><!-- end wrapper -->