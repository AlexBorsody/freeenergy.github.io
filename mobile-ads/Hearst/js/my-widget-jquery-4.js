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
script.value = (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
$("#body").prepend( script );

$('#widget_area').append('<style> #widget_privacy a, #widget_privacy { font-size:11px !important; margin-top: 3px !important; text-decoration: none; color: #EA529D; text-align: center;} #check {font-size:11px; display:inline;} #widget_area body, #widget_area div, #widget_area span, #widget_area iframe, #widget_area h1, #widget_area h2, #widget_area h3, #widget_area p, #widget_area a, #widget_area img, #widget_area form, #widget_area label {	margin: 0;	padding: 0;	border: 0;	font-size: 100%;	font: inherit;	vertical-align: baseline;}@font-face {    font-family: "Museo";    src: url("http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.eot");    src: url("http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.eot?#iefix") format("embedded-opentype"),         url("http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.woff") format("woff"),         url("http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.ttf") format("truetype"),         url("http://www.widget.devserver2012.com/fonts/Museo300-Regular-webfont.svg#Museo") format("svg");    font-weight: normal;    font-style: normal;}#widget_area {	display: block;	width: 300px;	margin: 0 auto;	background: #ffffff;	border: 1px solid #ea529d;	padding: 10px 0;	line-height: 1;}#widget_area, #widget_area p {	font-family: Georgia, "Times New Roman", serif;	color: #666;	font-size: 14px;}#widget_area #image_container {	background: url("http://www.widget.devserver2012.com/images/flowers-sm.png") 0 115px no-repeat;}#widget_area .sevenyy-logo img{	width: 250px;	margin: 0 25px;	display: block;}#widget_area #content_container {	width: 220;	padding: 0 15px;	margin: 0 25px;	background: url("http://www.widget.devserver2012.com/images/content-bg-sm.png") 0 0 repeat-y;}#widget_area h2.sevenyy-title {	font-size: 16px;	font-family: "Museo", Georgia, "Times New Roman", serif;	text-align: center;	font-weight: normal;	color: #ea529d;	margin: 12px 0;}#widget_area #learn {	text-align: center;}#widget_area #thankYou a:link, #widget_area #thankYou a:hover, #widget_area #thankYou a:visted {color: #ea529d; text-decoration:none;}#widget_area #thankYou a.learn-more-button, #widget_area #thankYou a.learn-more-button:hover {	display: block;	margin: 16px auto;	width: 112px;	height: 26px;	line-height: 26px;	color: #ffffff;	font-family: Museo, Georgia, serif;	background: url("http://www.widget.devserver2012.com/images/button.png") no-repeat;	text-decoration: none;}#widget_area #thankYou {	background: url("http://www.widget.devserver2012.com/images/flowers-sm.png") 0 115px no-repeat;	width: 300px;	height: 300px;}#widget_area #thankyou_content {	width: 220;	height: 180px;	padding: 0 15px;	margin: 0 25px;	background: url("http://www.widget.devserver2012.com/images/content-bg-sm.png") 0 0 repeat-y;}#widget_area #choose_pledge {	display: block;	width: 220px;	font-size: 13px;	text-align: center;	margin-bottom: 5px;}#widget_area input, #widget_area textarea, #widget_area keygen, #widget_area select, #widget_area button, #widget_area isindex {	-moz-border-radius: 5px;	-webkit-border-radius: 5px;	border-radius: 5px;	height: 25px;	color: #666;	font-family: Georgia, "Times New Roman", serif;	font-size: 16px;	border-color: #ececec;}#widget_area div#content_container .widget_input {	width: 208px;	padding: 0 0 0 8px;} #widget_area div#content_container #pledge {	margin-top: 11px;	width: 220px;}#widget_area #signature {	margin-top: 0;}#widget_area #email {	margin-top: 0;}#widget_area #go {	display: block;	width: 113px;	height: 26px;	margin: 0 auto;	margin-top: 16px;	margin-bottom: 2px;}</style><div id="thankYou" style="display: none;"><div class="sevenyy-logo"><img src="http://www.widget.devserver2012.com/images/logo-sm.png" alt="7 Years Younger"/></div><h2 class="sevenyy-title">Congratulations On Your Pledge!</h2>  <div id="thankyou_content">  <a <div id="learn">Learn more about how to look</br> and feel younger every day!</br>    <a class="learn-more-button" href="http://www.goodhousekeeping.com/beauty/seven-years-younger">Learn More</a>    <div class="fb-like" data-href="http://www.womansday.com/health-fitness/conditions-diseases/seven-years-younger" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div>    <a href="https://twitter.com/share" class="twitter-share-button" data-text="I just pledged to look seven years younger!">Tweet</a></div>    </div></div><div id="image_container"><div class="sevenyy-logo"><img src="http://www.widget.devserver2012.com/images/logo-sm.png" alt="7 Years Younger"/></div><h2 class="sevenyy-title">Take The 7 Years Younger Pledge</h2>   <div id="content_container">    <div class="myform"></div>    <form id="newsletter" name="subscribeform" action="http://www.widget.devserver2012.com/insert.php" method="post">    </form>    <div id="fieldWrapper"></div>    <div class="fieldHolder"></div>    <div class="attributeinput1"></div>    <label id="choose_pledge">Take the 7YY Pledge and enter to win a SPA TRIP WORTH  $25,000!</label>    </br> <select id="pledge" class="widget_input" name="pledge">      <option selected="selected" value=""> Select a pledge </option>      <option value="A">I pledge to exercise for 30 minutes 3x this week</option>      <option value="B">I pledge to learn a new healthy recipe this week</option>      <option value="C">I pledge to maintain a positive attitude this week</option>    </select>    <br>    <label class="error" for="pledge" id="pledge_error" style="display: none; ">This field is required.</label>    <div class="fieldHolder2">      <div class="attributeinput2"></div>    </div>    <br>    <input type="text" id="signature" class="widget_input" onfocus="if(this.value == &apos;First Name&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;First Name&apos;;}" value="First Name" size="12" autocomplete="on" name="signature"> <label class="error" for="signature" id="signature_error" style="display: none; ">This field is required.</label> <br> <input type="text" id="lastName" class="widget_input" onfocus="if(this.value == &apos;Last Name&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;Last Name&apos;;}" value="Last Name" size="12" autocomplete="on" name="last name"><input type="text" id="address" class="widget_input" onfocus="if(this.value == &apos;Adress&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;Address&apos;;}" value="Address" size="12" autocomplete="on" name="address"><input type="text" id="address2" class="widget_input" onfocus="if(this.value == &apos;Address 2&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;Address 2&apos;;}" value="Address 2" size="12" autocomplete="on" name="address2"><input type="text" id="city" class="widget_input" onfocus="if(this.value == &apos;City&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;City&apos;;}" value="City" size="12" autocomplete="on" name="city"><input type="text" id="state" class="widget_input" onfocus="if(this.value == &apos;State&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;State&apos;;}" value="State" size="12" autocomplete="on" name="state"><input type="text" id="zip" class="widget_input" onfocus="if(this.value == &apos;Zip&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;Zip&apos;;}" value="Zip" size="12" autocomplete="on" name="zip">     <input type="text" id="email" class="widget_input" onfocus="if(this.value == &apos;Email&apos;) {this.value = &apos;&apos;;}" onblur="if (this.value == &apos;&apos;) {this.value = &apos;Email&apos;;}" size="12" value="Email" autocomplete="on" name="email">      <label class="error" for="email" id="email_error" style="display: none; ">This field is required.</label></br>  <input id="checkbox" checked="checked" type="checkbox" name="option1" value="checked"><div id="check" style="font-size:11px;">Sign up for our FREE 7YY newsletter</div> <div id="widget_privacy" style="text-decoration:none;"> <a href="http://subscribe.hearstmags.com/circulation/shared/sweeps/rules/ghk/$25k_LifeSaverSweeps_OfficialRules_GHK.html">OFFICIAL RULES</a> &nbsp; <a href="http://subscribe.hearstmags.com/circulation/shared/privacy.html">PRIVACY POLICY</a></div><div id="subscribe"></div>    <input id="go" type="image" checkform();"="" return="" value="Subscribe onClick=" name="subscribe" src="http://www.widget.devserver2012.com/images/yogaSubmit.png">  </div></div>');


});


/*********** validate  and  send data******************/
$('document').ready(function(){



$('#widget_area div#content_container .widget_input').focus(function() {
    $(this).stop().animate({ backgroundColor: '#b1b1b1' }, 250);
}).blur(function() {
    $(this).stop().animate({ backgroundColor: '#cfd2d2' }, 250);
});



    $('#widget_area .error').hide();
    $('#go').click (function () {
        $('#widget_area .error').hide();
	a = $("#pledge option:selected").text();
	b = $("input#signature").val();
	c = $("input#email").val();
	d = $("input#checkbox").val();
	e = $("input#lastName").val();
	f = $("input#address").val();
	g = $("input#address2").val();
	h = $("input#city").val();
	i = $("input#state").val();
	j = $("input#zip").val();
	$('.error').hide();   
	if ($("#pledge").val() == "") {  
	  $("label#pledge_error").show();  
	  $("input#pledge").focus();  
	  return false;  
	}  
	else if (b == "first name") {  
	  $("label#signature_error").show();  
	  $("input#signature").focus();  
	  return false;  
	}  
       else if (c == "email") {  
	   $("label#email_error").show();  
	  $("input#email").focus();  
	  return false;  
	}	
	else {
	    var dataString = 'xml=<?xml version="1.0" encoding="utf-8"?>' +
	    '<opt xsi:noNamespaceSchemaLocation="https://subscribe.hearstmags.com/subscribe/HearstOrder-1.0.xsd" version="1.0">' +
	    '<offer_term>136320-1</offer_term>' +
	    '<sweep_id>25190</sweep_id>' +
	    '<pt_id>6</pt_id>' +
	    '<offer_accept>0</offer_accept>' +
	    '<country_code>US</country_code>' +
	    '<ship_country_code>US</ship_country_code>' +
	    '<first_name>MYNAMEHERE</first_name>' +
	    '<ship_first_name>MYNAMEHERE</ship_first_name>' +
	    '<last_name>MYNAMEHERE</last_name>' +
	    '<ship_last_name>MYNAMEHERE</ship_last_name>' +
	    '<address>300 W 57th ST</address>' +
	    '<ship_address>300 W 57th ST</ship_address>' +
	    '<address2>dddd frfrf</address2>' +
	    '<ship_address2>cdc dfeferfrf</ship_address2>' +
	    '<city>Morgantown</city>' +
	    '<ship_city>Morgantown</ship_city>' +
	    '<state>WV</state>' +
	    '<ship_state>WV</ship_state>' +
	    '<postal_code>26508</postal_code>' +
	    '<ship_postal_code>26508</ship_postal_code>' +
	    '<email>test@hearst.com</email>' +
	    '<ship_email>test@hearst.com</ship_email>' +
	    '<general_optin>Y</general_optin>';	 

	    $.ajax({
		type: 'POST', 
		 contentType: "text/xml",
		//contentType: "application/xml",
		 dataType: 'xml',

		url: 'https://subscribe.hearstmags.com/api/circ/xml/Transaction',
		data     : { inputxml : dataString },
	            success: function (resp) {
			alert('yes: ' +resp);
		    },
		    error: function(e) {
			//alert('Error: '+e);
		    }   
		});
	//json format goes here
	/* var dataString = 'pledge=' + a + '&signature=' + b + '&email=' + c +'&checkbox=' + d + '&lastName=' + e +'&address=' + f + '&address2=' + g + '&city=' + h + '&state=' + i + '&zip=' + j; 
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
	 });	*/
	}	
});
    
    
    
    
    
    

		});





});

}

})(); // We call our anonymous function immediately