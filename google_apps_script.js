// Google Apps Script 코드 (스프레드시트에 붙여넣기용)
function doPost(e) {
  try {
    // 스프레드시트 열기 (여기에 실제 스프레드시트 ID 입력)
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // POST 데이터 파싱
    var data = JSON.parse(e.postData.contents);
    
    // 현재 시간 생성
    var now = new Date();
    var timestamp = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
    
    // 스프레드시트에 데이터 추가
    sheet.appendRow([
      timestamp,           // 접수일시
      data.name || '',     // 이름
      data.phone || '',    // 전화번호  
      data.company || '',  // 회사명
      data.message || ''   // 문의내용
    ]);
    
    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 처리 (테스트용)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Google Apps Script is working!' }))
    .setMimeType(ContentService.MimeType.JSON);
}