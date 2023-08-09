const firstInput = document.querySelector("#top");
const imgInput = document.querySelector("#image-url");
const thirdInput = document.querySelector("#bottom");

const resultDiv = document.querySelector(".meme-result");
const memeDiv   = document.querySelector(".meme");
const memeForm = document.querySelector("#meme-form");


memeForm.addEventListener('submit', function(e){
  e.preventDefault();

    const topText = document.createElement('span');
    topText.innerText = firstInput.value;
    topText.setAttribute('class', 'txt-first');
    memeDiv.appendChild(topText);
    firstInput.value = "";

    const centerImg = document.createElement('img');
    // centerImg.setAttribute('src', 'imgInput.value');
    centerImg.src = imgInput.value;
    centerImg.setAttribute('class', 'img-result');
    memeDiv.appendChild(centerImg);
    imgInput.value = "";

    const bottomText = document.createElement('span');
    bottomText.innerText = thirdInput.value;
    bottomText.setAttribute('class', 'txt-last');
    memeDiv.appendChild(bottomText);
    thirdInput.value = "";

    const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete';
      memeDiv.appendChild(deleteBtn);
    
      deleteBtn.addEventListener('click', function(){
        deleteBtn.parentElement.remove();
      })




});

// memeForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (imgInput.value === "") {
//       alert("please paste image url");
//       // return false;
//     } else {
//       const centerImg = document.createElement("img");
//       // centerImg.setAttribute('src', 'imgInput.value');
//       centerImg.src = imgInput.value;
//       centerImg.setAttribute("class", "img-result");
//       imgInput.value = "";
//       memeDiv.appendChild(centerImg);
//     }
//   });

// memeForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (firstInput.value === "") {
//     alert("please enter top text");
//     // return false; **DONT NEED THESE TO STOP FORM SUBMISSION REQUIRED DOES IT, BUT WHY DOESN'T THIS WORK TOO?**
//   } else {
//     const topText = document.createElement("span");
//     topText.innerText = firstInput.value;
//     topText.setAttribute("class", "txt-first");
//     firstInput.value = "";
//     memeDiv.appendChild(topText);

//     // add a class for display purposes
//   }
// });

// memeForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (thirdInput.value === "") {
//     alert("please enter bottom text");
//     // return false;
//   } else {
//     const bottomText = document.createElement("span");
//     bottomText.innerText = thirdInput.value;
//     thirdInput.value = "";
//     // is this reset causing issues?
//     bottomText.setAttribute("class", "txt-last");
//     // bottomText.classList.add('bottom');
//     // add a class for display purposes you style in css
//     memeDiv.appendChild(bottomText);
//   }
// });

// memeForm.addEventListener('submit', function (e){
//   e.preventDefault();
//   const deleteBtn = document.createElement('button');
//   deleteBtn.innerText = 'delete';
//   memeDiv.appendChild(deleteBtn);

//   deleteBtn.addEventListener('click', function(){
//     deleteBtn.parentElement.remove();
//   })
  
// })






  


