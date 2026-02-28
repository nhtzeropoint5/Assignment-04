// document.getElementById("interview-page").addEventListener("click", function () {
//   window.location.href = "interview.html";

//   document.querySelectorAll
// });

// document.getElementById("reject-page").addEventListener("click", function () {
//   window.location.href = "reject.html";
// });


// document.getElementById("home-page").addEventListener("click", function () {
//   window.location.href = "index.html";
// });

function deduct(id) {
const txt = document.getElementById(id);   
const num = Number(txt.innerText);         
txt.innerText = num - 1;  
}




function adder(id){
const txt = document.getElementById(id);   
const num = Number(txt.innerText);         
txt.innerText = num + 1;  
}




let sum = 50;

document.getElementById("Job-container").addEventListener("click", function (event) {

  const card = event.target.closest(".card");
  if (!card) return;

  const parentId = card.parentNode.id;

  const int = event.target.closest(".btn-int");
  const rej = event.target.closest(".btn-rej");
  const dlt = event.target.closest(".btn-dlt");

if (dlt){
if (parentId === "card-container-home") deduct("tab-1");
if (parentId === "Job-container-int") deduct("tab-2");
if (parentId === "Job-container-rej") deduct("tab-3");

    card.remove();
    return;
  }
  if (int){

    const parent = document.getElementById("Job-container-int");
    document.getElementById("card-img-int").classList.add("hidden");

    if (parentId === "card-container-home"){

      const newCard = card.cloneNode(true);
      newCard.id = "card-" + sum++;
      const intBtn = newCard.querySelector(".int-btn");
      const rejBtn = newCard.querySelector(".rej-btn");

      intBtn.classList.replace("btn-outline", "btn-active");
      rejBtn.classList.replace("btn-active", "btn-outline");

      parent.appendChild(newCard);

      adder("tab-2");
    }
    else if (parentId === "Job-container-rej"){

      const intBtn = card.querySelector(".int-btn");
      const rejBtn = card.querySelector(".rej-btn");

      intBtn.classList.replace("btn-outline", "btn-active");
      rejBtn.classList.replace("btn-active", "btn-outline");

      parent.appendChild(card);
      deduct("tab-3");
      adder("tab-2");
    }
    return;
  }

  if (rej){

    const parent = document.getElementById("Job-container-rej");
    document.getElementById("card-img-rej").classList.add("hidden");

    if (parentId === "card-container-home"){

      const newCard = card.cloneNode(true);
      newCard.id = "card-" + sum++;

      const rejBtn = newCard.querySelector(".rej-btn");
      const intBtn = newCard.querySelector(".int-btn");

      rejBtn.classList.replace("btn-outline", "btn-active");
      intBtn.classList.replace("btn-active", "btn-outline");

      parent.appendChild(newCard);

      adder("tab-3");
    }
    else if (parentId === "Job-container-int"){

      const rejBtn = card.querySelector(".rej-btn");
      const intBtn = card.querySelector(".int-btn");

      rejBtn.classList.replace("btn-outline", "btn-active");
      intBtn.classList.replace("btn-active", "btn-outline");

      target.appendChild(card);

      deduct("tab-2");
      adder("tab-3");
    }
  }
});


// document.getElementById("Job-container").addEventListener("click", function(e) {

// });


function showOnly(id){
    const home = document.getElementById('card-container-home');
    const interview = document.getElementById('Job-container-int');
    const rejected = document.getElementById('Job-container-rej');

    home.classList.add('hidden');
    interview.classList.add('hidden');
    rejected.classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
