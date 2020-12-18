var images = [
"https://www.denofgeek.com/wp-content/uploads/2019/11/ironman3_2.jpg?resize=768%2C432",
"https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2013/ThorDarkWorld_2194942100-TDW0NNG1._V362444527_SX1080_.jpg",
"https://cdn.vox-cdn.com/thumbor/WfUt9KGffHbOD7amSImAgrq_vVA=/285x145:1770x1135/1400x1400/filters:focal(285x145:1770x1135):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49514577/Captain-America-Civil-War-Spider-Man-Shield-Official.0.0.jpg",
"https://cdn3.movieweb.com/i/article/pgcFyKTA1rTFYcnUxDhHlAoGzZuDbP/1200:100/Avengers-Endgame-Captain-America-Time-Travel-Explained.jpg",	
];
var i=0;
function nextslide() { if(i == 5) { i=0; } document.getElementById("image").src = images[i]; i++; }