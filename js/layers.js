var layers = {};

layers.container = new L.LayerGroup();  //main layer
layers.container_ = new L.LayerGroup(); //overlay

layers.search = new L.LayerGroup();
layers.attrib = ' &copy; autorzy <a href="http://openstreetmap.org/">OpenStreetMap</a>';


layers.osmapa = new L.tileLayer(
    'http://{s}.tile.openstreetmap.pl/osmapa.pl/{z}/{x}/{y}.png', //http://{s}.osm.trail.pl/osmapa.pl/{z}/{x}/{y}.png
    { attribution: layers.attrib, maxZoom: 20 }
); 
layers.foursq = new L.tileLayer(
    'http://a.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 17 }
);
layers.osm = new L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 19 }
); 
layers.hikebike = new L.tileLayer(
    'http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 18 }
); 
layers.mapsurfer = new L.tileLayer(
    'http://129.206.74.245:8001/tms_r.ashx?x={x}&y={y}&z={z}',
    { attribution: layers.attrib, maxZoom: 18 }
);  
layers.mapsurferbw = new L.tileLayer(
    'http://129.206.74.245:8008/tms_rg.ashx?x={x}&y={y}&z={z}',
    { attribution: layers.attrib, maxZoom: 18 }
);   
layers.mapquest = new L.tileLayer(
    'http://otile2.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 18 }
);
layers.skobbler = new L.tileLayer(
        'http://tiles2.skobbler.net/osm_tiles2/{z}/{x}/{y}.png',
        { attribution: layers.attrib, maxZoom: 18 }
);
layers.bing = new L.BingLayer("Aof80DCiA7y03b6b3qi28v438KSMhXU5fmUL6K9op7N4U2wmW82qbRDHWUxyfpD8",
    { maxZoom: 18, opacity:1 });

layers.shadow = new L.tileLayer(
    'http://tiles2.openpistemap.org/landshaded/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 18, opacity:0.7, zIndex: 2 }
); 
layers.names = new L.tileLayer(
    'http://129.206.74.245:8003/tms_h.ashx?x={x}&y={y}&z={z}',
    { attribution: layers.attrib, maxZoom: 18, opacity:1, zIndex: 3 }
); 
layers.transport = new L.tileLayer(
    'http://pt.openmap.lt/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 18, opacity:0.8, zIndex: 2 }
);
layers.paths = new L.tileLayer(
    'http://osm.trail.pl/szlaki/{z}/{x}/{y}.png',
    { attribution: layers.attrib, maxZoom: 18, opacity:0.8, zIndex: 2 }
);
layers.impa = new L.tileLayer.wms('http://{s}.epodgik.pl/cgi-bin/KrajowaIntegracjaPunktowAdresowych', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'impa-adresy,impa-ulice',
	subdomains: ['wms01','wms02'],
	attribution: 'Geo-System <a href="http://punktyadresowe.pl/">punktyadresowe.pl</a>',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:1, zIndex: 2
});
layers.kieg = new L.tileLayer.wms('http://{s}.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'geoportal,dzialki,numery_dzialek,budynki',
	subdomains: ['integracja01','integracja02'],
	attribution: 'GUGiK <a href="http://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow">Krajowa Integracja Ewidencji Gruntów i Budynków</a>',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:1, zIndex: 2
});
layers.kiut = new L.tileLayer.wms('http://{s}.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'przewod_inny,przewod_specjalny,przewod_cieplowniczy,przewod_gazowy,przewod_kanalizacyjny,przewod_wodociagowy,przewod_elektroenergetyczny,przewod_telekomunikacyjny',
	subdomains: ['integracja'],
	attribution: 'GUGiK <a href="http://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu">Krajowa Integracja Uzbrojenia Terenu</a>',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:1, zIndex: 2
});
layers.mpzp = new L.tileLayer.wms('http://{s}.epodgik.pl/cgi-bin/KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'raster-ras,raster-gra,wektor-pkt,wektor-lin,wektor-pow,wektor-lzb,wektor-str,wektor-gra',
	subdomains: ['wms01','wms02'],
	attribution: 'Geo-System <a href="http://wms.epodgik.pl/cgi-bin/KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego">Krajowa Integracja MPZP</a>',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:0.7, zIndex: 2
});
layers.impa2 = new L.tileLayer.wms('http://{s}.epodgik.pl/cgi-bin/KrajowaIntegracjaPunktowAdresowych', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'impa-adresy,impa-ulice,emuia-adresy,emuia-ulice',
	subdomains: ['wms01','wms02'],
	attribution: 'Geo-System <a href="http://polska.e-mapa.net/">http://polska.e-mapa.net</a>',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:1, zIndex: 2
});
layers.sekcje_92_10000 = new L.tileLayer.wms('http://integracja.gugik.gov.pl/cgi-bin/puwg1992', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'sekcje10000',
	attribution: 'GUGiK',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:1, zIndex: 2
});
layers.sekcje_92_5000 = new L.tileLayer.wms('http://integracja.gugik.gov.pl/cgi-bin/puwg1992', {
    format: 'image/png',
	tileSize: 512,
    transparent: true,
    layers: 'sekcje5000',
	attribution: 'GUGiK',
	crs: L.CRS.EPSG3857,
	maxZoom: 20, opacity:1, zIndex: 2
});
layers.siatka = new L.grids.dms(
{
        coordinateGridSpacing: [
            90, // 0
            90, // 1
            45, // 2
            25, // 3
            10, // 4
            5, // 5
            2, // 6
            1, // 7
            0.5, // 8
            0.25, // 9
            (1.0 / 6.0), // 10
            (1.0 / 12.0), // 11
            (1.0 / 24.0), // 12
            (1.0 / 48.0), // 13
            (1.0 / 60.0), // 14
            (1.0 / 120.0), // 15
            (1.0 / 240.0), // 16
            (1.0 / 360.0), // 17
            (1.0 / 900.0), // 18
			(1.0 / 1800.0), // 19
			(1.0 / 3600.0), // 20
        ],
    }
);
/*
     FILE ARCHIVED ON 05:11:32 Apr 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:02:50 Nov 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 156.047 (3)
  RedisCDXSource: 1.981
  exclusion.robots.policy: 0.14
  load_resource: 59.945
  CDXLines.iter: 12.662 (3)
  PetaboxLoader3.resolve: 50.317
  PetaboxLoader3.datanode: 163.879 (4)
  esindex: 0.016
  captures_list: 174.112
  exclusion.robots: 0.159
*/
