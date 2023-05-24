
import { useEffect, useState } from "react";
import { importCss, importJs } from "../../common/util";
import MainFooterMo from "./MainFooterMo";
import MainHeaderPc from "./MainHeaderMo";

const MainHomeMo = () => {

    const loadSwiperJs = () => {
        importJs('common-mo-js', '/resources/js/common_mo.js');
    }

    useEffect(() => {
        // 파일 로드
        importCss('swiper-bundle', '/resources/css/swiper-bundle.min.css');
        importJs('swiper-bundle-min', '/resources/js/swiper-bundle.min.js');
        new Promise((r) => setTimeout(loadSwiperJs, 100));

        return () => {
            // 페이지 나갈때 파일 제거
            importCss('swiper-bundle', '');
            importJs('swiper-bundle-min', '');
            importJs('common-mo-js', '');
        }
    }, []);

    return (  
    <div className="wrapper main" id="wrapper">
        <MainHeaderPc selectedGnbIndex={0} popVisible={false} />
        <main className="container">
            <div className="contents" id="contents">
                <section className="sec1">
                    <div className="swiper sec1_mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_01">
                                    <h2 className="sec-title">
                                        <img src="/resources/images/main_logo_txt_wt.png" alt="유버스 로고 이미지" /><br />
                                        우리 학교의 <br />첫 메타버스 공간
                                    </h2>
                                    <p className="sec-desc">국내 유일의 학교 전용 메타버스 플랫폼과 <br className="br_360_block"/>시작하세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_02">
                                    <h2 className="sec-title">
                                        <img src="/resources/images/main_logo_txt_wt.png" alt="유버스 로고 이미지" /><br />
                                        우리 학교의 <br />첫 메타버스 공간
                                    </h2>
                                    <p className="sec-desc">국내 유일의 학교 전용 메타버스 플랫폼과 <br className="br_360_block"/>시작하세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_03">
                                    <h2 className="sec-title">
                                        <img src="/resources/images/main_logo_txt_wt.png" alt="유버스 로고 이미지" /><br />
                                        우리 학교의 <br />첫 메타버스 공간
                                    </h2>
                                    <p className="sec-desc">국내 유일의 학교 전용 메타버스 플랫폼과 <br className="br_360_block"/>시작하세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_04">
                                    <h2 className="sec-title">
                                        <img src="/resources/images/main_logo_txt_wt.png" alt="유버스 로고 이미지" /><br />
                                        우리 학교의 <br />첫 메타버스 공간
                                    </h2>
                                    <p className="sec-desc">국내 유일의 학교 전용 메타버스 플랫폼과 시작하세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_05">
                                    <h2 className="sec-title">
                                        <img src="/resources/images/main_logo_txt_wt.png" alt="유버스 로고 이미지" /><br />
                                        우리 학교의 <br />첫 메타버스 공간
                                    </h2>
                                    <p className="sec-desc">국내 유일의 학교 전용 메타버스 플랫폼과 시작하세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="sec2">
                    <div className="sec-text">
                        <img src="/resources/images/main_logo_wt.png" alt="유버스 로고 이미지" />
                        <h3 className="sec-title">우리 학교만을 위한<br />메타버스 플랫폼 </h3>
                        <p className="sec-desc">
                            개인을 위한 메타버스 서비스는 많지만 <br className="br_360_none"/>
                            학교 전용 <br className="br_360_block"/>
                            메타버스 서비스가 없어서 시도하기 막막하셨죠?<br />
                            Uverse는 학생, 교사, 학부모에 <br className="br_360_block"/>
                            꼭 필요한 기능만을 모아<br className="br_360_none"/>
                            우리 학교만의 <br className="br_360_block"/>
                            메타버스 공간을 만들어 드리는 플랫폼입니다.
                        </p>
                    </div>
                </section>
                <section className="sec3">
                    <div className="sec-text">
                        <span className="sec-grad">HOME</span>
                        <h3 className="sec-title">
                            <img src="/resources/images/main_logo_bk.png" alt="유버스 로고 이미지" />
                            의 <br />주요 서비스를 확인하세요
                        </h3>
                        <p className="sec-desc">
                            <span>안전하게 우리 학교 학생만 접속할 수 있어요</span><br />
                            인증 받은 우리 학교 학생만 <br className="br_360_block"/>
                            따로 앱 설치할 없이 전용 웹페이지로<br />
                            언제 어디서나 쉽게 접속할 수 있어요.
                        </p>
                    </div>
                    <img className="sec3_img" src="/resources/images/campus_sec3_01.png" alt="유버스 로고 이미지" />
                </section>
                <section className="sec4">
                    <div className="sec-text">
                        <h3 className="sec-title">우리 대학만의 메타버스 <br />캠퍼스를 즐길 수 있어요</h3>
                        <p className="sec-desc">
                            학교 건물과 똑같아서 더욱 실감나는 <br className="br_360_block"/>
                            메타버스 캠퍼스에서 <br className="br_360_none"/>
                            강의는 물론 도서관, <br className="br_360_block"/>
                            입학/취업박람회, 상담, 홍보관, 동아리 모임까지 <br />
                            지속적으로 사용할 수 있는 학교 특화기능을 통해 <br />
                            또하나의 캠퍼스 라이프를 즐겨보세요.
                        </p>
                        <button type="button" className="SecBtn">UVERSE 캠퍼스 바로가기</button>
                    </div>
                    <div className="swiper sec4_mySwiper">
                        <div className="swiper-wrapper sec4_swiper_inner">
                            <div className="swiper-slide">
                                <div className="sec4_swiper_con_01">
                                    <img src="/resources/images/main_sec4_01.jpg" alt="상담실 이미지" />  
                                    <span className="sec4_swiper_con_text">상담실</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec4_swiper_con_02">
                                    <img src="/resources/images/main_sec4_02.jpg" alt="도서관, 스터디윗미 이미지" />  
                                    <span className="sec4_swiper_con_text">도서관, 스터디윗미</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec4_swiper_con_03">
                                    <img src="/resources/images/main_sec4_03.jpg" alt="홍보관 이미지" />  
                                    <span className="sec4_swiper_con_text">홍보관</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec4_swiper_con_04">
                                    <img src="/resources/images/main_sec4_04.jpg" alt="동아리/과방 이미지" />  
                                    <span className="sec4_swiper_con_text">동아리/과방</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec4_swiper_con_05">
                                    <img src="/resources/images/main_sec4_05.jpg" alt="온라인 강의(특강, 입학/취업박람회) 이미지" />  
                                    <span className="sec4_swiper_con_text">온라인 강의(특강, 입학/취업박람회)</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="sec5 sec4">
                <div className="sec-text">
                        <h3 className="sec-title">초등학교부터 고등학교까지 <br /> 메타버스 스쿨에서 </h3>
                        <p className="sec-desc">
                            공부도 하고 친구도 만날 수 있어요 <br />
                            온라인 수업이 필요할 땐 언제 어디서나 <br className="br_360_block"/>
                            메타버스 스쿨로 등교할 수 있어요.<br />
                            나만의 아바타로 수업을 듣고 친구들과 스터디하면<br />
                            학습 몰입도와 참여율이 높아져요. 
                        </p>
                        <button type="button" className="SecBtn">UVERSE 스쿨 바로가기</button>
                    </div>
                    <div className="swiper sec4_mySwiper">
                        <div className="swiper-wrapper sec5_swiper_inner">
                            <div className="swiper-slide">
                                <div className="sec5_swiper_con_01">
                                    <img src="/resources/images/main_sec5_01.jpg" alt="도서관, 스터디윗미 이미지" />  
                                    <span className="sec4_swiper_con_text">도서관, 스터디윗미</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec5_swiper_con_02">
                                    <img src="/resources/images/main_sec5_02.jpg" alt="홍보관 이미지" />  
                                    <span className="sec4_swiper_con_text">홍보관</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec5_swiper_con_03">
                                    <img src="/resources/images/main_sec5_03.jpg" alt="대강당 이미지" />  
                                    <span className="sec4_swiper_con_text">대강당</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec5_swiper_con_04">
                                    <img src="/resources/images/main_sec5_04.jpg" alt="교실 이미지" />  
                                    <span className="sec4_swiper_con_text">교실</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec5_swiper_con_05">
                                    <img src="/resources/images/main_sec5_05.jpg" alt="상담실 이미지" />  
                                    <span className="sec4_swiper_con_text">상담실</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="sec6">
                    <div className="sec6_content">
                        <div className="sec-text">
                            <span className="sec-grad">COMMUNITY</span>
                            <h3 className="sec-title">친구들과 <br className="br_360_block"/>소통할 수 있어요</h3>
                            <p className="sec-desc">
                                마이룸을 만들어 친구들을 초대해 이야기할 수 있고,<br />
                                메타버스 캠퍼스나 스쿨에 가입한 다른 학교 친구와<br />
                                만날 수도 있어요.
                            </p>
                        </div>
                        <img src="/resources/images/main_sec6_01.png" alt="친구들과 소통할 수 있어요 이미지" />
                    </div>
                    <ul className="sec6_menu">
                        <li><p>가입 문의</p><button type="button" className="sec6_menu_btn">문의하기</button></li>
                        <li><p>제휴 문의</p><button type="button" className="sec6_menu_btn">문의하기</button></li>
                        <li><p>자주하는 질문/1:1문의</p><button type="button" className="sec6_menu_btn">바로가기</button></li>
                    </ul>
                </section>

                <MainFooterMo />

            </div>
        </main>
    </div>
    )
}

export default MainHomeMo;