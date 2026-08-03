/*
========================================================

GradeMaster Pro
Helper Utilities

Version: 1.0.0
Author: Aina Samuel

Reusable helper functions used
throughout the application.

========================================================
*/

export class Helpers {

    /**
     * Round a number.
     * @param {number} value
     * @param {number} decimals
     * @returns {number}
     */
    static round(value, decimals = 2) {

        return Number(
            Number(value).toFixed(decimals)
        );

    }

    /**
     * Calculate percentage.
     * @param {number} value
     * @param {number} total
     * @returns {number}
     */
    static percentage(value, total) {

        if (total === 0) {

            return 0;

        }

        return this.round(
            (value / total) * 100,
            2
        );

    }

    /**
     * Clamp number.
     */
    static clamp(value, min, max) {

        return Math.min(
            Math.max(value, min),
            max
        );

    }

    /**
     * Random ID.
     */
    static uid(length = 12) {

        return Math.random()
            .toString(36)
            .substring(2, 2 + length);

    }

    /**
     * Deep clone object.
     */
    static clone(data) {

        return structuredClone(data);

    }

    /**
     * Capitalize.
     */
    static capitalize(text) {

        if (!text) {

            return "";

        }

        return text.charAt(0).toUpperCase()
            + text.slice(1);

    }

    /**
     * Format number.
     */
    static formatNumber(value, decimals = 2) {

        return Number(value)
            .toFixed(decimals);

    }

    /**
     * Sum array.
     */
    static sum(numbers) {

        return numbers.reduce(
            (total, current) => total + current,
            0
        );

    }

    /**
     * Average.
     */
    static average(numbers) {

        if (!numbers.length) {

            return 0;

        }

        return this.round(
            this.sum(numbers) / numbers.length
        );

    }

    /**
     * Debounce.
     */
    static debounce(callback, delay = 300) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    }

    /**
     * Throttle.
     */
    static throttle(callback, delay = 300) {

        let waiting = false;

        return (...args) => {

            if (waiting) {

                return;

            }

            callback(...args);

            waiting = true;

            setTimeout(() => {

                waiting = false;

            }, delay);

        };

    }

}