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
bioPic: "images/fry.jpg",

display: function () {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
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
        date: "2013",
        location: "alsadiq high school , Riyadh",
        major: "scince"
    },{
        name: "King Saud University",
        degree: "bachelor",
        date: "2018",
        location: "King saud university ,Riyadh",
        major: "Software Engineering",
       
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
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      
      $(".education-entry").append(formattedschoolName);
          $(".education-entry").append(formattedschoolDegree);
             $(".education-entry").append(formattedschoolDates);
                $(".education-entry").append(formattedschoolLocation);
        $(".education-entry").append(formattedschoolMajor);
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
date : "2016-2-2",
desc : "tranforming a pdf file to a website",
img : "images/p1.jpeg"
}
,
{
title : "Animal Card",
date : "2016-5-2",
desc : "Making a simple animal card ",
img : "images/p2.jpg"
}
,
{
title : "Porfolio website",
date : "2016-7-2",
desc : "Making a personal Porfolio website ",
img : "images/p3.jpeg"
}
,{
title : "Online Resume",
date : "2016-9-2",
desc : "Makin an online resume",
img : "images/p4.jpg"

}
]
,
display : function () {
if(projects.project.length>0){
  $("#projects").append(HTMLprojectStart);


for (var i = 0; i < projects.project.length; i++) {
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
var formattedProjectDates= HTMLprojectDates.replace("%data%", projects.project[i].date);
var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[i].desc);
var formattedProjectimg = HTMLprojectImage.replace("%data%", projects.project[i].img);

 $(".project-entry").append(formattedProjectTitle);

$(".project-entry").append(formattedProjectDates);

$(".project-entry").append(formattedProjectDesc);

$(".project-entry").append(formattedProjectimg);

}
}
}
};
projects.display();




var works = {

	work :[
{
Emp : "ELM co",
title : " junior software Engineer",
dates : "2013-2015",
location : "elm ,riyadh",
desc: "one of the junior software Engineer staff"
}
,
{
Emp : "IBM co",
title : "project manager",
dates : "2015-present",
location : "IBM ,riyadh",
desc: "Project Manager for a secret project"
}
]
,
display : function () {
if(works.work.length>0){
  $("#workExperience").append(HTMLworkStart);


for (var i = 0; i < works.work.length; i++) {
var formattedWorkemp = HTMLworkEmployer.replace("%data%", works.work[i].Emp);
var formattedWorkTitle= HTMLworkTitle.replace("%data%", works.work[i].title);
var formattedWorkDates = HTMLworkDates.replace("%data%", works.work[i].dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", works.work[i].location);
var formattedWorkDesc = HTMLworkDescription.replace("%data%", works.work[i].desc);


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



var googleMap = googleMap;

$("#mapDiv").append(googleMap);







