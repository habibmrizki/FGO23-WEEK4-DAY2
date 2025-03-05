const form = document.querySelector("form");

form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  const email = event.target["email"].value;
  const password = event.target["pwd"].value;
  //   console.log(email);
  //   console.log(password);
  const bodyJson = {
    email,
    password,
  };
  console.log(JSON.stringify(bodyJson));

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  const bodyUrl = new URLSearchParams({
    email,
    password,
  });
  console.log(bodyUrl.toString());

  const result = document.getElementById("result");
  bodyUrl.forEach((key, value) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${value} : ${key}`;
    result.insertAdjacentElement("beforeend", paragraph);
  });
}
