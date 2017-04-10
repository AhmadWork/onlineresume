var bio = {
  name : "Ahmed alsehaim",
  role : "Front End Web Developer",
  contacts : {
            mobile : "966504110581",
            email : "a7madswe@gmail.com",
            github : "ahmadswork",
            location : "Riyadh , saudi arabia"
          },

welcomeMessage: "Welcome to my online CV ",
skills: ["Java","HTML", "CSS", "JavaScript", "jQuery"],
biopic: "images/fry.jpg",

display: function () {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts, #footerContacts").append(formattedMobile);
$("#topContacts, #footerContacts").append(formattedEmail);
$("#topContacts, #footerContacts").append(formattedGithub);
$("#topContacts, #footerContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {

var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
$("#header").append(formattedSkills);

}

  }
  
 }
};

bio.display();

var education = {
    schools : [{
        name: "alsadiq High School",
        degree: "High School Degree",
        dates: "2013",
        location: "alsadiq high school , Riyadh",
        majors: ["scince"]
    },{
        name: "King Saud University",
        degree: "bachelor",
        dates: "2018",
        location: "King saud university ,Riyadh",
        majors: ["Software Engineering"],
       
    }],
    onlineClasses : [{
        title: "Nanodegree Front-End Web Development",
        school: "Udacity",
        dates: "2016",
        url: "http://www.udacity.com"
    },
    {
        title: "Ios 10",
        school: "Udemy",
        dates: "2015",
        url: "http://www.udemy.com"
    }],
display : function () {
    
        $("#education").append(HTMLschoolStart);
if (education.schools.length > 0) {
for (var i = 0; i < education.schools.length; i++) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        
      $(".education-entry").append(formattedschoolName);
          $(".education-entry").append(formattedschoolDegree);
             $(".education-entry").append(formattedschoolDates);
                $(".education-entry").append(formattedschoolLocation);
               for (var j = 0; j < education.schools[i].majors.length; j++) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
        $(".education-entry").append(formattedschoolMajor);
    }
  }
}
    var formattedonlineHeader = HTMLonlineClasses;
    $(".education-entry").append(formattedonlineHeader);

    if (education.onlineClasses.length > 0) {
        $("#education").append(HTMLschoolStart);

for (var j = 0; j < education.onlineClasses.length; j++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[j].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[j].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[j].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[j].url);
     
           $(".education-entry").append(formattedonlineTitle);
          $(".education-entry").append(formattedonlineSchool);
             $(".education-entry").append(formattedonlineDates);
                $(".education-entry").append(formattedonlineURL);
     
    }

}
}
};

education.display();

var projects = {

	project :[
{
title : "Mockup Article",
dates : "2016-2-2",
description : "tranforming a pdf file to a website",
img : ["images/p1.jpeg"]
},
{
title : "Animal Card",
dates : "2016-5-2",
description : "Making a simple animal card ",
img : ["images/p2.jpg"]
}
,
{
title : "Porfolio website",
dates : "2016-7-2",
description : "Making a personal Porfolio website ",
img : ["images/p3.jpeg"]
}
,{
title : "Online Resume",
dates : "2016-9-2",
description : "Makin an online resume",
img : ["images/p4.jpg"]

}
]
,
display : function () {
if(projects.project.length>0){
  $("#projects").append(HTMLprojectStart);


for (var i = 0; i < projects.project.length; i++) {
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
var formattedProjectDates= HTMLprojectDates.replace("%data%", projects.project[i].dates);
var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[i].description);


 $(".project-entry").append(formattedProjectTitle);

$(".project-entry").append(formattedProjectDates);

$(".project-entry").append(formattedProjectDesc);
for (var j = 0; j < projects.project.i.length; j++) {
var formattedProjectimg = HTMLprojectImage.replace("%data%", projects.project[i].img[j]);
$(".project-entry").append(formattedProjectimg);
}
}
}
}
};
projects.display();




var work = {

	jobs :[
{
employer : "ELM co",
title : " junior software Engineer",
dates : "2013-2015",
location : "elm ,riyadh",
description: "one of the junior software Engineer staff"
}
,
{
employer : "IBM co",
title : "project manager",
dates : "2015-present",
location : "IBM ,riyadh",
description: "Project Manager for a secret project"
}
],
display : function () {
if(works.work.length>0){
  $("#workExperience").append(HTMLworkStart);


for (var i = 0; i < works.work.length; i++) {
var formattedWorkemp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
var formattedWorkTitle= HTMLworkTitle.replace("%data%", work.jobs[i].title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);


 $(".work-entry").append(formattedWorkemp);

$(".work-entry").append(formattedWorkTitle);

$(".work-entry").append(formattedWorkDates);

$(".work-entry").append(formattedWorkLocation);

$(".work-entry").append(formattedWorkDesc);

}
}
}
};
works.display();





$("#mapDiv").append(googleMap);







