function Displaytime(){
    var newdate=new Date();
    var hrs=newdate.getHours();
    var min=newdate.getMinutes();
    var sec=newdate.getSeconds();
    var session=document.getElementById('session')

     if(hrs>=12){
        session.innerHTML='PM'
     }else{
        session.innerHTML='AM'
     }
     if(hrs > 12){
        hrs = hrs-12;
     }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;

}

    setInterval(Displaytime,10);