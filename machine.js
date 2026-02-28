function deduct(id) {
const num = document.getElementById(id).innerText;
const newValue = Number(num) - 1;
return newValue;
}




function adder(id){
const num = document.getElementById(id).innerText;
const newValue = Number(num) + 1;
return newValue;
}


// function pageLoader(id){
//   window.location.href = "interview.html";
// }


function appendChildInterview(){
  const x = document.getElementById('Job-container');
  const y = document.createElement('div');
  y.innerHTML = `
  <div class="mx-auto space-y-6 my-7 ">

 <div class="card bg-base-100 shadow-sm">
  
 <div class="card-body text-left p-3 m-3">
  <div class="flex"><p class="text-lg font-semibold">Mobile First Corp-0</p>
 <button class="btn btn-soft"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
 
 <p class="text-gray-500 font-normal text-base mb-1">React Native Developer</p>
 <p class="text-gray-500 text-sm my-2">Remote
 • 
Full-time 
•
 $130,000 - $175,000</p>
 <button class="btn btn-soft btn-primary w-[130px]">NOT APPLIED</button>
 <p class="text-gray-700 my-2">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
 <div class="flex gap-4"> <button class="btn btn-active btn-success w-[100px]">INTERVIEW</button>
 <button class="btn btn-outline btn-error w-[100px]">REJECTED</button></div>

 </div></div>
  `;

    x.appendChild(y);

}


function Deleter() {

document.getElementById('btn-add-item').addEventListener('click', function(){
    const ol = document.getElementById('item-l');
    const li = document.createElement('li');
    li.innerText = "1";
    ol.appendChild(li);
})


document.getElementById('item-l').addEventListener('click', function(event){
   event.target.parentNode.removeChild(event.target);
   })
}