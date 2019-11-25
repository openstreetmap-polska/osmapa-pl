// jQuery.XDomainRequest.js
// Author: Jason Moon - @JSONMOON
// IE8+
if (!jQuery.support.cors && window.XDomainRequest) {
	var httpRegEx = /^https?:\/\//i;
	var getOrPostRegEx = /^get|post$/i;
	var sameSchemeRegEx = new RegExp('^'+location.protocol, 'i');
	var xmlRegEx = /\/xml/i;
	
	// ajaxTransport exists in jQuery 1.5+
	jQuery.ajaxTransport('text html xml json', function(options, userOptions, jqXHR){
		// XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page
		if (options.crossDomain && options.async && getOrPostRegEx.test(options.type) && httpRegEx.test(userOptions.url) && sameSchemeRegEx.test(userOptions.url)) {
			var xdr = null;
			var userType = (userOptions.dataType||'').toLowerCase();
			return {
				send: function(headers, complete){
					xdr = new XDomainRequest();
					if (/^\d+$/.test(userOptions.timeout)) {
						xdr.timeout = userOptions.timeout;
					}
					xdr.ontimeout = function(){
						complete(500, 'timeout');
					};
					xdr.onload = function(){
						var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
						var status = {
							code: 200,
							message: 'success'
						};
						var responses = {
							text: xdr.responseText
						};
						/*
						if (userType === 'html') {
							responses.html = xdr.responseText;
						} else
						*/
						try {
							if (userType === 'json') {
								try {
									responses.json = JSON.parse(xdr.responseText);
								} catch(e) {
									status.code = 500;
									status.message = 'parseerror';
									//throw 'Invalid JSON: ' + xdr.responseText;
								}
							} else if ((userType === 'xml') || ((userType !== 'text') && xmlRegEx.test(xdr.contentType))) {
								var doc = new ActiveXObject('Microsoft.XMLDOM');
								doc.async = false;
								try {
									doc.loadXML(xdr.responseText);
								} catch(e) {
									doc = undefined;
								}
								if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
									status.code = 500;
									status.message = 'parseerror';
									throw 'Invalid XML: ' + xdr.responseText;
								}
								responses.xml = doc;
							}
						} catch(parseMessage) {
							throw parseMessage;
						} finally {
							complete(status.code, status.message, responses, allResponseHeaders);
						}
					};
					xdr.onerror = function(){
						complete(500, 'error', {
							text: xdr.responseText
						});
					};
					xdr.open(options.type, options.url);
					//xdr.send(userOptions.data);
					xdr.send();
				},
				abort: function(){
					if (xdr) {
						xdr.abort();
					}
				}
			};
		}
	});
}
/*
     FILE ARCHIVED ON 05:11:32 Apr 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:02:47 Nov 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.284
  esindex: 0.024
  PetaboxLoader3.resolve: 339.672 (4)
  PetaboxLoader3.datanode: 46.092 (5)
  captures_list: 188.238
  RedisCDXSource: 2.766
  LoadShardBlock: 164.979 (3)
  CDXLines.iter: 14.09 (3)
  load_resource: 226.229
  exclusion.robots.policy: 0.264
*/