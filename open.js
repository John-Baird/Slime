let speed = 10;
let key = {
    a: false,
    s: false,
    d: false,
    w: false,
    both: false,
  };

function w () {
    let a = $('.box').css("margin-top");
    b = parseInt(a)
    b = b-speed;
    console.log(b);
    $('.box').css("margin-top", b+'px')  
}
function a () {
    let a = $('.box').css("margin-left");
    b = parseInt(a)
    b = b-speed;
    console.log(b);
    $('.box').css("margin-left", b+"px")   
}
function s () {
    let a = $('.box').css("margin-top");
    b = parseInt(a)
    b = b+speed;
    console.log(b);
    $('.box').css("margin-top", b+'px')
    
}
function d () {
    let a = $('.box').css("margin-left");
    b = parseInt(a)
    b = b+speed;
    console.log(b);
    $('.box').css("margin-left", b+"px")   
}

window.addEventListener('keydown', function (e) {
    
    document.querySelector('.box').innerHTML = `You pressed ${e.key}`;
    
    
    if (e.key == 's'){
        key.s = true;
        if(key.both == false){
            s();
            
        }

        
    }
    if (e.key == 'w'){
        key.w = true;
        if(key.both == false){
            w();
        }

        
    }
    if (e.key == 'a'){
        key.a = true;
        if(key.both == false){
            a();
            $('.box').css('transform', 'scaleX(-1)');
        }

        
    }
    if (e.key == 'd'){
        key.d = true;
        if(key.both == false){
            d();
            $('.box').css('transform', 'scaleX(1)');
        }
        
    }
    
    if (e.key == 'q'){
        console.log(key)
        l = document.getElementsByClassName("box")
        console.log(l)
    }
    if(key.s & key.a){
        key.both = true;
        a();
        s();
        $('.box').css('transform', 'scaleX(-1)');
      }
    if(key.s & key.d){
        key.both = true;
        s();
        d();
        $('.box').css('transform', 'scaleX(1)');
      }      
    if(key.w & key.d){
        key.both = true;
        w();
        d();
        $('.box').css('transform', 'scaleX(1)');
      }      
    if(key.w & key.a){
        key.both = true;
        w();
        a();
        $('.box').css('transform', 'scaleX(-1)');
      }
         

  }, false);
    

window.addEventListener('keyup', function (e) {
    if (e.key == 'd'){
        key.d = false;
    }
    if (e.key == 's'){
        key.s = false;
    }
    if (e.key == 'a'){
        key.a = false;
    }
    if (e.key == 'w'){
        key.w = false;
    }
    if (key.w == false && key.w == false && key.w == false && key.w == false){
        key.both = false;
    }

}, false);

