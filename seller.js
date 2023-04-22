/***************IMAGE UPLOAD*****************/

const url_arr = [];
let str;
const imageInput = document.getElementById("imageInput");
const imageContainerElement = document.querySelector('.image-container');
let uploadedFiles = [];

imageInput.addEventListener("change", function () {
    const files = this.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imagePreviewElement = document.createElement('div');
            imagePreviewElement.className = 'image-preview';
            imagePreviewElement.style.backgroundImage = `url(${reader.result})`;
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', () => {
                uploadedFiles = uploadedFiles.filter(f => f !== file);
                imageContainerElement.removeChild(imagePreviewElement);
                updateImageUrlElement();
            });
            imagePreviewElement.appendChild(deleteButton);
            imageContainerElement.appendChild(imagePreviewElement);
            uploadedFiles.push(file);
            updateImageUrlElement();
        });
        reader.readAsDataURL(file);
    }
});

function updateImageUrlElement() {

    for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];
        const url = URL.createObjectURL(file);
        url_arr.push(url);
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', url);
        linkElement.setAttribute('target', '_blank');
        linkElement.innerText = url;

    }
}
    
function uploadImage() {
    const files = imageInput.files;
    if (!files || files.length === 0) {
        alert("Please select one or more images to upload.");
        return;
    }
    alert("Images uploaded successfully!");
}

const personal_info = document.querySelector("#personal_info");
const property_info = document.querySelector("#property_info");
const rest_info = document.querySelector("#rest_info");

const continue_btn = document.querySelector("#continue_btn");
const next_btn = document.querySelector("#next_btn");
const submit_btn = document.querySelector("#submit_btn");
continue_btn.addEventListener("click", () => {
  personal_info.style.display = "none";
  rest_info.style.display = "none";
  property_info.style.display = "block";
});

next_btn.addEventListener("click",()=>{
    rest_info.style.display = "block";
    personal_info.style.display = "none";
    property_info.style.display = "none";
});

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const ph_number = document.querySelector("#ph_number").value;
  const proptype = document.querySelector("#proptype").value;
  const addline = document.querySelector("#addline").value;
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;
  const amenities = document.querySelector("#amenities").value;
  const sqfoot = document.querySelector("#sqfoot").value;
  const bedno = document.querySelector("#bedno").value;
  const describe = document.querySelector("#describe").value;
  console.log(name);
  console.log(email);
  console.log(ph_number);
  console.log(proptype);
  console.log(addline);
  console.log(city);
  console.log(country);
  console.log(amenities);
  console.log(sqfoot);
  console.log(bedno);
  console.log(describe);
  console.log(url_arr);
  console.log(url_arr);
 str=url_arr.join(" ");
console.log(str);
});
