L.Control.Geoloc = L.Control.extend({
	options: {
		position: "topleft"
	},

	onAdd: function(map) {
		this._map = map;

		this._container = L.DomUtil.create('div', 'leaflet-control-zoom leaflet-control');
		
		var link = document.createElement('a');
		link.href = '#';
		link.className = 'leaflet-control-zoom-geoloc';

		if (!L.Browser.touch)
			L.DomEvent.disableClickPropagation(link);
		L.DomEvent.addListener(link, 'click', L.DomEvent.preventDefault);
		L.DomEvent.addListener(link, 'click', function() {
			map.locate({setView: true, maxZoom: 16});
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

L.control.geoloc = function (options) {
	return new L.Control.Geoloc(options);
};
/*
     FILE ARCHIVED ON 05:11:30 Apr 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:02:27 Nov 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 10.239 (3)
  exclusion.robots: 0.152
  PetaboxLoader3.datanode: 114.175 (5)
  exclusion.robots.policy: 0.14
  load_resource: 217.937
  RedisCDXSource: 1.43
  captures_list: 74.135
  LoadShardBlock: 59.125 (3)
  PetaboxLoader3.resolve: 160.673 (2)
  esindex: 0.017
*/