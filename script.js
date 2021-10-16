const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev' );
const nextBtn = document.getElementById( 'next' );
const submitBtn = document.getElementById( 'submit' );
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById( 'user-score');
const questionText = document.getElementById( 'question-text' );
let currentQuestion = 0;

var score = 0;

let questions=[

{
question: "Which among the following states is largest producer of Coffee in India?",
answers: [
{option:"Karnataka",answer:true},
{option:"Andhra Pradesh",answer: false}
]
},
{
question: "The following hills are present where Eastern Ghats and Western Ghats meet ?",
answers: [
{option:"Sahyadri hils", answer: false},
{option:"Nilgiri Hills", answer: true}
]
},
{
question: "Which Indian city is known for its wonderful beaches?",
answers: [
{option: "Surat", answer: false},
{option: "Goa", answer: true}
]
}
]

restartBtn.addEventListener( 'click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener( 'click',submit);

function beginQuiz( ){
currentQuestion = 0;
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion] .answers[0].option;
trueBtn.onclick = () => {
let ano=0;
if(questions[currentQuestion].answers[ano].answer){
if(score<3){
score++;
}
}
userScore.innerHTML = score;
if(currentQuestion<2){
next();
}
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
let ano=1;
if(questions[currentQuestion] .answers[ano].answer ){
if(score<3){
scoret++;
}
}
userScore.innerHTML = score;
if(currentQuestion<2){
next();
}
}
prevBtn.classList.add('hide');
}

beginQuiz();
function restart( ){
currentQuestion = 0;
prevBtn.classList.remove('hide');
nextBtn.classList.remove('hide');
submitBtn.classList.remove('hide');
trueBtn.classList.remove('hide');
falseBtn.classList.remove('hide');
score = 0;
userScore.innerHIML = score;
beginQuiz();
}
function next( ){
currentQuestion++;
if(currentQuestion>=2 ){
nextBtn.classList.add('hide');
prevBtn.classList.remove('hide');
}
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
let ano=0;
if(questions[currentQuestion].answers[ano].answer){
if(score<3){
score++;
}
}

userScore.innerHTML = score;
if(currentQuestion<2){
next();
}
}

falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
let ano=1;
if(questions[currentQuestion].answers[ano].answer ){
if (score<3){
score++;
}
}
userScore.innerHTML = score;
if(currentQuestion<2){
next();
}
}
prevBtn.classList.remove( 'hide' );
}

function prev(){
currentQuestion--;
if(currentQuestion<=0){
prevBtn.classList.add('hide' );
nextBtn.classList.remove( 'hide' );
}
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
let ano=0;
if(questions[currentQuestion].answers[ano].answer ){
if (score<3){
score++;
}
}

userScore.innerHTML = score;

if(currentQuestion<2){
next();

}

}
falseBtn.innerHTML = questions[currentQuestion].answers[1] .option;

falseBtn.onclick = () => {
let ano=1;
if(questions[currentQuestion].answers[ano].answer ){
if (score<3){
score++;
}
}

userScore.innerHTML = score;
if(currentQuestion<2){
next();
}
}
}

nextBtn.classList.remove( 'hide' );

function submit(){
prevBtn.classList.add('hide');
nextBtn.classList.add( 'hide');
submitBtn.classList.add('hide');
trueBtn.classList.add('hide');
falseBtn.classList.add( 'hide' );
questionText.innerHTML = "Congratulations on submitting the quiz!";
}
