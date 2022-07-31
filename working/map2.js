// Map

// mapbox info
// mapboxgl.accessToken = 'pk.eyJ1Ijoic21lcnJpYW0iLCJhIjoiY2w1d25ndHE2MGxjNDNlcGd4cTdyemI0NiJ9.5y-hv6UtsINsmAiGjNqp_A';
// const map2 = new mapboxgl.Map({
//     container: 'map2',
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
2. The possible alignments2 which could be applied to the vignettes */

var layerTypes2 = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    // 'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments2 = {
    left: "lefty2",
    center: "centered2",
    right: "righty2",
    full: "fully2",
  };



/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config2.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType2(layer2) {
    var layerType2 = map2.getLayer(layer2).type;
    return layerTypes2[layerType2];
}
function setLayerOpacity2(layer2) {
    var paintProps2 = getLayerPaintType2(layer2.layer);
    paintProps2.forEach(function (prop) {
        map2.setPaintProperty(layer2.layer, prop, layer2.opacity);
    });
}

/* Next, these variables and functions create the story2 and vignette html
elements, and populate them with the content from the config2.js file.
They also assign a css class to certain elements, also based on the
config2.js file */

// Main 'story2' and 'features2' elements
var story2 = document.getElementById('story2');
var features2 = document.createElement('div');
features2.classList.add(alignments2[config2.alignment]);
features2.setAttribute('id', 'features2');

// Main 'header' element
var header2 = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config2.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config2.toptitle;
    header2.appendChild(toptitle);
}
if (config2.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config2.title;
    header2.appendChild(titleText);
}
if (config2.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config2.byline;
    header2.appendChild(bylineText);
}
if (config2.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config2.description;
    header2.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story2
if (header2.innerText.length > 0) {
    header2.classList.add(config2.theme);
    header2.setAttribute('id', 'header');
    story2.appendChild(header2);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config2.js file,
create the vignette elements and assign them their respective content */

config2.chapters2.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter2
    element will go in the container2 element */
    var container2 = document.createElement('div');
    var chapter2 = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter2.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter2.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter2.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story2 = document.createElement('p');
        story2.innerHTML = record.description;
        chapter2.appendChild(story2);
    }
    // Sets the id for the vignette and adds the step css attribute
    container2.setAttribute('id', record.id);
    container2.classList.add('step2');
    if (idx === 0) {
        container2.classList.add('active');
    }
    // Sets the overall theme to the chapter2 element
    chapter2.classList.add(config2.theme);
    /* Appends the chapter2 to the container2 element and the container2
    element to the features2 element */
    container2.appendChild(chapter2);
    features2.appendChild(container2);
});

// Appends the features2 element (with the vignettes) to the story2 element
story2.appendChild(features2);



// Adds the Mapbox access token
mapboxgl.accessToken = config2.accessToken;

// Honestly, don't know what this does
const transformRequest2 = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map2 element with the
attributes from the main section of the config2.js file */

var map2 = new mapboxgl.Map({
    container: 'map2',
    style: config2.style,
    center: config2.chapters2[0].location.center,
    zoom: config2.chapters2[0].location.zoom,
    bearing: config2.chapters2[0].location.bearing,
    pitch: config2.chapters2[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest2
});

// Instantiates the scrollama function
var scroller2 = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters2 and move the map2 from one location to another
while changing the zoom level, pitch and bearing */



map2.on('load', function () {
 
  // This is the function that finds the first symbol layer
  let layers2 = map2.getStyle().layers;
  let firstSymbolId2;
      for (var i = 0; i < layers2.length; i++) {
      console.log(layers2[i].id); // This is the line of code that we are adding
      if (layers2[i].type === 'symbol') {
          firstSymbolId2 = layers2[i].id;
          break;
      }
  }


    // Add layer — Bee Shapefile
    map2.addLayer({
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
    }, firstSymbolId2); 
  
    // Add layer — StoneFly Shapefile
    map2.addLayer({
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
    }, firstSymbolId2);

    // Add layer — All Species Line2 (multiline strings data)
    map2.addLayer({
        
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
        //   'orange',

        [
            "match",
            ["get", "vipcode"],
            "I01", "#723d46",
            "V01", " #8e646b", 
            "V06", " #a58389", 
            "V02", " #c9cba3", 
            "V03", " #858935",
            "P01", " #ffe1a8",
            "V05", "#C6D39C", 
            "V04", "#FEE7BE", 
            "V12", "#708A93", 
            "#9F93A6",
        ],
        
        

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
    }, firstSymbolId2); 

    // Add the first new layer All Species Fill 1 (poly layer data)
    map2.addLayer({
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
    }, firstSymbolId2); 

    // // Add the first new layer All Species Line 1 (poly layer data)
    // map2.addLayer({
        
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
    // }, firstSymbolId2); 

    // // Add the first new layer All Species Line2 (multiline strings data)
    // map2.addLayer({
        
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
    // }, firstSymbolId2); 




// //highway / image layer
// map2.addSource('highway2-2', {
//     'type': 'image',
//     // 'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
//     // 'url': 'https://raw.githubusercontent.com/juliaingram/endangered-species-map2/main/images/radar.gif?token=GHSAT0AAAAAABPNER237JRYUOLUV5AHQUDQYW3AZEQ',
//     // 'url': 'https://drive.google.com/file/d/1ozZ1xBTtVaNoSXk5I7qOmVRnYrjnWWae/view?usp=sharing',
//     'url': 'https://raw.githubusercontent.com/semerriam/points-unknown-data/main/section1.gif',
//     // 'image': 'images/section1.gif',
//     'coordinates': [
//     [-93.128, 44.8614],
//     [-93.0845, 44.8614],
//     [-93.0845, 44.8373],
//     [-93.128, 44.8373]
//     ]
//     // [-93.106, 44.848]

//     // [-80.425, 46.437],
//     // [-71.516, 46.437],
//     // [-71.516, 37.936],
//     // [-80.425, 37.936]

// }, firstSymbolId2); 
// map2.addLayer({
//     id: 'highway',
//     'type': 'raster',
//     'source': 'highway2-2',
//     'paint': {
//     'raster-fade-duration': 0.4
//     }
// }, 'poi-label'); 

// // piplines
//     map2.addLayer({
//         'id': 'pipelines-2',
//         'type': 'fill',
//         'source': {
//             'type': 'geojson',
//             'data': 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/City_of_Redlands_Parks/FeatureServer/0/query?where=1%3D1&outSR=4326&f=pgeojson'
//         },
//         'paint': {
//             'fill-color': 'rgba(200, 100, 240, 0.3)',
//             'fill-outline-color': 'rgba(200, 100, 240, 1)'
//         }
// }, 'poi-label');


// Setup the instance, pass callback functions
scroller2
        .setup({
            step: '.step2',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {

            console.log("scroller 2")
            // adding hidden layers to show which layers to show
            map1Container.classList.add("hide");
            map2Container.classList.remove("hide");
            map3Container.classList.add("hide");

            // map1Container.classList.add("hidden");
            // map2Container.classList.remove("hidden");
            // map3Container.classList.add("hidden");

            var chapter2 = config2.chapters2.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map2.flyTo(chapter2.location);
            if (config2.showMarkers) {
                marker.setLngLat(chapter2.location.center);
            }
            if (chapter2.onChapterEnter.length > 0) {
                chapter2.onChapterEnter.forEach(setLayerOpacity2);
            }
        })
        .onStepExit(response => {
            var chapter2 = config2.chapters2.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter2.onChapterExit.length > 0) {
                chapter2.onChapterExit.forEach(setLayerOpacity2);
            }
        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller2.resize);