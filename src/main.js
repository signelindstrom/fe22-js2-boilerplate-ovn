import anime from "animejs";

// anime({
//     targets: 'h1',
//     rotate: 360,
// })

const img = document.createElement('img');
document.body.append(img);

// const moduleURL = import.meta.url; //URL till modulen
// const relativeURL = './media/kind.png' //Relativ URL till bilden //   <-- funkar inte att göra dom i new url ??

const imgUrl = new URL('./media/kind.png', import.meta.url);
img.src = imgUrl.href;