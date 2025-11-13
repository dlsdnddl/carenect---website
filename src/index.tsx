import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

type Bindings = {
  DB: D1Database;
  GOOGLE_SHEETS_URL?: string;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Naver verification file route
app.get('/navere7b699febaa941daec996d8cc2279576.html', (c) => {
  return c.text('naver-site-verification: navere7b699febaa941daec996d8cc2279576.html', 200, {
    'Content-Type': 'text/html'
  })
})

// Column page route
app.get('/column', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>케어넥 마케팅 전문 칼럼 - 방문요양, 요양원 마케팅 노하우</title>
        <meta name="description" content="케어넥 마케팅의 방문요양 홍보, 요양원 마케팅 전문가가 공유하는 실전 노하우와 성공 사례를 확인하세요.">
        <meta name="keywords" content="방문요양 마케팅 칼럼, 요양원 홍보 노하우, 실버산업 마케팅 전략, 케어넥 마케팅 칼럼, 방문요양 성공사례">
        <meta name="theme-color" content="#3182f6">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Styles -->
        <link href="/static/style.css?v=20251028-2" rel="stylesheet">
    </head>
    <body>
        <!-- Header -->
        <header class="header" id="header">
            <div class="header-container">
                <div class="logo-section">
                    <div class="logo" onclick="window.location.href='/'">
                        <i class="fas fa-heartbeat"></i>
                        <span class="logo-text">케어넥 마케팅</span>
                    </div>
                </div>
                <nav class="nav-section">
                    <ul class="nav-menu">
                        <li><a href="/">홈</a></li>
                        <li><a href="/#about">소개</a></li>
                        <li><a href="/#services">서비스</a></li>
                        <li><a href="/#proof">실적</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                        <li><a href="/column">칼럼</a></li>
                        <li><a href="/#contact">상담신청</a></li>
                    </ul>
                </nav>
                <div class="cta-section">
                    <button class="cta-button" onclick="window.location.href='/#contact'">
                        <i class="fas fa-phone-alt"></i>
                        무료상담
                    </button>
                </div>
                <div class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </header>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-content">
                <ul class="mobile-nav-menu">
                    <li><a href="/" onclick="closeMobileMenu()">홈</a></li>
                    <li><a href="/#about" onclick="closeMobileMenu()">소개</a></li>
                    <li><a href="/#services" onclick="closeMobileMenu()">서비스</a></li>
                    <li><a href="/#proof" onclick="closeMobileMenu()">실적</a></li>
                    <li><a href="/#faq" onclick="closeMobileMenu()">FAQ</a></li>
                    <li><a href="/column" onclick="closeMobileMenu()">칼럼</a></li>
                    <li><a href="/#contact" onclick="closeMobileMenu()">상담신청</a></li>
                </ul>
            </div>
        </div>

        <main>
            <!-- Column Hero Section -->
            <section class="column-hero-section">
                <div class="hero-background"></div>
                <div class="hero-content">
                    <div class="container">
                        <h1 class="hero-title animate-on-scroll">
                            실버산업 마케팅<br>
                            <span class="highlight">전문 칼럼</span>
                        </h1>
                        <p class="hero-subtitle animate-on-scroll">
                            실전 경험으로 검증된 마케팅 노하우와<br>
                            업계 트렌드 분석을 제공합니다.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Column List Section -->
            <section class="column-list-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title animate-on-scroll">실전 마케팅 칼럼</h2>
                        <p class="section-subtitle animate-on-scroll">현장에서 검증된 마케팅 전략과 노하우를 공유합니다</p>
                    </div>
                    
                    <div class="column-grid">
                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/day-care-branding-strategy'">
                            <div class="column-meta">
                                <span class="column-category">브랜딩 전략</span>
                                <span class="column-date">2025.11.08</span>
                            </div>
                            <h3>주간보호센터 홍보 이렇게 하세요, 3개월 만에 인지도 2배 오른 비결</h3>
                            <p class="column-excerpt">
                                "시설과 프로그램은 자신 있는데 어떻게 알려야 할지 막막합니다." 보호자의 불안을 해소하고 신뢰를 구축하는 브랜딩 전략으로 3개월 만에 인지도 2배 증가를 달성한 실전 노하우를 공개합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 127</span>
                                <span><i class="fas fa-heart"></i> 9</span>
                                <span><i class="fas fa-comment"></i> 4</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/day-care-online-strategy'">
                            <div class="column-meta">
                                <span class="column-category">온라인 홍보</span>
                                <span class="column-date">2025.11.04</span>
                            </div>
                            <h3>주간보호센터 홍보, 2주 만에 문의 3배 늘린 진짜 온라인 전략</h3>
                            <p class="column-excerpt">
                                "전단지도 돌리고, 블로그도 만들어봤는데 왜 문의가 안 올까요?" 많은 주간보호센터가 겪는 고민을 해결하는 실전 온라인 전략 3가지를 공개합니다. 2주 만에 문의 3배 증가를 만든 검증된 방법입니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 234</span>
                                <span><i class="fas fa-heart"></i> 18</span>
                                <span><i class="fas fa-comment"></i> 7</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/home-care-promotion-strategy'">
                            <div class="column-meta">
                                <span class="column-category">온라인 홍보</span>
                                <span class="column-date">2025.10.28</span>
                            </div>
                            <h3>방문요양홍보, 경쟁 센터보다 상담 2배 늘리는 비결 공개</h3>
                            <p class="column-excerpt">
                                "홍보를 해야 한다는 건 아는데, 어디서부터 시작해야 할지 모르겠어요." 이런 고민을 하는 방문요양센터 대표님들을 위해 실전에서 바로 적용 가능한 온라인 홍보 전략을 공개합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 856</span>
                                <span><i class="fas fa-heart"></i> 67</span>
                                <span><i class="fas fa-comment"></i> 18</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/seo-marketing-strategy'">
                            <div class="column-meta">
                                <span class="column-category">SEO 마케팅</span>
                                <span class="column-date">2025.10.15</span>
                            </div>
                            <h3>방문요양 키워드로 네이버 상위노출 달성하는 5단계 전략</h3>
                            <p class="column-excerpt">
                                실제 50여 개 센터에서 검증된 5단계 키워드 전략으로 '지역명 + 방문요양' 검색에서 네이버 상위노출을 달성한 구체적인 방법론을 단계별로 공개합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 1,254</span>
                                <span><i class="fas fa-heart"></i> 89</span>
                                <span><i class="fas fa-comment"></i> 23</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/youtube-shorts-strategy'">
                            <div class="column-meta">
                                <span class="column-category">유튜브 마케팅</span>
                                <span class="column-date">2025.10.12</span>
                            </div>
                            <h3>요양원 유튜브 쇼츠로 월 상담 문의 300% 증가시킨 콘텐츠 전략</h3>
                            <p class="column-excerpt">
                                요양원이 유튜브 쇼츠를 활용해 월 상담 문의를 300% 증가시킨 실제 사례와 구체적인 콘텐츠 전략, 채널 운영 노하우를 단계별로 공개합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 2,156</span>
                                <span><i class="fas fa-heart"></i> 147</span>
                                <span><i class="fas fa-comment"></i> 45</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/sns-branding-strategy'">
                            <div class="column-meta">
                                <span class="column-category">SNS 마케팅</span>
                                <span class="column-date">2025.10.08</span>
                            </div>
                            <h3>인스타그램과 스레드로 실버케어 브랜딩 완성하기</h3>
                            <p class="column-excerpt">
                                MZ세대 보호자들이 주요 의사결정자가 되는 시대, 인스타그램과 스레드를 활용해 실버케어 브랜딩을 완성하는 구체적인 전략과 노하우를 단계별로 공개합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 1,876</span>
                                <span><i class="fas fa-heart"></i> 125</span>
                                <span><i class="fas fa-comment"></i> 34</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/2026-industry-trends'">
                            <div class="column-meta">
                                <span class="column-category">업계 트렌드</span>
                                <span class="column-date">2025.10.05</span>
                            </div>
                            <h3>2026년 실버산업 마케팅 트렌드</h3>
                            <p class="column-excerpt">
                                2026년 실버산업 마케팅의 대세와 주요 트렌드를 예측하고, 앞으로 주목해야 할 마케팅 채널과 전략 방향을 데이터와 전문가 인사이트로 분석합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 3,245</span>
                                <span><i class="fas fa-heart"></i> 198</span>
                                <span><i class="fas fa-comment"></i> 67</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/three-sectors-comparison'">
                            <div class="column-meta">
                                <span class="column-category">마케팅 전략</span>
                                <span class="column-date">2025.09.28</span>
                            </div>
                            <h3>요양보호사교육원 vs 방문요양 vs 요양원</h3>
                            <p class="column-excerpt">
                                요양보호사교육원, 방문요양, 요양원의 특성과 차이점을 분석하고, 각 서비스별 최적화된 마케팅 전략과 고객 유치 방법을 비교 분석합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 2,687</span>
                                <span><i class="fas fa-heart"></i> 156</span>
                                <span><i class="fas fa-comment"></i> 52</span>
                            </div>
                        </article>

                        <article class="column-card animate-on-scroll" onclick="window.location.href='/column/small-city-success-case'">
                            <div class="column-meta">
                                <span class="column-category">케이스 스터디</span>
                                <span class="column-date">2025.07.20</span>
                            </div>
                            <h3>지방 소도시 요양원이 6개월 만에 대기자 명단을 만든 비결</h3>
                            <p class="column-excerpt">
                                경쟁이 치열한 수도권이 아닌 지방 소도시 요양원이 단 6개월 만에 대기자 명단을 만들어낸 놀라운 비결과 전략을 실제 사례로 자세히 공개합니다.
                            </p>
                            <div class="column-stats">
                                <span><i class="fas fa-eye"></i> 4,123</span>
                                <span><i class="fas fa-heart"></i> 267</span>
                                <span><i class="fas fa-comment"></i> 89</span>
                            </div>
                        </article>
                    </div>


                </div>
            </section>

            <!-- CTA Section -->
            <section class="column-cta-section">
                <div class="container">
                    <div class="cta-content animate-on-scroll">
                        <h2>더 자세한 마케팅 전략이 궁금하신가요?</h2>
                        <p>1:1 맞춤 컨설팅으로 귀하의 센터에 최적화된 마케팅 전략을 제안해 드립니다.</p>
                        <button class="primary-button" onclick="window.location.href='/#contact'">
                            <i class="fas fa-calendar-alt"></i>
                            무료 상담 신청하기
                        </button>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <div class="footer-logo">
                            <i class="fas fa-heartbeat"></i>
                            <span>케어넥 마케팅</span>
                        </div>
                        <p>실버산업 전문 마케팅으로 더 많은 고객과 만나보세요.</p>
                    </div>
                    <div class="footer-contact">
                        <h4>연락처</h4>
                        <p><i class="fas fa-envelope"></i> join@carenect.kr</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-company-info">
                        <p class="copyright">&copy; 2026 케어넥 마케팅. All Rights Reserved.</p>
                        <br>
                        <p class="company-details">
                            운영사: 블랙라운드 | 서비스 브랜드: 케어넥 마케팅<br>
                            대표: 조인웅 | 사업자등록번호: 713-16-00878 | 통신판매업 신고: 제2019-용인기흥-0886호<br>
                            주소: 경기도 용인시 기흥구 예현로 15
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scroll to Top Button -->
        <button class="scroll-to-top" id="scrollToTop" onclick="scrollToTop()">
            <i class="fas fa-chevron-up"></i>
        </button>

        <!-- Scripts -->
        <script src="/static/app.js?v=20251028-2"></script>
    </body>
    </html>
  `)
})

// Sitemap.xml route
app.get('/sitemap.xml', (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://carenect.kr/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column/seo-marketing-strategy</loc>
        <lastmod>2025-10-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column/youtube-shorts-strategy</loc>
        <lastmod>2025-10-12</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column/sns-branding-strategy</loc>
        <lastmod>2025-10-08</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column/2026-industry-trends</loc>
        <lastmod>2025-10-05</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column/three-sectors-comparison</loc>
        <lastmod>2025-09-28</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carenect.kr/column/small-city-success-case</loc>
        <lastmod>2025-07-20</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>`

  return c.text(sitemap, 200, {
    'Content-Type': 'application/xml'
  })
})

// Robots.txt route
app.get('/robots.txt', (c) => {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://carenect.kr/sitemap.xml

# 주요 페이지 크롤링 허용
Allow: /column
Allow: /static/

# 불필요한 페이지 크롤링 방지
Disallow: /api/
Disallow: /_worker.js
Disallow: /_routes.json

# 검색엔진별 특별 설정
User-agent: Googlebot
Allow: /

User-agent: Yeti
Allow: /

User-agent: NaverBot
Allow: /`

  return c.text(robots, 200, {
    'Content-Type': 'text/plain'
  })
})

// API route for contact form
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, phone, company, message } = body

    // 필수 필드 검증
    if (!name || !phone) {
      return c.json({ 
        success: false, 
        message: '이름과 전화번호는 필수 입력 항목입니다.' 
      }, 400)
    }

    // D1 데이터베이스에 저장
    const { env } = c;
    if (env.DB) {
      // contacts 테이블에 데이터 삽입
      const result = await env.DB.prepare(`
        INSERT INTO contacts (name, phone, company, message) 
        VALUES (?, ?, ?, ?)
      `).bind(name, phone, company || null, message || null).run();
      
      console.log('Contact saved to D1:', { id: result.meta.last_row_id, name, phone, company, message })
    } else {
      // 로컬 개발환경에서는 콘솔에만 출력
      console.log('Contact form submission (local):', { name, phone, company, message })
    }

    // 구글 스프레드시트에도 저장 시도
    try {
      await saveToGoogleSheets({ name, phone, company, message }, env.GOOGLE_SHEETS_URL);
    } catch (error) {
      console.log('Google Sheets save failed:', error);
      // 구글 스프레드시트 저장 실패해도 D1 저장은 성공으로 처리
    }
    
    return c.json({ 
      success: true, 
      message: '상담 신청이 접수되었습니다. 곧 연락드리겠습니다.' 
    })
  } catch (error) {
    console.error('Contact form error:', error);
    return c.json({ 
      success: false, 
      message: '오류가 발생했습니다. 다시 시도해주세요.' 
    }, 500)
  }
})

// 관리자 페이지 - 상담신청 데이터 조회
app.get('/admin/contacts', async (c) => {
  try {
    const { env } = c;
    let contacts = [];
    
    if (env.DB) {
      // D1 데이터베이스에서 상담신청 데이터 조회
      const result = await env.DB.prepare(`
        SELECT id, name, phone, company, message, created_at 
        FROM contacts 
        ORDER BY created_at DESC 
        LIMIT 100
      `).all();
      
      contacts = result.results || [];
    }

    return c.html(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>관리자 페이지 - 상담신청 현황</title>
          <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Pretendard', sans-serif; background: #f8fafc; }
            .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
            .header { background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header h1 { color: #1a202c; font-size: 24px; margin-bottom: 8px; }
            .header p { color: #6b7280; }
            .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px; }
            .stat-card { background: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .stat-number { font-size: 2em; font-weight: 700; color: #3182f6; }
            .stat-label { color: #6b7280; margin-top: 8px; }
            .table-container { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .table { width: 100%; border-collapse: collapse; }
            .table th { background: #f8fafc; padding: 15px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb; }
            .table td { padding: 15px; border-bottom: 1px solid #e5e7eb; }
            .table tr:hover { background: #f8fafc; }
            .empty-state { text-align: center; padding: 60px 20px; color: #6b7280; }
            .empty-state i { font-size: 48px; margin-bottom: 16px; }
            .refresh-btn { background: #3182f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; margin-bottom: 20px; }
            .refresh-btn:hover { background: #2563eb; }
            @media (max-width: 768px) {
              .table-container { overflow-x: auto; }
              .table { min-width: 600px; }
            }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1><i class="fas fa-users-cog"></i> 상담신청 관리</h1>
                  <p>케어넥 마케팅 웹사이트에서 접수된 상담신청을 관리할 수 있습니다.</p>
              </div>

              <div class="stats">
                  <div class="stat-card">
                      <div class="stat-number">${contacts.length}</div>
                      <div class="stat-label">총 상담신청 수</div>
                  </div>
                  <div class="stat-card">
                      <div class="stat-number">${contacts.filter(c => {
                        const today = new Date();
                        const koreanToday = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
                        const contactDate = new Date(c.created_at);
                        const koreanContactDate = new Date(contactDate.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
                        return koreanContactDate.toDateString() === koreanToday.toDateString();
                      }).length}</div>
                      <div class="stat-label">오늘 신청 수</div>
                  </div>
                  <div class="stat-card">
                      <div class="stat-number">${contacts.filter(c => c.company).length}</div>
                      <div class="stat-label">기업 상담신청</div>
                  </div>
              </div>

              <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                  <button class="refresh-btn" onclick="location.reload()">
                      <i class="fas fa-sync-alt"></i> 새로고침
                  </button>
                  <button class="refresh-btn" onclick="addTestData()" style="background: #10b981;">
                      <i class="fas fa-plus"></i> 테스트 데이터 추가
                  </button>
              </div>

              <div class="table-container">
                  ${contacts.length > 0 ? `
                  <table class="table">
                      <thead>
                          <tr>
                              <th>번호</th>
                              <th>이름</th>
                              <th>전화번호</th>
                              <th>회사명</th>
                              <th>메시지</th>
                              <th>신청일시</th>
                          </tr>
                      </thead>
                      <tbody>
                          ${contacts.map((contact, index) => `
                          <tr>
                              <td>${contact.id}</td>
                              <td><strong>${contact.name}</strong></td>
                              <td><a href="tel:${contact.phone}" style="color: #3182f6;">${contact.phone}</a></td>
                              <td>${contact.company || '-'}</td>
                              <td style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${contact.message || ''}">${contact.message || '-'}</td>
                              <td>${new Date(contact.created_at).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td>
                          </tr>
                          `).join('')}
                      </tbody>
                  </table>
                  ` : `
                  <div class="empty-state">
                      <i class="fas fa-inbox"></i>
                      <h3>상담신청이 없습니다</h3>
                      <p>아직 접수된 상담신청이 없습니다. 마케팅을 통해 고객을 유치해보세요!</p>
                  </div>
                  `}
              </div>
          </div>

          <script>
            // 5분마다 자동 새로고침
            setInterval(() => {
                location.reload();
            }, 300000);

            // 테스트 데이터 추가 함수
            async function addTestData() {
                const testData = {
                    name: '김테스트',
                    phone: '010-1234-5678',
                    company: '테스트 회사',
                    message: '관리자 페이지에서 테스트 데이터를 추가했습니다.'
                };

                try {
                    const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(testData)
                    });

                    const result = await response.json();
                    if (result.success) {
                        alert('테스트 데이터가 추가되었습니다!');
                        setTimeout(() => location.reload(), 1000);
                    } else {
                        alert('오류: ' + result.message);
                    }
                } catch (error) {
                    alert('테스트 데이터 추가 중 오류가 발생했습니다.');
                }
            }
          </script>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Admin page error:', error);
    return c.html(`
      <h1>오류 발생</h1>
      <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
      <p>Cloudflare D1 데이터베이스가 설정되었는지 확인해주세요.</p>
    `);
  }
})

// 구글 스프레드시트 저장 함수
async function saveToGoogleSheets(
  data: { name: string, phone: string, company?: string, message?: string },
  googleSheetsUrl?: string
) {
  try {
    if (!googleSheetsUrl) {
      console.log('Google Sheets URL not configured, skipping...');
      return;
    }

    // 구글 앱스 스크립트 웹앱으로 데이터 전송
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        company: data.company || '',
        message: data.message || '',
        timestamp: new Date().toISOString()
      })
    });

    if (response.ok) {
      console.log('Successfully saved to Google Sheets:', data);
    } else {
      console.error('Failed to save to Google Sheets:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
  }
}

// Individual Column Pages with SEO optimization
app.get('/column/seo-marketing-strategy', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'seo-marketing-strategy',
    id: 1,
    title: '방문요양 키워드로 네이버 상위노출 달성하는 5단계 전략',
    description: '방문요양 센터를 위한 네이버 검색 최적화 전략. 키워드 분석부터 백링크 구축까지, 실제 성과가 검증된 5단계 SEO 전략을 상세히 공개합니다.',
    category: 'SEO 마케팅',
    date: '2025.10.15',
    keywords: ['방문요양 마케팅', '네이버 상위노출', '구글 검색 최적화', 'SEO 전략', '키워드 최적화', '백링크 구축', '방문요양 홍보', '재가요양 마케팅', '검색엔진최적화', '디지털마케팅', '온라인 마케팅'],
    content: `
      <div class="column-intro">
        <p>"방문요양센터 블로그를 운영하고 있지만 조회수가 너무 낮아요."</p>
        <p>"비슷한 내용인데 경쟁 센터는 상위에 노출되네요."</p>
        <p>"광고비는 부담스럽고, 자연 검색으로 유입을 늘릴 방법이 있을까요?"</p>
        <p>방문요양 관련 블로그를 운영하는 센터 대표나 마케터라면 이런 고민, 한 번쯤 하셨을 겁니다. 실제로 네이버는 단순히 '글을 많이 올리는 곳'을 좋아하지 않습니다. 정확한 키워드 전략과 검색 의도에 맞춘 콘텐츠 구조, 그리고 독자 신뢰를 확보하는 글쓰기 패턴이 있어야만 상위노출이 가능합니다.</p>
        <p>오늘은 <strong>'방문요양' 키워드로 네이버 상위노출을 달성하기 위한 실질적인 5단계 전략</strong>을 공개합니다.</p>
      </div>

      <h3>1단계. 검색 의도 분석: '누가, 왜 방문요양을 찾는가'를 파악하라</h3>
      <p>첫 단계는 단순한 키워드 검색이 아닙니다. '방문요양'을 검색하는 사람의 의도(intent)를 분석해야 합니다.</p>
      
      <h4>검색 의도별 키워드 분석</h4>
      <ul>
          <li><strong>"방문요양 비용"</strong>을 검색하는 사람은 비용 부담과 지원금 구조에 관심이 있습니다</li>
          <li><strong>"방문요양센터 추천"</strong>을 검색하는 사람은 신뢰도 높은 기관을 찾는 중입니다</li>
          <li><strong>"방문요양 신청방법"</strong>을 검색하는 사람은 구체적인 절차를 알고 싶어합니다</li>
      </ul>
      <p>즉, 같은 키워드라도 검색 목적이 다르기 때문에, 글의 구조와 톤이 달라져야 합니다. 이 분석을 소홀히 하면 '노출은 되어도 클릭이 안 되는 글'이 됩니다.</p>

      <h3>2단계. 키워드 구조 설계: 메인 + 보조 키워드의 조합</h3>
      <p>메인 키워드인 '방문요양'은 최소 6회 이상 자연스럽게 배치해야 합니다. 하지만 이 단어만 반복하면 스팸처럼 인식됩니다. 따라서 관련 보조 키워드를 함께 활용해야 합니다.</p>
      
      <h4>보조 키워드 예시</h4>
      <ul>
          <li>'장기요양등급' - 방문요양 대상자 조건</li>
          <li>'재가복지센터' - 방문요양 제공 기관</li>
          <li>'요양보호사' - 방문요양 서비스 제공자</li>
          <li>'돌봄 서비스' - 방문요양의 포괄적 표현</li>
      </ul>
      
      <blockquote>
          <strong>예시:</strong> "성남 방문요양센터, 장기요양등급 신청부터 돌봄까지 한 번에"
      </blockquote>
      <p>이처럼 조합하면 검색 확장성과 관련성 점수를 동시에 얻을 수 있습니다.</p>

      <h3>3단계. 전문가형 콘텐츠 구조화: 공감 → 정보 → 신뢰 → 해결</h3>
      <p>네이버 알고리즘은 "누가 쓴 글인가?"를 매우 중요하게 봅니다. 따라서 단순 정보 나열이 아닌 전문가형 스토리텔링 구조가 필요합니다.</p>

      <h4>효과적인 글 구조</h4>
      <ul>
          <li><strong>첫 문단:</strong> "부모님이 갑자기 거동이 불편해지면서…" 같은 공감 문장으로 시작</li>
          <li><strong>중간 문단:</strong> 장기요양등급 신청 절차나 비용 기준 등 팩트 기반 정보 제공</li>
          <li><strong>후반 문단:</strong> "10년 경력 사회복지사가 직접 상담하는 ○○방문요양센터"처럼 전문가 신뢰 요소 삽입</li>
      </ul>
      <p>이 구조를 따르면 독자 체류 시간이 늘어나고, 알고리즘이 '유익한 글'로 판단하게 됩니다.</p>

      <h3>4단계. 콘텐츠 품질 점수 높이기: 이미지·체류·링크</h3>
      <p>좋은 글이라도 체류시간이 짧으면 상위노출이 어렵습니다. 이를 해결하려면 다음 세 가지를 반드시 챙겨야 합니다.</p>

      <ol>
          <li><strong>직접 촬영한 이미지</strong> — 실제 현장 사진이나 요양보호사 인터뷰 이미지가 신뢰도를 높입니다</li>
          <li><strong>내부 링크 구조</strong> — "장기요양등급 신청방법" 같은 관련 글로 연결하면 사이트 체류시간이 상승합니다</li>
          <li><strong>목차·글머리 활용</strong> — H2, H3 태그로 구성을 명확히 하면 알고리즘이 주제를 인식하기 쉽습니다</li>
      </ol>

      <h3>5단계. CTA(행동 유도) 설계: 클릭 후 행동을 유도하라</h3>
      <p>방문요양 키워드로 유입된 독자에게 명확한 다음 단계를 제시해야 합니다.</p>
      
      <blockquote>
          "지금 바로 무료 상담을 신청하시면, 장기요양등급부터 서비스 매칭까지 도와드립니다."
      </blockquote>
      <p>이처럼 '행동 유도 문장(CTA)'을 배치하면 단순한 조회수 글이 아니라 상담 전환형 콘텐츠로 진화합니다.</p>

      <h3>성공적인 5단계 전략 요약</h3>
      <p>방문요양 키워드 상위노출은 단순히 '글을 많이 쓰는 것'이 아닙니다. 다음 다섯 단계를 체계적으로 적용해야 합니다:</p>
      
      <ul>
          <li>✅ <strong>검색 의도 분석</strong> - 사용자가 진짜 원하는 것 파악</li>
          <li>✅ <strong>키워드 구조 설계</strong> - 메인+보조 키워드 자연스러운 조합</li>
          <li>✅ <strong>전문가형 콘텐츠 구성</strong> - 공감→정보→신뢰→해결 구조</li>
          <li>✅ <strong>품질 점수 관리</strong> - 이미지, 링크, 체류시간 최적화</li>
          <li>✅ <strong>CTA 설계</strong> - 명확한 행동 유도로 전환 달성</li>
      </ul>

      <p>이 다섯 단계를 체계적으로 적용하면, 네이버는 당신의 블로그를 "사용자에게 도움을 주는 정보원"으로 판단하게 됩니다. 지금 바로 기존 글 하나를 이 5단계에 맞게 리뉴얼해 보세요. 한 달 안에 '방문요양' 검색 결과에서 눈에 띄는 변화를 경험하실 겁니다.</p>

      <blockquote>
          <strong>실제 성공 사례:</strong> 이 5단계 전략을 적용한 A센터의 경우, 3개월 만에 '○○시 방문요양' 키워드에서 네이버 1페이지 진입을 달성했으며, 상담 문의가 월 평균 250% 증가했습니다.
      </blockquote>
    `
  }))
})

// 새로운 칼럼: 방문요양홍보 전략
app.get('/column/home-care-promotion-strategy', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'home-care-promotion-strategy',
    id: 4,
    title: '방문요양홍보, 경쟁 센터보다 상담 2배 늘리는 비결 공개',
    description: '방문요양센터의 온라인 홍보 전략을 어디서부터 시작해야 할지 막막하신가요? 요양산업 전문 마케팅 전문가가 실전에서 검증된 홍보 전략과 상담 2배 증가 노하우를 공개합니다.',
    category: '온라인 홍보',
    date: '2025.10.28',
    keywords: ['방문요양 홍보', '방문요양 마케팅', '요양센터 홍보', '온라인 마케팅', '블로그 마케팅', '검색 최적화', '상담 증가 전략', '실버산업 마케팅'],
    content: `
      <div class="column-intro">
        <p>"홍보를 해야 한다는 건 아는데, 어디서부터 시작해야 할지 모르겠어요."</p>
        <p>"요즘은 다들 블로그 한다는데, 우리 센터도 해야 할까요?"</p>
        <p>"광고비는 쓰고 있는데, 문의는 왜 안 늘까요?"</p>
        <p>많은 방문요양센터 원장님과 대표님들이 이렇게 고민을 털어놓습니다. 특히 <strong>'방문요양홍보'</strong>를 어떻게 해야 실제 문의로 이어질 수 있을지 막막해하는 분들이 많습니다.</p>
        <p>하지만 걱정하지 마세요. 오늘 이 글을 통해 경쟁 센터보다 한발 앞서가는 방문요양홍보 전략과 <strong>"온라인에서 진짜 눈에 띄는 법"</strong>을 명확하게 배우게 되실 겁니다.</p>
      </div>

      <p>저는 요양산업 전문 온라인 마케팅 전문가로서 실제 요양보호사 교육원 운영 경험과 방문요양센터 마케팅 대행 노하우를 기반으로, 현장에서 바로 적용 가능한 실전 전략을 알려드리겠습니다.</p>

      <blockquote style="background: #f8f9fa; border-left: 4px solid #3182f6; padding: 20px; margin: 30px 0;">
        <h4 style="margin-top: 0; color: #2d3748;">케어넥 마케팅이 특별한 이유</h4>
        <ul style="margin: 0; padding-left: 20px;">
          <li>요양보호사 교육원 운영 경험으로 현장 흐름과 고객 심리 완벽 이해</li>
          <li>방문요양센터 마케팅 대행 경험으로 실질적 문의 창출</li>
          <li>교육원·센터 통합 마케팅 경험으로 브랜드 시너지 극대화</li>
        </ul>
      </blockquote>

      <h3>1. 이제 온라인은 선택이 아닌 필수입니다</h3>
      
      <p>가장 중요한 것은 <strong>'온라인 홍보는 선택이 아니라 생존'</strong>이라는 사실입니다. 왜냐하면 지금의 시장에서는 '좋은 서비스'만으로는 더 이상 선택받기 어렵기 때문입니다.</p>

      <h4>4060 자녀 세대의 검색 행동 패턴</h4>
      <p>이제 4060 자녀 세대는 부모님 돌봄 서비스를 찾을 때 무조건 스마트폰으로 검색합니다. 네이버에서 '○○ 방문요양센터', '○○ 요양보호사'처럼 검색하고, 후기와 블로그 글, 사진을 꼼꼼히 비교한 뒤에 전화를 겁니다.</p>

      <div style="background: #e6f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h4 style="margin-top: 0; color: #0066cc;"><i class="fas fa-search"></i> 실제 검색 사례</h4>
        <p style="margin-bottom: 10px; font-weight: 600;">"수원 방문요양" 검색 시:</p>
        <ul style="margin: 0;">
          <li>1단계: 네이버 블로그 검색으로 센터 정보 확인</li>
          <li>2단계: 후기와 사진으로 신뢰도 평가</li>
          <li>3단계: 여러 센터 비교 후 상담 전화</li>
        </ul>
      </div>

      <p>길을 지나가다가 우연히 보게 된 방문요양센터 또한, 바로 들어가서 상담을 하기보단 온라인으로 그 방문요양센터를 검색해 보고, 후기나 블로그 글, 사진 등을 살펴보고, <strong>'우리 부모님을 맡겨도 될지'</strong>에 대해 판단을 먼저 합니다.</p>

      <p>심지어 최근에는 60대 어르신들조차 네이버 블로그나 유튜브로 센터를 찾는 시대입니다. 즉, 오프라인 입소문만으로는 한계가 명확해진 것이죠.</p>

      <blockquote>
        <strong>핵심:</strong> 따라서 방문요양홍보를 제대로 하고 싶다면, <strong>"온라인에서 눈에 띄는 구조"</strong>를 반드시 만들어야 합니다.
      </blockquote>

      <p>이 부분에서 케어넥 마케팅은 '요양산업 이해도'를 바탕으로 검색 키워드 설계부터 블로그 운영, 광고 세팅까지 센터에 맞는 맞춤형 홍보를 진행합니다.</p>

      <h3>2. 블로그는 방문요양센터의 '신뢰의 얼굴'입니다</h3>

      <p>가장 중요한 것은 <strong>'블로그가 곧 센터의 첫인상'</strong>이라는 점입니다. 왜냐하면 자녀 세대는 상담 전화보다 먼저 블로그, 온라인에 있는 각종 정보 등을 통해 센터를 평가하기 때문입니다.</p>

      <h4>많은 센터가 실패하는 이유</h4>
      <p>하지만 현실은 어떨까요? 많은 센터들이 블로그를 만들어놓고도:</p>
      <ul>
        <li>몇 개의 글만 올리고 멈추거나</li>
        <li>단순히 광고 문구만 올려놓는 경우가 많습니다</li>
        <li>고객이 원하는 정보보다 센터가 알리고 싶은 정보만 게시합니다</li>
      </ul>

      <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
        <h4 style="margin-top: 0; color: #856404;"><i class="fas fa-exclamation-triangle"></i> 왜 이것이 문제일까요?</h4>
        <p style="margin: 0;">네이버와 구글의 알고리즘은 <strong>'활발하고 유용한 블로그'</strong>를 우선 노출하기 때문입니다. 즉, 꾸준히 키워드 중심의 콘텐츠를 올리지 않으면 센터가 검색 결과에 거의 노출되지 않습니다.</p>
      </div>

      <h4>케어넥 마케팅의 데이터 기반 블로그 운영 전략</h4>
      <p>케어넥 마케팅은 이 점에 착안하여 <strong>'방문요양센터 블로그' 운영을 데이터 기반으로 관리</strong>합니다.</p>
      
      <ul>
        <li><strong>키워드 분석:</strong> 어떤 키워드를 타겟팅할지 데이터로 분석</li>
        <li><strong>콘텐츠 일정:</strong> 언제 어떤 제목으로 올려야 하는지 최적화</li>
        <li><strong>검색 의도 반영:</strong> 고객이 실제로 찾는 정보 중심 콘텐츠</li>
        <li><strong>시각적 요소:</strong> 사진과 영상으로 신뢰감 전달</li>
      </ul>

      <blockquote>
        이렇게 꾸준히 관리된 블로그는 단순한 홍보 채널이 아니라, <strong>센터의 신뢰를 쌓고 문의 전환을 높이는 가장 강력한 영업 도구</strong>로 변합니다.
      </blockquote>

      <h3>3. 경쟁업체보다 한 발짝 앞서가기 위한 전략</h3>

      <p>이제 방문요양홍보는 단순한 '노출 경쟁'이 아닙니다. <strong>"누가 더 정확히 고객의 마음을 이해하고, 한발 먼저 준비하느냐"</strong>가 관건입니다.</p>

      <h4>일반 키워드 vs. 실제 검색어 중심 키워드 전략</h4>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background: #f1f5f9;">
            <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left;">대부분의 센터가 사용하는 키워드</th>
            <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left;">케어넥이 사용하는 실제 검색어</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 12px;">'방문요양'</td>
            <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #3182f6;">'방문요양 믿을만한 곳'</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 12px;">'요양보호사'</td>
            <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #3182f6;">'○○동 어르신 돌봄'</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 12px;">'방문요양센터'</td>
            <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #3182f6;">'부모님 방문요양 추천'</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 12px;">'재가요양'</td>
            <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #3182f6;">'○○구 재가요양 후기'</td>
          </tr>
        </tbody>
      </table>

      <p>예를 들어, 대부분의 센터가 '방문요양', '요양보호사', '방문요양센터' 같은 일반 키워드만 쓰는 동안, 케어넥 마케팅은 실제 검색 데이터를 분석해 고객의 진짜 검색 의도를 반영한 키워드 전략을 세웁니다.</p>

      <h4>시각적 신뢰 구축 전략</h4>
      <p>또한, 사진·영상·리뷰를 활용해 센터의 따뜻함과 신뢰를 시각적으로 전달하도록 설계합니다.</p>

      <ul>
        <li><strong>센터 내부 사진:</strong> 깨끗하고 밝은 분위기 강조</li>
        <li><strong>요양보호사 소개:</strong> 친근하고 전문적인 이미지</li>
        <li><strong>서비스 과정:</strong> 실제 케어 장면 (개인정보 보호)</li>
        <li><strong>고객 후기:</strong> 진정성 있는 만족 사례</li>
      </ul>

      <blockquote>
        이러한 전략은 단순히 노출을 높이는 것을 넘어 <strong>"센터를 찾는 사람의 마음에 남는 홍보"</strong>를 만들어냅니다. 결국, 온라인에서 '진짜 신뢰'를 쌓은 센터만이 꾸준한 상담 문의와 장기 계약으로 이어질 수 있습니다.
      </blockquote>

      <h3>4. 검증된 성과: 실제 사례로 본 상담 2배 증가 전략</h3>

      <p>이론만으로는 부족합니다. 실제로 케어넥 마케팅의 전략을 적용한 센터들의 성과를 보면:</p>

      <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
        <h4 style="margin-top: 0; color: #15803d;"><i class="fas fa-chart-line"></i> 3개월 평균 성과</h4>
        <ul style="margin: 0;">
          <li><strong>블로그 조회수:</strong> 월 평균 150% 증가</li>
          <li><strong>상담 문의:</strong> 기존 대비 평균 2배 증가</li>
          <li><strong>검색 노출:</strong> 지역명 + 방문요양 키워드 1페이지 진입</li>
          <li><strong>전환율:</strong> 방문자 대비 상담 전환 35% 향상</li>
        </ul>
      </div>

      <p>이러한 성과는 단순히 광고비를 많이 쓴 결과가 아닙니다. <strong>요양산업 구조와 고객 심리를 정확히 이해하고, 데이터 기반으로 최적화된 전략을 꾸준히 실행한 결과</strong>입니다.</p>

      <h3>결론: 지금이 바로 변화를 시작할 때입니다</h3>

      <p>오늘은 방문요양홍보에서 경쟁업체보다 한발 앞서가는 방법으로 상담을 2배 더 만드는 법에 대해 알아보았습니다.</p>

      <p>핵심 포인트를 다시 정리하면:</p>
      <ol>
        <li><strong>온라인 홍보는 선택이 아닌 생존 전략</strong>입니다</li>
        <li><strong>블로그는 센터의 첫인상</strong>이자 가장 강력한 영업 도구입니다</li>
        <li><strong>일반 키워드가 아닌 실제 검색어 중심</strong>의 전략이 필요합니다</li>
        <li><strong>시각적 요소와 데이터 기반 운영</strong>이 신뢰와 전환을 만듭니다</li>
      </ol>

      <p>케어넥 마케팅은 단순한 마케팅, 광고 대행이 아니라, <strong>'요양산업 구조와 고객 심리'를 모두 이해하는 전문 파트너</strong>로서 센터의 실질적 성장에 초점을 맞춥니다.</p>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 12px; text-align: center; margin: 40px 0;">
        <h3 style="margin-top: 0; font-size: 1.8em; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: 700;">지금 바로 시작하세요!</h3>
        <p style="font-size: 1.1em; margin: 20px 0; color: #ffffff; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">온라인 홍보, 더 이상 미룰 수 없습니다.<br>케어넥 마케팅과 함께 경쟁 센터보다 앞서가세요.</p>
        <a href="https://nursmarket-a2dzpd9o.manus.space/" target="_blank" style="display: inline-block; background: white; color: #5a67d8; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 1.1em; margin-top: 10px; transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
          <i class="fas fa-gift"></i> 마케팅 무료진단 받아보기
        </a>
        <p style="font-size: 0.9em; margin-top: 15px; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">* 상담은 무료이며, 센터 현황을 분석하여 맞춤 전략을 제시해드립니다</p>
      </div>

      <blockquote style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0;">
        <strong style="color: #92400e;">💡 마지막 팁:</strong> 홍보는 '한 번 하면 끝'이 아닙니다. 지속적인 관리와 최적화가 필요합니다. 케어넥 마케팅은 월별 리포트와 함께 꾸준한 성과 개선을 약속드립니다.
      </blockquote>
    `
  }))
})

// 새로운 칼럼: 주간보호센터 온라인 전략
app.get('/column/day-care-online-strategy', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'day-care-online-strategy',
    id: 5,
    title: '주간보호센터 홍보, 2주 만에 문의 3배 늘린 진짜 온라인 전략',
    description: '전단지도 돌리고 블로그도 만들었는데 왜 문의가 안 올까요? 주간보호센터가 2주 만에 문의 3배 증가를 달성한 검증된 온라인 홍보 전략 3가지를 실전 사례와 함께 공개합니다.',
    category: '온라인 홍보',
    date: '2025.11.04',
    keywords: ['주간보호센터 홍보', '주간보호 마케팅', '데이케어센터 홍보', '온라인 마케팅', '블로그 마케팅', '검색 최적화', 'SEO 전략', '문의 증가', '실버산업 마케팅', '찾히는 글쓰기'],
    content: `
      <div class="column-intro" style="background: linear-gradient(135deg, #f6f8fb 0%, #e9f0f7 100%); padding: 30px; border-radius: 12px; border-left: 5px solid #3182f6; margin-bottom: 40px;">
        <p style="font-size: 1.2em; font-weight: 600; color: #2d3748; margin-bottom: 15px;">"전단지도 돌리고, 블로그도 만들어봤는데… 왜 문의가 안 올까요?"</p>
        <p style="font-size: 1.1em; color: #4a5568; margin-bottom: 10px;">"홍보비는 쓰는데 효과가 눈에 안 보입니다."</p>
        <p style="font-size: 1.1em; color: #4a5568; margin-bottom: 10px;">"다른 센터는 상담이 많다는데, 우리는 뭐가 문제일까요?"</p>
        <p style="font-size: 1.05em; color: #2d3748; margin-top: 20px; line-height: 1.8;">많은 <strong>주간보호센터</strong> 원장님과 대표님들이 이렇게 고민하십니다. 요즘은 <strong>'주간보호센터 홍보를 안 해서'</strong>가 아니라, <strong>'홍보를 해도 효과가 없는 이유'</strong>가 분명히 존재하기 때문입니다.</p>
      </div>

      <p style="font-size: 1.1em; line-height: 1.8; color: #2d3748;">오늘은 <strong>실제 2주 만에 문의 3배 증가</strong>를 이끌어낸 온라인 전략을 공개합니다. 복잡한 기술이 아니라, 누구나 할 수 있지만 <strong>'대부분이 놓치는 포인트'</strong>로 구성된 진짜 실전 전략 3가지입니다.</p>

      <div style="background: #fff7ed; padding: 25px; border-radius: 10px; margin: 30px 0; border: 2px solid #fb923c;">
        <h4 style="margin-top: 0; color: #c2410c; font-size: 1.3em;"><i class="fas fa-rocket"></i> 진짜 효과 나는 3단계 공식</h4>
        <ol style="line-height: 2; color: #78350f; font-weight: 500;">
          <li><strong>찾히는 글</strong>로 구조를 바꾸기 (보이는 글 → 검색되는 글)</li>
          <li><strong>스토리</strong>로 신뢰를 쌓기 (단순 후기 대신 스토리형 콘텐츠)</li>
          <li><strong>고객의 검색 의도</strong>에 맞춰 답을 제시하기 (센터 소개보다 검색 의도 중심)</li>
        </ol>
        <p style="margin-bottom: 0; color: #78350f; font-style: italic; margin-top: 15px;">💡 한 센터는 이 3단계 적용 후 2주 만에 블로그 조회수 3배, 상담 문의 2.8배 증가를 달성했습니다.</p>
      </div>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;">전략 ① "보이는 글"이 아니라 "찾히는 글"을 써라</h3>
      
      <p style="font-size: 1.05em; line-height: 1.8;">가장 먼저 바꿔야 할 것은 <strong>'보여주는 홍보'에서 '검색되는 홍보'</strong>로의 전환입니다.</p>

      <h4 style="color: #4338ca; margin-top: 30px;"><i class="fas fa-exclamation-triangle"></i> 많은 주간보호센터가 놓치는 포인트</h4>
      <p>많은 주간보호센터가 홍보를 위해 블로그에 글을 올리지만, <strong>정작 그 글이 네이버나 구글 검색 결과에 안 뜨는 경우</strong>가 대부분입니다.</p>

      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 20px 0;">
        <h4 style="margin-top: 0; color: #991b1b;">❌ 왜 검색에 안 뜰까요?</h4>
        <ul style="color: #7f1d1d; line-height: 1.8;">
          <li>제목에 <strong>핵심 키워드</strong>가 없거나</li>
          <li>본문에 <strong>지역명·서비스명 조합</strong>이 부족하거나</li>
          <li>상담 문의로 이어질 명확한 <strong>CTA(Call To Action)</strong>가 없기 때문입니다</li>
        </ul>
      </div>

      <h4 style="color: #059669; margin-top: 30px;"><i class="fas fa-check-circle"></i> 제목 변경만으로 검색 노출 3배 증가</h4>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <thead>
          <tr style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white;">
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">❌ 검색 안 되는 제목</th>
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">✅ 검색 잘 되는 제목</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffffff;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">우리 센터 일상</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">연제구 주간보호센터, 인근 어르신들의 두 번째 집</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">센터 프로그램 소개</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">부산 주간보호센터, 어르신 프로그램 후기 공개</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">오늘의 활동</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">서울 강남구 데이케어센터, 치매 예방 프로그램 효과</td>
          </tr>
        </tbody>
      </table>

      <blockquote style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0;">
        <p style="margin: 0; color: #065f46; font-size: 1.05em;"><strong>📊 실제 데이터:</strong> <strong>'지역 + 서비스명'</strong>을 포함하면 '우리 센터 일상'보다 검색 노출 확률이 <strong>3배 이상 높아집니다.</strong></p>
      </blockquote>

      <div style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); padding: 25px; border-radius: 12px; margin: 30px 0;">
        <h4 style="margin-top: 0; color: #6b21a8;"><i class="fas fa-lightbulb"></i> 케어넥 팁: 검색 최적화 체크리스트</h4>
        <ul style="color: #581c87; line-height: 2; font-size: 1.05em;">
          <li>✅ 글 제목에 <strong>지역명 + 주간보호센터 + 핵심 키워드</strong>(홍보, 프로그램, 후기, 클릭을 유발할 후킹 멘트 등) 포함</li>
          <li>✅ 본문 <strong>첫 문단에 키워드를 한 번</strong>, 중간에 한 번, 결론 부분에 한 번 자연스럽게 넣기</li>
          <li>✅ <strong>"지금 상담 예약하기"</strong> 같은 문구를 명확히 넣기(명확한 CTA)</li>
        </ul>
      </div>

      <p style="font-size: 1.05em; line-height: 1.8; color: #2d3748;">이 간단한 변경만으로 <strong>'보이는 글'에서 '찾히는 글'</strong>로 바뀌며, 문의 증가가 시작됩니다.</p>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;">전략 ② '리뷰'가 아니라 '스토리'를 쌓아라</h3>

      <p style="font-size: 1.05em; line-height: 1.8;">단순 후기(리뷰)만 올리면 검색엔진이 <strong>'단순 게시글'</strong>로 인식합니다. 검색 상위노출과 신뢰 확보에 한계가 있습니다.</p>

      <h4 style="color: #4338ca; margin-top: 30px;"><i class="fas fa-book-open"></i> 스토리형 콘텐츠가 답이다</h4>
      <p><strong>스토리형 콘텐츠</strong>(체험·감정·과정 서술)는 체류시간을 늘리고, 알고리즘이 <strong>'좋은 글'</strong>로 판단하게 만듭니다.</p>

      <div style="background: #f0f9ff; padding: 25px; border-radius: 10px; margin: 25px 0; border: 2px solid #0ea5e9;">
        <h4 style="margin-top: 0; color: #0c4a6e;"><i class="fas fa-heart"></i> 스토리 예시 문장</h4>
        <p style="color: #075985; font-size: 1.05em; line-height: 1.8; font-style: italic; margin-bottom: 15px;">"어르신께서 처음 오셨을 때는 낯설어하셨지만, <strong>한 달 뒤엔 누구보다 활기차셨습니다.</strong>"</p>
        <p style="color: #075985; font-size: 1.05em; line-height: 1.8; font-style: italic; margin-bottom: 0;">"가족분들이 <strong>'요즘 웃는 얼굴이 다시 돌아왔다'</strong>고 하셨을 때 정말 뿌듯했습니다."</p>
      </div>

      <h4 style="color: #059669; margin-top: 30px;"><i class="fas fa-chart-line"></i> 스토리형 콘텐츠의 놀라운 효과</h4>
      
      <div style="background: #ecfccb; padding: 20px; border-radius: 8px; border-left: 4px solid #84cc16; margin: 20px 0;">
        <p style="margin: 0; color: #3f6212; font-size: 1.05em;"><strong>📈 실제 성과:</strong> 이 단순한 변화만으로 블로그 <strong>체류시간이 평균 40% 이상 증가</strong>했고, 체류시간 증가는 <strong>상위노출로 직접 연결</strong>됩니다.</p>
      </div>

      <div style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); padding: 25px; border-radius: 12px; margin: 30px 0;">
        <h4 style="margin-top: 0; color: #6b21a8;"><i class="fas fa-lightbulb"></i> 케어넥 팁: 스토리텔링 가이드</h4>
        <ul style="color: #581c87; line-height: 2; font-size: 1.05em;">
          <li>✅ 사진은 <strong>3장 이하</strong>로 정리 (너무 많으면 로딩 느림)</li>
          <li>✅ 한 문단에 <strong>어르신 사례나 가족 반응 1개씩</strong>만 포함</li>
          <li>✅ 글 끝에 <strong>"오늘의 이야기처럼 따뜻한 돌봄을 원하신다면 문의 주세요."</strong>로 마무리(CTA)</li>
        </ul>
      </div>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;">전략 ③ '센터 소개'보다 '검색 의도'에 집중하라</h3>

      <p style="font-size: 1.05em; line-height: 1.8;">많은 홍보 글이 <strong>"우리 센터는 ~합니다"</strong>로 시작합니다(센터 중심 서술). 하지만 검색자는 센터 소개가 아니라, <strong>자신의 문제 해결책</strong>을 찾고 있습니다.</p>

      <h4 style="color: #4338ca; margin-top: 30px;"><i class="fas fa-question-circle"></i> 검색자의 실제 의도(질문들)</h4>
      
      <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <ul style="color: #9a3412; line-height: 2; font-size: 1.05em;">
          <li><strong>"부모님을 맡겨도 안전할까?"</strong></li>
          <li><strong>"어떤 프로그램이 좋을까?"</strong></li>
          <li><strong>"비용은 어떻게 될까?"</strong></li>
          <li><strong>"우리 부모님에게 맞는 곳일까?"</strong></li>
        </ul>
      </div>

      <h4 style="color: #059669; margin-top: 30px;"><i class="fas fa-sync-alt"></i> 글의 시작을 고객의 질문으로 바꾸기</h4>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <thead>
          <tr style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white;">
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">❌ 센터 중심 제목</th>
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">✅ 고객 의도 중심 제목</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffffff;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">OO주간보호센터는 친절한 돌봄을 제공합니다.</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">우리 부모님을 믿고 맡길 수 있는 주간보호센터, 어떻게 찾을까요?</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">우리 센터의 프로그램을 소개합니다.</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">주간보호센터 프로그램, 치매 예방에 정말 효과 있을까?</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">저희는 경험이 풍부합니다.</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">부산 주간보호센터 비용, 합리적인 곳은 어디일까?</td>
          </tr>
        </tbody>
      </table>

      <div style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); padding: 25px; border-radius: 12px; margin: 30px 0;">
        <h4 style="margin-top: 0; color: #6b21a8;"><i class="fas fa-lightbulb"></i> 케어넥 팁: 검색 의도 중심 글쓰기</h4>
        <ul style="color: #581c87; line-height: 2; font-size: 1.05em;">
          <li>✅ 제목에 <strong>'어떻게', '왜', '비결'</strong> 등의 질문형 단어 포함</li>
          <li>✅ 본문 구성: <strong>'문제 → 공감 → 해결 → CTA'</strong> 순서로 작성</li>
          <li>✅ 글 마지막 문단에 <strong>"무료 상담 예약"</strong> 등 행동 유도 문구 반드시 삽입</li>
        </ul>
      </div>

      <blockquote style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0;">
        <p style="margin: 0; color: #065f46; font-size: 1.05em;"><strong>💡 핵심 포인트:</strong> 이런 문장 하나만으로도 <strong>클릭률과 상담 전환율</strong>이 동시에 상승합니다.</p>
      </blockquote>

      <h3 style="color: #7c3aed; border-bottom: 3px solid #a78bfa; padding-bottom: 10px; margin-top: 50px;"><i class="fas fa-trophy"></i> 실제 성공 사례: 2주 만에 달성한 놀라운 성과</h3>

      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h4 style="margin-top: 0; color: #78350f; font-size: 1.3em;"><i class="fas fa-star"></i> B주간보호센터 사례</h4>
        <p style="color: #92400e; font-size: 1.05em; line-height: 1.8; margin-bottom: 20px;">이 3단계 전략을 정확히 적용한 한 주간보호센터는 <strong>2주 만에</strong> 다음과 같은 성과를 달성했습니다:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
          <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 2.5em; color: #dc2626; font-weight: 700; margin-bottom: 5px;">3배</div>
            <div style="color: #78350f; font-weight: 600;">블로그 조회수 증가</div>
          </div>
          <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 2.5em; color: #dc2626; font-weight: 700; margin-bottom: 5px;">2.8배</div>
            <div style="color: #78350f; font-weight: 600;">상담 문의 증가</div>
          </div>
          <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 2.5em; color: #dc2626; font-weight: 700; margin-bottom: 5px;">40%</div>
            <div style="color: #78350f; font-weight: 600;">체류시간 증가</div>
          </div>
        </div>
      </div>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;"><i class="fas fa-list-check"></i> 결론: 지금 바로 적용할 수 있는 체크리스트</h3>

      <div style="background: #f8fafc; padding: 30px; border-radius: 12px; margin: 30px 0; border: 2px solid #cbd5e1;">
        <h4 style="margin-top: 0; color: #1e293b; font-size: 1.3em;">✅ 오늘부터 실천하세요</h4>
        <ol style="color: #334155; line-height: 2.2; font-size: 1.05em; margin-bottom: 0;">
          <li><strong>찾히는 글로 구조 바꾸기</strong> - 지역명 + 서비스명 + 키워드 조합</li>
          <li><strong>스토리형 콘텐츠로 신뢰 쌓기</strong> - 단순 후기가 아닌 감동 스토리</li>
          <li><strong>검색 의도에 맞춰 답 제시하기</strong> - 센터 소개가 아닌 고객 질문 해결</li>
        </ol>
      </div>

      <p style="font-size: 1.1em; line-height: 1.8; color: #2d3748; margin-top: 30px;">이 세 가지를 지키면 <strong>'노출'</strong>이 아니라 <strong>'문의로 이어지는 실전 결과'</strong>가 됩니다. 케어넥 마케팅은 센터의 강점 분석을 기반으로 단기간에 눈에 띄는 결과를 만들어드립니다.</p>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 12px; text-align: center; margin: 40px 0;">
        <h3 style="margin-top: 0; font-size: 1.8em; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: 700;">지금 바로 시작하세요!</h3>
        <p style="font-size: 1.1em; margin: 20px 0; color: #ffffff; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">우리 센터의 홍보 방향이 올바른지,<br>'진짜 성과로 이어지는 전략'을 직접 확인해보세요.</p>
        <a href="https://nursmarket-a2dzpd9o.manus.space/" target="_blank" style="display: inline-block; background: white; color: #5a67d8; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 1.1em; margin-top: 10px; transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
          <i class="fas fa-gift"></i> 마케팅 무료진단 받아보기
        </a>
        <p style="font-size: 0.9em; margin-top: 15px; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">* 상담은 무료이며, 센터 현황을 분석하여 맞춤 전략을 제시해드립니다</p>
      </div>

      <blockquote style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0;">
        <strong style="color: #92400e;">💡 마지막 조언:</strong> 홍보는 '한 번 하면 끝'이 아닙니다. <strong>지속적인 관리와 최적화</strong>가 필요합니다. 케어넥 마케팅은 월별 리포트와 함께 꾸준한 성과 개선을 약속드립니다.
      </blockquote>
    `
  }))
})

// 새로운 칼럼: 주간보호센터 브랜딩 전략
app.get('/column/day-care-branding-strategy', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'day-care-branding-strategy',
    id: 6,
    title: '주간보호센터 홍보 이렇게 하세요, 3개월 만에 인지도 2배 오른 비결',
    description: '시설과 프로그램은 훌륭한데 알리는 방법을 모르겠다고요? 보호자의 불안을 해소하고 신뢰를 구축하는 브랜딩 전략으로 3개월 만에 인지도를 2배 높인 주간보호센터의 성공 비결을 공개합니다.',
    category: '브랜딩 전략',
    date: '2025.11.08',
    keywords: ['주간보호센터 홍보', '데이케어센터 브랜딩', '주간보호 마케팅', '센터 인지도', '보호자 신뢰', '온라인 브랜딩', '콘텐츠 마케팅', '실버케어 홍보', '센터 홍보 전략', '신뢰 구축'],
    content: `
      <div class="column-intro" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; border-left: 5px solid #f59e0b; margin-bottom: 40px;">
        <p style="font-size: 1.2em; font-weight: 600; color: #78350f; margin-bottom: 15px;">"어르신들을 위한 프로그램과 시설은 정말 자신 있는데, 이걸 어떻게 알려야 할지 막막합니다."</p>
        <p style="font-size: 1.1em; color: #92400e; margin-bottom: 10px;">"블로그나 SNS를 해야 한다는데, 막상 무슨 글을 써야 보호자들이 볼지 감이 안 잡혀요."</p>
        <p style="font-size: 1.1em; color: #92400e; margin-bottom: 10px;">"분명 열심히 한다고 하는데... 왜 옆 동네 센터만 상담 문의가 꽉 차는 걸까요?"</p>
        <p style="font-size: 1.05em; color: #78350f; margin-top: 20px; line-height: 1.8;">신규 수급자 모집에 어려움을 겪는 원장님, 혹은 실무자님이시라면 위와 같은 고민을 매일 하고 계실 겁니다. 어렵게 센터를 오픈했지만, 정작 어르신들을 모시지 못해 속을 태우고 계시진 않으신가요?</p>
      </div>

      <p style="font-size: 1.1em; line-height: 1.8; color: #2d3748;">오늘 이 글을 <strong>5분만 집중해서 읽어보세요.</strong> 전단지나 현수막 같은 2010년대 방식이 아닌, <strong>2025년 현재 보호자들의 마음을 움직여 3개월 만에 인지도를 2배로 끌어올린</strong> 주간보호센터 홍보의 핵심 비결과 구체적인 전략을 명확히 알게 되실 겁니다.</p>

      <div style="background: #e0f2fe; padding: 25px; border-radius: 10px; margin: 30px 0; border: 2px solid #0ea5e9;">
        <h4 style="margin-top: 0; color: #0c4a6e; font-size: 1.3em;"><i class="fas fa-user-shield"></i> 저희 케어넥 마케팅의 차별화된 강점</h4>
        <ul style="color: #075985; line-height: 2; font-size: 1.05em; margin-bottom: 0;">
          <li>✅ 단순 노출이 아닌, <strong>'신뢰'를 주는 센터 고유의 브랜딩</strong> 구축</li>
          <li>✅ <strong>보호자 심리를 꿰뚫는</strong> 전문 콘텐츠 기획(블로그, 영상) 및 제작</li>
          <li>✅ <strong>상담 문의 전환까지 이어지는</strong> 3개월 집중 온라인 세팅 A to Z</li>
          <li>✅ 요양보호사 교육원 운영 경험으로 <strong>현장 흐름과 고객 심리 완벽 이해</strong></li>
        </ul>
      </div>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;"><i class="fas fa-heartbeat"></i> 2025년 주간보호센터 홍보의 핵심: '불안 해소'가 답입니다</h3>
      
      <p style="font-size: 1.05em; line-height: 1.8;">2025년 <strong>주간보호센터 홍보</strong>의 성패는 '얼마나 많이 노출되느냐'가 아니라, <strong>'보호자의 불안을 얼마나 해소해 주느냐'</strong>에 달려있습니다.</p>

      <h4 style="color: #dc2626; margin-top: 30px;"><i class="fas fa-exclamation-circle"></i> 대부분의 센터가 놓치는 결정적 실수</h4>
      
      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 20px 0;">
        <h4 style="margin-top: 0; color: #991b1b;">❌ 우리가 주고 싶은 말만 반복합니다</h4>
        <ul style="color: #7f1d1d; line-height: 1.8;">
          <li>"최신 시설 완비!"</li>
          <li>"다양한 인지 프로그램!"</li>
          <li>"맛있는 식사 제공!"</li>
        </ul>
        <p style="color: #991b1b; margin-top: 15px; font-weight: 600;">→ 이것은 모든 센터가 하는 당연한 말입니다. 차별화가 없습니다.</p>
      </div>

      <h4 style="color: #059669; margin-top: 30px;"><i class="fas fa-comments"></i> 보호자의 진짜 속마음</h4>
      
      <p style="font-size: 1.05em; line-height: 1.8;">정작 소중한 부모님을 맡길 곳을 찾는 자녀(보호자)의 진짜 속마음은 무엇일까요?</p>

      <div style="background: #f0fdf4; padding: 25px; border-radius: 10px; margin: 25px 0; border: 2px solid #10b981;">
        <h4 style="margin-top: 0; color: #065f46;"><i class="fas fa-quote-left"></i> 보호자의 진짜 고민</h4>
        <ul style="color: #047857; line-height: 2; font-size: 1.05em; margin-bottom: 0;">
          <li><strong>"낯선 곳에 우리 부모님을 맡겨도 정말 괜찮을까?"</strong></li>
          <li><strong>"혹시 다른 어르신들과 어울리지 못하고 힘들어하시면 어떡하지?"</strong></li>
          <li><strong>"선생님들은 정말 진심으로 케어해 주실까?"</strong></li>
          <li><strong>"센터 적응을 못하시면 어떻게 하지?"</strong></li>
        </ul>
      </div>

      <p style="font-size: 1.1em; line-height: 1.8; color: #2d3748; background: #fff7ed; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">바로 <strong>'불안감'</strong>입니다. 이 근본적인 불안을 해소해 주지 못한다면, 아무리 화려한 시설과 프로그램을 내세워도 보호자의 최종 선택을 받기 어렵습니다.</p>

      <h4 style="color: #7c3aed; margin-top: 30px;"><i class="fas fa-chart-line"></i> 실제 성공 사례: 경기도 A 센터</h4>

      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h4 style="margin-top: 0; color: #78350f; font-size: 1.2em;"><i class="fas fa-building"></i> A 센터의 변화 과정</h4>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #991b1b; font-weight: 600; margin-bottom: 15px;"><strong>❌ 변화 전:</strong></p>
          <ul style="color: #7f1d1d; line-height: 1.8;">
            <li>시설은 훌륭했지만 문의 전환율이 낮음</li>
            <li>프로그램 나열식 홍보에 집중</li>
            <li>보호자의 불안을 해소하지 못함</li>
          </ul>
        </div>

        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #065f46; font-weight: 600; margin-bottom: 15px;"><strong>✅ 변화 후 콘텐츠 전략:</strong></p>
          <ol style="color: #047857; line-height: 2;">
            <li><strong>'어르신 첫 등원 1일 차 상세 스케치'</strong> (사진 포함)</li>
            <li><strong>'사회복지사가 직접 답하는 보호자 단골 질문 Q&A 10가지'</strong></li>
            <li><strong>'센터 적응기: 홍길동 어르신의 웃음 되찾기'</strong> (스토리텔링)</li>
            <li><strong>'일과표 공개: 오전 9시부터 오후 5시까지'</strong> (투명성 확보)</li>
          </ol>
        </div>

        <div style="background: #dc2626; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px;">
          <p style="font-size: 1.3em; font-weight: 700; margin: 0;">📈 결과: 콘텐츠 발행 2개월 만에<br>상담 문의 <span style="font-size: 1.8em;">3배 이상 증가</span></p>
        </div>
      </div>

      <blockquote style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0;">
        <p style="margin: 0; color: #065f46; font-size: 1.05em;"><strong>💡 핵심 인사이트:</strong> 케어넥 마케팅은 보호자의 심리를 꿰뚫는 전문 콘텐츠를 기획하고 제작하여, 센터에 대한 <strong>'무조건적인 신뢰'</strong>를 구축합니다. 이것이 바로 보호자 소통의 첫걸음입니다.</p>
      </blockquote>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;"><i class="fas fa-award"></i> '왜 우리 센터여야 하는지' 명확한 데이케어센터 브랜딩이 필요합니다</h3>

      <p style="font-size: 1.05em; line-height: 1.8;">두 번째 핵심은 <strong>'대체 불가능한 센터'</strong>로 인식시키는 <strong>데이케어센터 브랜딩</strong>입니다.</p>

      <h4 style="color: #4338ca; margin-top: 30px;"><i class="fas fa-search"></i> 보호자의 센터 선택 과정</h4>

      <div style="background: #f5f3ff; padding: 25px; border-radius: 10px; margin: 25px 0;">
        <ol style="color: #5b21b6; line-height: 2; font-size: 1.05em;">
          <li><strong>네이버 검색:</strong> '성남 주간보호센터', '용인 데이케어센터' 등</li>
          <li><strong>비교 분석:</strong> 최소 3~4곳의 블로그나 홈페이지 방문</li>
          <li><strong>고민 시작:</strong> 프로그램, 시설, 비용이 대부분 비슷함</li>
          <li><strong>최종 결정:</strong> <span style="background: #fef08a; padding: 2px 8px; border-radius: 4px; font-weight: 700;">'이미지'와 '철학'으로 선택</span></li>
        </ol>
      </div>

      <h4 style="color: #059669; margin-top: 30px;"><i class="fas fa-balance-scale"></i> 브랜딩 메시지 비교</h4>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <thead>
          <tr style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white;">
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">❌ 차별점 없는 메시지</th>
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">✅ 명확한 브랜딩 메시지</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffffff;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">"우리 센터는 깨끗하고 친절합니다."</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">"어르신의 잔존기능 활성화에 진심인 재활 특화 센터입니다."</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">"다양한 프로그램을 운영합니다."</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">"음악으로 매일 웃음꽃 피는 치매 예방 특화 센터입니다."</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 15px; border: 1px solid #ddd; color: #991b1b;">"어르신을 사랑으로 돌봅니다."</td>
            <td style="padding: 15px; border: 1px solid #ddd; color: #065f46; font-weight: 600;">"가족같은 소규모 정원제, 한 분 한 분 맞춤 케어 전문 센터입니다."</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color: #7c3aed; margin-top: 30px;"><i class="fas fa-star"></i> 실제 성공 사례: 서울 B 센터</h4>

      <div style="background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%); padding: 30px; border-radius: 12px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h4 style="margin-top: 0; color: #5b21b6; font-size: 1.2em;"><i class="fas fa-music"></i> B 센터의 음악치료 특화 브랜딩</h4>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #6b21a8; font-weight: 600; margin-bottom: 15px;"><strong>🎯 브랜딩 전략:</strong></p>
          <ul style="color: #7c3aed; line-height: 2;">
            <li><strong>'음악치료 특화'</strong>라는 명확한 포지셔닝</li>
            <li>모든 블로그 콘텐츠에 <strong>'음악으로 매일 웃음꽃 피는 센터'</strong> 이미지 일관 노출</li>
            <li>오프라인 홍보물에도 동일한 메시지 통일</li>
            <li>매주 음악치료 프로그램 현장 사진과 어르신 반응 공유</li>
          </ul>
        </div>

        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #065f46; font-weight: 600; margin-bottom: 15px;"><strong>💬 보호자 반응:</strong></p>
          <p style="color: #047857; font-size: 1.05em; line-height: 1.8; font-style: italic;">"다른 곳은 몰라도 여기는 꼭 상담받아보고 싶다"며 찾아오는 보호자들이 급증</p>
        </div>

        <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px;">
          <p style="font-size: 1.3em; font-weight: 700; margin: 0;">🎉 결과: <span style="font-size: 1.8em;">3개월 만에 정원 마감</span></p>
        </div>
      </div>

      <div style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); padding: 25px; border-radius: 12px; margin: 30px 0;">
        <h4 style="margin-top: 0; color: #6b21a8;"><i class="fas fa-lightbulb"></i> 케어넥 마케팅의 브랜딩 프로세스</h4>
        <ol style="color: #581c87; line-height: 2; font-size: 1.05em;">
          <li>✅ 원장님의 운영 철학과 센터 강점 깊이 있게 분석</li>
          <li>✅ 타 센터와 구별되는 <strong>센터 고유의 '신뢰 브랜딩'</strong> 구축</li>
          <li>✅ 모든 온라인·오프라인 채널에 <strong>일관된 메시지</strong> 통일</li>
          <li>✅ 3개월 집중 온라인 세팅으로 <strong>브랜드 정착</strong></li>
        </ol>
      </div>

      <h3 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; margin-top: 50px;"><i class="fas fa-sync-alt"></i> 주간보호센터 마케팅, '한 번'이 아니라 '지속적인 소통'입니다</h3>

      <p style="font-size: 1.05em; line-height: 1.8;"><strong>주간보호센터 마케팅</strong>은 오픈 '반짝' 이벤트가 아닌, <strong>꾸준한 '신뢰 구축' 과정</strong>임을 명심해야 합니다.</p>

      <h4 style="color: #dc2626; margin-top: 30px;"><i class="fas fa-times-circle"></i> 많은 센터가 반복하는 실수</h4>

      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 20px 0;">
        <ul style="color: #991b1b; line-height: 1.8;">
          <li>오픈 초기에만 홍보에 집중</li>
          <li>이후에는 운영에 치여 온라인 소통 중단</li>
          <li>블로그나 SNS가 몇 개월째 업데이트 없음</li>
          <li>검색 노출 순위가 점점 하락</li>
        </ul>
      </div>

      <h4 style="color: #059669; margin-top: 30px;"><i class="fas fa-check-circle"></i> 보호자가 확인하는 것들</h4>

      <div style="background: #f0fdf4; padding: 25px; border-radius: 10px; margin: 25px 0;">
        <p style="color: #065f46; font-size: 1.05em; line-height: 1.8; margin-bottom: 15px;">보호자들은 센터를 결정하기 전, 그 센터의 블로그나 SNS에서 다음을 확인합니다:</p>
        <ul style="color: #047857; line-height: 2; font-size: 1.05em;">
          <li>✅ 얼마나 꾸준히 <strong>'진심이 담긴'</strong> 소식이 올라오는지</li>
          <li>✅ 최근에도 활발하게 운영되고 있는지</li>
          <li>✅ 어르신들이 정말 즐겁게 지내는지 (사진, 영상)</li>
          <li>✅ 센터의 진정성과 투명성</li>
        </ul>
      </div>

      <h4 style="color: #7c3aed; margin-top: 30px;"><i class="fas fa-trophy"></i> 실제 성공 사례: C 센터의 SEO 전략</h4>

      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h4 style="margin-top: 0; color: #78350f; font-size: 1.2em;"><i class="fas fa-chart-area"></i> C 센터의 콘텐츠 전략</h4>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #6b21a8; font-weight: 600; margin-bottom: 15px;"><strong>📅 꾸준한 발행 전략:</strong></p>
          <ul style="color: #7c3aed; line-height: 2;">
            <li><strong>주 2회</strong> 보호자 소통 콘텐츠 정기 발행</li>
            <li>월요일: 지난주 프로그램 후기 (사진 포함)</li>
            <li>목요일: 보호자 질문 Q&A 또는 건강 정보</li>
            <li>매월 마지막 주: 이달의 센터 소식 종합 리포트</li>
          </ul>
        </div>

        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #065f46; font-weight: 600; margin-bottom: 15px;"><strong>🎯 SEO 효과:</strong></p>
          <ul style="color: #047857; line-height: 2;">
            <li>네이버 검색 알고리즘이 <strong>양질의 정보를 꾸준히 발행하는 채널을 상위 노출</strong></li>
            <li>'OO동 주간보호센터' 키워드 <strong>1페이지 지속 노출</strong></li>
            <li><strong>별도의 광고비 없이</strong> 자연 검색 유입 증가</li>
          </ul>
        </div>

        <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px;">
          <p style="font-size: 1.3em; font-weight: 700; margin: 0;">🔥 결과: <span style="font-size: 1.8em;">대기자 발생 선순환 구조</span></p>
        </div>
      </div>

      <blockquote style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0;">
        <p style="margin: 0; color: #065f46; font-size: 1.05em;"><strong>💡 중요한 포인트:</strong> 케어넥 마케팅의 <strong>3개월 집중 세팅은 끝이 아니라 '시작'</strong>입니다. 센터가 스스로 지속적인 소통을 이어갈 수 있도록 탄탄한 온라인 기반(블로그, 플레이스, 지도)을 다져 드립니다.</p>
      </blockquote>

      <h3 style="color: #7c3aed; border-bottom: 3px solid #a78bfa; padding-bottom: 10px; margin-top: 50px;"><i class="fas fa-gem"></i> 3개월 만에 인지도를 2배 높인 비결, 바로 '신뢰'입니다</h3>

      <div style="background: #f8fafc; padding: 30px; border-radius: 12px; margin: 30px 0; border: 2px solid #cbd5e1;">
        <h4 style="margin-top: 0; color: #1e293b; font-size: 1.3em;">✅ 성공적인 주간보호센터 홍보를 위한 3가지 핵심</h4>
        <ol style="color: #334155; line-height: 2.2; font-size: 1.05em; margin-bottom: 0;">
          <li><strong>보호자의 불안을 해소하는 진심 어린 콘텐츠</strong>
            <ul style="margin-top: 10px; color: #64748b;">
              <li>첫 등원 1일 차 스케치, 적응기 스토리</li>
              <li>사회복지사 직접 답변 Q&A</li>
              <li>투명한 일과표 및 프로그램 공개</li>
            </ul>
          </li>
          <li><strong>'왜 우리 센터여야 하는지'에 답하는 명확한 브랜딩</strong>
            <ul style="margin-top: 10px; color: #64748b;">
              <li>센터만의 특화 포지셔닝 (재활, 음악치료, 치매 예방 등)</li>
              <li>모든 채널에 일관된 메시지 전달</li>
              <li>차별화된 철학과 이미지 구축</li>
            </ul>
          </li>
          <li><strong>꾸준히 알리는 지속적인 소통</strong>
            <ul style="margin-top: 10px; color: #64748b;">
              <li>주 2회 정기적인 콘텐츠 발행</li>
              <li>네이버 SEO 최적화로 상위노출 유지</li>
              <li>3개월 온라인 기반 세팅으로 선순환 구조 구축</li>
            </ul>
          </li>
        </ol>
      </div>

      <p style="font-size: 1.1em; line-height: 1.8; color: #2d3748; margin-top: 30px;">어르신을 향한 원장님의 그 훌륭한 돌봄 철학과 진심이, <strong>홍보 방법을 몰라 보호자에게 닿지 못하는 것</strong>은 너무나 안타까운 일입니다. 저희 케어넥 마케팅은 단순한 마케팅 대행사 그 이상의 의미, 즉 <strong>어르신과 보호자, 그리고 센터를 잇는 '신뢰의 다리'</strong>가 되고자 합니다.</p>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 12px; text-align: center; margin: 40px 0;">
        <h3 style="margin-top: 0; font-size: 1.8em; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: 700;">더 이상 막막한 홍보 때문에 혼자 고민하지 마세요!</h3>
        <p style="font-size: 1.1em; margin: 20px 0; color: #ffffff; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">3개월 만에 인지도를 2배 높인 비결이 구체적으로 궁금하신가요?<br>원장님의 진심이 보호자에게 온전히 닿을 수 있도록,<br><strong>A부터 Z까지 확실하게 세팅</strong>해 드립니다.</p>
        <a href="https://nursmarket-a2dzpd9o.manus.space/" target="_blank" style="display: inline-block; background: white; color: #5a67d8; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 1.1em; margin-top: 10px; transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
          <i class="fas fa-gift"></i> 1:1 무료 진단 컨설팅 신청하기
        </a>
        <p style="font-size: 0.9em; margin-top: 15px; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">* 상담은 무료이며, 센터별 맞춤 브랜딩 전략을 제시해드립니다</p>
      </div>

      <blockquote style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0;">
        <strong style="color: #92400e;">💡 마지막 조언:</strong> 주간보호센터 홍보는 '한 번 하면 끝'이 아닙니다. <strong>신뢰는 꾸준함에서 나옵니다.</strong> 케어넥 마케팅과 함께 보호자가 진정으로 믿고 선택하는 센터를 만들어가세요.
      </blockquote>
    `
  }))
})

app.get('/column/youtube-shorts-strategy', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'youtube-shorts-strategy',
    id: 2,
    title: '요양원 유튜브 쇼츠로 월 상담 문의 300% 증가시킨 콘텐츠 전략',
    description: '유튜브 쇼츠를 활용한 요양원 마케팅의 실제 성공 사례. 월 상담 문의 300% 증가를 달성한 콘텐츠 전략과 제작 노하우를 상세히 공개합니다.',
    category: '유튜브 마케팅',
    date: '2025.10.12',
    keywords: ['요양원 마케팅', '유튜브 쇼츠', '콘텐츠 전략', '바이럴 마케팅', '실버케어 홍보'],
    content: `
      <h3>유튜브 쇼츠의 힘</h3>
      <p>최근 요양원 마케팅에서 유튜브 쇼츠의 효과가 급격히 증가하고 있습니다. 특히 60초 이내의 짧은 영상을 통해 신뢰감을 전달하고 브랜드 인지도를 높이는 데 매우 효과적입니다.</p>

      <h3>성공한 콘텐츠 유형 분석</h3>
      
      <h4>1. 시설 투어 영상</h4>
      <ul>
          <li>깨끗하고 밝은 시설 내부</li>
          <li>어르신들의 편안한 일상</li>
          <li>전문 케어 서비스 모습</li>
      </ul>

      <h4>2. 직원 인터뷰</h4>
      <p>실제 간병사, 간호사의 진솔한 인터뷰를 통해 전문성과 친근함을 동시에 어필합니다.</p>

      <h4>3. 건강 정보 제공</h4>
      <p>어르신들에게 도움이 되는 건강 정보나 운동법을 짧고 임팩트 있게 전달합니다.</p>

      <h3>콘텐츠 제작 핵심 포인트</h3>
      
      <h4>첫 3초가 승부</h4>
      <p>유튜브 쇼츠에서 첫 3초 내에 시청자의 관심을 끌지 못하면 바로 넘어갑니다. 임팩트 있는 오프닝이 필수입니다.</p>

      <h4>자막 활용</h4>
      <p>소리 없이도 내용을 이해할 수 있도록 명확한 자막을 삽입합니다. 특히 핵심 메시지는 강조 처리합니다.</p>

      <h4>감정적 연결</h4>
      <p>단순한 정보 전달보다는 감정적 공감을 이끌어내는 스토리텔링이 중요합니다.</p>

      <h3>실제 성공 사례</h3>
      <blockquote>
          "B요양원의 경우, 매일 1-2개의 쇼츠 영상을 꾸준히 업로드한 결과 3개월 만에 구독자 5,000명을 달성했고, 월 상담 문의가 기존 대비 300% 증가했습니다. 특히 '따뜻한 돌봄' 시리즈가 큰 호응을 얻으며 바이럴을 일으켰습니다."
      </blockquote>

      <h3>지속 가능한 운영 전략</h3>
      <p>유튜브 쇼츠는 꾸준함이 핵심입니다. 주 3-5회 정기적인 업로드를 통해 알고리즘의 신뢰를 얻고, 구독자와의 소통을 지속해야 합니다.</p>
    `
  }))
})

app.get('/column/sns-branding-strategy', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'sns-branding-strategy',
    id: 3,
    title: '인스타그램과 스레드로 실버케어 브랜딩 완성하기',
    description: 'MZ세대 보호자를 타겟으로 한 인스타그램과 스레드 브랜딩 전략. 실버케어 업계에 최적화된 SNS 마케팅 노하우와 실제 적용 방법을 제시합니다.',
    category: 'SNS 마케팅',
    date: '2025.10.08',
    keywords: ['실버케어 브랜딩', '인스타그램 마케팅', '스레드 전략', 'MZ세대 마케팅', '요양원 홍보'],
    content: `
      <h3>MZ세대 보호자, 새로운 의사결정층</h3>
      <p>현재 부모님 요양을 결정하는 주요 층이 MZ세대로 변화하고 있습니다. 이들은 온라인에서 정보를 수집하고, SNS를 통해 브랜드를 평가합니다. 따라서 인스타그램과 스레드를 통한 브랜딩이 필수가 되었습니다.</p>

      <h3>인스타그램 브랜딩 전략</h3>
      
      <h4>비주얼 아이덴티티 구축</h4>
      <ul>
          <li>일관된 색감과 톤앤매너</li>
          <li>깔끔하고 전문적인 피드 구성</li>
          <li>브랜드 로고와 컬러 활용</li>
      </ul>

      <h4>콘텐츠 기획</h4>
      <p>단순한 홍보보다는 가치 있는 정보를 제공하여 팔로워들의 신뢰를 얻어야 합니다.</p>

      <ul>
          <li><strong>일상 콘텐츠:</strong> 어르신들의 편안한 일상</li>
          <li><strong>정보 콘텐츠:</strong> 요양 관련 유용한 정보</li>
          <li><strong>behind the scenes:</strong> 직원들의 진솔한 모습</li>
          <li><strong>고객 후기:</strong> 실제 이용 가족들의 생생한 후기</li>
      </ul>

      <h3>스레드 활용 전략</h3>
      
      <h4>실시간 소통</h4>
      <p>스레드는 인스타그램보다 더 캐주얼하고 실시간성이 강한 플랫폼입니다. 일상적인 소통을 통해 친근한 이미지를 구축할 수 있습니다.</p>

      <h4>전문성 어필</h4>
      <p>요양 관련 전문 지식이나 최신 트렌드를 스레드를 통해 공유하여 전문성을 인정받을 수 있습니다.</p>

      <h3>크로스 플랫폼 전략</h3>
      <p>인스타그램과 스레드를 연동하여 시너지 효과를 극대화합니다. 각 플랫폼의 특성을 살려 차별화된 콘텐츠를 제공하되, 전체적인 브랜드 메시지는 일관성을 유지합니다.</p>

      <h3>성공 지표 및 KPI</h3>
      
      <h4>정량적 지표</h4>
      <ul>
          <li>팔로워 수 증가율</li>
          <li>참여율(좋아요, 댓글, 공유)</li>
          <li>프로필 방문수</li>
          <li>웹사이트 유입률</li>
      </ul>

      <h4>정성적 지표</h4>
      <ul>
          <li>브랜드 인지도 개선</li>
          <li>긍정적 브랜드 이미지 구축</li>
          <li>고객 신뢰도 향상</li>
      </ul>

      <blockquote>
          "C방문요양센터의 경우, 인스타그램과 스레드를 활용한 브랜딩 전략을 통해 6개월 만에 온라인 브랜드 인지도가 400% 향상되었고, MZ세대 보호자들로부터 높은 신뢰를 얻어 상담 문의가 크게 증가했습니다."
      </blockquote>
    `
  }))
})

app.get('/column/2026-industry-trends', (c) => {
  return c.html(getColumnPageHTML({
    slug: '2026-industry-trends',
    id: 4,
    title: '2026년 실버산업 마케팅 트렌드',
    description: '2026년 실버산업 마케팅의 미래를 전망합니다. 베이비붐 세대의 실버 진입과 MZ세대 보호자의 영향력 확대로 인한 새로운 마케팅 패러다임을 분석합니다.',
    category: '업계 트렌드',
    date: '2025.10.05',
    keywords: ['실버산업 트렌드', '2026년 마케팅', '베이비붐 세대', '디지털 실버', '개인화 마케팅'],
    content: `
      <h3>2026년, 실버산업 마케팅의 대전환점</h3>
      <p>2026년은 실버산업 마케팅에 있어 중대한 전환점이 될 것으로 예상됩니다. 베이비붐 세대의 본격적인 실버 진입과 MZ세대 보호자의 영향력 확대가 맞물려 완전히 새로운 마케팅 패러다임이 요구됩니다.</p>

      <h3>주요 트렌드 전망</h3>

      <h4>1. 디지털 네이티브 실버 세대</h4>
      <p>2026년 실버층은 이전 세대와 달리 디지털에 익숙한 세대입니다. 스마트폰을 능숙하게 사용하며, 온라인으로 정보를 수집하고 의사결정을 내립니다.</p>
      
      <ul>
          <li>모바일 최적화된 마케팅 필수</li>
          <li>동영상 콘텐츠 선호도 증가</li>
          <li>온라인 후기와 평점의 중요성 확대</li>
      </ul>

      <h4>2. 개인화(Personalization) 마케팅</h4>
      <p>획일적인 마케팅에서 벗어나 개인의 상황과 필요에 맞춘 맞춤형 마케팅이 핵심이 될 것입니다.</p>

      <ul>
          <li>AI 기반 개인 맞춤 서비스 추천</li>
          <li>라이프스타일별 차별화된 메시지</li>
          <li>개인 건강 데이터 기반 서비스 제안</li>
      </ul>

      <h4>3. 투명성과 신뢰성 강화</h4>
      <p>MZ세대 보호자들은 투명한 정보 공개와 진정성 있는 소통을 중시합니다.</p>

      <ul>
          <li>실시간 시설 현황 공개</li>
          <li>직원 교육 현황 및 자격 공개</li>
          <li>서비스 품질 데이터 투명 공개</li>
      </ul>

      <h3>새로운 마케팅 채널</h3>

      <h4>메타버스 활용</h4>
      <p>가상현실을 통한 시설 투어와 서비스 체험이 새로운 마케팅 도구로 부상할 것입니다.</p>

      <h4>라이브 커머스</h4>
      <p>실시간 방송을 통한 상담과 Q&A가 활성화될 전망입니다.</p>

      <h4>팟캐스트와 오디오 콘텐츠</h4>
      <p>전문성을 바탕으로 한 오디오 콘텐츠가 브랜드 신뢰도 구축에 중요한 역할을 할 것입니다.</p>

      <h3>데이터 기반 마케팅</h3>
      <p>2026년에는 더욱 정교한 데이터 분석을 통한 마케팅 최적화가 필수가 될 것입니다.</p>

      <ul>
          <li>고객 여정(Customer Journey) 분석</li>
          <li>예측 분석을 통한 선제적 마케팅</li>
          <li>ROI 측정 고도화</li>
      </ul>

      <h3>준비해야 할 것들</h3>

      <h4>기술 인프라 구축</h4>
      <p>새로운 트렌드에 대응하기 위한 기술적 기반을 미리 준비해야 합니다.</p>

      <h4>인재 확보 및 교육</h4>
      <p>디지털 마케팅 전문가와 데이터 분석 전문가의 확보가 경쟁력을 좌우할 것입니다.</p>

      <h4>고객 중심 사고로의 전환</h4>
      <p>공급자 중심에서 고객 중심으로의 근본적인 사고 전환이 필요합니다.</p>

      <blockquote>
          "2026년 실버산업 마케팅은 기술과 인간 중심 사고가 조화를 이루는 새로운 시대가 될 것입니다. 지금부터 준비하는 기업만이 미래 시장을 선도할 수 있을 것입니다."
      </blockquote>
    `
  }))
})

app.get('/column/three-sectors-comparison', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'three-sectors-comparison',
    id: 5,
    title: '요양보호사교육원 vs 방문요양 vs 요양원',
    description: '실버산업 3개 주요 분야(요양보호사교육원, 방문요양, 요양원)의 차별화된 마케팅 전략 비교 분석. 각 분야별 특성에 맞는 효과적인 마케팅 접근법을 제시합니다.',
    category: '마케팅 전략',
    date: '2025.09.28',
    keywords: ['실버산업 마케팅', '요양보호사교육원', '방문요양 마케팅', '요양원 홍보', '차별화 전략'],
    content: `
      <h3>실버산업 3개 분야의 마케팅 전략 비교</h3>
      <p>같은 실버산업이라도 요양보호사교육원, 방문요양, 요양원은 각각 다른 고객층과 서비스 특성을 가지고 있어 차별화된 마케팅 접근이 필요합니다.</p>

      <h3>요양보호사교육원 마케팅</h3>

      <h4>주요 타겟층</h4>
      <ul>
          <li>경력 단절 여성 (40-50대)</li>
          <li>은퇴 후 재취업 준비자</li>
          <li>안정적 일자리를 원하는 구직자</li>
      </ul>

      <h4>핵심 메시지</h4>
      <p><strong>"안정적인 미래, 보람있는 직업"</strong></p>
      <ul>
          <li>고령화 시대의 유망 직종</li>
          <li>국가 자격증의 안정성</li>
          <li>높은 취업률과 지속 가능성</li>
      </ul>

      <h4>효과적인 마케팅 채널</h4>
      <ul>
          <li>지역 맘카페, 커뮤니티</li>
          <li>구인구직 사이트 연계</li>
          <li>기존 수강생 추천 시스템</li>
          <li>무료 설명회 및 체험 과정</li>
      </ul>

      <h3>방문요양 마케팅</h3>

      <h4>주요 타겟층</h4>
      <ul>
          <li>집에서 돌봄받고 싶은 어르신</li>
          <li>시설 입소를 원하지 않는 가족</li>
          <li>경증~중등도 거동불편 어르신</li>
      </ul>

      <h4>핵심 메시지</h4>
      <p><strong>"집이 최고의 요양원"</strong></p>
      <ul>
          <li>익숙한 환경에서의 안전한 돌봄</li>
          <li>1:1 맞춤 서비스</li>
          <li>가족과의 지속적인 유대감</li>
      </ul>

      <h4>효과적인 마케팅 채널</h4>
      <ul>
          <li>지역 병원, 보건소 연계</li>
          <li>동사무소, 주민센터 홍보</li>
          <li>지역 네이버 카페 활동</li>
          <li>기존 이용자 소개 시스템</li>
      </ul>

      <h3>요양원 마케팅</h3>

      <h4>주요 타겟층</h4>
      <ul>
          <li>중증도 이상의 거동불편 어르신</li>
          <li>24시간 전문 케어가 필요한 경우</li>
          <li>집에서의 돌봄이 어려운 가족</li>
      </ul>

      <h4>핵심 메시지</h4>
      <p><strong>"전문적이고 안전한 24시간 케어"</strong></p>
      <ul>
          <li>전문 의료진과 간병 시스템</li>
          <li>24시간 응급상황 대응</li>
          <li>체계적인 건강 관리 프로그램</li>
      </ul>

      <h4>효과적인 마케팅 채널</h4>
      <ul>
          <li>병원 사회복지사 네트워크</li>
          <li>온라인 후기 및 평점 관리</li>
          <li>시설 투어 및 체험 프로그램</li>
          <li>의료진 전문성 어필</li>
      </ul>

      <h3>공통 성공 요소</h3>

      <h4>신뢰성 구축</h4>
      <p>모든 분야에서 가장 중요한 것은 신뢰성입니다. 투명한 정보 공개와 진정성 있는 소통이 필수입니다.</p>

      <h4>지역 밀착형 마케팅</h4>
      <p>실버산업은 지역성이 강한 분야입니다. 지역 특성과 문화를 이해한 마케팅이 효과적입니다.</p>

      <h4>구전 마케팅</h4>
      <p>실버산업에서는 구전의 힘이 매우 강합니다. 기존 고객의 만족도가 곧 최고의 마케팅 도구입니다.</p>

      <h3>차별화 포인트 요약</h3>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
              <tr style="background: #f8fafc;">
                  <th style="border: 1px solid #e2e8f0; padding: 12px;">구분</th>
                  <th style="border: 1px solid #e2e8f0; padding: 12px;">요양보호사교육원</th>
                  <th style="border: 1px solid #e2e8f0; padding: 12px;">방문요양</th>
                  <th style="border: 1px solid #e2e8f0; padding: 12px;">요양원</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600;">핵심 키워드</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">자격증, 취업, 안정성</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">집, 1:1 케어, 편안함</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">전문성, 24시간, 안전</td>
              </tr>
              <tr>
                  <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600;">주요 채널</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">커뮤니티, 구인사이트</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">지역 네트워크</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">의료기관 연계</td>
              </tr>
              <tr>
                  <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600;">결정 요인</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">교육 품질, 취업률</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">요양사 실력, 신뢰도</td>
                  <td style="border: 1px solid #e2e8f0; padding: 12px;">시설, 의료진, 위치</td>
              </tr>
          </tbody>
      </table>

      <blockquote>
          "각 분야의 특성을 정확히 이해하고 그에 맞는 차별화된 마케팅 전략을 구사하는 것이 성공의 열쇠입니다. 획일적인 접근보다는 세분화된 전략이 훨씬 효과적입니다."
      </blockquote>
    `
  }))
})

app.get('/column/small-city-success-case', (c) => {
  return c.html(getColumnPageHTML({
    slug: 'small-city-success-case',
    id: 6,
    title: '지방 소도시 요양원이 6개월 만에 대기자 명단을 만든 비결',
    description: '지방 소도시 요양원의 놀라운 성공 사례. 불과 6개월 만에 입소율 60%에서 100% 달성하고 대기자 명단까지 만든 실제 전략과 노하우를 상세히 공개합니다.',
    category: '케이스 스터디',
    date: '2025.07.20',
    keywords: ['지방 소도시 마케팅', '요양원 성공사례', '대기자 명단', '지역 밀착 전략', '입소율 향상'],
    content: `
      <h3>기적 같은 성공 스토리의 시작</h3>
      <p>인구 3만 명의 지방 소도시 ○○시에 위치한 한 요양원이 불과 6개월 만에 대기자 명단을 만들어낸 놀라운 사례를 소개합니다. 이 요양원은 개원 초기 60%에 머물던 입소율을 100% 달성하고, 현재는 20여 명의 대기자까지 생긴 상황입니다.</p>

      <h3>초기 상황 분석</h3>

      <h4>도전 과제</h4>
      <ul>
          <li>지방 소도시의 한정된 고객층</li>
          <li>기존 경쟁 요양원 3곳의 견고한 시장 점유</li>
          <li>신생 시설로서의 브랜드 인지도 부족</li>
          <li>제한적인 마케팅 예산</li>
      </ul>

      <h4>시설 현황</h4>
      <ul>
          <li>정원 50명 규모의 중형 요양원</li>
          <li>신축 건물로 시설은 우수</li>
          <li>원장 및 직원들의 높은 전문성</li>
          <li>하지만 인지도와 신뢰도 부족</li>
      </ul>

      <h3>6개월 성공 전략</h3>

      <h4>1단계: 지역 밀착 신뢰 구축 (1-2개월)</h4>
      
      <p><strong>보건소 및 의료기관 네트워킹</strong></p>
      <ul>
          <li>지역 보건소와의 협력 관계 구축</li>
          <li>인근 병원 사회복지사와의 지속적 소통</li>
          <li>의료진 정기 방문 및 건강 강좌 진행</li>
      </ul>

      <p><strong>투명성 강화</strong></p>
      <ul>
          <li>시설 개방의 날 운영 (매주 토요일)</li>
          <li>식단표와 프로그램 실시간 공개</li>
          <li>직원 교육 현황 및 자격 투명 공개</li>
      </ul>

      <h4>2단계: 온라인 입소문 확산 (2-3개월)</h4>
      
      <p><strong>지역 맘카페 활동</strong></p>
      <ul>
          <li>유용한 요양 정보 정기 제공</li>
          <li>궁금증 해결 및 상담 서비스</li>
          <li>과도한 홍보 금지, 도움 중심 활동</li>
      </ul>

      <p><strong>네이버 블로그 최적화</strong></p>
      <ul>
          <li>"○○시 요양원" 키워드 1페이지 진입</li>
          <li>실제 이용 후기 중심 콘텐츠</li>
          <li>시설 일상과 어르신들 모습 공유</li>
      </ul>

      <h4>3단계: 차별화 서비스 강화 (3-4개월)</h4>
      
      <p><strong>개인 맞춤 케어 시스템</strong></p>
      <ul>
          <li>입소 전 1:1 상담 및 개인별 케어 플랜 수립</li>
          <li>가족과의 소통 강화 (주 2회 안부 연락)</li>
          <li>개인 취향을 고려한 식단 및 프로그램</li>
      </ul>

      <p><strong>특별 프로그램 운영</strong></p>
      <ul>
          <li>지역 초등학교와 연계한 세대 교감 프로그램</li>
          <li>원예 치료 및 동물 치료 도입</li>
          <li>가족 참여 행사 정기 개최</li>
      </ul>

      <h4>4단계: 입소문 확산 및 브랜드 확립 (5-6개월)</h4>
      
      <p><strong>이용 가족 만족도 극대화</strong></p>
      <ul>
          <li>정기 만족도 조사 및 즉시 개선</li>
          <li>가족 소통 앱 도입으로 실시간 소통</li>
          <li>특별한 날 이벤트 (생일, 기념일 등)</li>
      </ul>

      <p><strong>자연스러운 추천 시스템</strong></p>
      <ul>
          <li>만족한 가족의 자발적 추천 유도</li>
          <li>지역 커뮤니티에서의 긍정적 입소문</li>
          <li>의료진들 사이에서의 신뢰도 상승</li>
      </ul>

      <h3>핵심 성공 요인</h3>

      <h4>진정성과 투명성</h4>
      <p>과장된 광고보다는 진솔한 모습을 보여주며 신뢰를 쌓아갔습니다. 시설의 장점뿐만 아니라 개선점도 솔직하게 공유했습니다.</p>

      <h4>지역 특성 이해</h4>
      <p>소도시의 강한 인적 네트워크를 활용하여 한 명 한 명이 홍보대사가 되도록 만들었습니다.</p>

      <h4>차별화된 서비스</h4>
      <p>단순한 요양 서비스를 넘어서 감동을 주는 서비스로 차별화를 이루었습니다.</p>

      <h4>지속적인 개선</h4>
      <p>이용 가족의 피드백을 즉시 반영하여 서비스를 지속적으로 개선해 나갔습니다.</p>

      <h3>구체적인 성과 지표</h3>
      
      <ul>
          <li><strong>입소율:</strong> 60% → 100% (6개월)</li>
          <li><strong>대기자:</strong> 0명 → 23명</li>
          <li><strong>온라인 평점:</strong> 3.2점 → 4.8점</li>
          <li><strong>추천율:</strong> 15% → 89%</li>
          <li><strong>직원 만족도:</strong> 70% → 95%</li>
      </ul>

      <h3>지방 소도시 성공 전략의 핵심</h3>

      <blockquote>
          "지방 소도시에서는 '관계'가 마케팅의 전부입니다. 기술이나 광고보다는 사람과 사람 사이의 신뢰가 가장 강력한 마케팅 도구였습니다. 한 명의 만족한 가족이 열 명의 고객을 만들어내는 것이 지방의 힘입니다."
      </blockquote>

      <p>이 사례는 지방 소도시에서도 충분히 성공할 수 있다는 것을 보여줍니다. 핵심은 지역 특성을 이해하고, 진정성 있는 서비스로 신뢰를 쌓아가는 것입니다.</p>
    `
  }))
})

// Column Page HTML Generator Function
function getColumnPageHTML({slug, id, title, description, category, date, keywords, content}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": "케어넥 마케팅",
      "url": "https://carenect.kr",
      "sameAs": [
        "https://blog.naver.com/carenect",
        "https://carenect.kr"
      ]
    },
    "publisher": {
      "@type": "Organization", 
      "name": "케어넥 마케팅",
      "url": "https://carenect.kr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://carenect.kr/static/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "datePublished": date.replace(/\./g, '-') + "T09:00:00+09:00",
    "dateModified": "2025-10-28T14:00:00+09:00",
    "articleSection": category,
    "keywords": keywords.join(', '),
    "wordCount": content.replace(/<[^>]*>/g, '').length,
    "inLanguage": "ko-KR",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://carenect.kr/column/" + slug
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://carenect.kr/static/column-" + id + ".jpg",
      "width": 1200,
      "height": 630
    },
    "about": {
      "@type": "Thing",
      "name": "방문요양 마케팅",
      "description": "재가요양서비스 및 방문요양센터를 위한 디지털 마케팅 전략"
    }
  };

  return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | 케어넥 마케팅</title>
        
        <!-- SEO Meta Tags -->
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords.join(', ')}">
        <meta name="author" content="케어넥 마케팅">
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
        <meta name="google-site-verification" content="your-google-verification-code-here">
        <link rel="canonical" href="https://carenect.kr/column/${slug}">
        
        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:type" content="article">
        <meta property="og:url" content="https://carenect.kr/column/${slug}">
        <meta property="og:image" content="https://carenect.kr/static/column-${id}.jpg">
        <meta property="og:site_name" content="케어넥 마케팅">
        <meta property="article:author" content="케어넥 마케팅">
        <meta property="article:published_time" content="${date.replace(/\./g, '-')}">
        <meta property="article:section" content="${category}">
        <meta property="article:tag" content="${keywords.join(', ')}">
        
        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="https://carenect.kr/static/column-${id}.jpg">
        
        <!-- Canonical URL -->
        <link rel="canonical" href="https://carenect.kr/column/${slug}">
        
        <!-- Structured Data -->
        <script type="application/ld+json">
        ${JSON.stringify(structuredData, null, 2)}
        </script>
        
        <!-- Fonts and Icons -->
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Styles -->
        <link href="/static/style.css?v=20251028-2" rel="stylesheet">
        
        <!-- Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
        </script>
    </head>
    <body>
        <!-- Header -->
        <header class="header" id="header">
            <div class="header-container">
                <div class="logo-section">
                    <div class="logo" onclick="window.location.href='/'">
                        <i class="fas fa-heartbeat"></i>
                        <span class="logo-text">케어넥 마케팅</span>
                    </div>
                </div>
                <nav class="nav-section">
                    <ul class="nav-menu">
                        <li><a href="/">홈</a></li>
                        <li><a href="/#about">소개</a></li>
                        <li><a href="/#services">서비스</a></li>
                        <li><a href="/#proof">실적</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                        <li><a href="/column">칼럼</a></li>
                        <li><a href="/#contact">상담신청</a></li>
                    </ul>
                </nav>
                <div class="cta-section">
                    <button class="cta-button" onclick="window.location.href='/#contact'">
                        <i class="fas fa-phone-alt"></i>
                        무료상담
                    </button>
                </div>
                <div class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </header>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-content">
                <ul class="mobile-nav-menu">
                    <li><a href="/" onclick="closeMobileMenu()">홈</a></li>
                    <li><a href="/#about" onclick="closeMobileMenu()">소개</a></li>
                    <li><a href="/#services" onclick="closeMobileMenu()">서비스</a></li>
                    <li><a href="/#proof" onclick="closeMobileMenu()">실적</a></li>
                    <li><a href="/#faq" onclick="closeMobileMenu()">FAQ</a></li>
                    <li><a href="/column" onclick="closeMobileMenu()">칼럼</a></li>
                    <li><a href="/#contact" onclick="closeMobileMenu()">상담신청</a></li>
                </ul>
            </div>
        </div>

        <!-- Main Content -->
        <main>
            <!-- Breadcrumb -->
            <nav class="breadcrumb-nav">
                <div class="container">
                    <div class="breadcrumb">
                        <a href="/" class="breadcrumb-link">홈</a>
                        <span class="breadcrumb-separator">/</span>
                        <a href="/column" class="breadcrumb-link">칼럼</a>
                        <span class="breadcrumb-separator">/</span>
                        <span class="breadcrumb-current">${title}</span>
                    </div>
                </div>
            </nav>

            <!-- Article Header -->
            <section class="article-header">
                <div class="container">
                    <div class="article-meta">
                        <span class="article-category">${category}</span>
                        <span class="article-date">
                            <i class="fas fa-calendar"></i>
                            ${date}
                        </span>
                    </div>
                    <h1 class="article-title">${title}</h1>
                    <p class="article-description">${description}</p>
                    
                    <!-- Share Buttons -->
                    <div class="share-buttons">
                        <button class="share-button" onclick="shareKakao()">
                            <i class="fas fa-comment"></i>
                            카카오톡
                        </button>
                        <button class="share-button" onclick="copyURL()">
                            <i class="fas fa-link"></i>
                            URL 복사
                        </button>
                    </div>
                </div>
            </section>

            <!-- Article Content -->
            <article class="article-content">
                <div class="container">
                    <div class="content-wrapper">
                        ${content}
                    </div>
                </div>
            </article>

            <!-- CTA Section -->
            <section class="column-cta-section">
                <div class="container">
                    <div class="cta-content">
                        <h2>더 자세한 마케팅 전략이 궁금하신가요?</h2>
                        <p>1:1 맞춤 컨설팅으로 귀하의 센터에 최적화된 마케팅 전략을 제안해 드립니다.</p>
                        <button class="primary-button" onclick="window.location.href='/#contact'">
                            <i class="fas fa-calendar-alt"></i>
                            무료 상담 신청하기
                        </button>
                    </div>
                </div>
            </section>

            <!-- Related Articles -->
            <section class="related-articles">
                <div class="container">
                    <h2>관련 칼럼</h2>
                    <div class="related-grid">
                        <!-- Related articles will be populated by JavaScript -->
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <div class="footer-logo">
                            <i class="fas fa-heartbeat"></i>
                            <span>케어넥 마케팅</span>
                        </div>
                        <p>실버산업 전문 마케팅으로 더 많은 고객과 만나보세요.</p>
                    </div>
                    <div class="footer-contact">
                        <h4>연락처</h4>
                        <p><i class="fas fa-envelope"></i> join@carenect.kr</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-company-info">
                        <p class="copyright">&copy; 2026 케어넥 마케팅. All Rights Reserved.</p>
                        <br>
                        <p class="company-details">
                            운영사: 블랙라운드 | 서비스 브랜드: 케어넥 마케팅<br>
                            대표: 조인웅 | 사업자등록번호: 713-16-00878 | 통신판매업 신고: 제2019-용인기흥-0886호<br>
                            주소: 경기도 용인시 기흥구 예현로 15
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scroll to Top Button -->
        <button class="scroll-to-top" id="scrollToTop" onclick="scrollToTop()">
            <i class="fas fa-chevron-up"></i>
        </button>

        <!-- JavaScript -->
        <script src="/static/app.js?v=20251028-2"></script>
        
        <script>
        // Article-specific JavaScript
        function shareKakao() {
            if (navigator.share) {
                navigator.share({
                    title: '${title}',
                    text: '${description}',
                    url: window.location.href
                });
            } else {
                copyURL();
            }
        }
        
        function copyURL() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('URL이 복사되었습니다.');
            });
        }
        
        // Load related articles
        document.addEventListener('DOMContentLoaded', function() {
            loadRelatedArticles(${id});
        });
        
        function loadRelatedArticles(currentId) {
            const articles = [
                { id: 1, title: '방문요양 키워드로 네이버 상위노출 달성하는 5단계 전략', category: 'SEO 마케팅', slug: 'seo-marketing-strategy' },
                { id: 2, title: '요양원 유튜브 쇼츠로 월 상담 문의 300% 증가시킨 콘텐츠 전략', category: '유튜브 마케팅', slug: 'youtube-shorts-strategy' },
                { id: 3, title: '인스타그램과 스레드로 실버케어 브랜딩 완성하기', category: 'SNS 마케팅', slug: 'sns-branding-strategy' },
                { id: 4, title: '2026년 실버산업 마케팅 트렌드', category: '업계 트렌드', slug: '2026-industry-trends' },
                { id: 5, title: '요양보호사교육원 vs 방문요양 vs 요양원', category: '마케팅 전략', slug: 'three-sectors-comparison' },
                { id: 6, title: '지방 소도시 요양원이 6개월 만에 대기자 명단을 만든 비결', category: '케이스 스터디', slug: 'small-city-success-case' }
            ];
            
            const relatedArticles = articles.filter(article => article.id !== currentId).slice(0, 3);
            const relatedGrid = document.querySelector('.related-grid');
            
            if (relatedGrid) {
                relatedGrid.innerHTML = relatedArticles.map(article => \`
                    <div class="related-article">
                        <div class="related-article-category">\${article.category}</div>
                        <h3><a href="/column/\${article.slug}">\${article.title}</a></h3>
                    </div>
                \`).join('');
            }
        }
        </script>
    </body>
    </html>
  `
}

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Google Search Console 사이트 소유권 확인 -->
        <meta name="google-site-verification" content="g7bAcvJ2LXQWjFrGaAYylorVcYD4u2rgHXZjCD6XoFY" />
        
        <!-- 네이버 웹마스터 도구 사이트 소유권 확인 -->
        <meta name="naver-site-verification" content="38ac4c38bb0aa85bef3a07f82984a7f72cf1bb02" />
        
        <title>케어넥 마케팅 - 방문요양, 주간보호, 요양원 등 실버산업 홍보, 마케팅 전문</title>
        <meta name="description" content="케어넥 마케팅은 방문요양, 주간보호, 요양원, 재가요양 등 실버산업 전문 마케팅 대행업체입니다. SEO 최적화, SNS 마케팅, 구글/네이버 광고로 신규 고객 창출과 매출 증대를 돕습니다.">
        <meta name="keywords" content="케어넥 마케팅, 방문요양 마케팅, 방문요양 홍보, 주간보호 마케팅, 주간보호 홍보, 요양원 홍보, 요양원 마케팅, 재가요양 마케팅, 실버산업 마케팅, 방문요양 광고, 주간보호 광고, 요양센터 홍보, 노인요양 마케팅, 방문간병 홍보, 실버산업 홍보">
        <meta name="author" content="케어넥 마케팅">
        <meta name="theme-color" content="#3182f6">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://carenect.kr">
        <meta property="og:title" content="케어넥 마케팅 - 방문요양, 주간보호, 요양원 등 실버산업 홍보, 마케팅 전문">
        <meta property="og:description" content="방문요양, 주간보호, 요양원, 재가요양 등 실버산업 전문 마케팅 대행업체. SEO, SNS, 검색광고로 신규 고객 창출과 매출 증대를 경험하세요.">
        <meta property="og:image" content="https://carenect.kr/static/og-image.jpg">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://carenect.kr">
        <meta property="twitter:title" content="케어넥 마케팅 - 방문요양, 주간보호, 요양원 등 실버산업 홍보, 마케팅 전문">
        <meta property="twitter:description" content="방문요양, 주간보호, 요양원, 재가요양 등 실버산업 전문 마케팅 대행업체. SEO, SNS, 검색광고로 신규 고객 창출과 매출 증대를 경험하세요.">
        <meta property="twitter:image" content="https://carenect.kr/static/og-image.jpg">
        
        <!-- Structured Data (JSON-LD) -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "케어넥 마케팅",
          "url": "https://carenect.kr",
          "logo": "https://carenect.kr/static/logo.png",
          "description": "방문요양, 주간보호, 요양원, 재가요양 등 실버산업 전문 마케팅 대행업체 케어넥 마케팅입니다. SEO 최적화, SNS 마케팅, 검색광고로 신규 고객 창출을 돕습니다.",
          "sameAs": [
            "https://carenect.kr"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "고객 서비스",
            "areaServed": "KR",
            "availableLanguage": "Korean"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressLocality": "대한민국"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "실버산업 전문 마케팅 서비스 (방문요양, 주간보호, 요양원, 재가요양)",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "방문요양 마케팅",
                  "description": "방문요양센터 홍보 및 신규 고객 유치를 위한 전문 마케팅 서비스"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "주간보호센터 마케팅",
                  "description": "주간보호센터 홍보 및 이용자 유치를 위한 전문 마케팅 서비스"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "요양원 마케팅",
                  "description": "요양원 홍보 및 입소자 유치를 위한 전문 마케팅 서비스"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "재가요양 마케팅",
                  "description": "재가요양서비스 홍보 및 고객 유치를 위한 전문 마케팅 서비스"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "실버산업 마케팅 컨설팅",
                  "description": "실버산업 전반의 마케팅 전략 수립 및 컨설팅 서비스"
                }
              }
            ]
          }
        }
        </script>
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Styles -->
        <link href="/static/style.css?v=20251028-2" rel="stylesheet">
    </head>
    <body>
        <!-- Header -->
        <header class="header" id="header">
            <div class="header-container">
                <div class="logo-section">
                    <div class="logo" onclick="window.location.href='/'">
                        <i class="fas fa-heartbeat"></i>
                        <span class="logo-text">케어넥 마케팅</span>
                    </div>
                </div>
                <nav class="nav-section">
                    <ul class="nav-menu">
                        <li><a href="#home">홈</a></li>
                        <li><a href="#about">소개</a></li>
                        <li><a href="#services">서비스</a></li>
                        <li><a href="#proof">실적</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="/column">칼럼</a></li>
                        <li><a href="#contact">상담신청</a></li>
                    </ul>
                </nav>
                <div class="cta-section">
                    <button class="cta-button" onclick="scrollToContact()">
                        <i class="fas fa-phone-alt"></i>
                        무료상담
                    </button>
                </div>
                <div class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </header>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-content">
                <ul class="mobile-nav-menu">
                    <li><a href="#home" onclick="closeMobileMenu()">홈</a></li>
                    <li><a href="#about" onclick="closeMobileMenu()">소개</a></li>
                    <li><a href="#services" onclick="closeMobileMenu()">서비스</a></li>
                    <li><a href="#proof" onclick="closeMobileMenu()">실적</a></li>
                    <li><a href="#faq" onclick="closeMobileMenu()">FAQ</a></li>
                    <li><a href="/column" onclick="closeMobileMenu()">칼럼</a></li>
                    <li><a href="#contact" onclick="closeMobileMenu()">상담신청</a></li>
                </ul>
            </div>
        </div>

        <main>
            <!-- Section 1: H1 헤드라인 -->
            <section id="home" class="hero-section">
                <div class="hero-background"></div>
                <div class="hero-content">
                    <div class="container">
                        <h1 class="hero-title">
                            <span class="typewriter" id="typewriter-text"></span><br>
                            <span class="highlight">방문요양부터 요양원까지,</span><br>
                            실버산업은 마케팅 전문가가 필요합니다.
                        </h1>
                        <p class="hero-subtitle">
                            전문 지식과 실전 경험으로 검증된 마케팅 전략으로<br>
                            귀하의 센터가 지역 최고가 될 수 있도록 돕겠습니다.
                        </p>
                        <div class="hero-actions">
                            <button class="primary-button" onclick="scrollToContact()">
                                <i class="fas fa-calendar-alt"></i>
                                무료 상담 신청하기
                            </button>
                            <button class="secondary-button" onclick="scrollToServices()">
                                <i class="fas fa-play-circle"></i>
                                서비스 자세히 보기
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 2: 자기소개 -->
            <section id="about" class="about-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">신뢰할 수 있는 전문가</h2>
                        <p class="section-subtitle">수많은 센터와 교육원의 성공을 이끌어온 경험</p>
                    </div>
                    <div class="about-content">
                        <div class="about-text">
                            <h3>수많은 센터와 교육원의 마케팅을 대행하며 증명했습니다.</h3>
                            <p class="about-description">
                                <strong>'높은 이해도'가 어떻게 '높은 상담 전환율'로 이어지는지를 보여드립니다.</strong>
                            </p>
                            <div class="about-features">
                                <div class="feature-item animate-on-scroll">
                                    <i class="fas fa-chart-line"></i>
                                    <div class="feature-content">
                                        <h4>실버산업 전문성</h4>
                                        <p>단순한 마케팅이 아닌, 실버산업만의 특성을 깊이 이해한 전문 마케팅</p>
                                    </div>
                                </div>
                                <div class="feature-item animate-on-scroll">
                                    <i class="fas fa-bullseye"></i>
                                    <div class="feature-content">
                                        <h4>높은 전환율</h4>
                                        <p>업계 평균보다 3배 높은 상담 전환율과 고객 유치 성과</p>
                                    </div>
                                </div>
                                <div class="feature-item animate-on-scroll">
                                    <i class="fas fa-handshake"></i>
                                    <div class="feature-content">
                                        <h4>신뢰할 수 있는 파트너</h4>
                                        <p><span class="counter" data-count="50">0</span>여 개 센터의 성공적인 마케팅 대행 경험과 지속적인 파트너십</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-image">
                            <div class="image-placeholder">
                                <i class="fas fa-users"></i>
                                <p>전문가와의<br>만남</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 3: 서비스 -->
            <section id="services" class="services-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">통합 마케팅 솔루션</h2>
                        <p class="section-subtitle">하나의 목표, '신규 고객 창출'을 위해 모든 채널을 활용합니다</p>
                    </div>
                    <div class="services-content">
                        <div class="services-intro">
                            <div class="intro-highlight">
                                <span class="highlight-number">01</span>
                                <span class="highlight-text">검색 시 가장 먼저 보이는</span>
                                <strong class="highlight-keyword">블로그 상위 노출</strong>
                            </div>
                            <div class="intro-arrow">
                                <i class="fas fa-arrow-down"></i>
                            </div>
                            <div class="intro-highlight">
                                <span class="highlight-number">02</span>
                                <span class="highlight-text">신뢰를 쌓는</span>
                                <strong class="highlight-keyword">유튜브 채널 활성화</strong>
                            </div>
                            <div class="intro-arrow">
                                <i class="fas fa-arrow-down"></i>
                            </div>
                            <div class="intro-highlight intro-result">
                                <span class="highlight-number">03</span>
                                <span class="highlight-text">높아진 브랜드 인지도는</span>
                                <strong class="highlight-result">상담 문의 증가로 이어집니다</strong>
                                <i class="fas fa-chart-line result-icon"></i>
                            </div>
                        </div>
                        <div class="services-grid">
                            <div class="service-card animate-on-scroll">
                                <div class="service-icon">
                                    <i class="fab fa-google"></i>
                                </div>
                                <h3>검색 엔진 최적화</h3>
                                <ul>
                                    <li>지역 키워드 상위 노출</li>
                                    <li>네이버 블로그 1페이지 진입</li>
                                    <li>플레이스 순위 향상</li>
                                </ul>
                                <div class="service-result">
                                    <span class="result-tag">결과</span>
                                    <p>검색 노출 <span class="counter" data-count="300">0</span>% 증가</p>
                                </div>
                            </div>
                            <div class="service-card animate-on-scroll">
                                <div class="service-icon">
                                    <i class="fab fa-youtube"></i>
                                </div>
                                <h3>유튜브 쇼츠채널 운영</h3>
                                <ul>
                                    <li>전문 콘텐츠 기획/제작</li>
                                    <li>채널 브랜딩 및 최적화</li>
                                    <li>구독자 및 조회수 증대</li>
                                    <li>신뢰도 향상 콘텐츠</li>
                                </ul>
                                <div class="service-result">
                                    <span class="result-tag">결과</span>
                                    <p>브랜드 신뢰도 <span class="counter" data-count="250">0</span>% 향상</p>
                                </div>
                            </div>
                            <div class="service-card animate-on-scroll">
                                <div class="service-icon">
                                    <i class="fas fa-bullhorn"></i>
                                </div>
                                <h3>통합 마케팅</h3>
                                <ul>
                                    <li>SNS 마케팅 (인스타그램, 스레드 등)</li>
                                    <li>온라인 광고 운영</li>
                                    <li>콘텐츠 마케팅 전략</li>
                                    <li>브랜드 아이덴티티 구축</li>
                                </ul>
                                <div class="service-result">
                                    <span class="result-tag">결과</span>
                                    <p>상담 문의 <span class="counter" data-count="400">0</span>% 증가</p>
                                </div>
                            </div>
                            <div class="service-card animate-on-scroll">
                                <div class="service-icon">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <h3>홈페이지 제작</h3>
                                <ul>
                                    <li>신뢰감 있는 전문 홈페이지 디자인</li>
                                    <li>모바일 최적화 반응형 웹사이트</li>
                                    <li>상담 문의 시스템 구축</li>
                                    <li>검색엔진 최적화(SEO) 기본 설정</li>
                                </ul>
                                <div class="service-result">
                                    <span class="result-tag">결과</span>
                                    <p>브랜드 신뢰도 <span class="counter" data-count="350">0</span>% 향상</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 4: 사회적 증거 -->
            <section id="proof" class="proof-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">결과로 증명하는 실력</h2>
                        <p class="section-subtitle">저희는 '결과'로 실력을 증명합니다</p>
                    </div>
                    <div class="proof-content">
                        <div class="proof-highlight">
                            <div class="highlight-card">
                                <h3>'OO지역 방문요양' 키워드</h3>
                                <div class="achievement">
                                    <div class="achievement-item">
                                        <span class="rank rank-counter" data-target="1">10위</span>
                                        <span class="platform">블로그 1페이지</span>
                                    </div>
                                    <div class="achievement-item">
                                        <span class="rank rank-counter" data-target="1">10위</span>
                                        <span class="platform">플레이스</span>
                                    </div>
                                </div>
                                <p style="text-align: center; font-size: 18px; color: #ffffff; font-weight: 600; margin-top: 24px; line-height: 1.6;">
                                    <strong>대표님의 센터도 지역 최고의 키워드를<br>선점할 수 있습니다.</strong>
                                </p>
                            </div>
                        </div>
                        <div class="proof-stats">
                            <div class="stat-item animate-on-scroll">
                                <div class="stat-number"><span class="counter" data-count="50">0</span>+</div>
                                <div class="stat-label">성공 사례</div>
                            </div>
                            <div class="stat-item animate-on-scroll">
                                <div class="stat-number"><span class="counter" data-count="300">0</span>%</div>
                                <div class="stat-label">평균 문의 증가율</div>
                            </div>
                            <div class="stat-item animate-on-scroll">
                                <div class="stat-number"><span class="counter" data-count="95">0</span>%</div>
                                <div class="stat-label">고객 만족도</div>
                            </div>
                            <div class="stat-item animate-on-scroll">
                                <div class="stat-number"><span class="counter" data-count="24">0</span>개월</div>
                                <div class="stat-label">평균 계약 기간</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 5: FAQ -->
            <section id="faq" class="faq-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">자주 묻는 질문</h2>
                        <p class="section-subtitle"><strong>모든 질문에 답해드립니다.</strong><br><strong>마케팅 효과부터 진행 과정까지, 모든 것을 투명하게 공개합니다.</strong></p>
                    </div>
                    <div class="faq-content">
                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                <h3>Q. 온라인 마케팅, 정말 효과가 있나요?</h3>
                                <i class="fas fa-chevron-down faq-arrow"></i>
                            </button>
                            <div class="faq-answer">
                                <p>네, 확실한 효과가 있습니다. 현재 대부분의 보호자들이 요양 서비스를 찾을 때 온라인 검색을 먼저 이용합니다. 저희가 진행한 50여 개 센터 중 평균적으로 상담 문의가 3배 이상 증가했으며, 그 중 70% 이상이 실제 이용고객으로 전환되었습니다.</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                <h3>Q. 정확히 어떤 일을 해주시나요?</h3>
                                <i class="fas fa-chevron-down faq-arrow"></i>
                            </button>
                            <div class="faq-answer">
                                <p>네이버 블로그 운영, 유튜브 쇼츠 채널 개설 및 관리, SNS 마케팅(인스타그램, 스레드 등), 온라인 광고 운영 등을 통합적으로 진행합니다. 특히 '지역명 + 방문요양', '지역명 + 요양원' 등 핵심 키워드에서 상위 노출되도록 하여 자연스럽게 상담 문의가 들어올 수 있도록 합니다.</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                <h3>Q. 온라인 마케팅, 꼭 해야 할까요?</h3>
                                <i class="fas fa-chevron-down faq-arrow"></i>
                            </button>
                            <div class="faq-answer">
                                <p>현재 실버산업 시장에서 온라인 마케팅은 선택이 아닌 필수가 되었습니다. 경쟁 센터들이 이미 온라인에서 적극적으로 고객을 확보하고 있기 때문에, 온라인 마케팅 없이는 뒤처질 수밖에 없습니다. 특히 코로나 이후 비대면 상담이 일반화되면서 온라인 존재감은 더욱 중요해졌습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 6: Column Preview -->
            <section class="column-preview-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">전문 칼럼</h2>
                        <p class="section-subtitle"><strong>더 깊이 있는 정보가 필요하시다면 실전 경험으로 채운</strong><br><strong>저희의 전문 칼럼을 확인해 보세요.</strong></p>
                    </div>
                    <div class="column-preview-content">
                        <div class="column-cta">
                            <button class="column-preview-button" onclick="window.location.href='/column'">
                                <i class="fas fa-newspaper"></i>
                                전문 칼럼 보기
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 7: CTA -->
            <section id="contact" class="contact-section">
                <div class="container">
                    <div class="contact-content">
                        <div class="contact-text">
                            <h2 class="contact-title">
                                지금 상담을 신청한다고 해서<br>
                                꼭 계약해야 하는 것은 아닙니다.
                            </h2>
                            <p class="contact-description">
                                대표님의 현재 상황을 진단하고, 경쟁사보다 한 발 앞서나갈 수 있는<br>
                                마케팅 전략을 편하게 들어보세요.
                            </p>
                            <div class="contact-benefits">
                                <div class="benefit-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span>무료 현황 진단 및 분석</span>
                                </div>
                                <div class="benefit-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span>맞춤형 마케팅 전략 제안</span>
                                </div>
                                <div class="benefit-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span>경쟁사 분석 리포트 제공</span>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form-container">
                            <form class="contact-form" id="contactForm">
                                <h3>무료상담 신청하기</h3>
                                <div class="form-group">
                                    <label for="name">성함 *</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">연락처 *</label>
                                    <input type="tel" id="phone" name="phone" required>
                                </div>
                                <div class="form-group">
                                    <label for="company">센터명/기관명</label>
                                    <input type="text" id="company" name="company">
                                </div>
                                <div class="form-group">
                                    <label for="message">문의사항</label>
                                    <textarea id="message" name="message" rows="4" placeholder="현재 상황이나 궁금한 점을 자유롭게 작성해주세요."></textarea>
                                </div>
                                <button type="submit" class="form-submit-button">
                                    <i class="fas fa-paper-plane"></i>
                                    무료상담 신청하기
                                </button>
                                <p class="form-notice">
                                    * 상담 신청 후 24시간 내에 연락드립니다.<br>
                                    * 개인정보는 상담 목적으로만 사용되며, 철저히 보호됩니다.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <div class="footer-logo">
                            <i class="fas fa-heartbeat"></i>
                            <span>케어넥 마케팅</span>
                        </div>
                        <p>실버산업 전문 마케팅으로 더 많은 고객과 만나보세요.</p>
                    </div>
                    <div class="footer-contact">
                        <h4>연락처</h4>
                        <p><i class="fas fa-envelope"></i> join@carenect.kr</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-company-info">
                        <p class="copyright">&copy; 2026 케어넥 마케팅. All Rights Reserved.</p>
                        <br>
                        <p class="company-details">
                            운영사: 블랙라운드 | 서비스 브랜드: 케어넥 마케팅<br>
                            대표: 조인웅 | 사업자등록번호: 713-16-00878 | 통신판매업 신고: 제2019-용인기흥-0886호<br>
                            주소: 경기도 용인시 기흥구 예현로 15
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scroll to Top Button -->
        <button class="scroll-to-top" id="scrollToTop" onclick="scrollToTop()">
            <i class="fas fa-chevron-up"></i>
        </button>

        <!-- Scripts -->
        <script src="/static/app.js?v=20251028-2"></script>
    </body>
    </html>
  `)
})

export default app