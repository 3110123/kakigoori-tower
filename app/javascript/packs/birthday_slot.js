const startSlot = document.getElementById('start');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var month01 = document.getElementById('month01');
var month02 = document.getElementById('month02');
var day01 = document.getElementById('day01');
var day02 = document.getElementById('day02');
var t1 = null;
var t2 = null;
var t3 = null;
var t4 = null;

var inputNumber = document.getElementById("inputnumber");
var inputMonth = inputNumber.dataset.monthId
var inputDay = inputNumber.dataset.dayId

if (inputMonth.length === 1){
  inputMonth = 0 + inputMonth;
}
inputArray = (inputMonth + inputDay);

var arr = [];

function start() {
    arr.length = 0;
    if (t1) {
      // セットしたタイマーを解除
        clearInterval(t1);
    }
    if (t2) {
        clearInterval(t2);
    }
    if (t3) {
        clearInterval(t3);
    }
    if (t4) {
        clearInterval(t4);
    }

    // ランダムで1~9の整数を1つ選ぶ
    month01.value = Math.floor(Math.random() * 10);
    month02.value = Math.floor(Math.random() * 10);
    day01.value = Math.floor(Math.random() * 10);
    day02.value = Math.floor(Math.random() * 10);

    // 選んだ整数に1を足す、% 10で 0 を作成
    // setInterval 間隔の早さを設定
    t1 = setInterval(function () {
      month01.value = (+month01.value + 1) % 10;
    }, 1000);
    t2 = setInterval(function () {
      month02.value = (+month02.value + 1) % 10;
    }, 1000);
    t3 = setInterval(function () {
      day01.value = (+day01.value + 1) % 10;
    }, 1000);
    t4 = setInterval(function () {
      day02.value = (+day02.value + 1) % 10;
    }, 1000);
}

function stop1() {
    if (t1) {
      arr.splice(0,0,month01.value);
      clearInterval(t1);
      t1 = null;
    }
    check();
}

function stop2() {
    if (t2) {
      arr.splice(1,0,month02.value);
      clearInterval(t2);
      t2 = null;
    }
    check();
}

function stop3() {
    if (t3) {
      arr.splice(2,0,day01.value);
      clearInterval(t3);
      t3 = null;
    }
    check();
}

function stop4() {
  if (t4) {
    arr.splice(3,0,day02.value);
    clearInterval(t4);
    t4 = null;
  }
  check();
}

function check() {
  if (arr.length === 4) {
    resultArr = arr.join("")
    if (inputArray === resultArr) {
      alert("正解");
    } else {
      alert("はずれ");
    }
  }
}

startSlot.addEventListener('click', start);
b1.addEventListener('click', stop1);
b2.addEventListener('click', stop2);
b3.addEventListener('click', stop3);
b4.addEventListener('click', stop4);

start();