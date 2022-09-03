const container = document.querySelector('#container');
const para = document.createElement("p");
para.style.color = "red";
para.innerText = "Hey I'm red!";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.innerText = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.innerText = "ME TOO!";
div.appendChild(p2);

container.appendChild(div);
