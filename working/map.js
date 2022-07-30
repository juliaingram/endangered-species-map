// Map

// mapbox info
// mapboxgl.accessToken = 'pk.eyJ1Ijoic21lcnJpYW0iLCJhIjoiY2w1d25ndHE2MGxjNDNlcGd4cTdyemI0NiJ9.5y-hv6UtsINsmAiGjNqp_A';
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/smerriam/cl3vems65009m14rwfzkhn6dv',
    // zoom: 10,
    // center: [-74, 40.725], //longitude and latitude (y.x)
    // maxZoom: 15,
    // minZoom: 8,
    // maxBounds: [[-74.45, 40.45], [-73.55, 41]] 
// });

const map1Container = document.getElementById("map_1");
const map2Container = document.getElementById("map_2");
const map3Container = document.getElementById("map_3");

/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    // 'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    header.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */



map.on('load', function () {
 
  // This is the function that finds the first symbol layer
  let layers = map.getStyle().layers;
  let firstSymbolId;
      for (var i = 0; i < layers.length; i++) {
      console.log(layers[i].id); // This is the line of code that we are adding
      if (layers[i].type === 'symbol') {
          firstSymbolId = layers[i].id;
          break;
      }
  }


    // Add layer — Bee Shapefile
    map.addLayer({
        'id': 'bee',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/bee.geojson'
        },
        'paint': {
          //   'fill-color': '#ffb703',
            // 'fill-color': '#D1C783',
            'fill-color': 'blue',
            'fill-opacity': 1,
          // "fill-outline-color": "#AEA56E",
          //   'fill-outline-opacity': 0.5
  
  
        }
    }, firstSymbolId); 
  
    // Add layer — StoneFly Shapefile
    map.addLayer({
      'id': 'fly',
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
    }, firstSymbolId);

    // Add layer — All Species Line2 (multiline strings data)
    map.addLayer({
        
        'id': 'all_species_line2',
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
    }, firstSymbolId); 

    // Add the first new layer All Species Fill 1 (poly layer data)
    map.addLayer({
        'id': 'all_species_fill1',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            // 'data': 'data/all_species.geojson'
            // 'data': 'data/all_species_all_layers.geojson'
            'data': 'data/all_species_all_layers1.json'
            
        },
        paint: {
            "fill-color": 
            'blue',

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
    }, firstSymbolId); 

    // // Add the first new layer All Species Line 1 (poly layer data)
    // map.addLayer({
        
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
    // }, firstSymbolId); 

    // // Add the first new layer All Species Line2 (multiline strings data)
    // map.addLayer({
        
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
    // }, firstSymbolId); 




// //highway / image layer
// map.addSource('highway2', {
//     'type': 'image',
//     // 'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
//     // 'url': 'https://raw.githubusercontent.com/juliaingram/endangered-species-map/main/images/radar.gif?token=GHSAT0AAAAAABPNER237JRYUOLUV5AHQUDQYW3AZEQ',
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

// }, firstSymbolId); 
// map.addLayer({
//     id: 'highway',
//     'type': 'raster',
//     'source': 'highway2',
//     'paint': {
//     'raster-fade-duration': 0.4
//     }
// }, 'poi-label'); 

// // piplines
//     map.addLayer({
//         'id': 'pipelines',
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
scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            console.log("scroller 1")
            // adding hidden layers to show which layers to show
            map1Container.classList.remove("hide");
            map2Container.classList.add("hide");
            map3Container.classList.add("hide");

            // map1Container.classList.remove("hidden");
            // map2Container.classList.add("hidden");
            // map3Container.classList.add("hidden");

            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);