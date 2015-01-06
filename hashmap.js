/*
 * Copyright (c) 2011-2013 Lp digital system
 *
 * This file is part of BackBee.
 *
 * BackBee is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * BackBee is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with BackBee. If not, see <http://www.gnu.org/licenses/>.
 */
(function (window) {
    'use strict';

    var HashMap = function () {
        this.keys = [];

        this.values = [];

        Object.defineProperty(
            this,
            'length',
            {
                get: function () {
                    return this.values.length;
                },
                enumerable: true,
                configurable: false
            }
        );
    };

    /**
     * HashMap Mutator methods
     */
    /**
     * Adds one element to the end of an array and returns the new length of the array.
     */
    HashMap.prototype.set = function (key, value) {
        this.keys.push(key);
        this.values.push(value);
        return this.length;
    };
    /**
     * Return the element corresponding at the key parameter.
     */
    HashMap.prototype.get = function (key) {
        var value = this.keys.indexOf(key);

        if (value !== -1) {
            value = this.values[value];
        }

        return value;
    };
    /**
     * Remove the element corresponding at the key parameter.
     */
    HashMap.prototype.remove = function (key) {
        key = this.keys.indexOf(key);

        if (key !== -1) {
            delete this.keys[key];
            delete this.values[key];
        }
    };

    /**
     * Array Mutator methods
     */
    /**
     * Adds one element to the end of an array and returns the new length of the array.
     */
    HashMap.prototype.push = function (value) {
        this.values.push(value);
        this.keys.push(Array.lastIndexOf(this.values));
        return this.length;
    };
    /**
     * Removes the last element from an array and returns that element
     */
    HashMap.prototype.pop = function () {
        this.keys.pop();

        return this.values.pop();
    };
    /**
     * Removes the first element from an array and returns that element.
     */
    HashMap.prototype.shift = function () {
        this.keys.shift();

        return this.values.shift();
    };
    /**
     * Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.
     */
    HashMap.prototype.reverse = function () {
        this.keys.reverse();
        this.values.reverse();

        return this;
    };

    /**
     * Accessor methods
     */
    /**
     * Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
     */
    HashMap.prototype.indexOf = function (value) {
        var key = this.values.indexOf(value);

        if (key !== -1) {
            key = this.keys[key];
        }

        return key;
    };
    /**
     * Returns the last index of an element within the array equal to the specified value, or -1 if none is found.
     */
    HashMap.prototype.lastIndexOf = function () {
        return this.keys.lastIndexOf();
    };
    /**
     * Joins all elements of an array into a string.
     */
    HashMap.prototype.join = function (separator) {
        return this.values.join(separator);
    };

    /**
     * Iteration methods
     */
    /**
     * Calls a function for each element in the array.
     */
    HashMap.prototype.forEach = function (callback, instance) {
        var key;
        if (!(instance instanceof {})) {
            instance = undefined;
        }

        for (key = this.values.length - 1; key >= 0; key = key - 1) {
            callback.call(instance, this.values[key], this.keys[key], this);
        }
    };

    window.HashMap = HashMap;
}(window));
