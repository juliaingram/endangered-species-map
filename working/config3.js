var config3 = {    
    accessToken: 'pk.eyJ1Ijoic21lcnJpYW0iLCJhIjoiY2w1d25ndHE2MGxjNDNlcGd4cTdyemI0NiJ9.5y-hv6UtsINsmAiGjNqp_A',
    // style: 'mapbox://styles/smerriam/cl3vems65009m14rwfzkhn6dv',
    // style: 'mapbox://styles/smerriam/cl5ws43rg005h14o6tsbc28kx',
    style: 'mapbox://styles/smerriam/cl5wxan5k001314lf58461rqm',

    theme: 'light3',
    alignment: 'left',


    // toptitle: 'Points Unknown | Tutorial 10 | Mapbox Storytelling',
    // title: 'Title of Story on Critical Habitats',
    // byline: 'By Jessie, Julia, Tanaz, and Susan',
    // description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',

    // footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
    // footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',

    chapters3: [


        // {
        //     id: 'bees_zoomed_out',
        //     title: 'Bees',
        //     image: 'images/Chapter_2_Image.jpg',
        //     imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        //     location: {
        //         center: [-92.574814, 40.523483],
        //         zoom: 4.5,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'bee',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'bee',
        //             opacity: 1
        //         }
        //     ]
        // },

        {
            id: 'west_virginia',
            title: 'Bees Midwest',
            // image: 'images/Chapter_3_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            location: {
                center: [-87.852598, 41.281220],
                zoom: 5.3,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ]
        },
        {
            id: 'Upclose',
            title: 'Pipeline1',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.",
            location: {
                center: [-80.570281, 38.2542994],
                // zoom: 12,
                // zoom: 11,
                zoom: 7.4,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.2
            //     }
            // ],
            // onChapterEnter: [
            //     {
            //         layer: 'pipelines',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.2
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'pipelines',
            //         opacity: 0
            //     }
            // ]
        },
        
        {
            id: 'Upclose2',
            title: 'Pipeline2',
            image: 'images/Chapter_4_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.",
            location: {
                center: [-79.560281, 38.2242994],
                zoom: 14.1,
                // zoom: 11,
                // zoom: 10,
                pitch: 90,
                bearing: -188
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.2
            //     }
            // ],
            // onChapterEnter: [
            //     {
            //         layer: 'pipelines',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'pipelines',
            //         opacity: 0
            //     }
            // ]
        },
        




        {
            id: 'midwestbees',
            title: 'Bees in the Midwest',
            // image: 'images/Chapter_2_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            location: {
                center: [-92.574814, 44.523483],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 1
            //     }
            // ]
        },
        {
            id: 'midwestbees2',
            // title: 'Bees in the Midwest',
            // image: 'images/Chapter_2_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            location: {
                center: [-92.574814, 44.523483],
                zoom: 5.51,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ]
        },
        {
            id: 'Prairie1',
            title: 'Prairie',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            location: {
                center: [-89.120177, 42.195437],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'prairie_img',
            //         opacity: 1
            //     }
            // ],
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: .4
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'prairie_img',
            //         opacity: 1
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ]
        },
       
        {
            id: 'PrairieA',
            title: 'PrairieA',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
            location: {
                center: [-89.120177, 42.195437],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: .4
            //     }
            // ],
                        // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ],
            onChapterEnter: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 1
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_base',
                    opacity: 0.2
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_grid',
                    opacity: 0.2
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_runways',
                    opacity: 0.2
                }
            ],

            onChapterExit: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_base',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],


        },
        {
            id: 'PrairieB',
            title: 'PrairieB',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            location: {
                center: [-89.120177, 42.195437],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 0.2
                }
            ],
             // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: .4
            //     }
            // ],
                        // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ],
            onChapterEnter: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 1
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_base',
                    opacity: 0.2
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],

            onChapterExit: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_base',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],
        },

        {
            id: 'PrairieC',
            title: 'PrairieC',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            location: {
                center: [-89.120177, 42.195437],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: .4
            //     }
            // ],
                        // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ],
            onChapterEnter: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_base',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],

            onChapterExit: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_base',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],
        },
        {
            id: 'PrairieD',
            title: 'PrairieD',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            location: {
                center: [-89.120177, 42.195437],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],
            // onChapterEnter: [
            //     {
            //         layer: 'bee',
            //         opacity: .4
            //     }
            // ],
                        // onChapterExit: [
            //     {
            //         layer: 'bee',
            //         opacity: 0.6
            //     }
            // ],
            onChapterEnter: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_base',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterEnter: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],

            onChapterExit: [
                {
                    layer: 'prairie_prairie_section',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_base',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_grid',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'prairie_runways',
                    opacity: 0
                }
            ],
        },

        {
            id: 'Prairie2',
            title: 'Prairie2',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            location: {
                center: [-89.101177, 42.190437],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
        //     onChapterEnter: [
        //         {
        //             layer: 'prairie_img',
        //             opacity: 0.6
        //         }
        //     ],
        //     onChapterEnter: [
        //         {
        //             layer: 'bee',
        //             opacity: .4
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'prairie_img',
        //             opacity: 0.5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'bee',
        //             opacity: 0.6
        //         }
        //     ]
        },
        
        
    ]
};