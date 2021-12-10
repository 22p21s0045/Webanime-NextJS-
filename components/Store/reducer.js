//TODO: create a reducer for count like
//TODO: fetch api to set init store and set it to reducer
import db from "./firebase";
import axios from "axios";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
async function getdata() {
  const querySnapshot = await getDocs(collection(db, "Data"));
  let arrays = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arrays.push(doc.data());
  });
  return arrays;
}


async function mapdata() {
  let q = await getdata();
  let c = q.map((item) => item);
  console.log(c);
  return c;
}
async function setdata() {
  let q = await getdata();
  return q;

}

mapdata();

let data = setdata();
let obj =data.then( response => { data = response; console.log(data)});



//FIXME This is Bug reducer cannot get state
const counter = (state = data, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT1":
      return state + 1;
    case "DECREMENT1":
      return state - 1;
    case "INCREMENT2":
        return state + 1;
    case "DECREMENT2":
        return state - 1;
    default:
      return state;
  }
};
export default counter;
