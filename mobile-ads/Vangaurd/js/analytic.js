/*!
 * ResponsiveAds Inc - Radical, responsive ad library
 *
 * Example:
 * RAD.analytics(); 								// Sends default widget impression data
 * RAD.analytics({e: 'button clicked'});			// Send custom event
 * RAD.analytics({e: 'value entered', v: '123'});	// Send custom event with value
 * 
 * @author ResponsiveAds Inc. (responsiveads.com)
 * @version 201309.4
 */
;window.console=window.console||{};window.console.log=window.console.log||function(){};window.console.error=window.console.error||function(){};
// ^ Fix possible console problems in IE quirks mode
;(function(window, document) {
	
	// Set up namespace
	window.RAD = window.RAD || {};
	
	// Options
	var O = {
		analytics: '//analytics.responsiveads.com/'
	};
	
	
	// Get data from URL parameters
	var data = location.search.substring(1).split('&'), item;
	while(item = data.pop()) {
		item = item.split('=');
		O[decodeURIComponent(item[0].replace(/^rad-/gi, ''))] = (!item[1] ? true :
			item[1] === 'true' ? true : 
			item[1] === 'false' ? false : 
			item[1] === 'null' ? null : 
			item[1] === 'undefined' ? undefined : 
				decodeURIComponent(item[1]));
	}
	
	
	/*
	 * Send analytics event
	 * ------------------------------------------------------------------------------------------------------------------------- */
	RAD.analytics = function(_data) {
		
		// If tracking is disabled, do nothing
		if(O.tracking == false) { return; }
		
		// Make sure we have everything
		_data = _data || {};

		// Add rest of the data
		_data.aid = O.id; // Ad Id
		_data.fl = O.flowline; // Flowline
		_data.rada = O.rada; // UUID
		_data.radb = O.radb; // Session ID
		_data.vs = O.vs; // Viewport size
		_data.pu = O.uri || location.href; // Page URI
		_data.ald = O.ald; // Ad Placement
		_data.e = (_data.e == 'clickthrough' ? 'click' : 'interact.' + (_data.e || 'widget'));
		_data.cb = new Date().getTime(); // Cache Buster
		
		// element id _data.elId
		
		// Serialize & encode params/data
		var serialized = [];
		for(var param in _data) {
			if(typeof _data[param] == 'undefined') { continue; }
			if(typeof _data[param] == 'object') { _data[param] = JSON.stringify(_data[param]); }
			serialized.push(param+'='+encodeURIComponent(_data[param]));
		}
		
		// Load tracking pixel and wait for it to be ready
		var img = new Image();
		img.src = O.analytics+'___tp.gif?' + serialized.join('&');
	};
	

})(window, document);