var config2 = {    
    accessToken: 'pk.eyJ1Ijoic21lcnJpYW0iLCJhIjoiY2w1d25ndHE2MGxjNDNlcGd4cTdyemI0NiJ9.5y-hv6UtsINsmAiGjNqp_A',
    // style: 'mapbox://styles/smerriam/cl3vems65009m14rwfzkhn6dv',
    // style: 'mapbox://styles/smerriam/cl5ws43rg005h14o6tsbc28kx',
    style: 'mapbox://styles/smerriam/cl5wxan5k001314lf58461rqm',

    theme: 'light2',
    alignment: 'left',


    // toptitle: 'Points Unknown | Tutorial 10 | Mapbox Storytelling',
    // title: 'Title of Story on Critical Habitats',
    // byline: 'By Jessie, Julia, Tanaz, and Susan',
    // description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',

    // footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
    // footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',

    chapters2: [
        {
            id: 'fly3',
            // title: 'Glacier National Park',
            // image: 'images/Chapter_3_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
            location: {
                center: [-113.73069, 48.70176],
                zoom: 10,
                // zoom: 9,
                pitch: 0,
                bearing: 0
            },

        },
        {
            id: 'fly4',
            title: 'Glacier National Park2',
            // image: 'images/glacier1.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            location: {
                center: [-113.73069, 48.75176],
                zoom: 12,
                // zoom: 9,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'fly',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'fly',
            //         opacity: 0
            //     }
            // ]
        },
        {
            id: 'fly5',
            // title: 'Glacier National Park3',
            // image: 'images/glacier1.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
            location: {
                center: [-113.73069, 48.77176],
                zoom: 14,
                // zoom: 9,
                pitch: 60,
                bearing: 65
            },
            // onChapterEnter: [
            //     {
            //         layer: 'fly',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'fly',
            //         opacity: 0
            //     }
            // ]
        },

        
    ]
};