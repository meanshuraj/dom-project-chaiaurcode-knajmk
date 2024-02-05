const randomColor=function(){
  const hex="0123456789ABCDEF";
  let color="#";

  for(let i=0;i<6;i++){
    color+=[Math.floor(Math.random()*16)];
  }
  return color;
};

let IntervalId;
const startChangingColor=function(){
  //IntervalId=setInterval(changeColor,100);

  //  function changeColor(){
  //   document.body.style.backgroundColor=randomColor();
  // };
  let changeColor=function(){
    document.body.style.backgroundColor=randomColor();
  };
  if(!IntervalId){
    IntervalId=setInterval(changeColor,100);
  };
};

const stopChangingColor=function(){
  clearInterval(IntervalId);
  IntervalId=null;
};

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);


