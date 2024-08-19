/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "del", "tu"];
  let adjectives = ["great", "big", "pued", "ugly"];
  let nouns = ["jogger", "racoon", "icio", "inter"];
  let extensions = [".com", ".es", ".net", ".us"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let ext of extensions) {
          domainNames.push(`${pronoun}${adjective}${noun}${ext}`);
        }
      }
    }
    const random = array => array[Math.floor(Math.random() * array.length)];
    document.getElementById("click").onclick = function() {
      document.getElementById("domain").innerHTML = random(domainNames);
    };
  }
};
