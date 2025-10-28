// Wait for DOM to be fully loaded - Updated 2025.10.28 - Mobile Cache Bust v2
console.log('App.js loaded - version 20251028-2');
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeScrollAnimations();
    initializeCounterAnimations();
    initializeContactForm();
    initializeMobileMenu();
    initializeHeaderScroll();
    initializeScrollToTop();
    initializeColumnModals();
    initializeTypewriter();
    initializeRankCountdown();
});

// Typewriter Animation
function initializeTypewriter() {
    const text = "아무에게나 맡기지 마세요.";
    const element = document.getElementById('typewriter-text');
    
    if (!element) return;
    
    let index = 0;
    let isDeleting = false;
    
    function typeWriter() {
        if (!isDeleting && index <= text.length) {
            element.textContent = text.slice(0, index);
            index++;
            setTimeout(typeWriter, 100);
        } else if (!isDeleting && index > text.length) {
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 2000);
        } else if (isDeleting && index >= 0) {
            element.textContent = text.slice(0, index);
            index--;
            setTimeout(typeWriter, 50);
        } else {
            isDeleting = false;
            index = 0;
            setTimeout(typeWriter, 500);
        }
    }
    
    typeWriter();
}

// Rank Countdown Animation (10위 → 1위)
function initializeRankCountdown() {
    const rankOptions = {
        threshold: 0.5
    };

    const rankObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rankElement = entry.target;
                const targetRank = parseInt(rankElement.getAttribute('data-target'));
                let currentRank = 10;
                
                // Clear any existing animation
                if (rankElement.rankAnimation) {
                    clearInterval(rankElement.rankAnimation);
                }

                const updateRank = () => {
                    if (currentRank > targetRank) {
                        rankElement.textContent = currentRank + '위';
                        currentRank--;
                    } else {
                        rankElement.textContent = targetRank + '위';
                        clearInterval(rankElement.rankAnimation);
                        rankElement.classList.add('rank-final');
                        
                        // 1위 달성 효과
                        setTimeout(() => {
                            rankElement.style.transform = 'scale(1.2)';
                            rankElement.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
                            setTimeout(() => {
                                rankElement.style.transform = 'scale(1)';
                            }, 500);
                        }, 100);
                    }
                };

                // 애니메이션 시작 (0.3초마다 랭크 감소)
                rankElement.rankAnimation = setInterval(updateRank, 300);
                
                // 옵저버에서 제거
                rankObserver.unobserve(rankElement);
            }
        });
    }, rankOptions);

    // 모든 랭크 요소 관찰
    document.querySelectorAll('.rank-counter').forEach(rank => {
        rankObserver.observe(rank);
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                // Remove the class when element goes out of view to allow re-animation
                entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Counter Animations
function initializeCounterAnimations() {
    const counterOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                // Clear any existing animation
                if (counter.animationFrame) {
                    cancelAnimationFrame(counter.animationFrame);
                }

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        counter.animationFrame = requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                        counter.animationFrame = null;
                    }
                };

                updateCounter();
            } else {
                // Reset counter when out of view to allow re-animation
                const counter = entry.target;
                if (counter.animationFrame) {
                    cancelAnimationFrame(counter.animationFrame);
                    counter.animationFrame = null;
                }
                counter.textContent = '0';
            }
        });
    }, counterOptions);

    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.form-submit-button');
        const originalButtonContent = submitButton.innerHTML;

        try {
            // Show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 처리중...';

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                company: formData.get('company'),
                message: formData.get('message')
            };

            // Send data to API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                // Show success message
                alert(result.message);
                contactForm.reset();
            } else {
                alert(result.message || '오류가 발생했습니다. 다시 시도해주세요.');
            }

        } catch (error) {
            console.error('Contact form error:', error);
            alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> 무료상담 신청하기';
        }
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuToggle || !mobileMenu) return;

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// Header Scroll Effect
function initializeHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Scroll to Top Button
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth Scroll to Sections
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Column Modals
function initializeColumnModals() {
    // Close modal when clicking outside
    const modal = document.getElementById('columnModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeColumnModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeColumnModal();
        }
    });
}

function openColumnModal(columnId) {
    const modal = document.getElementById('columnModal');
    const modalBody = document.getElementById('columnModalBody');
    
    if (!modal || !modalBody) return;

    // Column content data
    const columnData = {
        1: {
            title: '방문요양 키워드로 네이버 상위노출 달성하는 5단계 전략',
            category: 'SEO 마케팅',
            date: '2025.10.15',
            content: `
                <h3>1단계: 키워드 분석 및 선정</h3>
                <p>성공적인 SEO의 첫 번째 단계는 정확한 키워드 분석입니다. '지역명 + 방문요양' 형태의 키워드를 기본으로 하되, 실제 검색량과 경쟁도를 면밀히 분석해야 합니다.</p>
                
                <h4>핵심 키워드 유형</h4>
                <ul>
                    <li>메인 키워드: [지역명] 방문요양</li>
                    <li>롱테일 키워드: [지역명] 방문요양 센터, [지역명] 방문요양 서비스</li>
                    <li>의도별 키워드: [지역명] 방문요양 비용, [지역명] 방문요양 신청방법</li>
                </ul>

                <h3>2단계: 컨텐츠 최적화</h3>
                <p>선정된 키워드를 바탕으로 실제 사용자들이 원하는 정보를 제공하는 컨텐츠를 제작합니다. 단순한 키워드 노출보다는 사용자 의도에 맞는 가치 있는 정보 제공이 중요합니다.</p>

                <h3>3단계: 네이버 블로그 최적화</h3>
                <p>네이버 블로그는 여전히 강력한 SEO 도구입니다. 정기적인 포스팅과 함께 이미지, 동영상 등 다양한 미디어를 활용하여 사용자 체류시간을 늘려야 합니다.</p>

                <h3>4단계: 백링크 구축</h3>
                <p>관련 업계 사이트나 지역 커뮤니티와의 협력을 통해 자연스러운 백링크를 구축합니다. 품질 높은 백링크는 검색 순위 향상에 직접적인 영향을 미칩니다.</p>

                <h3>5단계: 지속적인 모니터링 및 개선</h3>
                <p>SEO는 일회성이 아닌 지속적인 과정입니다. 검색 순위 변화를 모니터링하고, 경쟁사 분석을 통해 전략을 지속적으로 개선해 나가야 합니다.</p>

                <blockquote>
                    "실제로 이 5단계 전략을 적용한 A센터의 경우, 3개월 만에 '○○시 방문요양' 키워드에서 네이버 1페이지 진입을 달성했으며, 상담 문의가 월 평균 250% 증가했습니다."
                </blockquote>
            `
        },
        2: {
            title: '요양원 유튜브 쇼츠로 월 상담 문의 300% 증가시킨 콘텐츠 전략',
            category: '유튜브 마케팅',
            date: '2025.10.12',
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
        },
        3: {
            title: '인스타그램과 스레드로 실버케어 브랜딩 완성하기',
            category: 'SNS 마케팅',
            date: '2025.10.08',
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
        },
        4: {
            title: '2026년 실버산업 마케팅 트렌드',
            category: '업계 트렌드',
            date: '2025.10.05',
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
        },
        5: {
            title: '요양보호사교육원 vs 방문요양 vs 요양원',
            category: '마케팅 전략',
            date: '2025.09.28',
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
        },
        6: {
            title: '지방 소도시 요양원이 6개월 만에 대기자 명단을 만든 비결',
            category: '케이스 스터디',
            date: '2025.07.20',
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
        }
    };

    const column = columnData[columnId];
    if (!column) return;

    modalBody.innerHTML = `
        <article class="modal-article">
            <h2>${column.title}</h2>
            <div class="modal-meta">
                <span class="modal-category">${column.category}</span>
                <span class="modal-date">
                    <i class="fas fa-calendar"></i>
                    ${column.date}
                </span>
            </div>
            <div class="modal-content">
                ${column.content}
            </div>
        </article>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeColumnModal() {
    const modal = document.getElementById('columnModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }
}

// FAQ Toggle Function
function toggleFAQ(questionElement) {
    const faqItem = questionElement.closest('.faq-item');
    const wasActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    if (wasActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
}