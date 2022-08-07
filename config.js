
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
"<div class='textblock'> <p data-paragraph='main'>On a hillside in Rockport, Illinois, there is a 14-acre plot of land that has not been touched for thousands of years.</p></div>" +

"<div class='textblock'><p data-paragraph='main'>&#8220Within it, an ecological symphony exists; rare plants feed off fungi in the soil, and threatened and endangered birds and insects can interact in relative peace, away from the international airport that surrounds the haven.&#8220</p></div>" + 

"<div class='textblock'><p data-paragraph='main'>These species, at least one federally endangered, have less than two months left before activists say the habitat will be destroyed. Years ago, the Bell Bowl Prairie, one of the last gravel and hillside prairies remaining in the country, could may have received critical habitat designationdistinction from the (?) Fish and Wildlife Service, which would have granted additional protections to the area tofor the purposes of preserveing the habitat of the rusty-patched bumble bee that expert(s) say is likely to forages there and is likely to nest there. </p></div>" + 

"<div class='textblock'><p data-paragraph='main'>But in 2019, the Trump administration made the first changes to the Endangered Species Act in decades, loosening protections and making it more difficult for critical habitats to be established for all newly-listed federally threatened and endangered species, such as the rusty-patched bumble bee. </p></div>" + 

"<div class='textblock'><p data-paragraph='main'>A Columbia Journalism investigation revealed at least three land-based species that were denied additional protections as a direct result of the Trump administration’s changes: two species of stonefly and the rusty-patched bumble bee. Each faces immediate threats as a result, including irreversible habitat destruction.</p></div>" + 

"<div class='textblock'><p data-paragraph='main'>These three insects serve as a case study into the impact of Trump’s changes during their short lifespan, and how they might impact endangered and threatened species in the future if they were to remain in place. </p></div>" + 


"<div class='textblock'><p data-paragraph='main'>Today, at least these three species, and ones to come under the weakened protection of the Endangered Species Act, face irreparable harm from climate change, pesticides, infrastructure projects and more. <br></p></div>" + 

"<div class='textblock'> <h2><br>Sub Header</h2></div>" + 
"<div class='textblock'><p data-paragraph='main'>The Trump Administration’s changes took immediate effect in August 2019, but they were quickly challenged in court by conservation groups and the state of California.</p></div>" + 

"<div class='textblock'><p data-paragraph='main'>This July, a district court judge in northern California reached a decision: the Trump administration’s 2019 changes would be reversed. </p></div>" + 

"<div class='textblock'><p data-paragraph='main'>Victory for environmentalists was short-lived. Less than one month after the judge issued his ruling, the American Petroleum Institute, the American Farm Bureau Federation and a handful of Republican-led states filed an appeal, requesting a stay order on the court’s determination as the appeal plays out. If granted, a stay would mean the 2019 rules would remain in place while the court reaches a verdict on the appeal — something that could take months or years — effectively sending environmental groups back to the starting line. <br><br><br><br><br></p></div>" ;



;

let footerDiv =
  // '';
  // "<div class='full_bleed_container'> <img src='images/outdoors_base-1659114935864_test.png'  alt='Glacier National Park' style='width:100%'></div>" +
  // <div class='centered2'></div>
  
  "<p data-paragraph='main'><img src='images/outdoors_base-1659114935864_test.png'  alt='Glacier National Park' style='width:100%'></img></p>" + 
  "<div class='textblock'> <p data-paragraph='main'>Critical habitats are important because they grant an additional layer of protection against projects and activities that could accelerate a species’ population decline. They compel the Fish and Wildlife and National Marine Fisheries Services to consider more than just preservation, and take into account species recovery as well. </p></div>" +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" 
  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div><br><br>"; 

// let divChapter0 =
//   "<div class='textblock'> <h2>Section 1</h2></div>" + 
//   "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +

//   "<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" + 

//   "<div class='textblock'><p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>";

let divChapter0 =
  // "<h2>Overall Map Test 0</h2>" +
  // '<img src="images/Chapter_1_Image.jpg">' +
  // '<p class="imageCredit"><a href="http://www.metouhey.com/">Max Touhey</a></p>' +
  "<p>Under the Endangered Species Act, <span style='background-color:rgb(175, 157, 185, 0.6)'>critical habitats</span> were the areas deemed essential to the preservation of federally endangered or threatened species. One of the key functions of the Endangered Species Act is ensuring no federal agency destroys or damages these critical habitats with projects like road building, mining and more.</p>" +
  "<p>But under the Trump administration’s changes, critical habitats became more difficult to designate, and the Services have less power to modify federal projects that interfere with these areas. </p>"
  ;

let divChapter1 =
  // '<img src="images/Chapter_1_Image.jpg">' +
  // '<p class="imageCredit"><a href="http://www.metouhey.com/">Max Touhey</a></p>' +
  "<div class='textblock'> <h2><br>Sub Header 2</h2></div>" + 
  "<div class='textblock'><p data-paragraph='main'>One key change prevented the Fish and Wildlife and Marine Fishery Services from granting critical habitats if the primary threat to a species’ habitat is outside of the Services’ control. </p></div>" + 
  
  "<div class='textblock'><p data-paragraph='main'>Threats to habitats can come in many forms, but one looms larger than the rest: climate change. </p></div>" + 
  
  "<div class='textblock'><p data-paragraph='main'>Under Trump’s changes to the Endangered Species Act, habitats threatened by climate change cannot receive critical habitat designation because they can’t be protected by actions the Services are empowered to take. The Services can protect a habitat threatened by a planned road by mandating a change in the road. But they can’t single handedly protect a species threatened by drought, for example. </p></div>";


let divChapter2 =
  "<h3></h3>" +
  // '<img src="images/Chapter_2_Image.jpg">' +
  "<p>Climate change is the primary threat to the Western Glacier Stonefly and the Meltwater Lednian Stonefly, as outlined by the Fish and Wildlife Service. </p>" + 

  "<p>In 2016, the Fish and Wildlife Service published a proposed ruling on <span style='background-color:rgb(190, 139, 121, 0.8)'>both flies</span>, recommending each be brought under the protection of the Endangered Species Act as “threatened” species. The next step for the Service, as outlined in their proposal, was to publish a final rule where it would determine a critical habitat for each stonefly. </p>"
  
  ;

let divChapter3 =
  // "<h3>Fly2</h3>" +
  // '<img src="images/Chapter_3_Image.jpg">' +
  "<p>Both stoneflies depend on extremely cold glacial meltwater for their survival. They are found in high-elevation alpine streams, like those in Glacier National Park and Grand Teton National Park.</p>";

let divChapter4 = 
// "<h3>Fly3</h3>" +
"<p>uBut rRising temperatures have made the glaciers in Glacier National Park their own dying breed. Of the estimated 150 glaciers that existed in Glacier National Parkthe park in 1850, only 25 remain.</p>";

let divChapter8 =
"<p>They are predicted to disappear entirely as early as 2030, according to the Fish and Wildlife Service.</p>";


let divChapter9 =
"<div class='videoContainer'><div style='max-width:100%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='' relative=''><video controls='' width='100%' autoplay='true' loop='true'><source src='images/Glacier_Flyover.mp4' type='video/mp4'></video></div></div>"


// "<div style='max-width:100%; margin-left:auto; margin-right:auto'><iframe title='vimeo-player' src='https://player.vimeo.com/video/736983188?h=aaa982beb6&amp;' width='100%' height='100%' frameborder='0' allowfullscreen></iframe></div>";


let divChapter5 =
"<div class='textblock'><p data-paragraph='main'><h2>Glacier National Park Melting</h2></p></div>"  +
"<div class='textblock'> <p data-paragraph='main'>Under the Trump Administration’s changes to the Endangered Species Act, the reasons for the threat to these insects’ habitat — rising water temperatures and drought as a result of climate change — cannot be addressed by the Services nd therefore precludes these areas from additional protections.<br></p></div>" 
+
"<div class='textblock'><p data-paragraph='main'>Stoneflies are hardly the first federally-protected species threatened by climate change, nor are they likely to be the last. </p></div>" +
"<br><div class='glacier'><br><iframe frameborder='0' class='juxtapose' width='100%' height='620' src='https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0deb45ac-1291-11ed-b5bb-6595d9b17862'></div></iframe>"
+
// "<div class='textblock'><div class='caption'><p class='viz-caption'>Source: U.S. Securities and Exchange Commission — Investment Adviser Public Disclosure Forms</p></div></div><br><br>" +

"<div class='textblock'> <p data-paragraph='main'><br>*The fact is, a lot of the climate change impacts affect all of the species,* said Kristen Boyles, senior attorney for Earthjustice, the environmental law firm representing the conservation groups who sued both the Trump and Biden administrations over the 2019 changes to the Endangered Species Act. </p></div>"
+
"<div class='textblock'> <p data-paragraph='main'><br>Polar bears, for example, received critical habitat designation in 2011.</p></div>"
+
"<div class='textblock'> <p data-paragraph='main'><br>In response to a public comment, the Fish and Wildlife Service writes that while polar bear populations are predicted to decline in Alaska *by mid-century due to loss of sea ice habitat from climate change,* the trend could be slowed by reducing greenhouse gas emissions.</p></div>"
+
"<div class='textblock'> <p data-paragraph='main'><br>“Therefore,” the Service writes, “it is important to protect the essential polar bear habitats in Alaska.” </p></div>"
+
"<div class='textblock'> <p data-paragraph='main'>Despite the fact that both species face habitat loss due to climate change, the Fish and Wildlife Service’s 2011 ruling on the critical habitat of polar bears stands in stark contrast to its ultimate ruling on the threatened stoneflies.  </p></div>" +


"<div class='textblock'> <p data-paragraph='main'><br>Just months after the Trump Administration’s changes to the Endangered Species Act were put into place, the Fish and Wildlife Service published its final rule on the status of the two stoneflies, finding the designation of a critical habitat was “not prudent” under the new regulations. </p></div>"
+
"<div class='textblock'> <p data-paragraph='main'>“You can go one of two ways with this,” said Noah Greenwald, Endangered Species Director at the Center for Biological Diversity. “You can say it’s threatened by climate change, so we can’t do anything. Or you can say, it’s threatened by climate change, so it needs all the help it can get.”</p></div>" +
"<div class='textblock'> <p data-paragraph='main'>After the 2019 changes, the Service’s only choice was the former.<br><br></p></div>";

// let divChapter6 =
//   "<h3>Fly 3</h3>" +
//   // '<img src="images/Chapter_4_Image.jpg">' +
//   // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  
// "<div style='max-width:100%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='100%' height=600' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe>" + 

// "<div class='videoContainer'><div style='max-width:100%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='100%' height=900' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>" + 


;

  let divChapter7 =

  "<div class='textblock'><p data-paragraph='main'><h2>Rusty Patch Bumblebee</h2></p></div>"  +
  "<div class='textblock'> <p data-paragraph='main'>The <span style='background-color:rgb(231, 198, 104, 0.95)'>rusty-patched bumble bee</span> joined the federally endangered list in 2017. At the time, the Fish and Wildlife recommended the distinction of a critical habitat for the species, only to deny the bee that distinction in 2020, following the Trump administration’s changes. </p></div>";
  // "<div class='full_bleed_container'> <img src='images/prairie_road.jpg'  alt='Bowl Prairie' style='width:100%'></div>"
  
  // "<div class='videoContainer'><div style='max-width:100%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='100%' height=900' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>";


  let divChapter10 = 

  "<div class='textblock'> <p data-paragraph='main'>The rusty patched bumble bee was historically found in areas ranging from the upper midwest to the eastern seaboard. It is flexible with regards to its habitat and has been observed in a variety of habitats such as prairies, woodlands, marshes and residential parks. It’s also a generalist forager and gathers pollen and nectar from a wide range of flowering plants, according to the Fish and Wildlife Service.  </p></div>" 
  +
  "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 

  // "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>"
  "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p></div><br><br>";

  // "<div class='textblock'><p data-paragraph='main'><h2>Rusty Patch Bumblebee</h2></p></div>"  +
  // "<div class='textblock'> <p data-paragraph='main'>The rusty-patched bumble bee joined the federally endangered list in 2017. At the time, the Fish and Wildlife recommended the distinction of a critical habitat for the species, only to deny the bee that distinction in 2020, following the Trump administration’s changes. </p></div>" +

  // "<div class='textblock'> <p data-paragraph='main'>The rusty patched bumble bee was historically found in areas ranging from the upper midwest to the eastern seaboard. It is flexible with regards to its habitat and has been observed in a variety of habitats such as prairies, woodlands, marshes and residential parks. It’s also a generalist forager and gathers pollen and nectar from a wide range of flowering plants, according to the Fish and Wildlife Service.  </p></div>" 
  // +
  // "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  // // "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>"
  // "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  // "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  // "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p>" + 
  // "<div class='textblock'> <p data-paragraph='main'>While the species is said to be adaptable, it experienced “widespread and steep” population decline. A nationwide study conducted by TK petition estimated that “the rusty patched bumble bee had been lost from 87% of its historic range and that its relative abundance had declined by 95% </p></div><br><br>"
  

  let divChapter11 =
  // "<h3>Bees Midwest VA</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>One such project, the <span style='background-color:rgb(238, 108, 77, 0.8)'>Atlantic Coast Pipeline</span>, was slated to span 650 miles, four states, multiple critical habitats and a handful of national parks.</p>" + "<p>After years of litigation over the pipeline’s path led to the project’s cancellation in 2020, the Federal Energy Regulatory Commission approved a new plan for its completion in 2022. Construction is scheduled to begin as early as this fall, according to the project’s website.</p>"
  ;

  let divChapter12 =
  // "<h3>Pipeline1</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Many activists and community groups remain in opposition to the project. Among them are bee experts like Lief Richardson.</p>" +  "<p>According to Richardson, these mountainous and forested areas are the “original ecosystem” for the rusty-patched bumble bee’s habitat.</p>" +  "<p>“If you want critical habitat,” Richardson said, “take the mountains of West Virginia and Virginia. That is the single most important population that persists.” </p>";

  let divChapter13 =
  "<h3>Pipeline2</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Furthermore, because the bee does not have critical habitat distinction, Richardson said no study was conducted to estimate nest density for the rusty-patched bumble bee in the pipeline’s construction path, which would have been an essential step if the area was under critical habitat protection.</p>" +  "<p>Instead, the Service used studies from a different bee that is a close relative of the rusty-patched species. However, Richardson says the bee “is completely different from the rusty-patched bumble bee in every way, except that phylogeny connects them.” </p>";

  // let divChapter14 =
  // "<h3>Bees Midwest</h3>" +
  // // '<img src="images/Chapter_4_Image.jpg">' +
  // // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  // "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>";

  // let divChapter15 =
  // "<h3>Bees Midwest 2</h3>" +
  // // '<img src="images/Chapter_4_Image.jpg">' +
  // // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  // "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

  let divChapter16 =
  "<h3>Prairie1</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +

  "<p>TMeanwhile, on a hillside in Rockport, Illinois, there is a 14-acre plot of land home to the rusty-patched bumblebee that has not been touched for thousands of years.</p>" + 
  "<p>Within it, an ecological symphony exists; rare plants feed off fungi in the soil, and threatened and endangered birds and insects can interact in relative peace, away from the international airport that surrounds the haven.</p>" + 
  "<p>But these species, including the bumblebee, have less than two months left before activists say the habitat will be destroyed.</p>";

  let divChapter17 =
  "<h3>PrairieA</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The Bell Bowl Prairie, one of the last gravel and hillside prairies remaining in the country, may have fallen under the bee’s critical habitat before Trump’s regulations. Without this designation, the Chicago Rockford International Airport faces one less obstacle to level the majority of the remaining prairie.</p>" + 
  "<p>If the prairie had been included in the rusty-patched bumble bee’s critical habitat, “it definitely would have helped,” Save Bell Bowl Prairie organizer Jillian Neece said.</p>";


  let divChapter18 =
  "<h3>PrairieB</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>In the airport’s biological assessment of the area, it proposes six possibilities for construction. In the most-likely scenario, roughly six acres of prairie are preserved, which will be bifurcated by a road.</p>";

  let divChapter19 =
  "<h3>PrairieC</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>“It will be very hard for that remaining six [acres] to be of value,” said Robbie Telfer, another lead organizer for Save Bell Bowl, citing salt run-off, invasive seed species from passing trucks and the possible shading-out of the prairie by land grading. </p>";

  let divChapter20 =
  "<h3>PrairieD</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>While the airport has argued it is preserving the “highest” quality habitat within the prairie in its biological assessment submitted to the Fish and Wildlife Service, Telfer points out the so-called high-quality areas will quickly diminish without any sort of buffer. </p>" + 
  "<p>“Calling it high quality, low quality…is an excuse to destroy more of the prairie,” Telfer said. Prior to the discovery of the rusty-patched bumble bee in the area in 2021, the airport had already destroyed over six acres of what it called “low” and “moderate” quality prairie, including the area’s namesake “bowl,” or natural amphitheater.</p>";

  let divChapter21 =
  "<h3>Prairie E</h3>" +
  // '<img src="images/Chapter_4_Image.jpg">' +
  // '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>At the time of the bee’s discovery, the airport had already built its roadway on either side of the prairie, where it remains today, an eerie reminder of the pending determination from the Fish and Wildlife Service.</p>" + 
  "<p>It’s unknown whether or not the Bell Bowl Prairie would have been included in the rusty-patched Bee critical habitat, if one had been designated. But there’s little question among activists and experts that not having the distinction makes it easier for areas like the Bell Bowl Prairie to disappear. </p>";


  // let divChapter22 =
  // // "<h3>Image op</h3>" +
  // // '<img src="images/Chapter_4_Image.jpg">' +
  // "<div class='full_bleed_container'> <img src='images/prairie_road.jpg'  alt='Bowl Prairie' style='width:100%'></div>";


  let divChapter23 =
  // "<p data-paragraph='main'><img src='images/outdoors_base-1659114935864_test.png'  alt='Glacier National Park' style='width:100%'></img></p>" + 
  "<div class='full_bleed_container'> <img src='images/prairie_road.jpg'  alt='Bowl Prairie' style='width:100%'></div>" +
  "<div class='textblock'><p data-paragraph='main'><h2><br><br>last chunk 1</h2></p></div>"  +
  "<div class='textblock'> <p data-paragraph='main'>Critical habitats are important because they grant an additional layer of protection against projects and activities that could accelerate a species’ population decline. They compel the Fish and Wildlife and National Marine Fisheries Services to consider more than just preservation, and take into account species recovery as well. </p></div>" +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" 
  +
  "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div><br><br><br><br><br><br>" 
  // "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>"
  ;


  // let divChapter24 =
  // "<div class='textblock'><p data-paragraph='main'><h2>last_chunk2</h2></p></div>"  +
  // "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>" +
  // "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div>" 
  // +
  // "<div class='textblock'> <p data-paragraph='main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p></div><br><br>" + 
  // "<div class='videoContainer'><div style='max-width:50%; margin-left:auto; margin-right:auto' ;='' padding:none;='' display:none;='' position:='left' relative=''><iframe src='https://www.facebook.com/plugins/video.php?height=338&href=https%3A%2F%2Fwww.facebook.com%2Fvirginianaturalheritageprogram%2Fvideos%2F2738234729829736%2F&show_text=false&width=560&t=0' width='500' height=400' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe></div>";

  let finalimg = "<div class='full_bleed_container'> <img src='images/outdoors_base-1659114935864_test.png'  alt='Glacier National Park' style='width:100%'><div class='centered2'><h1 class='content__title'>Critical Habitats</h1><br><h5 class='content_text'>Subtitle Line Line Line Line Line Line</h5></div></div>";


var all_species_fill_opacity_0 = {
    layer: "all_species_fill1",
    opacity: 0,
    duration: 300,
  }

var all_species_line_opacity_0 = {
    layer: "all_species_line2",
    opacity: 0,
    duration: 300,
  }
  
var pipeline_opacity_0 = {
    layer: "pipeline",
    opacity: 0,
    duration: 300,
  }

var prairie_base_opacity_0 =   {
    layer: "prairie_base",
    opacity: 0,
    duration: 300,
  }

var prairie_full_opacity_0 =   {
    layer: "prairie_full",
    opacity: 0,
    duration: 300,
  }

var prairie_degraded_opacity_0 =   {
    layer: "prairie_degraded",
    opacity: 0,
    duration: 300,
  }

var prairie_high_quality_opacity_0 =   {
    layer: "prairie_high_quality",
    opacity: 0,
    duration: 300,
  }

var prairie_six_acres_opacity_0 =   {
    layer: "prairie_six_acres",
    opacity: 0,
    duration: 300,
  }

var prairie_moderate_quality_opacity_0 =   {
    layer: "prairie_moderate_quality",
    opacity: 0,
    duration: 300,
  }

var prairie_road_opacity_0 =   {
    layer: "prairie_road",
    opacity: 0,
    duration: 300,
  }

var prairie_construction_impact_opacity_0 =   {
    layer: "prairie_construction_impact",
    opacity: 0,
    duration: 300,
  }

var prairie_action_area_opacity_0 =   {
    layer: "prairie_action_area",
    opacity: 0,
    duration: 300,
  }




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
      chapterDiv: divChapter0,
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
          // all_species_opacity_0,
          {
            layer: "all_species_line2",
            opacity: 0.8,
            duration: 300,
          },
          pipeline_opacity_0,
          prairie_action_area_opacity_0,
          prairie_construction_impact_opacity_0,
          prairie_road_opacity_0,
          prairie_moderate_quality_opacity_0,
          prairie_six_acres_opacity_0,
          prairie_high_quality_opacity_0,
          prairie_degraded_opacity_0,
          prairie_full_opacity_0,
          prairie_base_opacity_0,
      ],
      onChapterExit: [],
    },
    {
      id: "chunk1",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
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
          
          pipeline_opacity_0,
          prairie_action_area_opacity_0,
          prairie_construction_impact_opacity_0,
          prairie_road_opacity_0,
          prairie_moderate_quality_opacity_0,
          prairie_six_acres_opacity_0,
          prairie_high_quality_opacity_0,
          prairie_degraded_opacity_0,
          prairie_full_opacity_0,
          prairie_base_opacity_0,
      ],
      onChapterExit: [],
    },

    // {
    //   id: "overallMap",
    //   alignment: "left",
    //   hidden: false,
    //   chapterDiv: divChapter1,
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
    //         opacity: 0.5,
    //         duration: 300,
    //       },
    //       {
    //         layer: "all_species_line2",
    //         opacity: 0.8,
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
        
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        all_species_line_opacity_0,
        
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0, 
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        // center: [-113.73069, 48.77176],
        // zoom: 14,
        center: [-87.852598, 41.281220],
        zoom: 5.6,
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
          opacity: 0.1,
          duration: 300,
        },
        all_species_line_opacity_0,
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
      ],
      onChapterExit: [],
    },
    // {
    //   id: "fly 3b",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter6,
    //   location: {
    //     center: [-113.73069, 48.70176],
    //     zoom: 10,
    //     // zoomSmall: 14,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "all_species_fill1",
    //       opacity: 0.1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "all_species_line2",
    //       opacity: 0,
    //       duration: 300,
    //     },
        
    //     {
    //       layer: "pipeline",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_2",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_3",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_4",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_5",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    {
      id: "bee_intro",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        // center: [-113.73069, 48.77176],
        // zoom: 14,
        center: [-87.852598, 41.281220],
        zoom: 5.6,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        zoom: 5.6,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        center: [-80.570281, 38.2542994],
        zoom: 5.6,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },


      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        {
          layer: "pipeline",
          opacity: 1,
          duration: 300,
        },
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        {
          layer: "pipeline",
          opacity: 1,
          duration: 300,
        },
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        {
          layer: "pipeline",
          opacity: 1,
          duration: 300,
        },
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
      ],
      onChapterExit: [
        {
          layer: "pipeline",
          opacity: 1,
          // duration: 300,
        },
      ],
    },
    // {
    //   id: "Bees Midwest1",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter14,
    //   location: {
    //     center: [-92.574814, 44.523483],
    //     zoom: 5.5,
    //     // zoomSmall: 14,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "all_species_fill1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "all_species_line2",
    //       opacity: 0,
    //       duration: 300,
    //     },
        
    //     {
    //       layer: "pipeline",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_2",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_3",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_4",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_5",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    // {
    //   id: "Bees Midwest 2",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter15,
    //   location: {
    //     center: [-92.574814, 44.523483],
    //     zoom: 5.51,
    //     // zoomSmall: 14,
    //     pitch: 0,
    //     bearing: 0
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "all_species_fill1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "all_species_line2",
    //       opacity: 0,
    //       duration: 300,
    //     },
        
    //     {
    //       layer: "pipeline",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_2",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_3",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_4",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_5",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        pipeline_opacity_0,
        prairie_action_area_opacity_0,
        prairie_construction_impact_opacity_0,
        prairie_road_opacity_0,
        prairie_moderate_quality_opacity_0,
        prairie_six_acres_opacity_0,
        prairie_high_quality_opacity_0,
        prairie_degraded_opacity_0,
        prairie_full_opacity_0,
        prairie_base_opacity_0,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          // base
          layer: "prairie_base",
          opacity: 0.4,
          duration: 300,
        },
        {
          layer: "prairie_full",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_full",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_degraded",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_high_quality",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_six_acres",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_moderate_quality",
          opacity: 0,
          // opacity: 1,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_road",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_construction_impact",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_action_area",
          opacity: 0,
          duration: 300,
        },
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          // base
          layer: "prairie_base",
          opacity: 0.6,
          duration: 300,
        },
        {
          layer: "prairie_full",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_degraded",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_high_quality",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_six_acres",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_moderate_quality",
          opacity: 0,
          // opacity: 1,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_road",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_construction_impact",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_action_area",
          opacity: 0,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          // base
          layer: "prairie_base",
          opacity: 0.6,
          duration: 300,
        },
        {
          layer: "prairie_full",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_degraded",
          opacity: 0.2,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_high_quality",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_six_acres",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_moderate_quality",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_road",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_construction_impact",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_action_area",
          opacity: 1,
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
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        pipeline_opacity_0,
        {
          // base
          layer: "prairie_base",
          opacity: 0.6,
          duration: 300,
        },
        {
          layer: "prairie_full",
          opacity: 0,
          // opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_degraded",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_high_quality",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_six_acres",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_moderate_quality",
          opacity: 1,
          // opacity: 1,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_road",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_construction_impact",
          opacity: 1,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_action_area",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Prairie E",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter21,
      location: {
        center: [-89.120177, 42.195437],
        zoom: 13.5,
        // zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      // location: {
      //   // // center: [-89.120167, 42.194537],
      //   // center: [-89.095967, 42.187901],
      //   // zoom: 16,
      //   // // zoomSmall: 14,
      //   // pitch: 60,
      //   // bearing: 20,
      //   // center: [-89.120167, 42.194537],

      //   center: [-89.106067, 42.187901],
      //   zoom: 14.4,
      //   // zoomSmall: 14,
      //   pitch: 0,
      //   bearing: 0,

      // },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        all_species_fill_opacity_0,
        all_species_line_opacity_0,
        pipeline_opacity_0,
        {
          layer: "pipeline",
          opacity: 0,
          duration: 300,
        },
        {
          // base
          layer: "prairie_base",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "prairie_full",
          opacity: 0.5,
          // opacity: 1,
          duration: 300,
        },
        {
          layer: "prairie_degraded",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_high_quality",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_six_acres",
          opacity: 0.5,
          duration: 300,
        },
        {
          layer: "prairie_moderate_quality",
          opacity: 0,
          // opacity: 1,
          duration: 300,
        },
        {
          // prairie section
          layer: "prairie_road",
          opacity: 0.7,
          // opacity: 0.8,
          duration: 300,
        },
        {
          // 
          layer: "prairie_construction_impact",
          opacity: 0,
          // opacity: 0.8,
          duration: 300,
        },
        {
          layer: "prairie_action_area",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    // {
    //   id: "last_image",
    //   alignment: "seventy",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter22,
    //   location: {
    //     center: [-89.120177, 42.195437],
    //     zoom: 13.5,
    //     // zoomSmall: 14,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   // location: {
    //   //   // center: [-89.095967, 42.187901],
    //   //   // zoom: 15,
    //   //   // // zoomSmall: 14,
    //   //   // pitch: 0,
    //   //   // bearing: 0,

    //   //   center: [-89.106067, 42.187901],
    //   //   zoom: 14.4,
    //   //   // zoomSmall: 14,
    //   //   pitch: 0,
    //   //   bearing: 0,

    //   // },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     // {
    //     //   layer: "bee",
    //     //   opacity: 0.5,
    //     //   duration: 300,
    //     // },
    //     {
    //       layer: "all_species_fill1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "all_species_line2",
    //       opacity: 0,
    //       duration: 300,
    //     },
        
    //     {
    //       layer: "pipeline",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_2",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_3",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_4",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_5",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    // {
    //   id: "last_chunk1",
    //   alignment: "center",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter23,
    //   location: {
    //     center: [-89.120177, 42.195437],
    //     zoom: 13.5,
    //     // zoomSmall: 14,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "all_species_fill1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "all_species_line2",
    //       opacity: 0,
    //       duration: 300,
    //     },
        
    //     {
    //       layer: "pipeline",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_2",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_3",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_4",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_5",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // }
   
    // {
    //   id: "last_chunk2",
    //   alignment: "center",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter24,
    //   location: {
    //     center: [-89.120177, 42.195437],
    //     zoom: 13.5,
    //     // zoomSmall: 14,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "all_species_fill1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "all_species_line2",
    //       opacity: 0,
    //       duration: 300,
    //     },
        
    //     {
    //       layer: "pipeline",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_1",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_2",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_3",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_4",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "prairie_5",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },

  ],


   footer: divChapter23,


};
