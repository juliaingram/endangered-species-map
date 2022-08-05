
// <!-- <div class="full_bleed_container"> 
// <img src="images/outdoors_base-1659114935864_test.png" alt="Glacier National Park"style="width:100%">

// <div class="centered2">
//     <h2 class="content__title">Critical Habitats</h2>
// <br>
//     <p class="content__text">Subtitle Line Line Line Line Line Line</p>

// </div>
// </div> -->



// let openingImageDiv = "";

// const openingContainer = document.getElementById("titleDiv");

let titleDiv = "<div class='full_bleed_container'> <img src='images/outdoors_base-1659114935864_test.png'  alt='Glacier National Park' style='width:100%'><div class='centered2'><h1 class='content__title'>Critical Habitats</h1><br><h5 class='content_text'>Subtitle Line Line Line Line Line Line</h5></div></div>";

let bylineDiv = "<br><br><br><div class='textblock'><p class='single-metadata-single-topic'> <span style='color: #5a6b3e'> <strong> " +
    " By Jessie Blaeser, Julia Ingram, Tanaz Meghjani, and Susan Merriam</strong></span></p>" + "<p class='topic single-topic'><time class='datetime'>Sep. 9, 2022</time></div></div>" + "<br><br>";

// let subTitleDiv = "<p class='topic single-topic'><time class='datetime'>Sep. 9, 2022</time></div>";

let descriptionDiv =
"<div class='textblock'> <h2>Section 1</h2></div>" + 
"<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +

"<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" + 

"<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. <br><br><br><br><br></p></div>";

let footerDiv =
  '';

// let divChapter0 =
//   "<div class='textblock'> <h2>Section 1</h2></div>" + 
//   "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +

//   "<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" + 

//   "<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>";

let divChapter1 =
  "<h2>Overall Map Test</h2>" +
  // '<img src="images/Chapter_1_Image.jpg">' +
  // '<p class="imageCredit"><a href="http://www.metouhey.com/">Max Touhey</a></p>' +
  "<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque <u style='text-decoration-color:#af9db9'=>critical habitats</u> nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas <span style='background-color:#af9db9'>critical habitats</span> assumenda est, omnis dolor repellendus.</p>";

let divChapter2 =
  "<h3>Fly1</h3>" +
  // '<img src="images/Chapter_2_Image.jpg">' +
  "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>";

let divChapter3 =
  "<h3>Fly2</h3>" +
  // '<img src="images/Chapter_3_Image.jpg">' +
  "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>";

let divChapter4 = 
"<h3>Fly3</h3>" +
"<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>";

let divChapter5 =
"<div class='textblock'><p data-paragraph='main'><h2>Glacier National Park Melting</h2></p></div>"  +
"<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" 
+
"<div class='textblock'><br><iframe frameborder='0' class='juxtapose' width='95%' height='480' src='https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0deb45ac-1291-11ed-b5bb-6595d9b17862'></iframe></div>"
+
// "<div class='textblock'><div class='caption'><p class='viz-caption'>Source: U.S. Securities and Exchange Commission — Investment Adviser Public Disclosure Forms</p></div></div><br><br>" +
"<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" +
"<div class='textblock'><div class='caption'><p class='viz-caption'>Source: U.S. Securities and Exchange Commission — Investment Adviser Public Disclosure Forms</p></div></div><br><br>" +
"<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>"
+
"<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>";

let divChapter6 =
  "<h3>Fly 3</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Tunde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>";

  let divChapter7 =
  "<h3>Fly 4</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>";

  let divChapter8 =
  "<h3>Fly 5</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Tunde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>";

  let divChapter9 =
  "<div class='videoContainer'><div style='max-width:100%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='' relative=''><video controls='' width='100%' autoplay='true' loop='true'><source src='images/Glacier_Flyover.mp4' type='video/mp4'></video></div></div>"
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  // "<p>Tunde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>";

  let divChapter10 =

  "<div class='textblock'><p data-paragraph='main'><h2>Rusty Patch Bumblebee</h2></p></div>"  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" 
  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div><br><br>" + 
  "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>";

  let divChapter11 =
  "<h3>Bees Midwest VA</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>";

  let divChapter12 =
  "<h3>Pipeline1</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter13 =
  "<h3>Pipeline2</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter14 =
  "<h3>Bees Midwest</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>";

  let divChapter15 =
  "<h3>Bees Midwest 2</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter16 =
  "<h3>Prairie1</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter17 =
  "<h3>PrairieA</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";


  let divChapter18 =
  "<h3>PrairieB</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter19 =
  "<h3>PrairieC</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter20 =
  "<h3>PrairieD</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter21 =
  "<h3>Prairie Upclose</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";


  let divChapter22 =
  // "<h3>Image op</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  "<div class='full_bleed_container'> <img src='images/prairie_road.jpg'  alt='Bowl Prairie' style='width:100%'></div>";


  let divChapter23 =

  "<div class='textblock'><p data-paragraph='main'><h2>last chunk 1</h2></p></div>"  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" 
  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div><br><br>" + 
  "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>";


  let divChapter24 =
  "<div class='textblock'><p data-paragraph='main'><h2>last_chunk2</h2></p></div>"  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" 
  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div><br><br>" + 
  "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>";




var config = {
  style: 'mapbox://styles/smerriam/cl5wxan5k001314lf58461rqm',
  accessToken: 'pk.eyJ1Ijoic21lcnJpYW0iLCJhIjoiY2w1d25ndHE2MGxjNDNlcGd4cTdyemI0NiJ9.5y-hv6UtsINsmAiGjNqp_A',
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  // openingImage: openingImageDiv,
  title: titleDiv,
  byline: bylineDiv,
  // subtitle: subTitleDiv,
  description: descriptionDiv,
  // footer: footerDiv,
  chapters: [
    // {
    //   id: "first_chunk",
    //   alignment: "fully",
    //   hidden: false,
    //   chapterDiv: divChapter0,
    //   location: {
    //     center: [-115.774814, 42.523483],
    //             zoom: 3.2,
    //     zoomSmall: 9,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //       {
    //         layer: "all_species_fill1",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //       {
    //         layer: "all_species_line2",
    //         opacity: 0,
    //         duration: 300,
    //       },
          
    //       {
    //         layer: "pipeline",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //       {
    //         layer: "prairie_1",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //       {
    //         layer: "prairie_2",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //       {
    //         layer: "prairie_3",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //       {
    //         layer: "prairie_4",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //       {
    //         layer: "prairie_5",
    //         opacity: 0,
    //         duration: 300,
    //       },
    //   ],
    //   onChapterExit: [],
    // },
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-115.774814, 42.523483],
                zoom: 3.2,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
          {
            layer: "all_species_fill1",
            opacity: 0.5,
            duration: 300,
          },
          {
            layer: "all_species_line2",
            opacity: 0.8,
            duration: 300,
          },
          
          {
            layer: "pipeline",
            opacity: 0,
            duration: 300,
          },
          {
            layer: "prairie_1",
            opacity: 0,
            duration: 300,
          },
          {
            layer: "prairie_2",
            opacity: 0,
            duration: 300,
          },
          {
            layer: "prairie_3",
            opacity: 0,
            duration: 300,
          },
          {
            layer: "prairie_4",
            opacity: 0,
            duration: 300,
          },
          {
            layer: "prairie_5",
            opacity: 0,
            duration: 300,
          },
      ],
      onChapterExit: [],
    },
    {
      id: "fly1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-112.574814, 45.523483],
        zoom: 5.5,
        // zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0.5,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 1,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
    ],
    onChapterExit: [],
    },
    {
      id: "fly2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-112.574814, 45.523483],
        zoom: 5.51,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0.3,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0.6,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "fly3",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-113.73069, 48.70176],
        zoom: 10,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0.1,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "fly_chunk",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-113.73069, 48.70176],
        zoom: 10,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0.1,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "fly 3b",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-113.73069, 48.70176],
        zoom: 10,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0.1,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "fly4",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-113.73069, 48.75176],
        zoom: 12,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "fly5",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [-113.73069, 48.77176],
        zoom: 14,
        // zoomSmall: 14,
        pitch: 60,
        bearing: 65
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "fly_pan",
      // alignment: "seventy",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9,
      location: {
        center: [-113.73069, 48.77176],
        zoom: 14,
        // zoomSmall: 14,
        pitch: 60,
        bearing: 65
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "bee_chunk",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10,
      location: {
        // center: [-113.73069, 48.77176],
        // zoom: 14,
        center: [-87.852598, 41.281220],
        zoom: 5.3,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "bees_east",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter11,
      location: {
        center: [-87.852598, 41.281220],
        zoom: 5.3,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "pipeline1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter12,
      location: {
        center: [-80.570281, 38.2542994],
        zoom: 7,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "pipeline",
          opacity: 1,
          // duration: 300,
        },
      ],
    },
    {
      id: "pipeline2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter13,
      location: {
        center: [-79.540281, 38.3442994],
        zoom: 13,
        // zoomSmall: 14,
        pitch: 60,
        bearing: -60
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "pipeline",
          opacity: 1,
          // duration: 300,
        },
      ],
    },
    {
      id: "Bees Midwest1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter14,
      location: {
        center: [-92.574814, 44.523483],
        zoom: 5.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Bees Midwest 2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter15,
      location: {
        center: [-92.574814, 44.523483],
        zoom: 5.51,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Prairie1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter16,
      location: {
        center: [-89.120177, 42.195437],
        zoom: 13.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "PrairieA",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter17,
      location: {
        center: [-89.120177, 42.195437],
        zoom: 13.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          // base
          layer: "prairie_1",
          opacity: 0.3,
          duration: 300,
        },
        {
          // grid
          layer: "prairie_2",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_3",
          opacity: 0.8,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_4",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        // {
        //   layer: "prairie_5",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
      onChapterExit: [],
    },
    {
      id: "PrairieB",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter18,
      location: {
        center: [-89.120177, 42.195437],
        zoom: 13.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0.2,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0.6,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_3",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0.2,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0.2,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "PrairieC",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter19,
      location: {
        center: [-89.120177, 42.195437],
        zoom: 13.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0.2,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0.6,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "PrairieD",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter20,
      location: {
        center: [-89.120177, 42.195437],
        zoom: 13.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Prairie Upclose",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter21,
      location: {
        // // center: [-89.120167, 42.194537],
        // center: [-89.095967, 42.187901],
        // zoom: 16,
        // // zoomSmall: 14,
        // pitch: 60,
        // bearing: 20,
        // center: [-89.120167, 42.194537],

        center: [-89.106067, 42.187901],
        zoom: 14.4,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "last_image",
      alignment: "seventy",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter22,
      location: {
        // center: [-89.095967, 42.187901],
        // zoom: 15,
        // // zoomSmall: 14,
        // pitch: 0,
        // bearing: 0,

        center: [-89.106067, 42.187901],
        zoom: 14.4,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //   layer: "bee",
        //   opacity: 0.5,
        //   duration: 300,
        // },
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "last_chunk1",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter23,
      location: {
        center: [-89.095967, 42.187901],
        zoom: 15,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
   
    {
      id: "last_chunk2",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter24,
      location: {
        center: [-89.095967, 42.187901],
        zoom: 15,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all_species_fill1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "all_species_line2",
          opacity: 0,
          duration: 300,
        },
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_2",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_3",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_4",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_5",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },

  ],
};
