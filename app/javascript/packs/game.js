import Swal from 'sweetalert2'

const state = { count: 0 };

Swal.fire({
  text: '10秒間、下のボタンを連打してかき氷を高く積み上げましょう！',
  icon: 'warning',
  confirmButtonText: 'スタート',
}).then(() => {
  countdown(3000, '#countdown')
});

function countdown(setTime, id) {
  let totalTime = setTime;
  // 読み込まれた最初の時間
  const oldTime = Date.now();
  // タイマーをセット
  const timeId = setInterval(() => {
  // 読み込まれ続ける時間
  const currentTime = Date.now();

  const diff = currentTime - oldTime;
  const diffSec = totalTime - diff;
  // Math.ceil()関数は引数として与えた数以上の最小の整数を返す
  const remainSec = Math.ceil(diffSec / 1000);
  let text = `<div class="countdown-number">${remainSec}</div>`;

  if (diffSec <= 0) {
    clearInterval(timeId);
    text = `<div class="start-fadeout">スタート</div>`;
    countdownSec(10000, '#sec');
  }
  document.querySelector(id).innerHTML = text;
  });
}

function countdownSec(setTime, id) {
  let totalTime = setTime;
  const oldTime = Date.now();

  const timeId = setInterval(() => {
  const currentTime = Date.now();

  const diff = currentTime - oldTime;
  const diffSec = totalTime - diff;

  const remainSec = Math.ceil(diffSec / 1000);
  let text = `残り${remainSec}秒`;

  const clickButton = document.querySelector('.click-button')
  clickButton.addEventListener('click', clickFrequency)

  if (diffSec <= 0) {
    clearInterval(timeId);
    text = "終了";
    clickButton.style['pointer-events'] = 'none';
    
    const btn = document.getElementById('press-button');
    const score = btn.innerHTML
    sessionStorage.setItem('userScore', score);
    
    setTimeout(resultPage, 2000);
    }
  document.querySelector(id).innerHTML = text;
  });
}

function clickFrequency() {
  const counter = document.querySelector('#press-button');
  counter.innerHTML = ++state.count;

  if (counter.innerHTML == 10) {
    const tsuika10 = document.querySelector('.tsuika10');
    tsuika10.style.display = 'block';
  }

  if (counter.innerHTML == 20) {
    const tsuika20 = document.querySelector('.tsuika20');
    tsuika20.style.display = 'block';
  }

  if (counter.innerHTML == 30) {
    const tsuika30 = document.querySelector('.tsuika30');
    tsuika30.style.display = 'block';
  }

  if (counter.innerHTML == 40) {
    const tsuika40 = document.querySelector('.tsuika40');
    tsuika40.style.display = 'block';
  }

  if (counter.innerHTML == 50) {
    const tsuika50 = document.querySelector('.tsuika50');
    tsuika50.style.display = 'block';
  }

  if (counter.innerHTML == 60) {
    const tsuika60 = document.querySelector('.tsuika60');
    tsuika60.style.display = 'block';
  }

  if (counter.innerHTML == 70) {
    const tsuika70 = document.querySelector('.tsuika70');
    tsuika70.style.display = 'block';
  }

  if (counter.innerHTML == 80) {
    const tsuika80 = document.querySelector('.tsuika80');
    tsuika80.style.display = 'block';
  }

  if (counter.innerHTML == 90) {
    const tsuika90 = document.querySelector('.tsuika90');
    tsuika90.style.display = 'block';
  }

  if (counter.innerHTML == 100) {
    const tsuika100 = document.querySelector('.tsuika100');
    tsuika100.style.display = 'block';
  }
}

function resultPage() {
  window.location.href = location.origin + '/result';
}