    
function loadContent(i) {
    
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            document.querySelector('.content').innerHTML = this.responseText;
        }
    };
    http.open("GET", `content${i}.txt`, true);
    http.send();
}


for (let i=0; i <= 4; i++) {
    document.querySelectorAll('nav ul li')[i].addEventListener('click', function(){
        loadContent(i+1);
    });
}
