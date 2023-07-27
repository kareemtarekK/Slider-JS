// make images in array
let slidesCount = Array.from(document.querySelectorAll('.container img'));
// number of images
let countNumber = slidesCount.length;
console.log(countNumber);
let currentSlide = 1;
let indecators = document.getElementById("indecators");
// create ul to append lis
let ulElement = document.createElement('ul');
indecators.appendChild(ulElement);
// create number of li equal to length of array || number of images
for(let i = 1; i<= countNumber; i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.appendChild(document.createTextNode(i));
    liElement.setAttribute("data-count",i);
}
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let sildes_number = document.getElementById('sildes_number');
// function on click on next button
nextButton.onclick = nextClick;
// function on click on previous button
prevButton.onclick = prevClick; 
function nextClick(){
    // remove class hidden from prev button
    prevButton.classList.remove('hidden');
    // add 1 to currentSlide
    ++currentSlide;
    // remove class active from any image
    slidesCount.forEach((img)=>{
        img.classList.remove('active');
    })
    // remove class active form any bullts
    ulElement.childNodes.forEach((li)=>{
        li.classList.remove('active');
    })
    // check if we arrive max number of images
    if(currentSlide > countNumber){
        nextButton.classList.add('hidden');
        currentSlide = countNumber;
    }
    // call function that control div sildes_number , images and class active on bullts
    dataDetails();
}
function prevClick(){
    // remove class hidden from next button
    nextButton.classList.remove("hidden");
    // remove class active from any image
    slidesCount.forEach((img)=>{
        img.classList.remove('active');
    })
    // subtract 1 from currentSlide
    --currentSlide;
    // check if we arrive min number of images
    if(currentSlide <= 1){
        prevButton.classList.add('hidden');
        currentSlide = 1;
    }
    // remove class active form any bullts
    ulElement.childNodes.forEach((li)=>{
        li.classList.remove('active');
    })
    // call function that control div sildes_number , images and class active on bullts
    dataDetails();
}
// call function that control div sildes_number , images and class active on bullts
function dataDetails(){
    sildes_number.textContent ="sildes #"+" "+currentSlide+" "+"from"+" "+countNumber;
    slidesCount[currentSlide - 1].classList.add('active');
    ulElement.children[currentSlide - 1].classList.add('active');
}
dataDetails();