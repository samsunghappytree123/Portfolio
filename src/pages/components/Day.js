export function dayCheck(wantDate) {
    var now = new Date();
    var writeDay = new Date(wantDate);
    let ResultTime = "";

    var difference = now.getTime() - writeDay.getTime();
    difference = Math.trunc(difference / 1000);

    const seconds = 1;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const mon = day * 30;
    const year = mon * 12;

    let resultYear, resultMon, resultDay, resultHour, resultMin, resultSec;

    resultYear = Math.trunc(difference / year);
    resultMon = Math.trunc(difference / mon);
    resultDay = Math.trunc(difference / day);
    resultHour = Math.trunc(difference / hour);
    resultMin = Math.trunc(difference / minute);
    resultSec = Math.trunc(difference / seconds);
  
    if(resultSec > 0){
        ResultTime = resultSec+'초';
        difference = difference - (resultSec * seconds );
    }
  
    if(resultMin > 0){
        ResultTime = resultMin+'분';
        difference = difference - (resultMin * minute);
    }
  
    if(resultHour > 0){
        ResultTime = resultHour+'시간';
        difference = difference - (resultHour * hour);
    }
  
    if(resultDay > 0){
        ResultTime = resultDay+'일';
        difference = difference - (resultDay * day);
    }
  
    if(resultMon > 0){
        ResultTime = resultMon+'개월';
        difference=  difference - (resultMon * mon);
    }
  
    if(resultYear > 0){
      ResultTime = resultYear+'년';
      difference= difference - (resultYear * year);
    }
  
    return ResultTime;
}