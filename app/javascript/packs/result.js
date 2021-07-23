const score = sessionStorage.getItem('userScore');
let text = `${score}cm`;
document.querySelector('#score').innerHTML = text;

const link = document.querySelector('.twitter-share');
const url = `https://twitter.com/share?&url=https://kakigoori-tower.herokuapp.com/&text=${score}cmのかき氷を作りました！&hashtags=かき氷タワー,かき氷好きと繋がりたい&lang=ja`;

link.setAttribute('href', url);