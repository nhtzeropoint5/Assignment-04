document.getElementById("interview-page").addEventListener("click", function () {
  window.location.href = "interview.html";

  document.querySelectorAll
});

document.getElementById("reject-page").addEventListener("click", function () {
  window.location.href = "reject.html";
});


document.getElementById("home-page").addEventListener("click", function () {
  window.location.href = "index.html";
});



document.getElementById("Job-container").addEventListener("click", function(e) {

  if (
    e.target.closest(".btn-success") ||
    e.target.closest(".btn-error")
  ) {
    const card = e.target.closest(".card");
   
    const x = document.getElementById('Job-container-int');
    const y = document.createElement('div');
    y.classList.add('card', 'bg-base-100', 'shadow-sm');

    const str = document.getElementById(card.id).innerHTML;

     console.log(str);


    y.innerHTML = str;

    x.appendChild(y);
  }

});


function showOnly(id){
    const home = document.getElementById('card-container-home');
    const interview = document.getElementById('Job-container-int');
    const rejected = document.getElementById('Job-container-rej');
    interview.classList.add('hidden');
    rejected.classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
