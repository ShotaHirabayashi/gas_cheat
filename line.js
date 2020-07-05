

function sendToLine(text){
    var token = 'mytoken';
    var options =
     {
       "method"  : "post",
       "payload" : "message=" + text,
       "headers" : {"Authorization" : "Bearer "+ token}
   
     };
     UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
  }