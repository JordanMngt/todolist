const input = document.querySelector("#input")
const select = document.querySelector("#select")

const urgentCol = document.querySelector("#urgent")
const normalCol = document.querySelector("#normal")
const optiCol = document.querySelector("#optionnel")

input.addEventListener("change", (e) =>{
  const divTache = document.createElement("div");

  divTache.innerHTML = e.target.value

  divTache.style.cursor = "pointer"
  divTache.addEventListener("click", () => {
    if (divTache.style.textDecoration === "line-through") {
      divTache.style.textDecoration = "unset"
    } else {
      divTache.style.textDecoration = "line-through"
    }
  })

  let colPrio 

  switch (select.value) {
    case "optionnel":
      colPrio = optiCol
      break;
  
    case "normal":
      colPrio = normalCol
      break;

    case "urgent":
      colPrio = urgentCol
      break;
  }

  colPrio.append(divTache);
  input.value = "";
  
  
})

