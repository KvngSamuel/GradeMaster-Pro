/*
========================================================

GradeMaster Pro
Storage Manager

Version: 1.0.0
Author: Aina Samuel

A single gateway for all browser storage.

========================================================
*/

import { APP_CONFIG } from "./config.js";

const STORAGE_PREFIX = `${APP_CONFIG.storage.prefix}${APP_CONFIG.storage.version}_`;

export class Storage {

    /**
     * Build the final storage key.
     * @param {string} key
     * @returns {string}
     */
    static key(key) {
        return STORAGE_PREFIX + key;
    }

    /**
     * Save data.
     * @param {string} key
     * @param {*} value
     */
    static save(key, value) {

        try {

            localStorage.setItem(
                this.key(key),
                JSON.stringify(value)
            );

            return true;

        } catch (error) {

            console.error("Storage Save Error:", error);

            return false;

        }

    }

    /**
     * Load data.
     * @param {string} key
     * @param {*} defaultValue
     * @returns {*}
     */
    static load(key, defaultValue = null) {

        try {

            const value = localStorage.getItem(this.key(key));

            if (value === null) {

                return defaultValue;

            }

            return JSON.parse(value);

        } catch (error) {

            console.error("Storage Load Error:", error);

            return defaultValue;

        }

    }

    /**
     * Remove one key.
     * @param {string} key
     */
    static remove(key) {

        localStorage.removeItem(this.key(key));

    }

    /**
     * Check if a key exists.
     * @param {string} key
     * @returns {boolean}
     */
    static exists(key) {

        return localStorage.getItem(this.key(key)) !== null;

    }

    /**
     * Clear GradeMaster data only.
     */
    static clearAll() {

        Object.keys(localStorage).forEach((key) => {

            if (key.startsWith(STORAGE_PREFIX)) {

                localStorage.removeItem(key);

            }

        });

    }

}