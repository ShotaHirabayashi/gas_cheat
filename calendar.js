
//当日の予定を取得して整形する
function getSchedule() {
  
  // カレンダー情報を取得
  var calender = CalendarApp.getCalendarById("メールアドレス");
  // 当日の予定を取得
  var schedules = calender.getEventsForDay(new Date());
  
  var text = '\n 【Today\'s schedule】 \n';
  var bar = '\n================\n'; 
  
  for(let i = 0; i < schedules.length; i++){
    let title =schedules[i].getTitle();
    let start = schedules[i].getStartTime();
    let end = schedules[i].getEndTime();
    
    let startFormatted = ("0" + start.getHours()).slice(-2)   + ":" + ("0" + start.getMinutes()).slice(-2);
    let endFormatted = ("0" + end.getHours()).slice(-2)   + ":" + ("0" + end.getMinutes()).slice(-2);
     
    text += '\n' + title + "\n" ;
    text +=  startFormatted +"~" + endFormatted +"\n" ;
    text +=  "\n" ;
    
  }
  
  return text ;
  
}
