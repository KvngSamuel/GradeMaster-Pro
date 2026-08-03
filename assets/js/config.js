/*
========================================================

GradeMaster Pro
Configuration Module

Version: 1.0.0
Author: Aina Samuel

This file contains all application-wide configuration.
No application logic should exist here.

========================================================
*/

export const APP_CONFIG = Object.freeze({

    app: {
        name: "GradeMaster Pro",
        shortName: "GradeMaster",
        version: "1.0.0",
        author: "Aina Samuel",
        description: "A complete academic companion for university students."
    },

    ui: {
        defaultTheme: "light",
        animationDuration: 300,
        toastDuration: 3500,
        language: "en"
    },

    gradingSystems: {
        FIVE_POINT: 5,
        FOUR_POINT: 4
    },

    storage: {
        prefix: "grademaster_",
        version: "v1"
    }

});