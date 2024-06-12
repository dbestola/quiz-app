// DOM Document object model
// selecting
// using ID
// class name
// tagnames
// queryselector
// queryselectorAll



var QuestionBank = [
    {
        question: 'Q.1 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    },
    {
        question: 'Q.2 Who is the President of Nigeria',
        options: ['Obasanjo', 'Thomas Muller', 'Moses Bliss', 'Bola Ahmed Tinubu'],
        answer: 'Bola Ahmed Tinubu'
    },
    {
        question: 'Q.3 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    },
    {
        question: 'Q.4 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    },
    {
        question: 'Q.5 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    },
    {
        question: 'Q.6 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    },
    {
        question: 'Q.7 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    },
    {
        question: 'Q.8 Who is the CEO of AppClick',
        options: ['seyi Adeleke', 'Osimhen', 'Paul Pogba', 'Obasanjo'],
        answer: 'seyi Adeleke'
    }
]

var timer = document.getElementById('timer')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var question = document.getElementById('question')
var option0 = document.getElementById('option0')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var start = document.querySelector(`.start`)
var Grading = document.querySelector(`.Grading`)
var images = document.querySelector(`.images`)
var i = 0
var scoreboard = document.getElementById(`scoreboard`)
var score = 0

const span = document.querySelectorAll(`span`)

const answersDiv = document.getElementById("answersDiv");


function DisplayQuestion() {
     for (var a = 0; a < span.length; a++) {
        span[a].style.background =`rgba(148, 148, 60, 0.562)`
    }
  
    
    question.innerHTML = QuestionBank[i].question
    option0.innerHTML = QuestionBank[i].options[0]
    option1.innerHTML = QuestionBank[i].options[1]
    option2.innerHTML = QuestionBank[i].options[2]
    option3.innerHTML = QuestionBank[i].options[3]
    start.innerHTML = `<b> Question ${i+1} of ${QuestionBank.length} </b> ` 
    
   

   
}

DisplayQuestion()





let sMin = 1; 
let time = sMin * 60; 
let countdown = setInterval(update, 1000)

function update() {
   
  let min = Math.floor(time / 60);
  
  let sec = time % 60;
  
 
  sec = sec < 10 ? '0' + sec : sec;
  
  timer.innerHTML = (`${min}:${sec}`);
 
  time--;
 
  min == 0 && sec == 0 ? clearInterval(countdown) : countdown;
  
  
}
update()


// function clock() {
//     var date = new Date ()
//     var hours = date.getHours()
//     var minutes = date.getMinutes()
//     var seconds = date.getSeconds()   

//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     timer.innerHTML = (` ${hours} : ${minutes} : ${seconds}`)
    
// }

// clock()

// setInterval(clock, 1000)

function nextQuestion () {
    if ( i < QuestionBank.length - 1) {
     i++
     DisplayQuestion()
 }
}


btn1.addEventListener ('click', function(){
    if ( i < QuestionBank.length && i > 0 ) {
     i--
     DisplayQuestion()
 }

}
  
)

// DisplayQuestion()


btn2.addEventListener ('click', function(){
    if ( i < QuestionBank.length - 1 ) {
     i++
     DisplayQuestion()
 }
 else {
    scoreboard.style.display = 'block'
    document.querySelector(`.quizcontainer`).style.display = `none`
    Grading.innerHTML = `Your score is : ${score} / ${QuestionBank.length}`

 }
}
  
)

// DisplayQuestion()


images.setAttribute (`src`, `https://media.istockphoto.com/id/1869943345/photo/planet-earth-in-the-hands-of-a-man-against-the-background-of-the-lights-of-the-evening-city.webp?b=1&s=170667a&w=0&k=20&c=QHeQ13sySCpnddaTy97G0v2tJGoXHTWT5Ml7Gcq1Mmo=`)

function BackToQuiz () {
    window.location.reload()
}


function calculateScore (userClickedAnswer) {
if (userClickedAnswer.innerHTML == QuestionBank[i].answer && score < QuestionBank.length) {
    score+=1
    console.log(score);
    document.getElementById(userClickedAnswer.id).style.background =`green`
   
}
else {
    document.getElementById(userClickedAnswer.id).style.background =`red`
}

setTimeout (nextQuestion, 2000)


}




function showAnswers() {
    scoreboard.style.display = "none";
    answersDiv.style.display = "block";

    for(var num=0; num < QuestionBank.length; num++) {
      var createdList =  document.createElement(`li`)
      createdList.innerHTML = QuestionBank[num].answer
      document.querySelector(`#ol`).appendChild(createdList)
    }
}



