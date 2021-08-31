let upBtn = document.getElementById('goUp');
let navEl = document.getElementById('nav');
window.onscroll = function() {scrollFunc();}
function scrollFunc(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        upBtn.style.display = 'block';
        navEl.style.background = 'rebeccapurple';
    }
    else{
        upBtn.style.display = 'none';
        navEl.style.background = 'transparent';
    }
}
upBtn.onclick = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}