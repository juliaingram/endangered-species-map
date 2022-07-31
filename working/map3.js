// Map

// mapbox info
// mapboxgl.accessToken = 'pk.eyJ1Ijoic21lcnJpYW0iLCJhIjoiY2w1d25ndHE2MGxjNDNlcGd4cTdyemI0NiJ9.5y-hv6UtsINsmAiGjNqp_A';
// const map3 = new mapboxgl.Map({
//     container3: 'map3',
//     style: 'mapbox://styles/smerriam/cl3vems65009m14rwfzkhn6dv',
    // zoom: 10,
    // center: [-74, 40.725], //longitude and latitude (y.x)
    // maxZoom: 15,
    // minZoom: 8,
    // maxBounds: [[-74.45, 40.45], [-73.55, 41]] 
// });

// const map1Container = document.getElementById("map_1");
// const map2Container = document.getElementById("map_2");
// const map3Container = document.getElementById("map_3");

/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments3 which could be applied to the vignettes */

var layerTypes3 = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    // 'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments3 = {
    left: "lefty3",
    center: "centered3",
    right: "righty3",
    full: "fully3",
  };

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config3.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType3(layer3) {
    var layerType3 = map3.getLayer(layer3).type;
    return layerTypes3[layerType3];
}
function setLayerOpacity3(layer3) {
    var paintProps3 = getLayerPaintType3(layer3.layer);
    paintProps3.forEach(function (prop) {
        map3.setPaintProperty(layer3.layer, prop, layer3.opacity);
    });
}

/* Next, these variables and functions create the story3 and vignette html
elements, and populate them with the content from the config3.js file.
They also assign a css class to certain elements, also based on the
config3.js file */

// Main 'story3' and 'features3' elements
var story3 = document.getElementById('story3');
var features3 = document.createElement('div');
features3.classList.add(alignments3[config3.alignment]);
features3.setAttribute('id', 'features3');

// Main 'header' element
var header3 = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config3.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config3.toptitle;
    header3.appendChild(toptitle);
}
if (config3.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config3.title;
    header3.appendChild(titleText);
}
if (config3.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config3.byline;
    header3.appendChild(bylineText);
}
if (config3.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config3.description;
    header3.appendChild(descriptionText);
}

// If the header3 has anything in it, it gets appended to the story3
if (header3.innerText.length > 0) {
    header3.classList.add(config3.theme);
    header3.setAttribute('id', 'header3');
    story3.appendChild(header3);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config3.js file,
create the vignette elements and assign them their respective content */

config3.chapters3.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container3 element */
    var container3 = document.createElement('div');
    var chapter3 = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter3.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter3.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter3.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story3 = document.createElement('p');
        story3.innerHTML = record.description;
        chapter3.appendChild(story3);
    }
    // Sets the id for the vignette and adds the step css attribute
    container3.setAttribute('id', record.id);
    container3.classList.add('step3');
    if (idx === 0) {
        container3.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter3.classList.add(config3.theme);
    /* Appends the chapter to the container3 element and the container3
    element to the features3 element */
    container3.appendChild(chapter3);
    features3.appendChild(container3);
});

// Appends the features3 element (with the vignettes) to the story3 element
story3.appendChild(features3);



// Adds the Mapbox access token
mapboxgl.accessToken = config3.accessToken;

// Honestly, don't know what this does
const transformRequest3 = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map3 element with the
attributes from the main section of the config3.js file */

var map3 = new mapboxgl.Map({
    container: 'map3',
    style: config3.style,
    center: config3.chapters3[0].location.center,
    zoom: config3.chapters3[0].location.zoom,
    bearing: config3.chapters3[0].location.bearing,
    pitch: config3.chapters3[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest3
});

// Instantiates the scrollama function
var scroller3 = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters3 and move the map3 from one location to another
while changing the zoom level, pitch and bearing */



map3.on('load', function () {
 
  // This is the function that finds the first symbol layer
  let layers3 = map3.getStyle().layers;
  let firstSymbolId3;
      for (var i = 0; i < layers3.length; i++) {
      console.log(layers3[i].id); // This is the line of code that we are adding
      if (layers3[i].type === 'symbol') {
          firstSymbolId3 = layers3[i].id;
          break;
      }
  }


    // Add layer — Bee Shapefile
    map3.addLayer({
        'id': 'bee2',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/bee.geojson'
        },
        'paint': {
          //   'fill-color': '#ffb703',
            'fill-color': '#D1C783',
            'fill-opacity': 1,
          // "fill-outline-color": "#AEA56E",
          //   'fill-outline-opacity': 0.5
  
  
        }
    }, firstSymbolId3); 
  
    // Add layer — StoneFly Shapefile
    map3.addLayer({
      'id': 'fly2',
      'type': 'fill',
      'source': {
          'type': 'geojson',
          'data': 'data/fly.geojson'
      },
      'paint': {
          'fill-color': '#EAC9BD',
          "fill-outline-color": "#EAC9BD",
          // 'fill-opacity': 0.5,
      }
    }, firstSymbolId3);

    // Add layer — All Species Line2 (multiline strings data)
    map3.addLayer({
        
        'id': 'all_species_line2-2',
        'source': {
            'type': 'geojson',
            // 'data': 'data/all_species.geojson'
            // 'data': 'data/all_species_all_layers.geojson'
            'data': 'data/all_species_all_layers2.json'
        },
        "type": "line",
        "paint": {
        "line-width": 1.5,
        "line-color": 
          'orange',

        // [
        //     "match",
        //     ["get", "vipcode"],
        //     "I01", "#723d46",
        //     "V01", " #8e646b", 
        //     "V06", " #a58389", 
        //     "V02", " #c9cba3", 
        //     "V03", " #858935",
        //     "P01", " #ffe1a8",
        //     "V05", "#C6D39C", 
        //     "V04", "#FEE7BE", 
        //     "V12", "#708A93", 
        //     "#9F93A6",
        // ],
        
        

        //   [
        //     "match",
        //     ["get", "sciname"],
        //     "Leptoxis foremani", "#723d46",
        //     "Pleurobema hanleyianum", " #8e646b", 
        //     "Pleurocera foremani", " #a58389", 
        //     "Medionidus walkeri", " #c9cba3", 
        //     "Zapus hudsonius preblei", " #858935",
        //     "Deltistes luxatus", " #ffe1a8",
        //     "Cambarus callainus", "#C6D39C", 
        //     "Scaphirhynchus suttkusi", "#FEE7BE", 
        //     "Tiaroga cobitis", "#708A93", 
        //     "Acipenser oxyrinchus (=oxyrhynchus) desotoi", "#9F93A6", 
        //     "Cambarus veteranus", "#D4E4D9",  
        //     "Catostomus warnerensis", "#B18F6B", 
        //     "Meda fulgida", "#E1D7D5",  
        //     "Salvelinus confluentus", "#D36F65", 
        //     "Alasmidonta atropurpurea", "#CE9043",
        //     "Hamiota perovalis", "#969093",
        //     "Epioblasma othcaloogensis", "#B6BBA6", 
        //     "Chasmistes brevirostris", "#E2DEE3",  
        //     "Epioblasma metastriata", "#CA9E87",
        //     "Pleurobema perovatum", "#414051", 
        //     "Pleurobema decisum", "#DED0C8",
        //     "Ptychobranchus greenii", "#9CAD93",
        //     "Medionidus acutissimus", "#DFD0CD",  
        //     "Medionidus parvulus", "#988E8C", 
        //     "Pleurobema furvum", "#6E696A",
        //     "Pleurobema georgianum", "#D9CDCD", 
        //     "Necturus alabamensis", "#C35656",  
        //     "Pleurobema strodeanum", "#41588D", 
        //     "Obovaria choctawensis", "#41588D", 
        //     "Margaritifera marrianae", "#A4789A",  
        //     "Fusconaia escambia", "#A4789A", 
        //     "Hamiota australis", "#A4789A", 
        //     "Reginaia rotulata", "#B6A9D8", 
        //     "Ptychobranchus jonesi", "#E7DA58", 
        //     "Elliptoideus sloatianus", "#9293AE", 
        //     "Pleurobema pyriforme", "#98958F",
        //     "Hamiota subangulata", "#8D9D84",  
        //     "Amblema neislerii", "#9FB08E",  
        //     "Medionidus penicillatus", "#D2D0C4",
        //     "Medionidus simpsonianus", "#2E324A", 
        //     "Elliptio chipolaensis", "#B1988B", 
        //     "Elliptio spinosa", "#C4BABD",  
        //     "Rana chiricahuensis", " #AED0D0",
        //     "Rana pretiosa", " #FCF6DC", 
        //     "Lampsilis rafinesqueana", " #C198A2", 
        //     "Etheostoma moorei", " #364C64", 
        //     "Quadrula cylindrica cylindrica", " #87C2AE",  
        //     "Caretta caretta", " #5F7C8D",
        //     "Etheostoma phytophilum", " #5A7E9A",  
        //     "Catostomus discobolus yarrowi", " #5A7E9A", 
        //     "Chrosomus saylori", "#BAB08B", 
        //     "Notropis buccula", "#E3A461",  
        //     "Noturus crypticus", "#F5DAA9",
        //     "Notropis oxyrhynchus", "#C88042",  
        //     "Pleuronaia dolabelloides", "#C39B73", 
        //     "Ptychobranchus subtentus", " #E3A461", 
        //     "Fusconaia burkei", " #E3AA81", 
        //     "Etheostoma spilotum", " #ADAB70",  
        //     "Etheostoma susanae", " #B6CCE0",
        //     "Etheostoma trisella", " #C5D434",
        //     "Fusconaia masoni", " #DB6F1A", 
        //     "Noturus furiosus", " #8DAA66", 
        //     "Necturus lewisi", " #B9C024",

        //     'purple',
        // ],
        },  
    }, firstSymbolId3); 

    // Add the first new layer All Species Fill 1 (poly layer data)
    map3.addLayer({
        'id': 'all_species_fill1-2',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            // 'data': 'data/all_species.geojson'
            // 'data': 'data/all_species_all_layers.geojson'
            'data': 'data/all_species_all_layers1.json'
            
        },
        paint: {
            "fill-color": 

            '#E3AA81',

            // [
            //     "match",
            //     ["get", "vipcode"],
            //     "I01", "#723d46",
            //     "V01", " #8e646b", 
            //     "V06", " #a58389", 
            //     "V02", " #c9cba3", 
            //     "V03", " #858935",
            //     "P01", " #ffe1a8",
            //     "V05", "#C6D39C", 
            //     "V04", "#FEE7BE", 
            //     "V12", "#708A93", 
            //     "#9F93A6",
            // ],
            
            // 'blue',

            // [
            //     "match",
            //     ["get", "sciname"],
            //     "Leptoxis foremani", "#723d46",
            //     "Pleurobema hanleyianum", " #8e646b", 
            //     "Pleurocera foremani", " #a58389", 
            //     "Medionidus walkeri", " #c9cba3", 
            //     "Zapus hudsonius preblei", " #858935",
            //     "Deltistes luxatus", " #ffe1a8",
            //     "Cambarus callainus", "#C6D39C", 
            //     "Scaphirhynchus suttkusi", "#FEE7BE", 
            //     "Tiaroga cobitis", "#708A93", 
            //     "Acipenser oxyrinchus (=oxyrhynchus) desotoi", "#9F93A6", 
            //     "Cambarus veteranus", "#D4E4D9",  
            //     "Catostomus warnerensis", "#B18F6B", 
            //     "Meda fulgida", "#E1D7D5",  
            //     "Salvelinus confluentus", "#D36F65", 
            //     "Alasmidonta atropurpurea", "#CE9043",
            //     "Hamiota perovalis", "#969093",
            //     "Epioblasma othcaloogensis", "#B6BBA6", 
            //     "Chasmistes brevirostris", "#E2DEE3",  
            //     "Epioblasma metastriata", "#CA9E87",
            //     "Pleurobema perovatum", "#414051", 
            //     "Pleurobema decisum", "#DED0C8",
            //     "Ptychobranchus greenii", "#9CAD93",
            //     "Medionidus acutissimus", "#DFD0CD",  
            //     "Medionidus parvulus", "#988E8C", 
            //     "Pleurobema furvum", "#6E696A",
            //     "Pleurobema georgianum", "#D9CDCD", 
            //     "Necturus alabamensis", "#C35656",  
            //     "Pleurobema strodeanum", "#41588D", 
            //     "Obovaria choctawensis", "#41588D", 
            //     "Margaritifera marrianae", "#A4789A",  
            //     "Fusconaia escambia", "#A4789A", 
            //     "Hamiota australis", "#A4789A", 
            //     "Reginaia rotulata", "#B6A9D8", 
            //     "Ptychobranchus jonesi", "#E7DA58", 
            //     "Elliptoideus sloatianus", "#9293AE", 
            //     "Pleurobema pyriforme", "#98958F",
            //     "Hamiota subangulata", "#8D9D84",  
            //     "Amblema neislerii", "#9FB08E",  
            //     "Medionidus penicillatus", "#D2D0C4",
            //     "Medionidus simpsonianus", "#2E324A", 
            //     "Elliptio chipolaensis", "#B1988B", 
            //     "Elliptio spinosa", "#C4BABD",  
            //     "Rana chiricahuensis", " #AED0D0",
            //     "Rana pretiosa", " #FCF6DC", 
            //     "Lampsilis rafinesqueana", " #C198A2", 
            //     "Etheostoma moorei", " #364C64", 
            //     "Quadrula cylindrica cylindrica", " #87C2AE",  
            //     "Caretta caretta", " #5F7C8D",
            //     "Etheostoma phytophilum", " #5A7E9A",  
            //     "Catostomus discobolus yarrowi", " #5A7E9A", 
            //     "Chrosomus saylori", "#BAB08B", 
            //     "Notropis buccula", "#E3A461",  
            //     "Noturus crypticus", "#F5DAA9",
            //     "Notropis oxyrhynchus", "#C88042",  
            //     "Pleuronaia dolabelloides", "#C39B73", 
            //     "Ptychobranchus subtentus", " #E3A461", 
            //     "Fusconaia burkei", " #E3AA81", 
            //     "Etheostoma spilotum", " #ADAB70",  
            //     "Etheostoma susanae", " #B6CCE0",
            //     "Etheostoma trisella", " #C5D434",
            //     "Fusconaia masoni", " #DB6F1A", 
            //     "Noturus furiosus", " #8DAA66", 
            //     "Necturus lewisi", " #B9C024",

            //     '#E3AA81',
            // ],


            //   "fill-outline-color": "#ffffff",
            // adding opacity
            //   "fill-outline-color": "#ffffff",
            "fill-opacity": 0.8,
        }
        // 'paint': {
        //   //   'fill-color': '#ffb703',
        //     'fill-color': '#ccd5ae',
        //     'fill-opacity': 1,
        //   // "fill-outline-color": "#AEA56E",
        //   //   'fill-outline-opacity': 0.5


        // }
    }, firstSymbolId3); 

    // // Add the first new layer All Species Line 1 (poly layer data)
    // map3.addLayer({
        
    //     'id': 'all_species_line1',
    //     'source': {
    //         'type': 'geojson',
    //         // 'data': 'data/all_species.geojson'
    //         // 'data': 'data/all_species_all_layers.geojson'
    //         'data': 'data/all_species_all_layers1.json'
            
    //     },
    //     "type": "line",
    //     "paint": {
    //       "line-width": 1,
    //       "line-color": 
    //     //   'purple',
        
        

    //       [
    //         "match",
    //         ["get", "sciname"],
    //         "Leptoxis foremani", "#723d46",
    //         "Pleurobema hanleyianum", " #8e646b", 
    //         "Pleurocera foremani", " #a58389", 
    //         "Medionidus walkeri", " #c9cba3", 
    //         "Zapus hudsonius preblei", " #858935",
    //         "Deltistes luxatus", " #ffe1a8",
    //         "Cambarus callainus", "#C6D39C", 
    //         "Scaphirhynchus suttkusi", "#FEE7BE", 
    //         "Tiaroga cobitis", "#708A93", 
    //         "Acipenser oxyrinchus (=oxyrhynchus) desotoi", "#9F93A6", 
    //         "Cambarus veteranus", "#D4E4D9",  
    //         "Catostomus warnerensis", "#B18F6B", 
    //         "Meda fulgida", "#E1D7D5",  
    //         "Salvelinus confluentus", "#D36F65", 
    //         "Alasmidonta atropurpurea", "#CE9043",
    //         "Hamiota perovalis", "#969093",
    //         "Epioblasma othcaloogensis", "#B6BBA6", 
    //         "Chasmistes brevirostris", "#E2DEE3",  
    //         "Epioblasma metastriata", "#CA9E87",
    //         "Pleurobema perovatum", "#414051", 
    //         "Pleurobema decisum", "#DED0C8",
    //         "Ptychobranchus greenii", "#9CAD93",
    //         "Medionidus acutissimus", "#DFD0CD",  
    //         "Medionidus parvulus", "#988E8C", 
    //         "Pleurobema furvum", "#6E696A",
    //         "Pleurobema georgianum", "#D9CDCD", 
    //         "Necturus alabamensis", "#C35656",  
    //         "Pleurobema strodeanum", "#41588D", 
    //         "Obovaria choctawensis", "#41588D", 
    //         "Margaritifera marrianae", "#A4789A",  
    //         "Fusconaia escambia", "#A4789A", 
    //         "Hamiota australis", "#A4789A", 
    //         "Reginaia rotulata", "#B6A9D8", 
    //         "Ptychobranchus jonesi", "#E7DA58", 
    //         "Elliptoideus sloatianus", "#9293AE", 
    //         "Pleurobema pyriforme", "#98958F",
    //         "Hamiota subangulata", "#8D9D84",  
    //         "Amblema neislerii", "#9FB08E",  
    //         "Medionidus penicillatus", "#D2D0C4",
    //         "Medionidus simpsonianus", "#2E324A", 
    //         "Elliptio chipolaensis", "#B1988B", 
    //         "Elliptio spinosa", "#C4BABD",  
    //         "Rana chiricahuensis", " #AED0D0",
    //         "Rana pretiosa", " #FCF6DC", 
    //         "Lampsilis rafinesqueana", " #C198A2", 
    //         "Etheostoma moorei", " #364C64", 
    //         "Quadrula cylindrica cylindrica", " #87C2AE",  
    //         "Caretta caretta", " #5F7C8D",
    //         "Etheostoma phytophilum", " #5A7E9A",  
    //         "Catostomus discobolus yarrowi", " #5A7E9A", 
    //         "Chrosomus saylori", "#BAB08B", 
    //         "Notropis buccula", "#E3A461",  
    //         "Noturus crypticus", "#F5DAA9",
    //         "Notropis oxyrhynchus", "#C88042",  
    //         "Pleuronaia dolabelloides", "#C39B73", 
    //         "Ptychobranchus subtentus", " #E3A461", 
    //         "Fusconaia burkei", " #E3AA81", 
    //         "Etheostoma spilotum", " #ADAB70",  
    //         "Etheostoma susanae", " #B6CCE0",
    //         "Etheostoma trisella", " #C5D434",
    //         "Fusconaia masoni", " #DB6F1A", 
    //         "Noturus furiosus", " #8DAA66", 
    //         "Necturus lewisi", " #B9C024",

    //         'purple',
    //     ],
    //     },  
    // }, firstSymbolId3); 

    // // Add the first new layer All Species Line2 (multiline strings data)
    // map3.addLayer({
        
    //     'id': 'all_species_line2_sat',
    //     'source': {
    //         'type': 'geojson',
    //         // 'data': 'data/all_species.geojson'
    //         // 'data': 'data/all_species_all_layers.geojson'
    //         'data': 'data/all_species_all_layers2.json'
            
    //     },
    //     "type": "line",
    //     "paint": {
    //       "line-width": 1.5,
    //       "line-color": 
    //       'white',
    //     },  
    // }, firstSymbolId3); 

// // pipelines
// map3.addLayer({
//     'id': 'pipelines-2',
//     'type': 'fill',
//     'source': {
//         'type': 'geojson',
//         'data': 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/City_of_Redlands_Parks/FeatureServer/0/query?where=1%3D1&outSR=4326&f=pgeojson'
//     },
//     'paint': {
//         'fill-color': 'rgba(200, 100, 240, 0.3)',
//         'fill-outline-color': 'rgba(200, 100, 240, 1)'
//     }
// }, 'road-intersection-copy-1');




//prairieA layer: base
map3.addSource('prairie_loc', {
    'type': 'image',
    // 'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    // 'url': 'https://raw.githubusercontent.com/juliaingram/endangered-species-map3/main/images/radar.gif?token=GHSAT0AAAAAABPNER237JRYUOLUV5AHQUDQYW3AZEQ',
    // 'url': 'https://drive.google.com/file/d/1ozZ1xBTtVaNoSXk5I7qOmVRnYrjnWWae/view?usp=sharing',
    // 'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/section1.gif',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/prairie_base.gif',
    // 'image': 'images/section1.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

    // center: [-89.120177, 42.195437],

}, 'road-intersection-copy-1'); 
map3.addLayer({
    id: 'prairie_base',
    'type': 'raster',
    'source': 'prairie_loc',
    'paint': {
    'raster-fade-duration': 0.8
    }
}, 'road-intersection-copy-1'); 


//prairieB layer: grid
map3.addSource('prairie_locB', {
    'type': 'image',
    // 'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    // 'url': 'https://raw.githubusercontent.com/juliaingram/endangered-species-map3/main/images/radar.gif?token=GHSAT0AAAAAABPNER237JRYUOLUV5AHQUDQYW3AZEQ',
    // 'url': 'https://drive.google.com/file/d/1ozZ1xBTtVaNoSXk5I7qOmVRnYrjnWWae/view?usp=sharing',
    // 'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/section1.gif',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/prairie_grid.gif',
    // 'image': 'images/section1.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

}, 'road-intersection-copy-1'); 
map3.addLayer({
    id: 'prairie_grid',
    'type': 'raster',
    'source': 'prairie_locB',
    'paint': {
    'raster-fade-duration': 0.8
    }
}, 'road-intersection-copy-1'); 


//prairieC layer: prairie section
map3.addSource('prairie_locC', {
    'type': 'image',
    // 'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    // 'url': 'https://raw.githubusercontent.com/juliaingram/endangered-species-map3/main/images/radar.gif?token=GHSAT0AAAAAABPNER237JRYUOLUV5AHQUDQYW3AZEQ',
    // 'url': 'https://drive.google.com/file/d/1ozZ1xBTtVaNoSXk5I7qOmVRnYrjnWWae/view?usp=sharing',
    // 'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/section1.gif',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/prairie_prairie_section.gif',
    // 'image': 'images/section1.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

}, 'road-intersection-copy-1'); 
map3.addLayer({
    id: 'prairie_prairie_section',
    'type': 'raster',
    'source': 'prairie_locC',
    'paint': {
    'raster-fade-duration': 0.8
    }
}, 'road-intersection-copy-1'); 

//prairieD layer: runways
map3.addSource('prairie_locD', {
    'type': 'image',
    // 'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    // 'url': 'https://raw.githubusercontent.com/juliaingram/endangered-species-map3/main/images/radar.gif?token=GHSAT0AAAAAABPNER237JRYUOLUV5AHQUDQYW3AZEQ',
    // 'url': 'https://drive.google.com/file/d/1ozZ1xBTtVaNoSXk5I7qOmVRnYrjnWWae/view?usp=sharing',
    // 'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/section1.gif',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/prairie_runways.gif',
    // 'image': 'images/section1.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

}, 'road-intersection-copy-1'); 
map3.addLayer({
    id: 'prairie_runways',
    'type': 'raster',
    'source': 'prairie_locD',
    'paint': {
    'raster-fade-duration': 0.8
    }
}, 'road-intersection-copy-1'); 





// Setup the instance, pass callback functions
scroller3
        .setup({
            step: '.step3',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {

            console.log("scroller 3")
            // adding hidden layers to show which layers to show
            map1Container.classList.add("hide");
            map2Container.classList.add("hide");
            map3Container.classList.remove("hide");

            // map1Container.classList.add("hidden");
            // map2Container.classList.add("hidden");
            // map3Container.classList.remove("hidden");

            console.log("var 3")
            var chapter3 = config3.chapters3.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map3.flyTo(chapter3.location);
            if (config3.showMarkers) {
                marker.setLngLat(chapter3.location.center);
            }
            console.log("chapterEnter3 length")
            if (chapter3.onChapterEnter.length > 0) {
                chapter3.onChapterEnter.forEach(setLayerOpacity3);
            }
        })
        .onStepExit(response => {
            var chapter3 = config3.chapters3.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter3.onChapterExit.length > 0) {
                chapter3.onChapterExit.forEach(setLayerOpacity3);
            }
        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller3.resize);