(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}
/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main(); 
}
/******** Our main function ********/


function main() { 

    jQuery(document).ready(function($) { 
        // We can use jQuery 1.4.2 here
		
//twitter button		
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



jQuery(document).ready(function(){





$('body').prepend("<div id='fb-root'></div>");

var script = document.createElement( 'script' );
script.value = (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));;
$("#body").prepend( script );

$('#widget_area').append('<style>@font-face {    font-family: 'Museo';    src: url('http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.eot');    src: url('http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.eot?#iefix') format('embedded-opentype'),         url('http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.woff') format('woff'),         url('http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.ttf') format('truetype'),         url('http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.svg#Museo') format('svg');    font-weight: normal;    font-style: normal;}#widget_area {	display: block;	width: 300px;	margin: 0 auto;	background: #ffffff;	border: 1px solid #ea529d;	padding: 10px 0;}#widget_area, #widget_area p {	font-family: Georgia, "Times New Roman", serif;	color: #666;	font-size: 14px;}#widget_area #image_container {	background: url("http://www.widget.devserver2012.com/images/flowers-sm.png") 0 115px no-repeat;}#widget_area .sevenyy-logo img{	width: 250px;	margin: 0 25px;	display: block;}#widget_area #content_container {	width: 220;	padding: 0 15px;	margin: 0 25px;	background: url("http://www.widget.devserver2012.com/images/content-bg-sm.png") 0 0 repeat-y;}#widget_area h2.sevenyy-title {	font-size: 16px;	font-family: 'Museo', Georgia, "Times New Roman", serif;	text-align: center;	font-weight: normal;	color: #ea529d;}#widget_area #learn {	text-align: center;}#widget_area #thankYou a:link, #widget_area #thankYou a:hover {	color: #ea529d;}#widget_area #thankYou a.learn-more-button, #widget_area #thankYou a.learn-more-button:hover {	display: block;	margin: 16px auto;	width: 112px;	height: 26px;	line-height: 26px;	color: #ffffff;	font-family: Museo, Georgia, serif;	background: url('http://www.widget.devserver2012.com/images/button.png') no-repeat;	text-decoration: none;}#widget_area #thankYou {	background: url("http://www.widget.devserver2012.com/images/flowers-sm.png") 0 115px no-repeat;	width: 300px;	height: 300px;}#widget_area #thankyou_content {	width: 220;	height: 180px;	padding: 0 15px;	margin: 0 25px;	background: url("http://www.widget.devserver2012.com/images/content-bg-sm.png") 0 0 repeat-y;}#widget_area #choose_pledge {	display: block;	width: 220px;	font-size: 13px;	text-align: center;}#widget_area input, #widget_area textarea, #widget_area keygen, #widget_area select, #widget_area button, #widget_area isindex {	-moz-border-radius: 5px;	-webkit-border-radius: 5px;	border-radius: 5px;	height: 25px;	color: #666;	font-family: Georgia, "Times New Roman", serif;	font-size: 16px;	border-color: #ececec;}#widget_area div#content_container .widget_input {	width: 208px;	padding: 0 0 0 8px;} #widget_area div#content_container #pladge {	margin-top: 11px;	width: 220px;}#widget_area #signature {	margin-top: 0;}#widget_area #email {	margin-top: 0;}#widget_area #go {	display: block;	width: 113px;	height: 26px;	margin: 0 auto;	margin-top: 16px;	margin-bottom: 2px;}</style><div id="thankYou" style="display: none;"><div class="sevenyy-logo"><img src="http://www.widget.devserver2012.com/images/logo-sm.png" alt="7 Years Younger"/></div><h2 class="sevenyy-title">Congratulations On Your Pledge!</h2>  <div id="thankyou_content">  <div id="learn">Learn more about how to look</br>    and feel younger every day!</br>    <a class="learn-more-button" href="#">Learn More</a>    <div class="fb-like" data-href="http://www.womansday.com/health-fitness/conditions-diseases/seven-years-younger" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div>    <a href="https://twitter.com/share" class="twitter-share-button" data-text="I just pledged to look seven years younger!">Tweet</a></div>    </div></div><div id="image_container"><div class="sevenyy-logo"><img src="http://www.widget.devserver2012.com/images/logo-sm.png" alt="7 Years Younger"/></div><h2 class="sevenyy-title">Take The 7 Years Younger Pledge</h2>   <div id="content_container">    <div class="myform"></div>    <form id="newsletter" name="subscribeform" action="http://www.widget.devserver2012.com/insert.php" method="post">    </form>    <div id="fieldWrapper"></div>    <div class="fieldHolder"></div>    <div class="attributeinput1"></div>    <label id="choose_pledge">I dedicate the next 7 days to following the 7 Years Younger program.</label>    </br>    <select id="pladge" class="widget_input" name="pladge">      <option selected="selected" value=""> Select a pledge </option>      <option value="A">pledge1 blah blah</option>      <option value="B">pledge2 blah blah</option>      <option value="C">pledge3 blah blah</option>    </select>    <br>    <label class="error" for="pladge" id="pladge_error" style="display: none; ">This field is required.</label>    <div class="fieldHolder2">      <div class="attributeinput2"></div>    </div>    <br>    <input type="text" id="signature" class="widget_input" onfocus="if(this.value == &apos;name&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;name&apos;;}" value="name" size="12" autocomplete="on" value="" name="signature">    <br>    <label class="error" for="signature" id="signature_error" style="display: none; ">This field is required.</label>    <br>    <input type="text" id="email" class="widget_input" onfocus="if(this.value == &apos;email&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;email&apos;;}" size="12" value="email" autocomplete="on"  value="" name="email">    <br>    <label class="error" for="email" id="email_error" style="display: none; ">This field is required.</label>    <div id="subscribe"></div>    <input id="go" type="image" checkform();"="" return="" value="Subscribe onClick=" name="subscribe" src="http://www.widget.devserver2012.com/images/yogaSubmit.png">  </div></div>');


});


/*********** validate  and  send data******************/
$('document').ready(function(){
    $('#widget_area .error').hide();
    $('#go').click (function () {
        $('#widget_area .error').hide();
	a = $("#pladge option:selected").text();
	b =  $("input#signature").val();
	c = $("input#email").val();
	$('.error').hide();   
	if ($("#pladge").val() == "") {  
	  $("label#pladge_error").show();  
	  $("input#pladge").focus();  
	  return false;  
	}  
	else if (b == "") {  
	  $("label#signature_error").show();  
	  $("input#signature").focus();  
	  return false;  
	}  
       else if (c == "") {  
	   $("label#email_error").show();  
	  $("input#email").focus();  
	  return false;  
	}	
	else {  
	 var dataString = 'pladge='+ a + '&signature=' + b + '&email=' + c; 
	    $.ajax ( {
	    type: 'POST',	
	    data: dataString,
	    url: $('#newsletter').attr('action'),
	    success: function(){
	    $('#image_container').hide (1000,
		function () {
		setTimeout ( function() { $('#thankYou').show(1000); }, 500);
		}
	   );
	  }
	 });	
	}	
});
    
    
    
    
    
    

		$('#in_wrapper ul li img').live('click',function(){
		//alert($(this).parent().attr('class'));

		var p_class=$(this).parent().attr('class');
		$(this).parent().parent().parent().next().children().hide();
		var t_ps=$(this).parent().attr('class');
		$('.'+t_ps).show('slow');

		});
		});

$('document').ready(function(){
$('#in_wrapper ul li img').click(function(){
$('#in_wrapper ul li img').css('box-shadow','none');
$(this).css('box-shadow','0px 0px 13px 3px #7B40F8');




		});
		});



});

}

})(); // We call our anonymous function immediately