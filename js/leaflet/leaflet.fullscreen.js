L.Control.Fullscreen = L.Control.extend({
	options: {
		position: "topleft"
	},

	onAdd: function(map) {
		this._map = map;

		this._container = L.DomUtil.create('div', 'leaflet-control-zoom leaflet-control');
		
		var link = document.createElement('a');
		link.href = '#';
		link.className = 'leaflet-control-zoom-fullscreen';

		if (!L.Browser.touch)
			L.DomEvent.disableClickPropagation(link);
		L.DomEvent.addListener(link, 'click', L.DomEvent.preventDefault);
		L.DomEvent.addListener(link, 'click', function() {
                    var doc = document.getElementById("map-container");
                    //alert(doc.fullscreen.toString() + ' ' + doc.mozFullScreen.toString() + ' ' + doc.webkitIsFullScreen);
                    
//                    if(doc.fullscreen) {
//                       if (document.exitFullscreen) document.exitFullscreen();
//                       //if (doc.requestFullscreen) doc.requestFullscreen();
//                    } else if (doc.requestFullscreen) doc.requestFullscreen();
//                    console.log(document.mozFullScreen)
//                    if(document.mozFullScreen) {
//                       if (document.mozCancelFullScreen) document.mozCancelFullScreen();
//                       //if (doc.requestFullscreen) doc.requestFullscreen();
//                    } else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen();
//                    
//                    if(document.webkitIsFullScreen) {
//                       if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
//                       //if (doc.requestFullscreen) doc.requestFullscreen()
//                    } else if (doc.webkitRequestFullScreen) doc.webkitRequestFullScreen();
                    
                    if(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen) {
                        if (document.exitFullscreen) document.exitFullscreen();
                        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                    } else {
                        if (doc.requestFullscreen) doc.requestFullscreen();
                        else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen();
                        else if (doc.webkitRequestFullScreen) doc.webkitRequestFullScreen();
                    }
                    
                    
                    
		});
		
		this._container.appendChild(link);
		return this._container;
	},

	onRemove: function(map) {
		map._container.removeChild(this._label);
		map._container.removeChild(this._canvas);
		map.off('zoomend', this._reset);
	},

	getPosition: function() {
		return this.options.position;
	},

	getContainer: function() {
		return this._container;
	}
});

L.control.fullscreen = function (options) {
	return new L.Control.Fullscreen(options);
};
/*
     FILE ARCHIVED ON 05:11:35 Apr 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:02:29 Nov 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.271
  PetaboxLoader3.resolve: 172.7 (4)
  LoadShardBlock: 139.893 (3)
  CDXLines.iter: 10.732 (3)
  captures_list: 159.221
  esindex: 0.018
  PetaboxLoader3.datanode: 55.797 (5)
  RedisCDXSource: 4.099
  exclusion.robots: 0.287
  load_resource: 100.101
*/