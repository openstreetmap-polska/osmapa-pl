var map = {};
var pemZoom = {7: 1, 8: 2, 9: 3, 10: 4, 11: 5, 12: 6, 13: 7, 14: 8, 15: 9, 16: 10, 17: 11, 18: 12, 19: 13, 20: 14, 21: 15};

var epsg2180_pos = [0,0];

$(document).ready(function() {

	proj4.defs('EPSG:2180', '+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +units=m +no_defs');
 
    var startPosition = {};
    if(localStorage.getItem("lat") !== null) {
        startPosition.lat = localStorage.getItem("lat");
        startPosition.lon = localStorage.getItem("lon");
        startPosition.zoom = localStorage.getItem("zoom");
    } else {
        startPosition.lat = 52.2484;
        startPosition.lon = 20.9928;
        startPosition.zoom = 13;
    }
 
    map = L.map('map', {
        center: new L.LatLng(startPosition.lat, startPosition.lon),
        zoom: startPosition.zoom,
        layers: [layers.container_, layers.container, layers.search],
        minZoom: 3
    });
    L.control.scale().addTo(map);
    //L.control.geoloc().addTo(map);
    //L.control.fullscreen().addTo(map);
    map.attributionControl.setPrefix('');
    
    // layers
    map.layer = undefined;
    if(localStorage.getItem("map") !== null) $("button#layer-"+localStorage.getItem("map")).click();
    else $("#box-layers button[name=osmapa]").click();
    map.hash = new L.Hash(map);
    
    //save position
    map.on('moveend',function() {
        localStorage.setItem("lat", map.getCenter().lat);
        localStorage.setItem("lon", map.getCenter().lng);
		
		var bounds = map.getBounds();
		var ne = proj4('EPSG:4326', 'EPSG:2180', [bounds._northEast.lng,bounds._northEast.lat]);
		var sw = proj4('EPSG:4326', 'EPSG:2180', [bounds._southWest.lng,bounds._southWest.lat]);

		$("#showIn_polska_e_mapa_net").attr('href','http://polska.e-mapa.net/?zoom='+(pemZoom[map.getZoom()] != undefined ? pemZoom[map.getZoom()] : 7)+'&b='+map.getCenter().lat+"&l="+map.getCenter().lng);
		$("#showIn_geoportal_gov_pl").attr('href','http://mapy.geoportal.gov.pl/imap/?gpmap=gp0&bbox='+sw[0]+','+sw[1]+','+ne[0]+','+ne[1]);
    });
    map.on('zoomend',function() {
        localStorage.setItem("zoom", map.getZoom());
		
		var bounds = map.getBounds();
		var ne = proj4('EPSG:4326', 'EPSG:2180', [bounds._northEast.lng,bounds._northEast.lat]);
		var sw = proj4('EPSG:4326', 'EPSG:2180', [bounds._southWest.lng,bounds._southWest.lat]);

		$("#showIn_polska_e_mapa_net").attr('href','http://polska.e-mapa.net/?zoom='+(pemZoom[map.getZoom()] != undefined ? pemZoom[map.getZoom()] : 7)+'&b='+map.getCenter().lat+"&l="+map.getCenter().lng);
		$("#showIn_geoportal_gov_pl").attr('href','http://mapy.geoportal.gov.pl/imap/?gpmap=gp0&bbox='+sw[0]+','+sw[1]+','+ne[0]+','+ne[1]);
    });

    map._lastClick = new L.LatLng(0,0);
    map.on('contextmenu', function(e) {
        map._lastClick = e.latlng;
    });
    
    //jQuery.support.cors = true;
    map.move = function() {
        map.panTo(map._lastClick);
    };
    
    map.fitZoom = function(array) {
        var minLat;
        var maxLat;
        var minLon;
        var maxLon;
        
        for(var i in array) {
            if(minLat === undefined) {
                minLat = array[i].coord.lat;
                maxLat = array[i].coord.lat;
                minLon = array[i].coord.lng;
                maxLon = array[i].coord.lng;
            }
                if(array[i].coord.lat>maxLat) maxLat = array[i].coord.lat;
                if(array[i].coord.lat<minLat) minLat = array[i].coord.lat;
                if(array[i].coord.lng>maxLon) maxLon = array[i].coord.lng;
                if(array[i].coord.lng<minLon) minLon = array[i].coord.lng;
        }
        map.fitBounds([[minLat, minLon], [maxLat, maxLon]]);
    };
	
	$("#showIn_polska_e_mapa_net").attr('href',"http://polska.e-mapa.net/?zoom=7&b="+map.getCenter().lat+"&l="+map.getCenter().lng);
});
   
/*
* Layers
* *****************************************************************************
*/
var blayers = false;
var showin = false;
$("#box-layers h3").click(function () {
	if(showin) {
        $("#box-showIn > div").slideToggle(150);
        $("#box-showIn").delay(180).animate({width: "35px"}, 200);
        $("#box-showIn h3").css("border-radius","0 4px 4px 0");
    }
    showin = false;

    if(!blayers) {
        $("#box-layers").animate({width: "315px"}, 200);
        $("#box-layers > div").delay(180).slideToggle(150);
        $("#box-layers h3").css("border-radius","0 4px 0 0");
    } else {
        $("#box-layers > div").slideToggle(150);
        $("#box-layers").delay(180).animate({width: "35px"}, 200); 
        $("#box-layers h3").css("border-radius","0 4px 4px 0");
    }
    blayers = !blayers;
});

$("#box-showIn h3").click(function () {
    if(blayers) {
        $("#box-layers > div").slideToggle(150);
        $("#box-layers").delay(180).animate({width: "35px"}, 200);
        $("#box-layers h3").css("border-radius","0 4px 4px 0");
    }
    blayers = false;
	
	if(!showin) {
        $("#box-showIn").animate({width: "315px"}, 200);
        $("#box-showIn > div").delay(180).slideToggle(150);
        $("#box-showIn h3").css("border-radius","0 4px 0 0");
    } else {
        $("#box-showIn > div").slideToggle(150);
        $("#box-showIn").delay(180).animate({width: "35px"}, 200);
        $("#box-showIn h3").css("border-radius","0 4px 4px 0");
		//localStorage.setItem("lat", map.getCenter().lat);
        //localStorage.setItem("lon", map.getCenter().lng);
		//showIn - links
		
    }
    showin = !showin;
});

// Change layer
$("#box-layers button").click(function () {
    layers.change($(this).attr('id'));
});

layers.change = function(id) {
    var name = $("#box-layers button[id="+id+"]").attr('name');

    //layer
    if(id.indexOf("layer") !== -1) {
        map.layer = id.substring(6, 8);
        localStorage.setItem("map", map.layer);
        layers.container.clearLayers();
        layers.container.addLayer(eval("layers."+name));
        if(name === "bing")
            layers.container.addLayer(layers.names);

    //overlay
    } else {
        var b = eval("map."+name);
        b ? layers.container_.removeLayer(eval("layers."+name)) : layers.container_.addLayer(eval("layers."+name));
        eval("map."+name+" = !b");
    }
};

/*
* Edit
* ******************************************************************************
*/
var bedit = false;
$("#box-edit h3").click(function () {
    if(!bedit) {
        $("#box-edit div").show().animate({width: "150px"}, 200);
        $("#box-edit h3").css("border-radius","0");
    } else {
        $("#box-edit div").animate({width: "0px"}, 200).hide(1);
        $("#box-edit h3").css("border-radius","0 4px 4px 0");
    }
    bedit = !bedit;
});

$('#ideditor').click(function() {
  window.location.href = 'http://www.openstreetmap.org/edit?editor=id#map='+map.getZoom()+'/'+map.getCenter().lat+'/'+map.getCenter().lng;
});

$('#potlatch').click(function() {
  window.location.href = 'http://www.openstreetmap.org/edit?editor=potlatch2#map='+map.getZoom()+'/'+map.getCenter().lat+'/'+map.getCenter().lng;
});

$('#josm').click(function() {
  var href = "http://localhost:8111/load_and_zoom" +
      "?left=" + map.getBounds().getSouthWest().lng +
      "&right=" + map.getBounds().getNorthEast().lng +
      "&top=" + map.getBounds().getNorthEast().lat +
      "&bottom=" + map.getBounds().getSouthWest().lat;
  $('#josm-iframe').attr("src", href);
  $('#josm-iframe').attr("src", '#');
});

/*
* Bugs
* ******************************************************************************
*/
/*
var bbugs = false;  
layers.osb = new L.OpenStreetBugs({
    dblClick: false, 
    iconOpen:"http://osmapa.pl/bugs/img/open_bug_marker.png", 
    iconClosed:"http://osmapa.pl/bugs/img/closed_bug_marker.png", 
    iconActive:"http://osmapa.pl/bugs/img/active_bug_marker.png", 
    editArea:0.001
});


$("#box-bugs h3").click(function () {
    if(!bbugs) {
        $("#box-bugs div").show().animate({width: "150px"}, 200);
        $("#box-bugs h3").css("border-radius","0");
        map.hash.changeHash("b","t");
        map.addLayer(layers.osb);
    } else {
        $("#box-bugs div").animate({width: "0px"}, 200).hide(1);
        $("#box-bugs h3").css("border-radius","0 0 4px 0");
        map.hash.changeHash("b",null);
        map.removeLayer(layers.osb);
    }
    bbugs = !bbugs;
});
*/
/*
     FILE ARCHIVED ON 05:11:41 Apr 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:02:51 Nov 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 15.74 (3)
  exclusion.robots: 0.201
  PetaboxLoader3.datanode: 410.062 (5)
  exclusion.robots.policy: 0.179
  load_resource: 589.825
  RedisCDXSource: 1.447
  captures_list: 289.912
  LoadShardBlock: 267.867 (3)
  PetaboxLoader3.resolve: 411.109 (5)
  esindex: 0.014
*/
