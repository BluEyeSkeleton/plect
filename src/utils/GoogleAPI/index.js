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
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
  query,
  where,
} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebaseConfig from "configs/firebase";

// Timetable builder
import { createTimetable } from "utils/TimetableBuilder";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
      snapshot.forEach((doc) => {
        resolve(false);
      });
      resolve(true);
    });
  });
};

export const createUserTimetable = (email) => {
  return addDoc(timetables, { email: email, data: createTimetable() });
};
