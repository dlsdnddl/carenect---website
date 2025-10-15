import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Column page route
app.get('/column', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>전문 칼럼 - 실버산업 마케팅 노하우</title>
        <meta name="description" content="실버산업 마케팅 전문가의 실전 노하우와 인사이트를 담은 칼럼을 확인하세요.">
        <meta name="theme-color" content="#3182f6">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Styles -->
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body>
        <!-- Header -->
        <header class="header" id="header">
            <div class="header-container">
                <div class="logo-section">
                    <div class="logo" onclick="window.location.href='/'">
                        <i class="fas fa-heartbeat"></i>
                        <span class="logo-text">실버케어 마케팅</span>
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
                        <article class="column-card animate-on-scroll" onclick="openColumnModal(1)">
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

                        <article class="column-card animate-on-scroll" onclick="openColumnModal(2)">
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

                        <article class="column-card animate-on-scroll" onclick="openColumnModal(3)">
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

                        <article class="column-card animate-on-scroll" onclick="openColumnModal(4)">
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

                        <article class="column-card animate-on-scroll" onclick="openColumnModal(5)">
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

                        <article class="column-card animate-on-scroll" onclick="openColumnModal(6)">
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

                    <!-- Column Detail Modal -->
                    <div class="column-modal" id="columnModal">
                        <div class="column-modal-content">
                            <div class="column-modal-header">
                                <button class="column-modal-close" onclick="closeColumnModal()">&times;</button>
                            </div>
                            <div class="column-modal-body" id="columnModalBody">
                                <!-- Content will be populated by JavaScript -->
                            </div>
                        </div>
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
                            <span>실버케어 마케팅</span>
                        </div>
                        <p>실버산업 전문 마케팅으로 더 많은 고객과 만나보세요.</p>
                    </div>
                    <div class="footer-contact">
                        <h4>연락처</h4>
                        <p><i class="fas fa-phone"></i> 1588-0000</p>
                        <p><i class="fas fa-envelope"></i> info@silvercare-marketing.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 실버케어 마케팅. All rights reserved.</p>
                </div>
            </div>
        </footer>

        <!-- Scroll to Top Button -->
        <button class="scroll-to-top" id="scrollToTop" onclick="scrollToTop()">
            <i class="fas fa-chevron-up"></i>
        </button>

        <!-- Scripts -->
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// API route for contact form
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, phone, company, message } = body

    // In a real application, you would save this to a database or send an email
    console.log('Contact form submission:', { name, phone, company, message })
    
    return c.json({ 
      success: true, 
      message: '상담 신청이 접수되었습니다. 곧 연락드리겠습니다.' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: '오류가 발생했습니다. 다시 시도해주세요.' 
    }, 500)
  }
})

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>실버산업 마케팅 전문가 - 요양원부터 방문요양까지</title>
        <meta name="description" content="실버산업 전문 마케팅 대행 서비스. 방문요양, 요양원 마케팅으로 신규 고객을 창출하세요.">
        <meta name="theme-color" content="#3182f6">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Styles -->
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body>
        <!-- Header -->
        <header class="header" id="header">
            <div class="header-container">
                <div class="logo-section">
                    <div class="logo" onclick="window.location.href='/'">
                        <i class="fas fa-heartbeat"></i>
                        <span class="logo-text">실버케어 마케팅</span>
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
                            아무에게나 맡기지 마세요.<br>
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
                        <p class="services-intro">
                            검색 시 가장 먼저 보이는 블로그 상위 노출, 신뢰를 쌓는 유튜브 채널 활성화, 
                            그리고 높아진 브랜드 인지도는 자연스럽게 상담 문의 증가로 이어집니다.
                        </p>
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
                                        <span class="rank">1위</span>
                                        <span class="platform">블로그 1페이지</span>
                                    </div>
                                    <div class="achievement-item">
                                        <span class="rank">1위</span>
                                        <span class="platform">플레이스</span>
                                    </div>
                                </div>
                                <p class="highlight-text">
                                    <strong>대표님의 센터도 지역 최고의 키워드를 선점할 수 있습니다.</strong>
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
                        <p class="section-subtitle">모든 질문에 답해드립니다. 마케팅 효과부터 진행 과정까지, 모든 것을 투명하게 공개합니다.</p>
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
                        <p class="section-subtitle">더 깊이 있는 정보가 필요하시다면 실전 경험으로 채운 저희의 전문 칼럼을 확인해 보세요.</p>
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
                            <span>실버케어 마케팅</span>
                        </div>
                        <p>실버산업 전문 마케팅으로 더 많은 고객과 만나보세요.</p>
                    </div>
                    <div class="footer-contact">
                        <h4>연락처</h4>
                        <p><i class="fas fa-phone"></i> 1588-0000</p>
                        <p><i class="fas fa-envelope"></i> info@silvercare-marketing.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 실버케어 마케팅. All rights reserved.</p>
                </div>
            </div>
        </footer>

        <!-- Scroll to Top Button -->
        <button class="scroll-to-top" id="scrollToTop" onclick="scrollToTop()">
            <i class="fas fa-chevron-up"></i>
        </button>

        <!-- Scripts -->
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app