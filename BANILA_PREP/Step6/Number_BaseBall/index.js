console.log("hello, vanilla.");

var start=document.querySelector('.start');
var btn=document.querySelector('.btn');
var inputBox=document.querySelector('.inputText');
var strike=document.querySelector('.strike');
var ball=document.querySelector('.ball');
var count=document.querySelector('.count');
var numArray=['0','1','2','3','4','5','6','7','8','9'];
//var ranNum=parseInt(Math.random()*100)%numArray.length;

var totalCount=0;

//console.log(ranNum);

var makeRandomNum=MakeNum(ranNum());
console.log(makeRandomNum);

function ranNum(){
    var arr=[3]
    for(var i=0;i<3;i++){
        arr[i]=parseInt(Math.random()*100)%numArray.length;
    }
    return arr;
}

function MakeNum(ranArr){
    var makeNum='';

    for(var i=0;i<ranArr.length;i++){
        makeNum+=ranArr[i];
    }

    return makeNum;
}

function inputCheck(){
    if(totalCount>10){
        alert("10회 이상이 되었습니다. 게임이 재 시작됩니다.");
        makeRandomNum=MakeNum(ranNum());
        totalCount=0;
        return false;
    }
    var inputText=inputBox.value;
    if(inputText.toString().length!=3){
        alert("3자리수를 입력해주세요");
        return false;
    }

    return true;
}

function checkSolution(){
    totalCount++;
    var inputText=inputBox.value.toString();   
    var stkCount=0;
    var stkArray=[];
    var ballCount=0;
    var ballArray=[];
    for(var i=0;i<makeRandomNum.length;i++){
        if(inputText[i]===makeRandomNum[i]){
            stkArray[stkCount]=i;
            stkCount++;
            continue;
        }
        for(var j=0;j<makeRandomNum.length;j++){
            for(var k=0;k<stkArray;k++){
            if(j===stkArray[k]){
                continue;
            }
            }
            if(i===j){
                continue;
            }
            for(var k=0;k<ballArray;k++){
            if(j in ballArray){
                continue;
            }
            }

            if(inputText[i]===makeRandomNum[j]){
                ballArray[ballCount]=j;
                ballCount++;
            }
        }
    }
    if(stkCount===3){
        alert("성공입니다!!!!!");
    }else{
    alert("strike는 "+stkCount+"개 Ball은 "+ballCount+"개 입니다.");
    }
    //화면에 표시하기
    strike.innerText=stkCount;
    ball.innerText=ballCount;
    count.innerText=totalCount+"/10";
}

start.addEventListener('click',function(){
    var ranArr=ranNum();
    var makeNum=MakeNum(ranArr);
    makeRandomNum=makeNum;
    console.log(makeNum);
})

btn.addEventListener('click',function(){
    if(inputCheck()){
    checkSolution();
    }
    //innerText
})

inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if(inputCheck()){
      checkSolution();
      }
    }
});



// var left = document.querySelector('.left');
// var right = document.querySelector('.right');
// var image = document.querySelector('.Carousel-image');
// var dot1 = document.querySelector('.dot1');
// var dot2 = document.querySelector('.dot2');
// var dot3 = document.querySelector('.dot3');
// var dot4 = document.querySelector('.dot4');
// var dot5 = document.querySelector('.dot5');

// var imageSrc=['images/image-1.png','images/image-2.png','images/image-3.png','images/image-4.png','images/image-5.png'];

// var ImageNum=0;

// function ImageSelection(num,vector){
//     finalNum=num;
//     if(vector==='left'){
//         if(finalNum===0){
//             finalNum=4;
//         }
//         else{
//             finalNum=finalNum-1;
//         }        
//     }
//     else{
//         if(finalNum===4){
//             finalNum=0;
//         }
//         else{
//             finalNum=finalNum+1;
//         }        
//     }
//     ImageNum=finalNum;

//     return imageSrc[finalNum];
// }


// left.addEventListener('click',function(ev){
//     var this_target=ev.target.className;
//     image.src=ImageSelection(ImageNum,this_target);
//     // if(ev.target.className==='left'){
//     //     console.log('맞음');
//     // }
//     //console.log(getImageNum());

// })

// right.addEventListener('click',function(ev){
//     var this_target=ev.target.className;
//     image.src=ImageSelection(ImageNum,this_target);   

// })

// dot1.addEventListener('click',function(){
//     image.src=imageSrc[0];   
// })

// dot2.addEventListener('click',function(){
//     image.src=imageSrc[1];   
// })

// dot3.addEventListener('click',function(){
//     image.src=imageSrc[2];   
// })

// dot4.addEventListener('click',function(){
//     image.src=imageSrc[3];   
// })

// dot5.addEventListener('click',function(){
//     image.src=imageSrc[4];   
// })


