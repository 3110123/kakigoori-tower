const score = sessionStorage.getItem('userScore');
let text = `${score}cm`;
document.querySelector('#score').innerHTML = text;

const link = document.querySelector('.twitter-share');
const url = `https://twitter.com/share?&url=https://otsumamiko.app/&text=${score}cmのかき氷を作りました！&hashtags=かき氷作り,かき氷メーカー&lang=ja`;

link.setAttribute('href', url);