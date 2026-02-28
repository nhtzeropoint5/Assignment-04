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


function changeStyle(){

}


let sum = 50;

document.getElementById("Job-container").addEventListener("click", function (event) {

  const card = event.target.closest(".card"); //new things learnt closest, event bubble then upward till you find a class named card
  if (!card) return; // this is so i can avoid the null value jodi card e immidiate parent na thake

  const parentId = card.parentNode.id;

  const int = event.target.closest(".btn-success");
  const rej = event.target.closest(".btn-error");
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
    const newCard = card.cloneNode(true); //new Clone node
      newCard.id = "card-" + sum++; //my-idea to add non duplicate card id
      
    //  const cngBtn = newCard.querySelector('.btn-primary');
    //  intBtn.classList.replace("btn-primary", "btn-success");

      updateStatus(card, "interview");
      updateStatus(newCard, "interview");


      const intBtn = newCard.querySelector(".int-btn");
      const rejBtn = newCard.querySelector(".rej-btn");

      intBtn.classList.replace("btn-outline", "btn-active");
      rejBtn.classList.replace("btn-active", "btn-outline");

      parent.appendChild(newCard);

      adder("tab-2");
    }
    else if (parentId === "Job-container-rej"){

  const cngBtn = newCard.querySelector('.btn-primary');

      updateStatus(card, "interview");
 

      const intBtn = card.querySelector(".int-btn");
      const rejBtn = card.querySelector(".rej-btn");

      intBtn.classList.replace("btn-outline", "btn-active");
      rejBtn.classList.replace("btn-active", "btn-outline"); //new replace learnt

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

      updateStatus(card, "reject");
      updateStatus(newCard, "reject");

      const rejBtn = newCard.querySelector(".rej-btn");
      const intBtn = newCard.querySelector(".int-btn");

      rejBtn.classList.replace("btn-outline", "btn-active");
      intBtn.classList.replace("btn-active", "btn-outline");

      parent.appendChild(newCard);

      adder("tab-3");
    }
    else if (parentId === "Job-container-int"){


      updateStatus(card, "reject");

      const rejBtn = card.querySelector(".rej-btn");
      const intBtn = card.querySelector(".int-btn");

      rejBtn.classList.replace("btn-outline", "btn-active");
      intBtn.classList.replace("btn-active", "btn-outline");

      parent.appendChild(card);

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


function updateStatus(card, type) {

  const statusBtn = card.querySelector(".status-btn");

  if (!statusBtn) return;

  if (type === "interview") {
    statusBtn.innerText = "Interviewed";
    statusBtn.classList.remove("btn-primary", "btn-error", "btn-soft");
    statusBtn.classList.add("btn-success");
  }

  if (type === "reject") {
    statusBtn.innerText = "Rejected";
    statusBtn.classList.remove("btn-primary", "btn-success", "btn-soft");
    statusBtn.classList.add("btn-error");
  }
}