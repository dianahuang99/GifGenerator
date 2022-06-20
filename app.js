async function searchGif(searchField) {
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/random?api_key=qALrsAYDN1WVePGeLsE3qcO6FNAVSkHP&tag=${searchField}&rating=g`
  );
  return res.data.data.images.original.url;
}

let submitBtn = document.querySelector("#submitBtn");
let input = document.querySelector("#searchField");
let form = document.querySelector("#gifForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log(searchGif(input.value));
  const gif = document.createElement("img");
  gifValue = await searchGif(input.value);
  const container = document.querySelector("#gifsContainer");
  gif.setAttribute("src", gifValue);
  container.append(gif);
  input.value = "";
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  const div = document.querySelector("#gifsContainer");
  div.innerHTML = '<div id="gifsContainer"></div>';
});
