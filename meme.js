const firstInput = document.querySelector("#top");
const imgInput = document.querySelector("#image-url");
const thirdInput = document.querySelector("#bottom");

const resultDiv = document.querySelector(".meme-result");
// const memeDiv   = document.querySelector(".meme");
const memeForm = document.querySelector("#meme-form");

memeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let divCount = 0;

  const memeDiv = document.createElement("div");
  memeDiv.setAttribute("class", "meme");
  memeDiv.setAttribute("id", `memeDiv${divCount}`);
  divCount++;
  resultDiv.appendChild(memeDiv);

  const topText = document.createElement("span");
  topText.innerText = firstInput.value;
  topText.setAttribute("class", "txt-first");
  memeDiv.appendChild(topText);
  firstInput.value = "";

  const centerImg = document.createElement("img");
  // centerImg.setAttribute('src', 'imgInput.value');
  centerImg.src = imgInput.value;
  centerImg.setAttribute("class", "img-result");
  memeDiv.appendChild(centerImg);
  imgInput.value = "";

  const bottomText = document.createElement("span");
  bottomText.innerText = thirdInput.value;
  bottomText.setAttribute("class", "txt-last");
  memeDiv.appendChild(bottomText);
  thirdInput.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  memeDiv.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    deleteBtn.parentElement.remove();
  });
});
