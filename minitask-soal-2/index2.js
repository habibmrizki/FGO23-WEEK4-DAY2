const form = document.querySelector("form");

form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  const bodyManual = {};
  for (const input of inputs) {
    Object.assign(bodyManual, { [input.name]: input.value });
  }

  const objJSON = JSON.stringify(bodyManual);
  console.log(objJSON);

  console.log(JSON.stringify(bodyManual));
  const url = [];
  for (const key in bodyManual) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(bodyManual[key]);
    url.push(`${encodedKey}=${encodedValue}`);
  }
  console.log(url);

  const result = document.getElementById("result");
  const paragraph = document.createElement("p");
  paragraph.textContent = objJSON;
  result.insertAdjacentElement("beforebegin", paragraph);
}
