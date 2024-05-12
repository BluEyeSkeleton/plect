/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import defaultTimetable from "configs/defaultTimetable";

export const Days = Object.freeze({
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
});

export const ItemType = Object.freeze({
  LECTURE: 0, // Kuliah
  TUTORIAL: 1, // Tutoran
  PRACTICAL: 2, // Amali
});

export const createTimetable = (interval = 60, startTime = 480) => {
  return {
    interval: interval,
    startTime: startTime,
    items: [[], [], [], [], [], [], []],
  };
};

export const addDay = (timetable, day, items) => {
  timetable.items[day] = items;
};

export const removeDay = (timetable, day) => {
  timetable.items[day] = [];
};

export const modifyItem = (timetable, day, i, item) => {
  timetable.items[day][i] = item;
};

export const createItem = (code, name, type, venue, practicum) => {
  return {
    code: code,
    name: name,
    type: type,
    venue: venue,
    practicum: practicum,
  };
};
