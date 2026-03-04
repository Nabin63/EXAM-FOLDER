const questions = [

{
question:"1. He ___ a student.",
a:"is",
b:"are",
c:"was",
d:"were",
correct:"a"
},

{
question:"2. They ___ playing cricket.",
a:"is",
b:"are",
c:"was",
d:"were",
correct:"b"
},

{
question:"3. She ___ very happy yesterday.",
a:"is",
b:"are",
c:"was",
d:"were",
correct:"c"
},

{
question:"4. We ___ in the park yesterday.",
a:"is",
b:"are",
c:"was",
d:"were",
correct:"d"
}

];

const quiz = document.getElementById("quiz");

questions.forEach((q,i)=>{

const div = document.createElement("div");

div.innerHTML = `
<p><b>${q.question}</b></p>

<label><input type="radio" name="q${i}" value="a"> ${q.a}</label><br>

<label><input type="radio" name="q${i}" value="b"> ${q.b}</label><br>

<label><input type="radio" name="q${i}" value="c"> ${q.c}</label><br>

<label><input type="radio" name="q${i}" value="d"> ${q.d}</label><br><br>
`;

quiz.appendChild(div);

});
