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

import axios from "axios";
import $n from "utils/$n";

// Import the functions you need from the SDKs you need
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { db } from "utils/GoogleAPI/firebase";

// Timetable builder
import { initTimetable } from "utils/TimetableBuilder";

const timetables = collection(db, "timetables");

export const validateToken = (accessToken) => {
  return new Promise((resolve, _) => {
    if ($n(accessToken)) resolve(false);
    else {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
        )
        .then((res) => {
          resolve(res.status === 200);
        })
        .catch((_) => {
          resolve(false);
        });
    }
  });
};

export const userinfo = (accessToken) => {
  return new Promise((resolve, _) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((_) => {
        resolve(false);
      });
  });
};

export const isNewUser = (email) => {
  return new Promise((resolve, _) => {
    const q = query(timetables, where("email", "==", email));
    getDocs(q).then((snapshot) => {
      resolve(snapshot.empty);
    });
  });
};

export const createUserTimetable = (userInfo) => {
  return addDoc(timetables, initTimetable(userInfo));
};

export const getUserDoc = (email) => {
  return new Promise((resolve, _) => {
    const q = query(timetables, where("email", "==", email));
    getDocs(q).then((snapshot) => {
      if (snapshot.empty) resolve(false);
      snapshot.forEach((doc) => {
        resolve(doc);
      });
    });
  });
};

export const getUserTimetable = (email) => {
  return new Promise((resolve, _) => {
    getUserDoc(email).then((doc) => {
      resolve(!doc ? false : doc.data());
    });
  });
};

export const deleteAllSubjects = (doc) => {
  return updateDoc(doc, { subjects: "[]" });
};
