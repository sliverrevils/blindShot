"use strict";

// document.addEventListener('DOMContentLoaded',()=>{
    const $keyBlock=document.querySelector('#keyBlock');
    const $pressedKey=document.querySelector('#pressedKey');

    const allChars=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    let nowChar='';
    let play;

    function getRND(min, max) { // RANDOM INT FUNC
        return Math.round(Math.random() * (max - min) + min);
      }     

    function getRandomChar(){
        return getRND(0,allChars.length-1);
    }

    function justPressedKey(key){        
        $pressedKey.textContent=key;
        setTimeout(()=>pressedKey.textContent='',200);
    }

    function startPlay(){
         play=setInterval(() => {
            $keyBlock.textContent=nowChar=allChars[getRandomChar()];
            $pressedKey.classList.remove('goodShot','badShot');
        }, 3000);
        
    }

    function endPlay(){        
        clearTimeout(play);
        $keyBlock.textContent='press Enter to start';
    }

    

    



    window.addEventListener('keypress',e=>{
        console.log(e);    
        if (e.key=='Enter'){
            startPlay();
        }else{
            justPressedKey(e.key.toLocaleUpperCase());
        
       
            if(nowChar==e.key.toLocaleUpperCase()){
                 $pressedKey.classList.add('goodShot');            
            }else{
                $pressedKey.classList.add('badShot');
                endPlay();
            }
        }
       
    })

// })