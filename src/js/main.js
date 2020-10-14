1
2
3
4
5
6
7
8
9
10
11
12
13
14
	
let btnDownload = document.querySelector('button');
let img = document.querySelector('img');
 
 
// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
 
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}