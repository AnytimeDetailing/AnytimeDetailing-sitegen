// /--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\
// Data
// \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/

var _ = require('lodash');


// Vars
var scheduleurl = "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=mainsite";
var phonenumber = "(234)248-6533";
var ownername = "Shawn";
var cities = ["Portland","Hillsboro","Bethany","Beaverton","Aloha"];

// /--\--/--\--/--\
// packages listing
// \--/--\--/--\--/
// 
// Express Detail
var detail1_out = [
    "Three-step foam wash",
    "Hand wash",
    "Clearcoat clay scrub",
    "Doorjams clean",
    "All windows washed",
    "Quick wax",
    "Plush dry",
    "Tires washed",
    "Tires shined"
]
var detail1_in = [
    "Complete vacuum",
    "Trunk cleaned and vacuumed",
    "Floormats and carpets shampooed",
    "Light seat stains removed",
    "Scuffmarks removed",
    "Dashboard detailed",
    "Door panels cleaned",
    "Cupholder scrub",
    "Air freshened professionally",
    "Plastic protectant applied"
]
// Superior Detail
var detail2_out = [
    "Four-step foam wash",
    "Hand wash",
    "Clearcoat clay scrub",
    "Engine plastic clean",
    "Doorjams cleaned",
    "All windows washed",
    "Windshield sealed",
    "Premium wax OR six-month sealant",
    "Plush dry",
    "Tail pipes are cleaned and polished",
    "Tires washed",
    "Tires shined"
]
var detail2_in = [
    "Complete vacuum",
    "Trunk cleaned and vacuumed",
    "2-pass floormat deep clean",
    "Gum disintigrated and removed",
    "Seat stains removed twice",
    "Scuffmarks removed",
    "Dashboard detail",
    "Door panel clean",
    "Cupholder scrub",
    "Plastic protectant applied",
    "All belts cleaned",
    "All trim dressed",
    "Headliner cleaned"
]

// Premium Detail
var detail3_out = _.clone(detail2_out);
    detail3_out.push(
        "Clearcoat clay scrub",
        "Doorjams cleaned",
        "All windows washed",
        "Windshield sealed",
        "Premium wax OR six-month sealant",
        "Plush dry",
        "Tail pipes are cleaned and polished",
        "Tires washed",
        "Tires shined",
        "All trim dressed",
        "Windows, Mirrors & Sunroof are cleaned",
    )
var detail3_in = _.clone(detail2_in);
    detail3_in.push(
        "Complete vacuum",
        "2nd stage deep vacuum",
        "Trunk cleaned and vacuumed",
        "Floormats and carpets shampooed",
        "Gum disintigrated and removed",
        "Seat stains removed twice",
        "Leather seats treated",
        "Secret Sauce trim restoration",
        "Inch by inch clean",
        "Scuffmarks removed",
        "All trim dressed",
        "All gauges, vents, and steering wheel detailed",
        "Door panel clean",
        "Cupholder scrub",
        "Plastic protectant applied",
        "All belts cleaned",
        "Headliner cleaned"
    )


// packages_detailing
var packages_detailing = [
    { name: "Express Detail",
    time: "1.5 to 3",
    cost: "198",
    exterior: _.uniq(detail1_out),
    interior: _.uniq(detail1_in),
    icon: "fa fa-chevron-up",
    url: "",
    img: "images/service/service_1.jpg",
    alt: "a bronze checkered background incidating quality of service" },
    
    { name: "Superior Detail",
    time: "4 to 5",
    cost: "349",
    exterior: _.uniq(detail2_out),
    interior: _.uniq(detail2_in),
    icon: "fa fa-angle-double-up",
    url: "",
    img: "images/service/service_2.jpg",
    alt: "a silver checkered background incidating quality of service" },
    
    { name: "Premium Detail",
    time: "6 to 7",
    cost: "449",
    exterior: _.uniq(detail3_out),
    interior: _.uniq(detail3_in),
    icon: "fa fa-certificate",
    url: "",
    img: "images/service/service_3.jpg",
    alt: "a gold checkered background incidating quality of service" },
]


// Hours
var week = [
    {name: "Monday", open: 5, close: 18, string: "3:00 PM - 8:00 PM"},
    {name: "Tuesday", open: 5, close: 18, string: "Closed"},
    {name: "Wednesday", open: 5, close: 18, string: "Closed"},
    {name: "Thursday", open: 5, close: 18, string: "5:00 AM - 8:00 PM"},
    {name: "Friday", open: 5, close: 18, string: "5:00 AM - 8:00 PM"},
    {name: "Saturday", open: 5, close: 18, string: "5:00 AM - 8:00 PM"},
    {name: "Sunday", open: 5, close: 18, string: "Closed"},
]

// Carosel
var carousel_array = [
    { img: "/images/slider/slider-1.jpg",
    smalltext: "We offer",
    headertext: "Quality <span>Detailing</span>",
    maintext: "We turn the car you drive back into the car you love!",
    buttontext: "Schedule Now",
    buttonlink: "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=carousel"},
    { img: "/images/slider/slider-2.jpg",
    smalltext: "Award Winning",
    headertext: "Headlight <span>Restoration</span>",
    maintext: "Get back your headlights original shine and clarity",
    buttontext: "Schedule Polishing",
    buttonlink: "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=carousel"},
    { img: "/images/slider/slider-3.jpg",
    smalltext: "",
    headertext: "Commitment <span>to Quality</span>",
    maintext: "We understand your car is personal and precious. We treat it with the same love and care that you do",
    buttontext: "Make Appointment",
    buttonlink: "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=carousel"},
    { img: "/images/slider/slider-4.jpg",
    smalltext: "",
    headertext: "Only <span>The Best</span>",
    maintext: "We strive to use the best products available to safely and effectively complete any project. We do not use consumer grade or dealership \"quick detail\" products ever.<br><br>We offer all the products we use with instructions to those interested in maintaining their vehicle between details.",
    buttontext: "Call " + phonenumber + " to order",
    buttonlink: "tel://+1" + _.replace(phonenumber,/(\(|\)|\-)/gi,"")}
]

var banners = ["car","polish","polish2","redcar","wetsand","buff","vac"]


//ALLDATA
var data = { name: "Anytime Detailing",
    motto: "A fresh clean feeling. Guaranteed",
    page: {},
    phonenumber: phonenumber,
    contactemail: "contact@anytimedetailing.com",
    hours: {general: "Thur - Sat 5:00AM - 8:00PM", week: week},
    cities: cities,
    city: cities[0],
    state: "Oregon",

    social_media: [
        {name: "facebook",
        icon: "fa fa-facebook",
        url: "https://www.facebook.com/Anytime-Detailing-2383311868546835"},
        // {name: "twitter",
        // icon: "fab fa-twitter",
        // url: ""},
        {name: "instagram",
        icon: "fa fa-instagram",
        url: "https://www.instagram.com/detailinganytime/"},
    ],


    mainpage_order: ['head','topbar','header','nav','carousel','workingprocess','whychooseus','allservices','about','ba-ticker','footer','socialproof','scripts'],
    servicepage_order: ['head','topbar','header','nav','servicedetails','ticker','footer','socialproof','scripts'],
    gallerypage_order: ['head','topbar','header','nav','gallery','projectsrow','testimonials','ticker','footer','socialproof','scripts'],
    project_order: ['head','topbar','header','nav','page','testimonials','ticker','footer','socialproof','scripts'],
    projects_order: ['head','topbar','header','nav','right-sidebar-projects','ticker','footer','socialproof','scripts'],
    blog_order: ['head','topbar','header','nav','right-sidebar-blog','ticker','footer','socialproof','scripts'],



    external_link: {"schedule": scheduleurl},

    carousel: carousel_array,

    banners: banners,

    recentprojects: [],

    packages: packages_detailing,
    services: [
        { name: "Ceramic Coating",
        desc: "10x more protection than wax and lasts years, the list of benefits goes on and on",
        icon: "icon-car_2",
        url: "",
        img: "images/service/service_ceramic.jpg",
        alt: "",
  
        imgs: [""],
        brief: ["Ceramic coatings are relatively new but very popular with good reasoning, they lock in a vehicle's appearance, enhance gloss greatly, offer way more protection than traditional waxes or sealants, and add highly desirable water repelling properties."],
        detailed: ["<h3>What are ceramic coatings?</h3>","Ceramic coatings are a liquid polymer that is applied by hand to the exterior of a vehicle. The coating chemically bonds with the vehicle’s factory paint. The coating cures when exposed to air, and hardens to a layer of protection that is thicker and stronger than any other coating.",
        "<h3>Types of Coatings</h3>","Coatings exist for several different applications. Although this page mostly discusses coatings for paint, it is also possible to coat plastic trim, glass, seats (both cloth and leather), wheels, or even soft top canvas.",
        "<h2>Process</h2>",
        "<h3>1</h3>","Once a ceramic coating goes on, micro-scratches and other paint defects will be locked underneath the protective layer, so we always start with cleaning and inspecting the paint. Oftentimes a ceramic coating will come paired with machine polishing to raise the vehicle’s appearance level, before locking in the perfected paint.",
        "<h3>2</h3>","The entire car is prepped with isopropyl alcohol to remove any polishing agents, waxes, or debris. this kind of alcohol evaporates in less than about ten seconds, making it better than water for a final surface preparation.",
        "<h3>3</h3>","Now the ceramic is applied to the vehicle panel by panel. Complete coverage at this stage is crutial as any missed spots will lead to gaps or highspots. Over the next four to eight minutes, the solution will bond to the paint and cure. UV lights can be used to expedite the curing process and may be used at this time. Once cured, the remaining transfer solution can be wiped and buffed.",
        "<h3>4</h3>","A final inspection can now occur. The coating will continue to harden and fully cure over the next 24 hours.",],
        list: ["Superior Protection","Expert Application","Gloss Enhancement","Color Enhancement","Long Lasting"],
        options: [
           {name: "Daily Driver Ceramic",
           price: "250",
           tag: "Great",
           desc: "Great protection for all painted surfaces on the vehicle",
           list: ["Entire vehicle","Incredible gloss","Excellent Protection"]
           },
           {name: "Luxury Ceramic",
           price: "550",
           tag: "Best",
           desc: "Highest rated protection for all painted panels plus specially formulated plastic protection",
           list: ["Entire vehicle","Incredible gloss","Inch-by-inch "]
           }
        ]},

        { name: "Full-Range Detailing",
        desc: "Do you need a quick interior cleaning or a full scrubdown? We have the perfect service for your vehicle.",
        icon: "fa fa-map-pin",
        url: "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=service",
        img: "images/service/service_img1.jpg",
        alt: "soapy car grill being cleaned with a brush",

        img1: "service/detail1.jpg",
        img2: "service/detail2.jpg",
        imgs: ["images/service/headlights_1.jpg","images/service/headlights_2.jpg","images/service/headlights_3.jpg"],
        brief: ["Not just a quick wash. A good detail will make the car gleam, minimize surface scratches, and Anytime Detailing always applies a shielding paint sealant to finish and protect your perfected paint."],
        detailed: ["<h3>Washing</h3>","The first step involves spraying the car with a high-powered pressure washer to knock off loose dirt. We then cover the entire car with a foamy wash to loosen and break down any road grime, dirt, and oil. Next a thorough hand washing on the rims of the car, door jambs, glass and all exterior parts takes place. Depending on the detailing package, more steps may take place at this time, but the final step is a rinse.",
        "<h3>Clay</h3>","A clay bar is used to remove other residue that cannot be removed with normal detergents. When dirt and even small particles of metal sit on the car's paint, they become embedded in the clearcoat and won't come out with any ammount of soap.",
        "<h3>Polish</h3>","After a car has been used for a while, it is normal that it loses its shine and gloss. In this process, the original polish is restored.",
        "<h3>Seal</h3>","Finally, the paint is protected with a sealant or wax. This fills any remaining imperfections, hydrates and protects the clearcoat, and gives the car a glossy shine. Anytime Detailing uses sythetic polymere sealants that repel water and give your car a beaded look after Portland showers; best of all, it lasts around 6 months unlike most retail waxes that need to be cleared and re-applied every month."],
        review: ["Driving a shiny car is highly rewarding. A clean car reflects the driver. It shows that you care about your vehicle; it makes you feel proud and confident while on the road. You'll be more comfortable inside as well after we clear the ventilation and carpeting of any dust particles. With Anytime Detailing your car remains clean inside and out."],
        list: ["Three-Step Foam Wash (or more depending on package)","Hand Wash","Clayed to perfection","Polish","Seal","Interior vaccum and deep clean","..More details on main page"],
        options: [
            {name: packages_detailing[0].name,
            price: packages_detailing[0].cost,
            tag: "Good",
            list: _.concat(_.sampleSize(_.concat(packages_detailing[0].interior,packages_detailing[0].exterior), 5),[".. and more (see main page for full list)"])},
            {name: packages_detailing[1].name,
            price: packages_detailing[1].cost,
            tag: "Better",
            list: _.concat(_.sampleSize(_.concat(packages_detailing[1].interior,packages_detailing[1].exterior), 5),[".. and more (see main page for full list)"])},
            {name: packages_detailing[2].name,
            price: packages_detailing[2].cost,
            tag: "Best",
            list: _.concat(_.sampleSize(_.concat(packages_detailing[2].interior,packages_detailing[2].exterior), 5),[".. and more (see main page for full list)"])}
        ]},

        { name: "Headlight Restoration",
        desc: "Headlight plastic yellows and fades over time. We polish your headlights back to life and seal them with a yearlong protective coating.",
        icon: "icon-solution",
        url: "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=service",
        img: "images/service/service_img2.jpg",
        alt: "a brilliant car headlight sparkles in indoor lighting",

        img1: "service/headlights1.jpg",
        img2: "service/headlights2.jpg",
        imgs: ["images/service/headlights_1.jpg","images/service/headlights_2.jpg","images/service/headlights_3.jpg"],
        brief: ["Dull, yellow, fogged up headlights can be hazard while driving.  Not only for you, but for other vehicles, as well. The ability to see, and be seen, is extremely important for the safety of you and other vehicles around you.","The cloudy appearance of your headlights is caused by years of oxidation. Oxidized headlights aren’t necessarily the poor maintenance, they are the result of time and exposure to the outdoor elements. UV light, road debris, sun and other atmospheric elements can all contribute to your cloudy headlights.  "],
        detailed: ["We use 3 step process to clean and restore your yellow, fogged up and cloudy headlights. The process is relatively simple and the key to success is our experience and having the correct tools and equipment.","Headlight restoration can be a less expensive alternative to replacing your headlamps. Considering new, or even used, headlights are $200 or more, headlight restoration from a trained professional is definitely a better value. "],
        list: ["Yellowing layers removed","Haze and scratches sanded down","Strip old factory coating off", "Apply an appropriate thickness of a new coating", "Buff to a crystal clear shine"],
        options: [
            {name: "New coating, no correction",
            price: "50 per headlight",
            tag: "Good",
            list: ["5 year coating","Best if headlights are clear already","Included free in Premium Detail package"]
            },
            {name: "Per headlight",
            price: "75 per headlight",
            tag: "Best",
            list: ["10+ year coating","LIFETIME Warranty"]
            },
            {name: "New Headlight",
            price: "200+",
            list: ["Please call about your year and model","Cannot be performed if bumper removal is required"]
            }
        ]},

        { name: "Machine Polishing",
        desc: "Paint not what it once was? It's time to experience our professional restoration and give your paint a mirror finish.",
        icon: "icon-car_2",
        url: "https://housecallpro.com/book/Anytime-Detailing/a8ff4d9d81f54608a62f719807c1b159?attribution=service",
        img: "images/service/service_img3.jpg",
        alt: "a red car hood separated in two with a piece of tape. One side reflects light almost like a mirror, while the other displays a flat dull color",
    
        img1: "service/polish1.jpg",
        img2: "service/polish2.jpg",
        imgs: ["images/service/headlights_1.jpg","images/service/headlights_2.jpg","images/service/headlights_3.jpg"],
        brief: ["Clearcoat is key to a car's gloss, shine, and overall paint health. Over time, barely visible scratch accumulate and UV rays cause the clearcoat to become hazy. If you've ever taken a close look at your car on a paticularly sunny day, you may have noticed 'spider web' like scratches visible in the direct sunlight"],
        detailed: ["<h3>Paint Correction</h3>","Using special compounds and equipment, we machine polish the vehicle's paint to permanently remove unsightly imperfections such as the aforementioned spider webbing, swirl marks, hologramming and various other defects.",
        "<h3>Do I need it?</h3>","If you are currently dissatisfied with the overall appearance of your vehicles paint even after washing, you absolutely need paint correction. Because paint correction can <strong>only</strong> be performed with a totally clean paint surface, all paint correction includes a prepatory wash and clay bar service, as well as our standard detailing features",
        "<h2>Process</h2>",
        "<strong>1 - </strong> Once the paint is clean and ready for correction, we inspect the clearcoat using specialized lighting, meters, and expertice. The paint surface is cleaned even further to remove every last trace of embedded contaminants. Just getting to this level of cleanliness can take over an hour and goes well beyond regular car wash soaps or clay.",
        "<strong>2 - </strong> We determine the level of correction that can safely be performed and select the right compound product and equipment for your specific vehicle.",
        "<strong>3 - </strong> Using a machine buffer, the paint is treated and brought to a mirror finish using a one or two step polish compounds.",
        "<strong>4 - </strong> Finally, a cleaner wax or ceramic coating is applied to fill and protect the paint. Sealing is very important, as it would be a waste to let the newly perfected paint be exposed again to the elements.",
        "<strong>4 - </strong> Finally, a cleaner wax or ceramic coating is applied to fill and protect the paint. Sealing is very important, as it would be a waste to let the newly perfected paint be exposed again to the elements.",
        "<p></p>"
        ],
        options: [
            {name: "Quick Correction",
            price: "300",
            tag: "Great",
            desc: "Light swirl and mark removal finished with our paint sealant is perfect for all budgets and daily drivers",
            list: ["30-40% Defect Removal","Sealed and protected"]
            },
            {name: "Show Ready",
            price: "400-$600",
            tag: "Best",
            desc: "Light swirl and mark removal finished with our paint sealant is perfect for all budgets and daily drivers",
            list: ["80-90%+ Defect Removal","Sealed and protected"]
            }
        ]},
    ],


    gallery: [
        {img: "gallery_1b.jpg", line1:"Before"},
        {img: "gallery_1a.jpg", line1:"After"},
        {img: "gallery_2b.jpg", line1:"Before"},
        {img: "gallery_2a.jpg", line1:"After"},
        {img: "gallery_3b.jpg", line1:"Before"},
        {img: "gallery_3a.jpg", line1:"After"},
        {img: "gallery_4b.jpg", line1:"Before"},
        {img: "gallery_4a.jpg", line1:"After"},
        {img: "gallery_5b.jpg", line1:"Before"},
        {img: "gallery_5a.jpg", line1:"After"},
        {img: "gallery_6b.jpg", line1:"Before"},
        {img: "gallery_6a.jpg", line1:"After"},
        {img: "gallery_7b.jpg", line1:"Before"},
        {img: "gallery_7a.jpg", line1:"After"},
        {img: "gallery_8b.jpg", line1:"Before"},
        {img: "gallery_8a.jpg", line1:"After"},
        {img: "gallery_9b.jpg", line1:"Before"},
        {img: "gallery_9a.jpg", line1:"After"},
        {img: "gallery_10b.jpg", line1:"Before"},
        {img: "gallery_10a.jpg", line1:"After"},
        {img: "gallery_11b.jpg", line1:"Before"},
        {img: "gallery_11a.jpg", line1:"After"},
        {img: "gallery_12b.jpg", line1:"Before"},
        {img: "gallery_12a.jpg", line1:"After"},
        {img: "gallery_13b.jpg", line1:"Before"},
        {img: "gallery_13a.jpg", line1:"After"},
        {img: "gallery_14b.jpg", line1:"Before"},
        {img: "gallery_14a.jpg", line1:"After"},
        {img: "gallery_15b.jpg", line1:"Before"},
        {img: "gallery_15a.jpg", line1:"After"},
        {img: "gallery_16b.jpg", line1:"Before"},
        {img: "gallery_16a.jpg", line1:"After"},
        {img: "gallery_17b.jpg", line1:"Before"},
        {img: "gallery_17a.jpg", line1:"After"},
        {img: "gallery_18b.jpg", line1:"Before"},
        {img: "gallery_18a.jpg", line1:"After"},
        {img: "gallery_19b.jpg", line1:"Before"},
        {img: "gallery_19a.jpg", line1:"After"},
        {img: "gallery_20b.jpg", line1:"Before"},
        {img: "gallery_20a.jpg", line1:"After"},
        {img: "gallery_21b.jpg", line1:"Before"},
        {img: "gallery_21a.jpg", line1:"After"},
        {img: "gallery_22b.jpg", line1:"Before"},
        {img: "gallery_22a.jpg", line1:"After"},
        {img: "gallery_23b.jpg", line1:"Before"},
        {img: "gallery_23a.jpg", line1:"After"},
        {img: "gallery_24b.jpg", line1:"Before"},
        {img: "gallery_24a.jpg", line1:"After"},
        {img: "gallery_25b.jpg", line1:"Before"},
        {img: "gallery_25a.jpg", line1:"After"},
        {img: "gallery_26b.jpg", line1:"Before"},
        {img: "gallery_26a.jpg", line1:"After"},
    ],


    tickers: [
        {img: "images/clients/r-gtechniq2.png"},
        {img: "images/clients/r-eagleone.png"},
        {img: "images/clients/r-valspar.png"},
        {img: "images/clients/r-blog.png", url:"gallery.html"},
        {img: "images/clients/r-malco.png"},
        {img: "images/clients/r-ps.png"},
        {img: "images/clients/r-sema.png"},
        {img: "images/clients/r-mothers.png"},
        {img: "images/clients/r-menzerna2.png"},
        {img: "images/clients/r-sonax.png"},
        {img: "images/clients/r-igl.png"},
    ],


    testimonials: [
        {name: "Teresa R Bond",
        car: "2015 F250",
        text: "Saved me a bundle! I had a large tear in my leather seat. The dealership said the tear was too extensive to repair and would cost nearly 2k to replace. A colleague suggested I run it by Anytime Detailing just to see if there was anything they could do… So glad I did, they repaired the seat for a fraction of the price and 24 hours later my leather seat was as good as new!",
        stars: 5,
        service: "Leather Repair",
        img: "f/76.jpg"
        },
        {name: "Theresa Eurich",
        car: "2005 GS 300",
        text: "The paint polishing made the car look brand new. Fantastic work to match customer service means this will certainly result in repeat business from me.",
        stars: 5,
        service: "Paint Correction",
        img: "f/5.jpg"
        },
        {name: "Richard Vasquez",
        car: "2007 Denali",
        text: "We went ahead with the superior detail and the and were very pleased with the result. They were very courteous and did an excellent job on our Denali. We will definitely recommend them to others, and use them again when the need arises.<br><br>Thanks Guys!!",
        stars: 5,
        service: "Superior Detail",
        img: "m/40.jpg"
        },
        {name: "Helen Hagen",
        car: "2014 Soul",
        text: "4 years of kids backseat messes disappeared like magic! Exceeded my expectations in every way. I wish I had more cars just so I could see the fun transformation again!",
        stars: 5,
        service: "Superior Detail",
        img: "f/54.jpg"
        },
        {name: "Mark M Fennell",
        car: "2011 Tuscon",
        text: "Awesome service! Super easy to schedule a time.. Car looks awesome! I have 3 kids with food, juice and other random kid stains inside of the car and my car looks completely brand new. I have used them twice and will continue to use them anytime we are in Portland.",
        stars: 5,
        service: "Premium Detail",
        img: "m/72.jpg"
        },
        {name: "Paul Walters",
        car: "2009 Vue",
        text: "The tech asked if there where any special instructions I said yes “My daughter has spilled milk formula in the back on more then one occasion can you get that out?” Not only was the horrible smell gone but the car smells better then it ever has.",
        stars: 5,
        service: "Express Detail",
        img: "m/85.jpg"
        },
        {name: "Alicia Brazil",
        car: "2006 H3",
        text: "Amazing Operation! Very Professional and Prompt. My 06 BLACK H3 was getting duller every week. They made it look new again. I could not be happier.",
        stars: 5,
        service: "Paint Correction",
        img: "f/01.jpg"
        },
        {name: "Henry Goncalves",
        car: "2011 Dart + 2010 Xterra",
        text: "Came to my shop and polished two sets of headlights. This is a very well run operation that I gladly recommend to my friends.",
        stars: 4,
        service: "Headlight Restoration",
        img: "m/58.jpg"
        },
        {name: "Pamela Greene",
        car: "2015 Camero",
        text: "Great service, we’ll be back!",
        stars: 5,
        service: "Premium Detail",
        img: "f/03.jpg"
        },
        {name: "Jack Blakemore",
        car: "2011 Expedition",
        text: "They went well beyond my expectations and sprayed the running boards with a sealant to prevent rust. It looks almost as good as when we bought it.",
        stars: 5,
        service: "Premium Detail",
        img: "m/89.jpg"
        },
        {name: "Kevin Edgington",
        car: "2007 Cruze",
        text: ownername + " is amazing! He responded immediately and all 3 of our vehicles look great. We had our Cruze detailed in hopes of selling it and it sold the very next day! " + ownername + " and his assistant are very friendly, knowledgeable, and professional. We will definitely be booking more appts with Anytime Detailing in the future. Thank you " + ownername + "!",
        stars: 5,
        service: "Superior Detail",
        img: "m/1.jpg"
        },
        {name: "Irene Eades",
        car: "2013 Escape",
        text: "I was just expecting a nice wash and detail inside. " + ownername + " made the black trim and handles look like new! I'm writing this 2 months after the service, whatever he's using really works!",
        stars: 5,
        service: "Superior Detail",
        img: "f/47.jpg"
        },
        {name: "Bonnie Smith",
        car: "2011 Camry",
        text: "Stains on all 4 seats... Completely Gone! I had no idea it was even possible! I have clean seats again!",
        stars: 5,
        service: "Superior Detail",
        img: "f/52.jpg"
        },
        {name: "Martin Lewis",
        car: "2011 Camry",
        text: "My car was pretty bad when I came to this man and now I've never seen it cleaner it's like the day I bought it and that's a fact stop taking so much time to call him and detail your ride. Do it today stop waiting A++",
        stars: 5,
        service: "Superior Detail",
        img: "m/4.jpg"
        },
        {name: "Kyle Ricker",
        car: "2017 Wrangler",
        text: "Thank you " + ownername + " for making my jeep look brand new again. You'd never even know I was a dog owner",
        stars: 5,
        service: "Superior Detail",
        img: "m/2.jpg"
        },
        {name: "Catherine A Mahon",
        car: "2008 CRV",
        text: ownername + " brought our '08 CRV back to life. Couldn't be happier. It wasn't easy as we neglected the car for so long parking under trees and caterpillars! Thank you, " + ownername,
        stars: 5,
        service: "Premium Detail",
        img: "f/4.jpg"
        },
    ],

    footerlinks: [
        {text: "Home", url: "index.html"},
        {text: "Terms of Service", url: "tos.html"},
    ]
};


//Append any data

// /--\--/--\--/--\
// Perform some shuffling of data to keep the site fresh in google's eyes
// \--/--\--/--\--/

//change order of testimonials
data.testimonials = _.shuffle(data.testimonials);

//Generate a smaller sample of the gallery for use in ticker and sidebars
var temp_array = [];
data.samplegallery = [];
var gallerysize = data.gallery.length / 2;
for (let index = 0; index < 7; index++) {
    var selectednumber = Math.floor(Math.random() * gallerysize) + 1;
    // Skip repeated random selections
    if (temp_array.indexOf(selectednumber) !== -1) {
        index--;
        continue;
    }
    temp_array.push(selectednumber);
    data.samplegallery.push("gallery_"+selectednumber+"b.jpg","gallery_"+selectednumber+"a.jpg");
}


module.exports = data;
