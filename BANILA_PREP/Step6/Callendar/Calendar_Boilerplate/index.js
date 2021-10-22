console.log("hello, vanilla.");

var dayArray=['Sun','Mon','Tue','Wed','Tue','Fri','Sat'];
var monthArray=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];

var today=new Date();//현재시각 가져오기
var year = today.getFullYear(); // 오늘의 연도 가져오기
var month=today.getMonth()+1; // 오늘의 월 가져오기
var date = today.getDate(); //오늘의 일자 가져오기

var day = today.getDay(); //오늘의 요일 가져오기 월부터 1~7
var days=new Date(year,month,0).getDate(); // 이번달의 일자수를 가져오기
var last_day;

var tbody=document.querySelector('#tbody'); //table body 캘린더 표시하는 곳 가져오기
var leftside=document.querySelector('.left-side');
var rightside=document.querySelector('.right-side');

var dayOfWeek=document.querySelector('.dayOfWeek'); //요일표시
var dayOfToday=document.querySelector('.dayOfToday'); //일자표시
var MonthYear=document.querySelector('.MonthYear'); //월, 연도표시

//이번달의 첫번째 날의 요일을 가져오기, 위의 dayArray의 Array번호임. 
function firstdayOfThisMonthFunc(date_x){ 
    var gap = 7-(date_x-1)%7;
    if(gap+day>7){
        return (gap+day-7);
    }
    else if(gap+day===7){
        return 0;   //이 달력에서는 일요일이 젤 먼저이므로, 이게 필요하다.
    }
    else{
        return (gap+day);
    }
}
// 첫번째 날의 요일 가져오는 함수를 호출, 원래는 변수에 바로 담았는데 이상하게 안된다. 뭔가 잘못쓴듯
var firstdayOfThisMonth = firstdayOfThisMonthFunc(date); 

var dateCNT=1;

function makeCalendar(firstdayOfThisMonth,days){
    for(var i=0;i<tbody.children.length;i++){
        if(dateCNT>days){
            break;
        }

        for(var j=0;j<7;j++){
            if(dateCNT===1&& j < firstdayOfThisMonth){
                continue;
            }
            if(dateCNT>days){
                
                break;
            }
            tbody.children[i].children[j].innerText=dateCNT;
            dateCNT++;
        }
        

    }
    dateCNT=1;

}

function clearCalendar(){
    for(var i=0;i<tbody.children.length;i++){
        for(var j=0;j<7;j++){
            tbody.children[i].children[j].innerText='';
        }
    }
}
//요일 일요일 숫자 바꿔주게 하는 함수
function thisday(day_x){
    if(day_x===7){
        
        return 0;
    }
    if(day_x<0){
        return 6;
    }
    else{
        return day_x;
    }
}
function thismonth(month_x){
//월을 돌려주는 함수
    
    if(month_x<1){
        year--;
        days=new Date(year,12,0).getDate();
        day=thisday(firstdayOfThisMonth-1);
        return 12;
    }
    else if(month_x>12){
        year++;
        days=new Date(year,1,0).getDate();
        day=thisday(firstdayOfThisMonth-1);
        return 1;
    }
    else{
        days=new Date(year,month_x,0).getDate();
        day=thisday(firstdayOfThisMonth-1);
        return month_x;
    }

}


makeCalendar(firstdayOfThisMonth,days); //시작할때

dayOfWeek.innerText=dayArray[thisday(day)];
dayOfToday.innerText=date;
MonthYear.innerText=monthArray[month-1]+" "+year;

tbody.addEventListener('click',function(event){
    var dayvalue=event.target.cellIndex;
    var datevalue=event.target.innerText;
    dayOfWeek.innerText=dayArray[dayvalue];
    dayOfToday.innerText=datevalue;

    console.log(event.target);
})

leftside.addEventListener('click',function(event){
    month=thismonth(month-1);
    //달력바꾸기
    firstdayOfThisMonth=firstdayOfThisMonthFunc(days);
    clearCalendar();
    makeCalendar(firstdayOfThisMonth,days);
    //위에 세개바꾸기
    dayOfWeek.innerText=dayArray[firstdayOfThisMonth];
    dayOfToday.innerText=1;
    MonthYear.innerText=monthArray[month-1]+" "+year;
})

rightside.addEventListener('click',function(event){
    month=thismonth(month+1);
    //달력바꾸기
    firstdayOfThisMonth=firstdayOfThisMonthFunc(days);
    clearCalendar();
    makeCalendar(firstdayOfThisMonth,days);
    //위에 세개바꾸기
    dayOfWeek.innerText=dayArray[firstdayOfThisMonth];
    dayOfToday.innerText=1;
    MonthYear.innerText=monthArray[month-1]+" "+year;
})

console.log(day);
console.log(date);
console.log(days);