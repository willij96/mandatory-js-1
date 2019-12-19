let h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Fruits & Vegetables Corp";

let a = document.getElementsByTagName('a')[2];
a.textContent = 'Vegetables';

a.href = '#vegetables';

let remove = document.querySelectorAll('#about');
for (let i = 0; i < remove.length; i++) {
  remove[i].remove();
}

let createSection = document.createElement('section');
createSection.id = 'about';
document.getElementById('main').appendChild(createSection);

let about = document.createElement('h2');
about.textContent = 'About';
document.getElementById('about').appendChild(about);

let contact = document.createElement('h2');
contact.textContent = 'Contact';
document.getElementById('contact').appendChild(contact);

let p = document.createElement('p');
p.textContent = "We're the best in fruits & vegetables";
document.querySelector('#about').appendChild(p);

const div1 = document.querySelector("#contact p");
const div2 = document.querySelector("#contact table");
const div3 = document.querySelector("#contact h2");
div1.after(div2);
div1.before(div3);

let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.href= "main.css";
link.rel = "stylesheet";
link.type = "text/css";
head.appendChild(link);

const div4 = document.querySelector("#about");
const div5 = document.querySelector("#contact");

div4.after(div5);


let table = document.querySelectorAll('table thead tr td');
for (var i = 0; i < table.length; i++) {
  table[i].remove();
}

let create = document.createElement('th');
create.textContent = "Name";
document.querySelector('table thead tr').appendChild(create);

let create1 = document.createElement('th');
create1.textContent = "Email";
document.querySelector('table thead tr').appendChild(create1);

let title = document.querySelector('title');
title.textContent = 'Fruits & Vegetables Corp';
