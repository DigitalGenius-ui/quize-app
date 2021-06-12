let startBtn = document.querySelector(".start");
let infoPopup = document.querySelector(".information");
let exitBtn = infoPopup.querySelector(".exit-btn");
let continueBtn = infoPopup.querySelector(".continue-btn");
let queQustion = document.querySelector(".quize-questions");

startBtn.onclick = ()=>{
    infoPopup.classList.add("open");
}

exitBtn.onclick = ()=>{
    infoPopup.classList.remove("open");
}
continueBtn.onclick = ()=>{
    queQustion.classList.add("open");
    quizeOut(0)
    pageNum(1);
}

let count = 0;
let queNum = 1

// if next btn is clicked.... 
let nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () =>{
    if(count < allQuestion.length - 1){
        count++
        queNum++
    }else if(count >= allQuestion.length - 1){
        count = 0
        queNum = 1
    }
    else{
        console.log("completed")
    }
    quizeOut(count);
    pageNum(queNum);
}

function quizeOut(index){
let queTitle = document.querySelector(".title1");
let optionList = document.querySelector(".option-list");
let tgeQue = "<h1>" + allQuestion[index].num + ". " + allQuestion[index].question + "</h1>";

let optionTag = '<div class="answer1"><p>' + allQuestion[index].options[0] + '</p></div>' +
                '<div class="answer1"><p>'+ allQuestion[index].options[1] +'</p></div>' +
                '<div class="answer1">'+ allQuestion[index].options[2] +'<p></p></div>' +
                '<div class="answer1">'+ allQuestion[index].options[3] +'<p></p></div>';
optionList.innerHTML = optionTag;
queTitle.innerHTML = tgeQue;

}

function pageNum(index){
let pageNumber = document.querySelector(".page-number");
let numinner = '<span><p>' + index +'</p> of <p>' + allQuestion.length +'</p> Questions</span> ';
pageNumber.innerHTML = numinner;
}

function isAnswerValid(e){
    let answer = document.querySelectorAll(".answer1");
    answer.forEach(answer, (e) =>{
        let item = e.currentTarget.classList;
    })
}


