//함수 선언식
// function auth(){
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//     document.getElementById("target").innerText = token
// }

//화살표 함수
let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
}


///////////함수 작성 방법////////
//함수 선언식
function hello(name){
    alert(name + "님 안녕하세요")
}

//함수 표현식
const hello = function(name){
    alert(name + "님 안녕하세요")
}

//화살표 함수
const hello = (name) => {
    alert(name + "님 안녕하세요")
}