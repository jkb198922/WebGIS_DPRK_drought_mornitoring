var map, view;
view = new ol.View({
    projection: 'EPSG:4326',
    center: [126.00, 40.00],
    zoom: 7
}); 



map = new ol.Map({
    target: 'map',
    controls: [],
    view: view,
    
    
});



var satelite = new ol.layer.Tile({
    title: '위성지도',
            type: 'base',
            visible: false,
            source: new ol.source.XYZ({
                attributions: ['Powered by Esri',
                  'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
            ],
            attributionsCollapsible: false,
            url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            maxZoom: 23
            })
});

var OSM = new ol.layer.Tile({
    title: '일반지도',
            type: 'base',
            visible: true,
            source: new ol.source.OSM() 
});

var base_maps = new ol.layer.Group({
    'title': '기준지도',
    layers: [satelite, OSM]
});
map.addLayer(base_maps);

var overlays = new ol.layer.Group({
    title: '시계렬자료',
    
    layers: []
});
map.addLayer(overlays);

var areatile = new ol.layer.Image({
    title: '조선행정구역-도별지도',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/dprkareas/wms',
        params: {'LAYERS':'	dprkareas:area'},
        ratio: 1,
        serverType: 'geoserver'
    })
});       

var countytile = new ol.layer.Image({
    title: "조선행정구역-시군별지도",
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/dprkareas/wms',
        params: {'LAYERS':'	dprkareas:county'},
        ratio: 1,
        serverType: 'geoserver'
    })
});

var citytile = new ol.layer.Image({
    title: "주요도시",
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/dprkareas/wms',
        params: {'LAYERS':'	dprkareas:city'},
        ratio: 1,
        serverType: 'geoserver'
    })
});

var mainmap = new ol.layer.Group({
    title: '기본지도',
    fold: true,
    layers: [citytile, countytile, areatile]
});
map.addLayer(mainmap);

var mousePosition = new ol.control.MousePosition({
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate){return ol.coordinate.format(coordinate, '{y}, {x}', 6);}
});
map.addControl(mousePosition);

var scaleControl = new ol.control.ScaleLine({
    className: 'scaleControl',
    bar: true,
    text: true
});
map.addControl(scaleControl);

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    tipLabel: 'Layers', //Optional label for button
    groupSelectStyle: 'children', // Can be 'children' [default], 'group' or 'none'
    collapseTipLabel: 'Collapse layers',
    
});


map.addControl(layerSwitcher);



var cdi = new ol.layer.Image({
    title: 'CDI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:CDI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(cdi);
layerSwitcher.renderPanel();


var mci = new ol.layer.Image({
    title: 'MCI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:MCI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(mci);
layerSwitcher.renderPanel();

var nvswi = new ol.layer.Image({
    title: 'NVSWI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:NVSWI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(nvswi);
layerSwitcher.renderPanel();

var vhi = new ol.layer.Image({
    title: 'VHI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:VHI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(vhi);
layerSwitcher.renderPanel();

var tci = new ol.layer.Image({
    title: 'TCI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:TCI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(tci);
layerSwitcher.renderPanel();

var vci = new ol.layer.Image({
    title: 'VCI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:VCI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(vci);
layerSwitcher.renderPanel();



var ndvi = new ol.layer.Image({
    title: 'NDVI',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:NDVI',
            'time':'2012-04-22'
        },
        
        ratio: 1,
        serverType:'geoserver'
    })
    
});
overlays.getLayers().push(ndvi);
layerSwitcher.renderPanel();

var lst = new ol.layer.Image({
    title: 'LST',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8084/geoserver/wms',
        params: {
            'LAYERS':'Timeseries:LST',
            'time':'2012-04-22'
        },
        ratio: 1,
        serverType:'geoserver'
    })
});
overlays.getLayers().push(lst);
layerSwitcher.renderPanel();






var dates = ['2012-04-22','2012-05-24','2012-06-25','2012-07-27','2012-08-28','2012-09-29',
             '2013-04-23','2013-05-25','2013-06-26','2013-07-28','2013-08-29','2013-09-30',
             '2014-04-23','2014-05-25','2014-06-26','2014-07-28','2014-08-29','2014-09-30',
             '2015-04-23','2015-05-25','2015-06-26','2015-07-28','2015-08-29','2015-09-30',
             '2016-04-22','2016-05-24','2016-06-25','2016-07-27','2016-08-28','2016-09-29',
             '2017-04-23','2017-05-25','2017-06-26','2017-07-28','2017-08-29','2017-09-30',
             '2018-04-23','2018-05-25','2018-06-26','2018-07-28','2018-08-29','2018-09-30',
             '2019-04-23','2019-05-25','2019-06-26','2019-07-28','2019-08-29','2019-09-30',
             '2020-04-23','2020-05-24','2020-06-25','2020-07-27','2020-08-28','2020-09-29',
             '2021-04-23','2021-05-25','2021-06-26','2021-07-28','2021-08-29','2021-09-30'
            ];

            
var dateValue = document.getElementById("date_value");
dateValue.innerHTML = dates[0];
var sliderRange = document.getElementById("myRange");
sliderRange.max = dates.length - 1;
// 마우스끌기할 때마다 글자 및 화상갱신
sliderRange.oninput = function() {
    dateValue.innerHTML = dates[this.value].slice(0,10);
    for(k = 0;k < 8;k++){
        overlays.getLayers().item(k).getSource().updateParams({'TIME':dates[this.value]});
    }

}

var i = 0;  // set your counter to 0
var timer;
function play() {
    timer = setTimeout(run, 1000);
    function run() {
        for(k = 0;k < 8;k++){
            overlays.getLayers().item(k).getSource().updateParams({'TIME':dates[i]});
        }
        dateValue.innerHTML = dates[i];
        sliderRange.value = i;
        i++;
        if (i < 60) {
          play();
        }
    }
}

var start = document.getElementById("play");
start.addEventListener("click", play);
var stop = document.getElementById("pause");
stop.addEventListener("click", pause);
var reset1 = document.getElementById("reset");
reset1.addEventListener("click", reset);

function pause() {
    clearTimeout(timer);
    for(k = 0;k < 8;k++){
        overlays.getLayers().item(k).getSource().updateParams({'TIME':dates[i]});
    }
    dateValue.innerHTML = dates[i].slice(0,10);
    sliderRange.value = i;
    
}

function reset() {
    clearTimeout(timer);
    i = 0;
    for(k = 0;k < 8;k++){
        overlays.getLayers().item(k).getSource().updateParams({'TIME':dates[i]});
    }
    dateValue.innerHTML = dates[i].slice(0,10);
    sliderRange.value = i;
}

document.getElementById("ndvilegend").style.display = "none";
document.getElementById("lstlegend").style.display = "none";
document.getElementById("vcilegend").style.display = "none";
document.getElementById("tcilegend").style.display = "none";
document.getElementById("vhilegend").style.display = "none";
document.getElementById("mcilegend").style.display = "none";
document.getElementById("nvswilegend").style.display = "none";
document.getElementById("cdilegend").style.display = "none";

map.on('click', function(evt){
    click_info(evt);
   
});

function click_info(evt){

    //cdi
    if (overlays.getLayers().item(0).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "none";
        document.getElementById("vcilegend").style.display = "none";
        document.getElementById("tcilegend").style.display = "none";
        document.getElementById("vhilegend").style.display = "none";
        document.getElementById("nvswilegend").style.display = "none";
        document.getElementById("mcilegend").style.display = "none";
        document.getElementById("cdilegend").style.display = "block";
    }
        else {
            document.getElementById("cdilegend").style.display = "none";
    }
    
    //mci
    if (overlays.getLayers().item(1).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "none";
        document.getElementById("vcilegend").style.display = "none";
        document.getElementById("tcilegend").style.display = "none";
        document.getElementById("vhilegend").style.display = "none";
        document.getElementById("nvswilegend").style.display = "none";
        document.getElementById("mcilegend").style.display = "block";
        document.getElementById("cdilegend").style.display = "none";
    }
        else {
            document.getElementById("mcilegend").style.display = "none";
    }
    
    //nvswi
    if (overlays.getLayers().item(2).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "none";
        document.getElementById("vcilegend").style.display = "none";
        document.getElementById("tcilegend").style.display = "none";
        document.getElementById("vhilegend").style.display = "none";
        document.getElementById("nvswilegend").style.display = "block";
        document.getElementById("mcilegend").style.display = "none";
        document.getElementById("cdilegend").style.display = "none";
    }
        else {
            document.getElementById("nvswilegend").style.display = "none";
    }
    
    //vhi
    if (overlays.getLayers().item(3).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "none";
        document.getElementById("vcilegend").style.display = "none";
        document.getElementById("tcilegend").style.display = "none";
        document.getElementById("vhilegend").style.display = "block";
        document.getElementById("nvswilegend").style.display = "none";
        document.getElementById("mcilegend").style.display = "none";
        document.getElementById("cdilegend").style.display = "none";
    }
        else {
            document.getElementById("vcilegend").style.display = "none";
    }

    //tci
    if (overlays.getLayers().item(4).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "none";
        document.getElementById("vcilegend").style.display = "none";
        document.getElementById("tcilegend").style.display = "block";
        document.getElementById("vhilegend").style.display = "none";
        document.getElementById("nvswilegend").style.display = "none";
        document.getElementById("mcilegend").style.display = "none";
        document.getElementById("cdilegend").style.display = "none";
    }
        else {
            document.getElementById("tcilegend").style.display = "none";
    }
    
    //vci
    if (overlays.getLayers().item(5).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "none";
        document.getElementById("vcilegend").style.display = "block";
        document.getElementById("tcilegend").style.display = "none";
        document.getElementById("vhilegend").style.display = "none";
        document.getElementById("nvswilegend").style.display = "none";
        document.getElementById("mcilegend").style.display = "none";
        document.getElementById("cdilegend").style.display = "none";
        }
        else {
            document.getElementById("vcilegend").style.display = "none";
        }
    
    //ndvi
    if (overlays.getLayers().item(6).get('visible') == true) {
        document.getElementById("lstlegend").style.display = "none";
        document.getElementById("ndvilegend").style.display = "block";
        document.getElementById("vcilegend").style.display = "none";
        document.getElementById("tcilegend").style.display = "none";
        document.getElementById("vhilegend").style.display = "none";
        document.getElementById("nvswilegend").style.display = "none";
        document.getElementById("mcilegend").style.display = "none";
        document.getElementById("cdilegend").style.display = "none";
        }
        else {
            document.getElementById("ndvilegend").style.display = "none";
        }

   //lst
   if (overlays.getLayers().item(7).get('visible') == true) {
    document.getElementById("lstlegend").style.display = "block";
    document.getElementById("ndvilegend").style.display = "none";
    document.getElementById("vcilegend").style.display = "none";
    document.getElementById("tcilegend").style.display = "none";
    document.getElementById("vhilegend").style.display = "none";
    document.getElementById("nvswilegend").style.display = "none";
    document.getElementById("mcilegend").style.display = "none";
    document.getElementById("cdilegend").style.display = "none";
   }
else {
    document.getElementById("lstlegend").style.display = "none";
}

              
}

var homeButton = document.createElement('button');
homeButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/home.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
homeButton.className = 'myButton';

var homeElement = document.createElement('div');
homeElement.className = 'homeButtonDiv';
homeElement.appendChild(homeButton);

var homeControl = new ol.control.Control({
    element: homeElement
})

homeButton.addEventListener("click", () => {
    location.href = "index.html";
})
map.addControl(homeControl);

var fsButton = document.createElement('button');
fsButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/fullscreen.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
fsButton.className = 'myButton';

var fsElement = document.createElement('div');
fsElement.className = 'fsButtonDiv';
fsElement.appendChild(fsButton);

var fsControl = new ol.control.Control({
    element: fsElement
})

fsButton.addEventListener("click", () => {
    var mapEle = document.getElementById("map");
    if (mapEle.requestFullscreen) {
        mapEle.requestFullscreen();
    } else if (mapEle.msRequestFullscreen) {
        mapEle.msRequestFullscreen();
    } else if (mapEle.mozRequestFullscreen) {
        mapEle.mozRequestFullscreen();
    } else if (mapEle.webkitRequestFullscreen) {
        mapEle.webkitRequestFullscreen();
    }
})
map.addControl(fsControl);

//start: zoonIn ontrol

var zoomInInteraction = new ol.interaction.DragBox();

zoomInInteraction.on('boxend', function() {
    var zoomInExtent = zoomInInteraction.getGeometry().getExtent();
    map.getView().fit(zoomInExtent);
});

var ziButton = document.createElement('button');
ziButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/zoom_in.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
ziButton.className = 'myButton';
ziButton.id = 'ziButton';

var ziElement = document.createElement('div');
ziElement.className = 'ziButtonDiv';
ziElement.appendChild(ziButton);

var ziControl = new ol.control.Control({
    element: ziElement
})

var zoomInFlag = false;
ziButton.addEventListener("click", () => {
    ziButton.classList.toggle('clicked');
    zoomInFlag = !zoomInFlag;
    if (zoomInFlag) {
        document.getElementById("map").style.cursor = "zoom-in";
        map.addInteraction(zoomInInteraction);
    } else {
        map.removeInteraction(zoomInInteraction);
        document.getElementById("map").style.cursor = "default";
    }
})
map.addControl(ziControl);

//end: zoomIn Control

//start: zoomOut Control

var zoomOutInteraction = new ol.interaction.DragBox();

zoomOutInteraction.on('boxend', function() {
    var zoomOutExtent = zoomOutInteraction.getGeometry().getExtent();
    map.getView().setCenter(ol.extent.getCenter(zoomOutExtent));

    mapView.setZoom(mapView.getZoom() - 1);
});

var zoButton = document.createElement('button');
zoButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/zoom_out.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
zoButton.className = 'myButton';
zoButton.id = 'zoButton';

var zoElement = document.createElement('div');
zoElement.className = 'zoButtonDiv';
zoElement.appendChild(zoButton);

var zoControl = new ol.control.Control({
    element: zoElement
})

var zoomOutFlag = false;
zoButton.addEventListener("click", () => {
    zoButton.classList.toggle('clicked');
    zoomOutFlag = !zoomOutFlag;
    if (zoomOutFlag) {
        document.getElementById("map").style.cursor = "zoom-out";
        map.addInteraction(zoomOutInteraction);
    } else {
        map.removeInteraction(zoomOutInteraction);
        document.getElementById("map").style.cursor = "default";
    }
})
map.addControl(zoControl);
//end: zoomOut Control

// start : pan Control
var panButton = document.createElement('button');
panButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/pan.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
panButton.className = 'myButton';
panButton.id = 'panButton';


var panElement = document.createElement('div');
panElement.className = 'panButtonDiv';
panElement.appendChild(panButton);
var panControl = new ol.control.Control({
    element: panElement
})

var panFlag = false;
var drgPanInteraction = new ol.interaction.DragPan();
panButton.addEventListener("click", () => {
    panButton.classList.toggle('clicked');
    panFlag = !panFlag;
    if (panFlag) {
        document.getElementById("map").style.cursor = "grab";
        map.addInteraction(drgPanInteraction);
    } else {
        document.getElementById("map").style.cursor = "default";
        map.removeInteraction(drgPanInteraction);
    }
})
map.addControl(panControl);
        
//길이 및 면적출력부분 

var lengthButton = document.createElement('button');
lengthButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/length.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
lengthButton.className = 'myButton';
lengthButton.id = 'lengthButton';

var lengthElement = document.createElement('div');
lengthElement.className = 'lengthButtonDiv';
lengthElement.appendChild(lengthButton);

var lengthControl = new ol.control.Control({
    element: lengthElement
})

var lengthFlag = false;
lengthButton.addEventListener("click", () => {
    lengthButton.classList.toggle('clicked');
    lengthFlag = !lengthFlag;
    document.getElementById("map").style.cursor = "default";
    if(lengthFlag){
        
        map.removeInteraction(draw);
        addInteraction('LineString');
    } else {
        map.removeInteraction(draw);
        map.removeOverlay(helpTooltip);
        source.clear();
        const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
        while (elements.length > 0) elements[0].remove();
    }
})
map.addControl(lengthControl);


var areaButton = document.createElement('button');
areaButton.innerHTML = '<img src="http://localhost:8084/Timeseries/resources/images/area.svg" alt="" style="width:20px;height:20px;filter:brightness(0) invert(1);vertical-align:middle"></img>';
areaButton.className = 'myButton';
areaButton.id = 'areaButton';

var areaElement = document.createElement('div');
areaElement.className = 'areaButtonDiv';
areaElement.appendChild(areaButton);

var areaControl = new ol.control.Control({
    element: areaElement
})

var areaFlag = false;
areaButton.addEventListener("click", () => {
    areaButton.classList.toggle('clicked');
    areaFlag = !areaFlag;
    document.getElementById("map").style.cursor = "default";
    if(areaFlag){
       
        map.removeInteraction(draw);
        addInteraction('Polygon');
        
    } else {
        map.removeInteraction(draw);
        map.removeOverlay(helpTooltip);
        source.clear();
        const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
        while (elements.length > 0) elements[0].remove();
    }
})
map.addControl(areaControl);





/**
 * @type {string}
 */
var continuePolygonMsg = '마우스를 두번눌러 면적측정을 완성하십시오.';
/**
 * @type {string}
 */
var continueLineMsg = '마우스를 두번눌러 거리측정을 완성하십시오.';



var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
    
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            }),
        }),
    }),
})
map.addLayer(vector);

/**
     * @type {module:ol/Feature~Feature}
     */

 var sketch;
 
 /**
 * @type {Element}
 */
var helpTooltipElement;

/**
 * @type {module:ol/Overlay}
 */
var helpTooltip;

/**
 * @type {Element}
 */
 var measureTooltipElement;

 /**
  * @type {module:ol/Overlay}
  */
 var measureTooltip;

 /**
  * 
  * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt The event.
  *
  */

 
 var pointerMoveHandler = function (evt) {
     if (evt.dragging) {
         return;
     }
     /**
      * @type {string}
      */
     var helpMsg = '마우스를 한번 눌러 측정을 시작하십시오.';
     

     if (sketch) {
        var geom = sketch.getGeometry();
       
      }
      
 };
 map.on('pointermove', pointerMoveHandler);

  
 /**
* 
* @param {module:ol/geom/LineString~LineString} line The line.
* @returns {string} The formatted length.
*/


var formatLength = function (line) {
 var length = ol.sphere.getLength(line, { projection: 'EPSG:4326' });
 var output;
 if (length > 100) {
     output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';        
 } else {
     output = (Math.round(length * 100) / 100) + ' ' + 'm';
 }
 return output;
};
/**
* 
* @param {module:ol/geom/Polygon~Polygon} polygon The polygon.
* @returns {string} Formatted area.
*/
var draw;

var formatArea = function (polygon) {
 var area = ol.sphere.getArea(polygon, { projection: 'EPSG:4326' });
 var output;
 if (area > 10000) {
     output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>';        
 } else {
     output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>';
 }
 return output;
};

function addInteraction(intType) {
    draw = new ol.interaction.Draw({
        source: source,
        type: intType,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 200, 200, 0.6)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
        
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)',
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)', 
                }),
            }),
        }),
    });
    map.addInteraction(draw);
    createMeasureTooltip();
    createHelpTooltip();
    var listener;

    draw.on('drawstart', function(evt){
        sketch = evt.feature;
        /** @type {module:ol/coordinate~Coordinate|undefined} */

        
        var tootipCoord = evt.coordinate;
        listener = sketch.getGeometry().on('change', function (evt) {
            var geom = evt.target;
            var output;
            if (geom instanceof ol.geom.Polygon) {
                output = formatArea(geom);
                tootipCoord = geom.getInteriorPoint().getCoordinates();                
            } else if (geom instanceof ol.geom.LineString) {
                output = formatLength(geom);
                tootipCoord = geom.getLastCoordinate();
            }
            measureTooltipElement.innerHTML = output;
            measureTooltip.setPosition(tootipCoord);
        });
    }, this);

    draw.on('drawend', function (){
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);
        sketch = null;
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
    }, this);
}



function createHelpTooltip() {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);        
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'ol-tooltip hidden';
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
    });
    map.addOverlay(helpTooltip);
}

function createMeasureTooltip(){
    if (measureTooltipElement){
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);        
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
    });
    map.addOverlay(measureTooltip);
}



    
    
   