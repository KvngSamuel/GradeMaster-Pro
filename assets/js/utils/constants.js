/*
========================================================

GradeMaster Pro
Application Constants

Version: 1.0.0
Author: Aina Samuel

This file contains immutable values used
throughout the application.

========================================================
*/

export const THEMES = Object.freeze({
    LIGHT: "light",
    DARK: "dark"
});

export const SEMESTER_SYSTEMS = Object.freeze({
    TWO: 2,
    THREE: 3
});

export const LEVELS = Object.freeze([
    "100 Level",
    "200 Level",
    "300 Level",
    "400 Level",
    "500 Level",
    "600 Level"
]);

export const LETTER_GRADES = Object.freeze([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
]);

export const GRADE_POINTS = Object.freeze({

    FIVE_POINT: {

        A: 5,

        B: 4,

        C: 3,

        D: 2,

        E: 1,

        F: 0

    },

    FOUR_POINT: {

        A: 4,

        B: 3,

        C: 2,

        D: 1,

        F: 0

    }

});

export const DEGREE_CLASSES = Object.freeze({

    FIVE_POINT: [

        {

            id: "first",

            name: "First Class",

            minimum: 4.50

        },

        {

            id: "secondUpper",

            name: "Second Class Upper",

            minimum: 3.50

        },

        {

            id: "secondLower",

            name: "Second Class Lower",

            minimum: 2.40

        },

        {

            id: "third",

            name: "Third Class",

            minimum: 1.50

        },

        {

            id: "pass",

            name: "Pass",

            minimum: 1.00

        }

    ],

    FOUR_POINT: [

        {

            id: "first",

            name: "First Class",

            minimum: 3.70

        },

        {

            id: "secondUpper",

            name: "Second Class Upper",

            minimum: 3.30

        },

        {

            id: "secondLower",

            name: "Second Class Lower",

            minimum: 2.30

        },

        {

            id: "third",

            name: "Third Class",

            minimum: 1.50

        }

    ]

});

export const STORAGE_KEYS = Object.freeze({

    PROFILE: "profile",

    SETTINGS: "settings",

    SEMESTERS: "semesters",

    COURSES: "courses",

    RESULTS: "results",

    THEME: "theme"

});

export const DEFAULT_SETTINGS = Object.freeze({

    theme: THEMES.LIGHT,

    gradingSystem: 5,

    semesterSystem: 2,

    animations: true,

    autoSave: true

});