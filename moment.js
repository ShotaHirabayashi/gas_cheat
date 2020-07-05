

//Dateオブジェクトで書くと難しいけどMoment.jsでは簡単に書けることはたくさんあります。


//日付や時刻をフォーマット
//日付や時刻を足したり引いたり
//日付や時刻を比較する



//導入方法
//「リソース」→「ライブラリ」
//プロジェクトキーを入力
//MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48
//設定の際に、バージョンは一番最新を選択する


//フォーマットのサンプルコード
var date = Moment.moment(); //現在日時を取得
//2019/03/09
var formattedDate = date.format("YYYY/MM/DD");
//2019/3/9
var formattedDate = date.format("YYYY/M/D");
//2019年3月9日
var formattedDate = date.format("YYYY年M月D日");
//20190309
var formattedDate = date.format("YYYYMMDD");

//21:05:47
var formattedDate = date.format("HH:mm:ss");
//21時05分47秒
var formattedDate = date.format("HH時mm分ss秒");
//09:05:47 PM
var formattedDate = date.format("hh:mm:ss A");
//2019/03/09 21:05:47
var formattedDate = date.format("YYYY/MM/DD HH:mm:ss");
// 2019年03月09日21時05分47秒
var formattedDate = date.format("YYYY年MM月DD日HH時mm分ss秒");


//3月9日(土)
var dayArray = ["日","月","火","水","木","金","土"]; //解説1
var dayNum = date.format("d"); //曜日の番号。0～6。
var day = dayArray[dayNum]; //曜日の番号を日～土に変換。
var formattedDate = date.format("M月D日(" + day + ")");


//================
//日付や時刻を計算する方法


var date01 = Moment.moment(); //現在日時
var date02 = date01.subtract(1, "days"); //現在日時 - 1日
var date02 = date01.add(5,"days"); //現在日時 + 5日
var date02 = date01.subtract(2,"months"); //現在日時 - 2ヵ月
var date02 = date01.add(8, "hours"); //現在日時 + 8時間
//現在日時 + 1ヵ月と2週間
var date02 = date01.add(1, "months").add(2, "weeks"); 

// 使用可能文字
// years　y　年
// months　M　月
// weeks　w　週
// days　d　日
// hours　h　時
// minutes　m　分
// seconds　s　秒


