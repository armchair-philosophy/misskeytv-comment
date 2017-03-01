import Vue from "vue/dist/vue";
import axios from "axios";
import firebase from "firebase";

const view = require("./template.vue");

const namespace = location.href.split("/")[location.href.split("/").length-1];
const $ = e=>document.querySelector(e);
const $$ = e=>document.querySelectorAll(e);
const comments = document.createElement("div");
comments.setAttribute("id", "comments");
$("body > .container").insertBefore(comments, $(".embed-responsive").nextSibling);
firebase.initializeApp({
  apiKey: "AIzaSyA9axeKExWdnrAwe4-5-KisBX1yaqgPLT4",
  authDomain: "misskey-tv.firebaseapp.com",
  databaseURL: "https://misskey-tv.firebaseio.com",
  storageBucket: "misskey-tv.appspot.com",
  messagingSenderId: "319623482672"
});

const makeTimeStamp = () => {
  const raw = new Date();
  const Y  = raw.getFullYear();
  const m = raw.getMonth() + 1;
  const d   = raw.getDate();
  const H  = ( raw.getHours()   < 10 ) ? '0' + raw.getHours()   : raw.getHours();
  const i   = ( raw.getMinutes() < 10 ) ? '0' + raw.getMinutes() : raw.getMinutes();
  const S   = ( raw.getSeconds() < 10 ) ? '0' + raw.getSeconds() : raw.getSeconds();

  return `${Y}/${m}/${d} ${H}:${i}:${S}`;
}

new Vue({
  el: "#comments",
  template: view,
  data: ()=>{
    return {
      comments: [],
      form: {
        body: ""
      }
    }
  },
  created(){
    firebase.database().ref(`live/${namespace}/`).on("child_added", (data)=>{
      this.comments.unshift({
        body : data.val().body,
        time : data.val().time
      });
    })
  },
  methods:{
    sendComment(){
      firebase.database().ref(`/live/${namespace}`).push({
        body : this.form.body,
        time : makeTimeStamp()
      });
      this.form.body = "";
    }
  }
})
