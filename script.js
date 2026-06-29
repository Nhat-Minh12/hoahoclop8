function home() {
document.getElementById("content").innerHTML = `
<div class="card">
<h2>🏠 Trang chủ</h2>

<p>
Chào mừng đến với Website Hóa học lớp 8.
</p>

<br>

<p>
Hãy chọn một chức năng bên dưới để bắt đầu học.
</p>

</div>

<div class="grid">

<div class="item" onclick="theory()">
📚
<br><br>
Lý thuyết
</div>

<div class="item" onclick="quiz()">
📝
<br><br>
Trắc nghiệm
</div>

<div class="item" onclick="equation()">
⚗️
<br><br>
Phương trình
</div>

<div class="item" onclick="exam()">
🏆
<br><br>
Thi thử
</div>

</div>
`;
}

function theory() {
document.getElementById("content").innerHTML = `
<div class="card">

<h2>📚 Lý thuyết Hóa học 8</h2>

<ul>

<li>1. Chất</li>

<li>2. Nguyên tử</li>

<li>3. Nguyên tố hóa học</li>

<li>4. Đơn chất và hợp chất</li>

<li>5. Phân tử</li>

<li>6. Công thức hóa học</li>

<li>7. Hóa trị</li>

<li>8. Mol</li>

<li>9. Phản ứng hóa học</li>

<li>10. Oxi</li>

<li>11. Hiđro</li>

<li>12. Nước</li>

<li>13. Dung dịch</li>

</ul>

</div>
`;
}

function quiz() {
document.getElementById("content").innerHTML = `
<div class="card">

<h2>📝 Trắc nghiệm</h2>

<p>Sẽ có hơn 1000 câu hỏi.</p>

<br>

<button onclick="startQuiz()">Bắt đầu</button>

</div>
`;
}

function equation() {
document.getElementById("content").innerHTML = `
<div class="card">

<h2>⚗️ Cân bằng phương trình</h2>

<p>

Chức năng đang phát triển.

</p>

</div>
`;
}

function exam() {
document.getElementById("content").innerHTML = `
<div class="card">

<h2>🏆 Thi thử</h2>

<p>

Đề thi sẽ được cập nhật.

</p>

</div>
`;
}

const questions = [

{
question:"Hóa trị của O là?",
options:["I","II","III","IV"],
answer:1
},

{
question:"Na có hóa trị?",
options:["I","II","III","IV"],
answer:0
},

{
question:"Kí hiệu hóa học của sắt?",
options:["S","Fe","F","Ag"],
answer:1
}

];

let current = 0;

let score = 0;

function startQuiz(){

current = 0;

score = 0;

loadQuestion();

}

function loadQuestion(){

let q = questions[current];

let html = `
<div class="card">

<h2>Câu ${current+1}/${questions.length}</h2>

<h3>${q.question}</h3>

`;

for(let i=0;i<4;i++){

html += `<button onclick="checkAnswer(${i})">${q.options[i]}</button><br><br>`;

}

html += `</div>`;

document.getElementById("content").innerHTML = html;

}

function checkAnswer(choice){

if(choice==questions[current].answer){

score++;

alert("✅ Chính xác");

}

else{

alert("❌ Sai");

}

current++;

if(current<questions.length){

loadQuestion();

}

else{

document.getElementById("content").innerHTML=`

<div class="card">

<h2>Hoàn thành!</h2>

<p>

Điểm của bạn:

<b>${score}/${questions.length}</b>

</p>

<button onclick="quiz()">

Làm lại

</button>

</div>

`;

}

}

home();
