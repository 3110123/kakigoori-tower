const score = sessionStorage.getItem('userScore');
let text = `${score}cm`;
document.querySelector('#score').innerHTML = text;

const link = document.querySelector('.twitter-share');
const url = `https://twitter.com/share?&url=https://kakigoori-tower.herokuapp.com/&text=${score}cmのかき氷を作りました！&hashtags=かき氷タワー,かき氷好きと繋がりたい&lang=ja`;

link.setAttribute('href', url);

if (text < "20cm") {
  let text = `修行が足りません。出直してください。`;
  document.querySelector('#comment').innerHTML = text;
} else if ("20cm" <= text && text < "40cm") {
  let text = `まあまあな結果です。`;
  document.querySelector('#comment').innerHTML = text;
} else if ("40cm" <= text && text < "60cm") {
  let text = `良い感じです！`;
  document.querySelector('#comment').innerHTML = text;
} else if ("60cm" <= text && text < "80cm") {
  let text = `すごいです！なかなか手が痛いことでしょう。`;
  document.querySelector('#comment').innerHTML = text;
} else if ("80cm" <= text && text < "90cm") {
  let text = `半端ないです！!これは1位を狙えるのでは！？`;
  document.querySelector('#comment').innerHTML = text;
} else if ("90cm" <= text) {
  let text = `もしや新記録更新！？`;
  document.querySelector('#comment').innerHTML = text;
} else if (text == "nullcm") {
  let text = `先に結果を見るなんて...さすがエンジニアです。`;
  document.querySelector('#comment').innerHTML = text;
}