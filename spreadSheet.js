
//シートの取得方法
const ss = SpreadsheetApp.getActiveSpreadsheet();
//シート名から取得
let sheet =　ss.getSheetByName('シート1');
//シートIDから取得


//範囲指定
const range = sheet.getRange('A3:C4');

//値取得
let value = range.getValue();
// セル範囲の値をまとめて取得
let values = range.getValues();



// ================
//【クリア】
//全てクリア
range.clear();
//コンテンツクリア
range.clearContent()
//書式クリア
range.clearFormat()
// ================


//【Google Drive】
// ================
//フォルダー直下の全ファイルの共有リンク (共有URL) を一括作成する
var file = DriveApp.getFileById(fileId); 
//変数fileの共有設定を「リンクを知っている全員が閲覧化」に変更する
file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
//共有URLを変数shareUrlに格納する
var shareUrl = file.getUrl();
// ================


// ================
//csvをいじる方法
//Google Apps ScriptでCSVファイルをGoogleスプレッドシートにインポートする
//https://qiita.com/YusukeKameyama/items/5ae840ec8d4382a215db
// ================