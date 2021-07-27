const score = sessionStorage.getItem('userScore');
let text = `${score}cm`;
document.querySelector('#score').innerHTML = text;

const link = document.querySelector('.twitter-share');
const url = `https://twitter.com/share?&url=https://kakigoori-tower.herokuapp.com/&text=${score}cmのかき氷を作りました！&hashtags=かき氷タワー,かき氷好きと繋がりたい&lang=ja`;

link.setAttribute('href', url);

if (text == "nullcm") {
  let text = `先に結果を見るなんて...さすがエンジニアです。`;
  document.querySelector('#comment').innerHTML = text;
} else if (0 <= score && score < 20) {
  let text = `修行が足りません。出直してください。`;
  document.querySelector('#comment').innerHTML = text;
} else if (20 <= score && score < 40) {
  let text = `まあまあな結果です。`;
  document.querySelector('#comment').innerHTML = text;
} else if (40 <= score && score < 60) {
  let text = `良い感じです！`;
  document.querySelector('#comment').innerHTML = text;
} else if (60 <= score && score < 80) {
  let text = `すごいです！なかなか手が痛いことでしょう。`;
  document.querySelector('#comment').innerHTML = text;
} else if (80 <= score && score < 90) {
  let text = `半端ないです！!でも1位までまだまだですね。`;
  document.querySelector('#comment').innerHTML = text;
} else if (90 <= score && score < 100) {
  let text = `もうすぐで大台です！`;
  document.querySelector('#comment').innerHTML = text;
} else if (100 <= score && score < 110) {
  let text = `想定以上です。あなたの指は何本あるんですか！？`;
  document.querySelector('#comment').innerHTML = text;
} else if (110 <= score && score < 120) {
  let text = `想定以上で作者が震えています。コツのシェアをお願いします...`;
  document.querySelector('#comment').innerHTML = text;
} else if (120 <= score && score < 130) {
  let text = `これは最高記録では!?1?あなたは何者...`;
  document.querySelector('#comment').innerHTML = text;
} else if (130 <= score ) {
  let text = `レベチ過ぎてついていけません。これはもはやあなたのアプリ...`;
  document.querySelector('#comment').innerHTML = text;
}
