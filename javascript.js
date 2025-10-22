function showname(element){
    document.getElementById('namedog').innerHTML=element.alt;
    document.getElementById('namedog').style.background="red";
}
function hidename(element){
    document.getElementById('namedog').innerHTML='Dog breed name';
    document.getElementById('namedog').style.background="gray";
    
}
function hidenamecat(element){
    document.getElementById('namedog').innerHTML='cat breed name';
    document.getElementById('namedog').style.background="gray";
    
}
function hidenamebird(element){
    document.getElementById('namedog').innerHTML='bird breed name';
    document.getElementById('namedog').style.background="gray";
    
}
function showname1(element){
    document.getElementById('namedog').innerHTML=element.alt;
    document.getElementById('namedog').style.background="yellow";
}
const RANDOM_IMAGES = [
  "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482759win/anh-mo-ta.png",
  "https://maunailxinh.com/wp-content/uploads/2025/05/anh-meo-buon-cute-1.jpg",
  "https://cdnmedia.baotintuc.vn/2013/03/20/16/45/chim1.jpg",
];

function randomimage() {
  const img = document.getElementById("sos");
  const idx = Math.floor(Math.random() * RANDOM_IMAGES.length);
  img.src = RANDOM_IMAGES[idx];
  img.alt = "Random animal " + (idx + 1);
}


window.randomimage = randomimage;