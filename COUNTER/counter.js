var a = document.getElementById('increase');
    var c = document.getElementById('decrease');
    var d = document.getElementById('reset');
var b = document.getElementById('count');
var r = 0;
   a.addEventListener('click', function(){
      r++;
      console.log(r);
      b.textContent = r;
   });
   c.addEventListener('click',function(){
    if(r>0){
    r--;
      console.log(r);
      b.textContent = r;
   }});
   d.addEventListener('click',function(){
     r=0;
      console.log(r);
      b.textContent = r;
   });
