# 구글 스프레드시트 자동 연동 설정 가이드

## 1단계: 구글 스프레드시트 생성

1. **Google 스프레드시트 생성**
   - https://sheets.google.com 접속
   - "빈 스프레드시트" 생성
   - 제목을 "실버케어 마케팅 상담신청"으로 변경

2. **헤더 설정**
   - A1: `ID`
   - B1: `이름`
   - C1: `전화번호` 
   - D1: `회사명`
   - E1: `메시지`
   - F1: `신청일시`

## 2단계: Google Apps Script 설정

1. **Apps Script 열기**
   - 스프레드시트에서 `확장 프로그램` > `Apps Script` 클릭

2. **스크립트 코드 입력**
   - 기본 `Code.gs` 파일에 다음 코드를 붙여넣기:

```javascript
function doPost(e) {
  try {
    // 스프레드시트 연결
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // POST 데이터 파싱
    const data = JSON.parse(e.postData.contents);
    
    // 다음 빈 행 찾기
    const lastRow = sheet.getLastRow();
    const nextRow = lastRow + 1;
    
    // 한국 시간으로 변환
    const timestamp = new Date(data.timestamp);
    const koreanTime = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Seoul'
    }).format(timestamp);
    
    // 데이터 추가
    sheet.getRange(nextRow, 1).setValue(nextRow - 1); // ID (행번호-1)
    sheet.getRange(nextRow, 2).setValue(data.name);
    sheet.getRange(nextRow, 3).setValue(data.phone);
    sheet.getRange(nextRow, 4).setValue(data.company);
    sheet.getRange(nextRow, 5).setValue(data.message);
    sheet.getRange(nextRow, 6).setValue(koreanTime);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, row: nextRow}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 테스트용 함수
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: "홍길동",
        phone: "010-1234-5678",
        company: "테스트 회사",
        message: "상담 신청합니다.",
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}
```

## 3단계: 웹앱 배포

1. **배포하기**
   - 우상단 `배포` > `새 배포` 클릭
   - 유형: `웹앱` 선택
   - 설명: "실버케어 마케팅 상담신청 연동"
   - 실행 계정: "나"
   - 액세스 권한: "모든 사용자" (중요!)
   - `배포` 클릭

2. **웹앱 URL 복사**
   - 배포 완료 후 나타나는 웹앱 URL 복사
   - 예시: `https://script.google.com/macros/s/ABC123.../exec`

## 4단계: 환경 변수 설정

로컬 개발용 `.dev.vars` 파일 생성:

```bash
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

프로덕션용 Cloudflare 비밀 설정:

```bash
npx wrangler pages secret put GOOGLE_SHEETS_URL --project-name webapp
# 값 입력: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 5단계: 테스트

1. **Apps Script 테스트**
   - Apps Script에서 `testDoPost` 함수 실행
   - 스프레드시트에 테스트 데이터가 추가되는지 확인

2. **웹사이트 테스트**
   - 상담신청 폼 작성 후 제출
   - 스프레드시트에 실시간으로 데이터 추가되는지 확인

## 주의사항

- **보안**: 웹앱을 "모든 사용자"로 설정해야 외부에서 접근 가능
- **권한**: Google 계정 권한 확인 필요
- **테스트**: 배포 후 반드시 테스트 진행
- **업데이트**: 스크립트 수정 시 새로 배포 필요

## 스프레드시트 접근

구글 스프레드시트 URL을 공유하면 실시간으로 상담신청 현황을 확인할 수 있습니다.