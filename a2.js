/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Claude Espanillo Student ID: 151882230 Date: 05/20/2024
*
********************************************************************************/ 

// Import the collegeData module which contains functions to interact with student, course, and TA data.
const collegeData = require('./modules/collegeData');

// Start the initialization process for the collegeData module.
collegeData.initialize()
    .then(() => {
        
        // Once initialized, fetch all students using getAllStudents.
        return collegeData.getAllStudents()
            .then(students => {
                // Log the number of students retrieved to the console.
                console.log(`Successfully retrieved ${students.length} students.`);
            })
            .catch(err => {
                // If there's an error, log it to the console.
                console.error("Error fetching all students:", err);
            });

    }).then(() => {

        // After fetching students, proceed to fetch all courses using getCourses.
        return collegeData.getCourses()
            .then(courses => {
                // Log the number of courses retrieved to the console.
                console.log(`Successfully retrieved ${courses.length} courses.`);
            })
            .catch(err => {
                // If there's an error, log it to the console.
                console.error("Error fetching courses:", err);
            });

    }).then(() => {
        
        // After fetching courses, proceed to fetch all TAs using getTAs.
        return collegeData.getTAs()
            .then(TAs => {
                // Log the number of TAs retrieved to the console.
                console.log(`Successfully retrieved ${TAs.length} TAs.`);
            })
            .catch(err => {
                // If there's an error, log it to the console.
                console.error("Error fetching TAs:", err);
            });

    }).catch(err => {
        // If there's an error during the initialization process, log it to the console.
        console.error("Initialization error:", err);
    });

