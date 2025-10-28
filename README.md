# 케어넥 마케팅 웹사이트

## 프로젝트 개요
- **이름**: 케어넥 마케팅
- **목표**: 실버케어 업계 전문 마케팅 서비스 웹사이트
- **주요 기능**: 방문요양, 요양원 마케팅 서비스 홍보 및 상담 신청

## 🌐 URL 정보
- **개발 서버**: https://3000-ix76bz2sl0c31cgrij725-8f57ffe2.sandbox.novita.ai
- **도메인**: https://carenect.kr (배포 후)
- **GitHub**: https://github.com/user/webapp

## 🎯 완료된 주요 기능

### ✅ 개별 칼럼 페이지 시스템 (2025-10-28 완성)
- **6개 전문 칼럼**을 개별 페이지로 분리하여 SEO 최적화
- **검색 엔진 최적화**: 각 칼럼이 독립적으로 구글/네이버에서 검색 가능
- **구조화된 데이터**: JSON-LD Schema.org Article 형식 적용
- **소셜 미디어 최적화**: Open Graph, Twitter Card 메타태그

### 📝 개별 칼럼 페이지 목록
1. **방문요양 키워드로 네이버 상위노출 달성하는 5단계 전략** (`/column/seo-marketing-strategy`)
2. **요양원 유튜브 쇼츠로 월 상담 문의 300% 증가시킨 콘텐츠 전략** (`/column/youtube-shorts-strategy`)
3. **인스타그램과 스레드로 실버케어 브랜딩 완성하기** (`/column/sns-branding-strategy`)
4. **2026년 실버산업 마케팅 트렌드** (`/column/2026-industry-trends`)
5. **요양보호사교육원 vs 방문요양 vs 요양원** (`/column/three-sectors-comparison`)
6. **지방 소도시 요양원이 6개월 만에 대기자 명단을 만든 비결** (`/column/small-city-success-case`)

### 🎨 사용자 경험 개선
- **Breadcrumb 네비게이션**: 홈 > 칼럼 > 개별 칼럼
- **관련 칼럼 추천**: 각 페이지 하단에 3개 관련 칼럼 표시  
- **공유 기능**: 카카오톡, URL 복사 버튼
- **반응형 디자인**: 모바일/데스크톱 최적화

### 🔍 SEO 최적화 상세 내용
- **메타 태그**: title, description, keywords 각 칼럼별 맞춤 설정
- **Open Graph**: Facebook, LinkedIn 등 소셜 미디어 공유 최적화
- **Twitter Card**: 트위터 공유 시 이미지/제목 표시
- **Canonical URL**: 중복 콘텐츠 방지
- **구조화된 데이터**: 검색 결과에 풍부한 정보 표시 가능

## 🗺️ 데이터 아키텍처
- **정적 콘텐츠**: 칼럼 데이터는 TypeScript 객체로 관리
- **Cloudflare D1**: 상담 신청 데이터 저장
- **Google Sheets**: 상담 신청 백업 및 관리
- **Hono Framework**: 경량 백엔드 API 라우터

## 📋 현재 기능 URI 목록

### 메인 기능
- `GET /` - 메인 홈페이지
- `GET /column` - 칼럼 목록 페이지 
- `POST /api/contact` - 상담신청 API
- `GET /admin` - 관리자 페이지 (상담신청 현황)

### 개별 칼럼 페이지
- `GET /column/seo-marketing-strategy` - SEO 마케팅 전략 칼럼
- `GET /column/youtube-shorts-strategy` - 유튜브 쇼츠 전략 칼럼
- `GET /column/sns-branding-strategy` - SNS 브랜딩 전략 칼럼
- `GET /column/2026-industry-trends` - 2026년 업계 트렌드 칼럼
- `GET /column/three-sectors-comparison` - 3개 분야 비교 칼럼
- `GET /column/small-city-success-case` - 지방 소도시 성공 사례 칼럼

### SEO & 시스템
- `GET /sitemap.xml` - 검색엔진용 사이트맵 (6개 개별 칼럼 포함)
- `GET /robots.txt` - 검색엔진 크롤링 정책
- `GET /navere7b699febaa941daec996d8cc2279576.html` - 네이버 웹마스터 인증

## 🚀 사용자 가이드

### 메인 웹사이트 이용
1. **서비스 정보 확인**: 홈페이지에서 마케팅 서비스 소개 확인
2. **전문 칼럼 열람**: 상단 메뉴 '칼럼'에서 전문 콘텐츠 확인
3. **무료 상담 신청**: 하단 상담 신청 폼 작성 및 제출

### 개별 칼럼 이용
1. **메인 페이지 칼럼 섹션**에서 관심 칼럼 클릭
2. **개별 칼럼 페이지**에서 전체 내용 확인
3. **관련 칼럼** 하단 링크로 추가 정보 탐색
4. **공유 기능**으로 소셜 미디어 공유 가능

### 관리자 기능
1. **`/admin`** 페이지에서 상담신청 현황 확인
2. **실시간 통계**: 총 신청 수, 당일 신청 수, 기업 신청 수
3. **상세 정보**: 이름, 전화번호, 회사명, 메시지, 신청일시

## 🛠️ 기술 스택
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Hono Framework (TypeScript)
- **Database**: Cloudflare D1 (SQLite)
- **External**: Google Apps Script (Sheets 연동)
- **Styling**: CSS3 + Flexbox/Grid
- **Icons**: Font Awesome 6
- **Fonts**: Pretendard

## 🚀 배포 상태
- **플랫폼**: Cloudflare Pages
- **상태**: ✅ 활성화 (개발 서버)
- **마지막 업데이트**: 2025-10-28
- **도메인 연결**: 설정 중 (carenect.kr)

## 🎯 다음 개발 계획

### 우선순위 높음
1. **실제 도메인 배포** (carenect.kr)
2. **Google Search Console 등록** 및 인덱싱 요청
3. **네이버 웹마스터 도구**에 새 sitemap.xml 제출

### 우선순위 중간
1. **칼럼 콘텐츠 확장** (월 2-4개 신규 칼럼)
2. **이미지 최적화** (각 칼럼별 대표 이미지)
3. **성능 최적화** (로딩 속도 개선)

### 우선순위 낮음
1. **고급 분석 도구** 연동 (Google Analytics)
2. **A/B 테스트** 시스템 구축
3. **다국어 지원** (필요시)

## 📊 SEO 성과 예상

### 검색 키워드 타겟
- **방문요양 마케팅**
- **요양원 홍보**
- **실버케어 브랜딩**  
- **요양보호사교육원 마케팅**
- **지방 요양원 성공사례**
- **실버산업 마케팅 트렌드**

### 예상 효과
- **개별 칼럼별 검색 노출** 가능
- **롱테일 키워드** 대응 강화
- **전문성 어필**을 통한 신뢰도 향상
- **유기적 트래픽 증가** 예상

---

*케어넥 마케팅은 실버케어 업계의 성공적인 온라인 마케팅을 지원합니다.*