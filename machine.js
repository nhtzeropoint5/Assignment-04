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

function getInnerHtml(id){
    const str = document.getElementById(id).innerHTML;
    return str;
}


function appendChildInterview(){
  
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