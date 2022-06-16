let count = 0;
let xxx = document.getElementById("ass")
let abc = document.getElementById("value")
let def = document.querySelectorAll('.btn')


def.forEach(function(btns){
  btns.addEventListener('click',function(e){
    let result = e.target.classList;
    if (result.contains('decrease')){
      count--;
    }
    if (result.contains('increase')){
      count++;
    }
    if (result.contains('reset')){
      count=0;
    }


    if(count>0 ){
      abc.style.color="blue";
      abc.textContent = count;
    }

    if(count==0){
      abc.style.color="black";
      abc.textContent = count;
    }
    if(count>=6 && count<7){
      abc.style.color= "yellow";
      xxx.textContent = "jerk";
    }

    if(count>6 || count<6){
      abc.style.color="blue";
      xxx.textContent = "Counter";
    }

    if(count<0){
      abc.style.color="red";
      abc.textContent = count;
    }



    // console.log(e.currentTarget.classList)
    // console.log( e.target.classList)
    // console.log(btns)


    
  })
})

