import Swal from 'sweetalert2'

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
    // セットしたタイマーを解除
    clearInterval(timeId);
    text = `<div class="start-fadeout">スタート</div>`;
    countdownSec(10000, '#sec');
  }
  document.querySelector(id).innerHTML = text;
  });
}

function countdownSec(setTime, id) {
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
  let text = `残り${remainSec}秒`;

  if (diffSec <= 0) {
    // セットしたタイマーを解除
    clearInterval(timeId);
    text = "終了";
  }
  document.querySelector(id).innerHTML = text;
  });
}