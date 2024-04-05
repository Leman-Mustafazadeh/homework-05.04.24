// Task:
//      Aşağıdakı şəkili sadəcə js, css və bootstrap istifadə edərək yazın (QƏTİYYƏN HTML YAZMIRSIZ) (innerHTML istifadə edib, bütün HTML-i ``-ilə yazmayın, createElement, append istifadə edin)
// Task:
//     P.S - Aşağıdakıları araşdırın!
// difference between array and Nodelist, HTMLCollection, innerHTML vs createElement
// replaceChild(), cloneNode() ,after() ,insertAdjacentHTML() insertBefore(), insterAfter()
// getComputedStyle()
// Ve elave olaraq dersde yazdiqlarimizi bol-bol praktika edin

//BOX

const body = document.body;
const section = document.createElement("section");
body.appendChild(section);
const div = document.createElement("div");
div.style.width = "1140px";
div.style.margin = "0 auto";
div.className = "container";
section.appendChild(div);
const divP = document.createElement("div");
divP.className = "sec-wrap";
div.appendChild(divP);
divP.style.width = "100%";
divP.style.height = "360";
divP.style.backgroundColor = "gray";
divP.textContent = "960x360px";
divP.style.color = "white";
divP.style.fontSize = "30px";
divP.style.display = "flex";
divP.style.alignItems = "center";
divP.style.justifyContent = "center";
divP.style.margin = "30px 0";
//box finish

const divAll = document.createElement("div");
divAll.classList.add("row", "div-title");
div.appendChild(divAll);

for (let i = 0; i < 3; i++) {
  const divItem = document.createElement("div");
  divItem.classList.add("col-4", "div-item");
  divAll.appendChild(divItem);
  const divBox = document.createElement("div");
  divBox.classList.add("div-box");
  divItem.appendChild(divBox);
  divBox.textContent = "290x180px";

  const divWord = document.createElement("div");
  divWord.classList.add("div-word");
  divItem.appendChild(divWord);

  const divwordItem = document.createElement("h2");
  divwordItem.classList.add("div-word-item");
  divWord.appendChild(divwordItem);
  divwordItem.textContent = "Indononceteus facilies";

  const divwordTitle = document.createElement("p");
  divwordTitle.classList.add("div-word-title");
  divWord.appendChild(divwordTitle);
  divwordTitle.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum.";

  const divLink = document.createElement("a");
  divLink.classList.add("div-link");
  divWord.appendChild(divLink);
  divLink.textContent = "Read More >";
}
