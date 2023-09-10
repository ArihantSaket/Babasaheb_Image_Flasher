const images = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpeg",
    "img06.jpg",
    "img07.jpg",
    "img08.jpg",
    "img09.jpg",
    "img011.jpg",
    "img012.jpg",
    "img013.jpg",
    "img014.jpg",
    "img015.jpg",
    "img016.jpg",
    "img017.jpg",
];


// function getRandom(){
//     let randImg = Math.floor(Math.random()*images.length);
//     let selett = images[randImg]
//     document.querySelector(".imageFlash").src = `${selett}`;
// }

let btnn = document.querySelector("button");
btnn.addEventListener("click", ()=>{
    let randImg = Math.floor(Math.random()*images.length);
    let selett = images[randImg]
    var a = document.querySelector(".imageFlash").src = `${selett}`;
    console.log(a)
});

