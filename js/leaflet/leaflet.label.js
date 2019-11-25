/*
 Copyright (c) 2012, Smartrak, Jacob Toye
 Leaflet.label is an open-source JavaScript library for adding labels to markers and paths on leaflet powered maps.
 https://github.com/jacobtoye/Leaflet.label
*/
(function(e,t){L.Label=L.Popup.extend({options:{autoPan:!1,className:"",closePopupOnClick:!1,noHide:!1,offset:new L.Point(12,-15)},onAdd:function(e){this._map=e,this._container||this._initLayout(),this._updateContent();var t=e.options.fadeAnimation;t&&L.DomUtil.setOpacity(this._container,0),e._panes.popupPane.appendChild(this._container),e.on("viewreset",this._updatePosition,this),L.Browser.any3d&&e.on("zoomanim",this._zoomAnimation,this),this._update(),t&&L.DomUtil.setOpacity(this._container,1)},close:function(){var e=this._map;e&&(e._label=null,e.removeLayer(this))},_initLayout:function(){this._container=L.DomUtil.create("div","leaflet-label "+this.options.className+" leaflet-zoom-animated")},_updateContent:function(){if(!this._content)return;typeof this._content=="string"&&(this._container.innerHTML=this._content)},_updateLayout:function(){},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},_setPosition:function(e){e=e.add(this.options.offset),L.DomUtil.setPosition(this._container,e)},_zoomAnimation:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)}}),L.Icon.Default.mergeOptions({labelAnchor:new L.Point(9,-20)}),L.Marker.mergeOptions({icon:new L.Icon.Default}),L.Marker.include({showLabel:function(){return this._label&&this._map&&(this._label.setLatLng(this._latlng),this._map.showLabel(this._label)),this},hideLabel:function(){return this._label&&this._label.close(),this},bindLabel:function(e,t){var n=L.point(this.options.icon.options.labelAnchor)||new L.Point(0,0);return n=n.add(L.Label.prototype.options.offset),t&&t.offset&&(n=n.add(t.offset)),t=L.Util.extend({offset:n},t),this._label||(t.noHide||(this.on("mouseover",this.showLabel,this).on("mouseout",this.hideLabel,this),L.Browser.touch&&this.on("click",this.showLabel,this)),this.on("remove",this.hideLabel,this).on("move",this._moveLabel,this),this._haslabelHandlers=!0),this._label=(new L.Label(t,this)).setContent(e),this},unbindLabel:function(){return this._label&&(this.hideLabel(),this._label=null,this._haslabelHandlers&&(this.off("mouseover",this.showLabel).off("mouseout",this.hideLabel).off("remove",this.hideLabel).off("move",this._moveLabel),L.Browser.touch&&this.off("click",this.showLabel)),this._haslabelHandlers=!1),this},updateLabelContent:function(e){this._label&&this._label.setContent(e)},_moveLabel:function(e){this._label.setLatLng(e.latlng)}}),L.Path.include({bindLabel:function(e,t){if(!this._label||this._label.options!==t)this._label=new L.Label(t,this);return this._label.setContent(e),this._showLabelAdded||(this.on("mouseover",this._showLabel,this).on("mousemove",this._moveLabel,this).on("mouseout remove",this._hideLabel,this),L.Browser.touch&&this.on("click",this._showLabel,this),this._showLabelAdded=!0),this},unbindLabel:function(){return this._label&&(this._hideLabel(),this._label=null,this._showLabelAdded=!1,this.off("mouseover",this._showLabel).off("mousemove",this._moveLabel).off("mouseout remove",this._hideLabel)),this},updateLabelContent:function(e){this._label&&this._label.setContent(e)},_showLabel:function(e){this._label.setLatLng(e.latlng),this._map.showLabel(this._label)},_moveLabel:function(e){this._label.setLatLng(e.latlng)},_hideLabel:function(){this._label.close()}}),L.Map.include({showLabel:function(e){return this._label=e,this.addLayer(e)}}),L.FeatureGroup.include({clearLayers:function(){return this.unbindLabel(),this.eachLayer(this.removeLayer,this),this},bindLabel:function(e,t){return this.invoke("bindLabel",e,t)},unbindLabel:function(){return this.invoke("unbindLabel")},updateLabelContent:function(e){this.invoke("updateLabelContent",e)}})})(this);
/*
     FILE ARCHIVED ON 05:11:38 Apr 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:02:24 Nov 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 22.411 (3)
  PetaboxLoader3.resolve: 135.329 (2)
  captures_list: 37.344
  esindex: 0.016
  load_resource: 181.002
  exclusion.robots.policy: 0.126
  RedisCDXSource: 1.553
  CDXLines.iter: 10.187 (3)
  exclusion.robots: 0.135
  PetaboxLoader3.datanode: 64.967 (5)
*/