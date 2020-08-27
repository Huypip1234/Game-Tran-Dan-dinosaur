    var pos = 0; 
    let pos2 = 0;
    var cloud = document.getElementById('cloud');
    var tree = document.getElementById('tree');
    var trandan = document.getElementById('tran_dan');
    let check=0;
let left = document.getElementById('left');
 let Right = document.getElementById('right');
  /*  let jump = document.defaultView.getComputedStyle(trandan , null).getPropertyValue('top');*/
   
    setInterval(moveCloud, 10);
    setInterval(moveTree, 0);
    
    var scorejs = 0;
    
    function demScore() {
    document.getElementById('score').innerHTML = "<h1 style='color: white; text-align: center'>" + scorejs + '</h1>';
    }
    
    setInterval(demScore, 100)
   
    function playSoudCac() {
         var audio1 = new Audio('concac1.m4a');
            audio1.play();
     }
     
     function playsoud2() {
       var audio2 = new Audio('gameOver3.mp3');
       audio2.play();
     }
     
   function jumpt() {
       playSoudCac();
       trandan.style.top = "-55px";
       check=1;
        setTimeout(() => {
            trandan.style.top = "0px";
            check=0;
            if (pos2>=220) {
               scorejs++;
            }
         }, 350)
    } 
    
let pos4 = 1;
   setInterval(function() {
     if (scorejs==0) {
       pos4=1;
     } else if(scorejs==5) {
       pos4=1.2;
     } else if (scorejs==10) {
       pos4=1.3;
     } else if(scorejs==15) {
       pos4=1.4;
     } else if(scorejs==20) {
       pos4 = 1.5;
     } else if(scorejs==25) {
       pos4 = 1.6;
     } else if(scorejs==30) {
       pos4 =1.7;
     } else if(scorejs==35) {
       pos4 =1.8;
     } else if(scorejs==60) {
       pos4 =1.9;
     } else if (scorejs==100){
       pos4 =2;
     } else if (scorejs==500) {
       pos4=2.5;
     }
   }, 1000);
   
   function moveCloud() {
         if(pos >= 300) {
             cloud.style.right = -100+'px';
             pos = -100;
         } else {
             pos += pos4;
             cloud.style.right = pos+'px';
         }
    }
   let pos3 = 1;
   setInterval(function() {
     if (scorejs==0) {
       pos3=1;
     } else if(scorejs==5) {
       pos3=1.2;
     } else if (scorejs==10) {
       pos3=1.3;
     } else if(scorejs==15) {
       pos3=1.4;
     } else if(scorejs==20) {
       pos3 = 1.5;
alert('NHẮC NHỞ: Nhảy quá sát cây sẽ ko đc cộng điểm');
alert('chọn Ok để tiếp tục chơi');
scorejs=21;
     } else if(scorejs==25) {
       pos3 = 1.6;
     } else if(scorejs==30) {
       pos3 =1.7;
     } else if(scorejs==35) {
       pos3 =1.8;
     } else if(scorejs==60) {
       pos3 =1.9;
     } else if (scorejs==100){
       pos3 =2;
       alert('Khoan đã!!!')
       let ques = confirm('Bạn có muốn được 1000 điểm luôn mà ko cần chơi? (Cancel = Ko || Ok = Có)');
       if (ques==true) {
         alert('Vì bạn ko làm mà vẫn muốn ăn nên phải trở về 0 điểm');
         playsoud2();
         document.getElementById('huanroseIMG').style.display = 'block';
         scorejs=0;
       } else {
         alert('Nhấn ok để tiếp tục chơi !');
         scorejs=101;
       }
     } else if (scorejs==500) {
       pos3 =2.5;
       let ques2 = confirm('STOP: Bạn có ấu dâm ko ? (cancel = ko || Ok = Có)');
       if (ques2==false) {
         alert('Phải ấu dâm mới đc chơi tiếp');
         playsoud2();
         scorejs=0;
       } else {
         alert('Nhấn ok để tiếp tục chơi');
         scorejs=501;
       }
     } else if (scorejs==1000) {
       pos3=2.5;
       alert('Phần thưởng của bạn là 1 tràng pháo tay!');
      let ques3= confirm('Bạn có hài lòng với phần thưởng này ko ?');
       if (ques3==false) {
         alert('Ôi bạn ơi, đấy là do b chơi ngu đấy bạn ạ!');
         playsoud2();
         scorejs=0;
       } else {
         alert('Tốt lắm, Nhấn ok để tiếp tục chơi.');
         scorejs=1001;
       }
     }
   }, 1000);
   
   function moveTree() {
         if(pos2 >= 300) {
             tree.style.right = -50+'px';
             pos2 = -50;
         } else {
             pos2 += pos3; //max: 2.5
             tree.style.right = pos2+'px';
         if (Math.round(pos2)==220&& check==0) {
               playsoud2();
              alert('Chơi lại ?');
                scorejs=0;
           }
         }
      };
      
  
      setInterval(function () {
         left.style.top = "25px";
         setTimeout(function() {
           left.style.top = '35px';
         }, 50);
         setTimeout(function() {
right.style.top = "25px";
         setTimeout(function() {
           right.style.top = '35px';
         }, 100);
         }, 50);
       }, 200);
  

   
