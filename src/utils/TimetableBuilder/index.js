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

export const DEFAULT_SUBJECTS = JSON.stringify([
  // SDS Science
  { code: "SK015", name: "Chemistry 1" },
  { code: "SK025", name: "Chemistry 2" },
  { code: "SM015", name: "Mathematics 1" },
  { code: "SM025", name: "Mathematics 2" },
  { code: "SB015", name: "Biology 1" },
  { code: "SB025", name: "Biology 2" },
  { code: "SP015", name: "Physics 1" },
  { code: "SP025", name: "Physics 2" },
  { code: "SC015", name: "Computer Science 1" },
  { code: "SC025", name: "Computer Science 2" },

  // SES Science
  { code: "DK014", name: "Chemistry 1" },
  { code: "DK024", name: "Chemistry 2" },
  { code: "DM014", name: "Mathematics 1" },
  { code: "DM024", name: "Mathematics 2" },
  { code: "DB014", name: "Biology 1" },
  { code: "DB024", name: "Biology 2" },
  { code: "DP014", name: "Physics 1" },
  { code: "DP024", name: "Physics 2" },
  { code: "DC014", name: "Computer Science 1" },
  { code: "DC024", name: "Computer Science 2" },

  // Accounting
  { code: "AA015", name: "Accounting 1" },
  { code: "AA025", name: "Accounting 2" },
  { code: "AM015", name: "Mathematics 1" },
  { code: "AM025", name: "Mathematics 2" },
  { code: "AE015", name: "Ekonomi 1" },
  { code: "AE025", name: "Ekonomi 2" },
  { code: "AP015", name: "Pengurusan Perniagaan 1" },
  { code: "AP025", name: "Pengurusan Perniagaan 2" },

  // Compulsory subjects
  { code: "WE013", name: "English 1" },
  { code: "WE023", name: "English 2" },
  { code: "WI001", name: "Pendidikan Islam" },
  { code: "WM001", name: "Pendidikan Moral" },
  { code: "WP001", name: "Pengajian Am" },
  { code: "WK002", name: "Kokurikulum" },
]);

export const initTimetable = (userInfo, interval = 60, startTime = 480) => {
  return {
    email: userInfo.email,
    name: userInfo.name,
    interval: interval,
    startTime: startTime,
    d0: [],
    d1: [],
    d2: [],
    d3: [],
    d4: [],
    d5: [],
    d6: [],
    subjects: DEFAULT_SUBJECTS,
  };
};

export const getMaxWidth = (t) => {
  return Math.max(
    t.d0.length,
    t.d1.length,
    t.d2.length,
    t.d3.length,
    t.d4.length,
    t.d5.length,
    t.d6.length
  );
};

export const toTime24 = (time) => {
  const hours = `${Math.floor(time / 60)}`;
  const mins = `${time % 60}`;
  return `${hours}:${mins.length < 2 ? "0" : ""}${mins}`;
};

export const modifyItem = (timetable, day, i, item) => {
  timetable.items[day][i] = item;
};

export const createItem = (code, desc, type, venue, practicum) => {
  return JSON.stringify({
    code: code,
    desc: desc,
    type: type,
    venue: venue,
    practicum: practicum,
  });
};
