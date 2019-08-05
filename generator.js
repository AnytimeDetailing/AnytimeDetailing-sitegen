// Version 
// v1.4.3

//system
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const path = require('path');
const fs = require('fs');


//libs
const Handlebars = require('handlebars');
const _ = require('lodash');
const Jimp = require('jimp'); // server img resizer
const chalk = require('chalk');
//specialized
const moment = require('moment');

// external vars and scripts
var data = require('./data');
// Highly custom pages
// none


// Register all Handlebars helpers
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) { //logic helper
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});
Handlebars.registerHelper('urlize', function(item) { //turn this into a url helper
    return fn_BuildSlugSegment(item);
});
// Handlebars.registerHelper('times', function(n, block) {
//     var accum = '';
//     for(var i = 0; i < n; ++i)
//         accum += block.fn(i);
//     return accum;
// });
Handlebars.registerHelper('times', function(n, block) { //do it this many times helper
    var accum = '';
    for(var i = 0; i < n; ++i) {
        block.data.index = i;
        block.data.first = i === 0;
        block.data.last = i === (n - 1);
        accum += block.fn(this);
    }
    return accum;
});
Handlebars.registerHelper('random', function(item) { //choose random from array helper
    return _.sampleSize(item, 1);
});
Handlebars.registerHelper('timg', function(item) { //append -timg helper
    var re_imgmeta = /(.+)\.(.+)$/gi.exec(item);
    // console.log("TIMG: " + re_imgmeta[1] + "-timg." + re_imgmeta[2])
    return re_imgmeta[1] + "-timg." + _.toLower(re_imgmeta[2]);
});
Handlebars.registerHelper('summary', function(item) { //summarizing helper
    var l_summary = item.split(' ')
    l_summary = l_summary.slice(0,100);
    return _.join(l_summary, ' ') + "..."
});


// /--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\
// MAIN
// \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/

// /--\--/--\--/--\
// Build all projects pages and vars
// \--/--\--/--\--/
var allpages_array = [],
allpages_omission = ["","qr"];

// Function for creating dirs array
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);


// Build array of dirs
var projectdirs = getDirectories(process.cwd() + "/images/projects");
// console.log(projectdirs)

// list all files in each dir and create a data.projects object
data.projects = []
projectdirs.forEach(element => {
    var l_date = moment(element, 'YYYY.MM.DD').format()
    var l_name = /\\projects\\[\d\.]*([\w\s]+)/gi.exec(element);
    //read and parse data.json if it exists
    var jsonfile = fn_TryReadFile(element + '/data.json');
    if (jsonfile) {
        jsonfile = JSON.parse(jsonfile);
    } else {
        jsonfile = {}; //give blank file
    }
    //grab text from text.txt if it exists
    var text = fn_TryReadFile(element + '/text.txt');

    // read all files in the dir
    var files = fs.readdirSync(element, {encoding: 'utf8', withFileTypes: true});
    files = files.map(o => { //map to plain array of filenames only
        return o.name;
    });

    // filter all non-images and thumnail images
    var pics = _.filter(files, function(o) {
        return /\.png|\.jpeg|\.jpg/gi.test(o);
    });
    // console.log(files)
    pics = _.filter(pics, function(o) {
        return !/\-timg/gi.test(o);
    });
    //make thumbnails for all project images
    pics.forEach(imgfile => {
        if (imgfile) {
            fn_makethumbnail(element + "\\" + imgfile);
        }
    });
        

    // Find the main image
    var mainimg = ""
    pics.forEach(o => {
        if (_.includes(o,'main')) { 
            mainimg = o;
            return;
        }
    });
    if (mainimg == "") {
        // console.log(pics)
        mainimg = pics[0];
    }

    // Save to data.projects array
    var l_project = {
        date: l_date,
        date_human: moment(l_date).format('MMMM Do YYYY'),
        date_machine: moment(l_date).format('YYYY MM DD'),
        date_MMM: moment(l_date).format('MMM'),
        date_D: moment(l_date).format('D'),
        dir: l_name[0],
        name: l_name[1],
        mainimg: mainimg,
        img: pics[0],
        pics: _.clone(_.sortBy(pics)),
        text: text
    }
    data.projects.push(_.merge({},l_project,jsonfile)); //merge any Data.json file in the folder, prefering the staticly set data
});
// console.log(data.projects)


// Select [3] most recent projects from all projects
data.recentprojects = _.orderBy(data.projects, function(o) {
    return new moment(o.date);
}, ['desc']);
data.recentprojects = data.recentprojects.slice(0,3)
// console.log(data.recentprojects)

// Actually build EACH page project page and write to disk
data.projects.forEach( element => {
    data.page = {};
    data.page.title = element.name + " - " + element.date_human;
    data.gallerymini = element.pics.map(obj => {
        return {
           img: obj,
           dir: element.dir
        }
    });

    //build sections
    data.page.sections = [element,{gallerymini: data.gallerymini}];
    data.img = element.pics[0];
    data.filename = fn_BuildSlugSegment(element.date_machine + "-" + element.name);
    fn_buildpage(data.project_order, data);
});



//build projects list page
data.projects = _.reverse(data.projects);
data.page.title = data.name + " - Projects";
data.filename = "projects";
fn_buildpage(data.projects_order, data);


//build top level gallery
data.page.title = data.name + " - Gallery";
data.filename = "gallery";
fn_buildpage(data.gallerypage_order, data);


//build supplimental service pages
data.services.forEach(element => {
    data.page.title = data.name + " - " + element.name;
    data.filename = fn_BuildSlugSegment(element.name);
    fn_buildpage(data.servicepage_order, data, element);
});


//build main page
data.page.title = data.name + " - Home";
data.filename = "index";
fn_buildpage(data.mainpage_order, data);
//build main page as QR
data.filename = "qr";
fn_buildpage(data.mainpage_order, data);
//Build index for each city
data.cities.forEach(element => {
    data.page.title = data.name + " - " + element;
    data.filename = "index-" + element;
    fn_buildpage(data.mainpage_order, data);
});


//build pages in ./pages-generator (reviews, etc)
fn_generatepagesfromdir(data,'pages-generator')


//build pages in ./pages-blog
data.blogposts = fn_generatepagesfromdir(data,'pages-blog','blog-')
data.randomposts = _.sampleSize(data.blogposts, 5);
//build blog index
data.blogposts = _.reverse(data.blogposts);
data.page.title = data.name + " - Blog";
data.filename = "blog";
fn_buildpage(data.blog_order, data);


// Finished. Log Value for Value message
setTimeout(() => {
    // chalkAnimation.pulse('');
    console.log(chalk.blue('This application and site is made possible by the value for value model. Ask yourself what this site was worth to you this year. Was worth $30 or was it worth $3000?'));
    console.log(chalk.blue('Send that amount to \u001B[96m https://paypal.me/chunjee\u001B[94m Your financial support directly translates into updates and more free tools. Thank you!'));
}, 1000);




// /--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\
// Functions
// \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/

function fn_makethumbnail(para_image, para_options = {}) {
    Jimp.read(para_image, (err, img) => {
        if (err) return;
        var re_imgmeta = /(.+\\)*(.+)\.(.+)$/gi.exec(para_image);
        var img_finalpath = re_imgmeta[1] + '\\' + re_imgmeta[2] + '-timg.jpg';
        // Jimp.AUTO
        // ratio = orginialHeight / newHeight
        // newWidth = orginialWidth * ratio

        //cut the timg a bit if it is too tall
        if (img.bitmap.height > img.bitmap.width) {
            try {
                img
                .resize(250, Jimp.AUTO) // resize
                .quality(90) // set JPEG quality
                .write(img_finalpath); // save
            } catch (error) {
                // console.log(error)
                return false;
            }
            return true;
        }
        
        try {
            img
            .resize(250, Jimp.AUTO) // resize
            .quality(90) // set JPEG quality
            .autocrop({})
            .write(img_finalpath); // save
        } catch (error) {
            // console.log(error)
            return false;
        }
    });
}

function fn_buildpage(para_arrayofblocks,para_data,para_supplimental = "") {
    //read requested blocks from disk
    var blockarray = [];
    para_arrayofblocks.forEach(element => {
        var l_html = fs.readFileSync(process.cwd() + '/blocks/' + element + '.html', 'utf8');
        blockarray.push(l_html);
    });
    var l_source = '<!doctype html><html lang="en">'
    for (let index = 0; index < blockarray.length; index++) {
        const element = blockarray[index];
        var l_source = l_source + '\n' + element;
    }
    l_source = l_source + '\n</body></html>\n'; // close the body and html tag
    l_source = _.replace(l_source,/ type=\"text\/javascript\"/g,''); //zero out js definitions as they are not recommended html


    //Append supplimental data if supplied
    if (para_supplimental != "") {
        para_data.thispage = _.clone(para_supplimental);
    }

    // Grab the page being created and append to title (done outside as we don't know the file to write)

    ///Compile page and make any final changes
    var template = Handlebars.compile(l_source);
    var page = template(para_data);
        //we do it twice because some {{ handlebars }} are embedded a second layer deep in json files
    template = Handlebars.compile(page);
    page = template(para_data);

    page = fn_SwapBackSlashes(page); // replace any backslashes

    //Write the page to disk
    var filename = fn_BuildSlugSegment(para_data.filename) + ".html";
    console.log("Writing " + filename + " to disk");
    fs.writeFile(filename, page, function(err) {
        if (err) {
            return console.log(err);
        }
    });

    //return the page if for some reason needed (currently not)
    return page;
}

function fn_generatepagesfromdir(para_data,para_dir,para_filenameprepend = "") {
    var mutated_array = [];
    var files = fs.readdirSync(process.cwd() + '/' + para_dir, {encoding: 'utf8', withFileTypes: true});
    array_generatepages =  _.filter(files, function(o) {
        // filter out any files that are not json
        return /\.json|\.JSON/gi.test(o.name);
    });
    for (let index = 0; index < array_generatepages.length; index++) {
        const element = array_generatepages[index];
        
        var pagejson = fs.readFileSync(process.cwd() + '/' + para_dir + '/' + element.name , 'utf8');
        var parsedjson = JSON.parse(pagejson);
        // console.log(JSON.parse(pagejson));

        para_data = _.merge({},para_data,parsedjson);
        para_data.page.sections = parsedjson.sections;
        para_data.title = element.name
        para_data.filename = fn_BuildSlugSegment(para_filenameprepend + element.name)
        if (parsedjson.title) {
            para_data.page.title = para_data.name + " - " + parsedjson.title;
        } else {
            para_data.page.title = para_data.name + " - " + para_data.filename;
        }
        if (parsedjson.date) {
            var l_date = Date(parsedjson.date).toISOString;
            para_data.date_human = moment(l_date).format('MMMM Do YYYY');
            para_data.date_machine = moment(l_date).format('YYYY MM DD');
            para_data.date_MMM = moment(l_date).format('MMM');
            para_data.date_D = moment(l_date).format('D');
        }

        if (parsedjson.order) {
            // write out any extra filenames requested
            if (!parsedjson.fileoutputs) {
                parsedjson.fileoutputs = [para_data.filename]; //make it an array no matter what
            } else {
                parsedjson.fileoutputs.push(para_data.filename);
            }
            for (let index = 0; index < parsedjson.fileoutputs.length; index++) {
                para_data.filename = parsedjson.fileoutputs[index];
                fn_buildpage(parsedjson.order, _.clone(para_data));
            }
        }
        mutated_array.push(_.merge({},para_data,parsedjson));
    }
    return mutated_array;
}

function fn_SwapBackSlashes(para_input) {
    return _.replace(para_input,/\\/g,'/');
}

function fn_BuildSlugSegment(para_text) {
    var out = _.truncate(para_text, {length: 42, omission: ''});
    out = _.replace(out,".json","")
    out = _.toLower(_.replace(_.trim(out),/\s/g,"-")); //replace all spaces with dashes, trimming all trailing whitespace first
    if (_.includes(para_text,".html") && !_.includes(out,".html")) {
        console.log("ERROR INCOMING");
    }
    return out;
}

function fn_TryReadFile(para_path) {
    try {
        if (fs.existsSync(para_path)) {
            var l_text = fs.readFileSync(para_path, 'utf8');
        }
    } catch(err) {
        // return false;
    }
    if (l_text) {
        return l_text;
    }
    return false;
}
