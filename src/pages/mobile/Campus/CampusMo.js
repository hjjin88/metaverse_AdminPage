import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { importCss, importJs } from "../../../common/util";
import MainFooterMo from "../MainFooterMo";
import MainHeaderMo from "../MainHeaderMo";

const CampusMo = () => {
    
    const loadSwiperJs = () => {
        importJs('common-mo-js', '/resources/js/campus_mo.js');
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
    <div className="wrapper uverse_wrap" id="wrapper">
        <MainHeaderMo selectedGnbIndex={2} />
        <main className="container">         
            <div className="modal_back"></div>
            <div className="contents" id="contents">       
                <section className="sec1">
                    <div className="swiper sec1_mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_01">
                                    <h3 className="sec-title">
                                        국내 유일 대학 전용<br />메타버스 플랫폼<br />
                                        <img src="/resources/images/campus_main_logo_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                                    </h3>
                                    <p className="sec-desc">시공간 제약 없는 메타버스로 <br/>언제 어디서나 낭만적인 캠퍼스 생활을 즐겨 보세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_02">
                                    <h3 className="sec-title">
                                        국내 유일 대학 전용<br />메타버스 플랫폼<br />
                                        <img src="../resources/images/campus_main_logo_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                                    </h3>
                                    <p className="sec-desc">시공간 제약 없는 메타버스로 <br/>언제 어디서나 낭만적인 캠퍼스 생활을 즐겨 보세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sec1_con sec1_swiper_01">
                                    <h3 className="sec-title">
                                        국내 유일 대학 전용<br />메타버스 플랫폼<br />
                                        <img src="../resources/images/campus_main_logo_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                                    </h3>
                                    <p className="sec-desc">시공간 제약 없는 메타버스로 <br/>언제 어디서나 낭만적인 캠퍼스 생활을 즐겨 보세요.</p>
                                    <button type="button" className="SecBtn">체험하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="sec2">
                    <p className="pink_gra_text">UVERSE 여야 하는 이유</p>
                    <h4 className="sec-title">
                        왜 <img src="../resources/images/main_logo_bk.png" alt="유버스 로고 이미지" />
                        를<br className="br_360_block"/>선택해야 할까요?
                    </h4>
                    <div className="sec2_img_01"></div>
                    <ul className="sec2_con">
                        <li>
                            <img className="sec2_con_img" src="../resources/images/campus_sec2_02.png" alt="실제 학교 건물과 똑같은 캠퍼스 이미지" />
                            <dl>
                                <dt className="con_title">실제 학교 건물과 <br className="br_360_none"/>똑같은 캠퍼스</dt>
                                <dd className="con_text">
                                    실제 학교에 있는 듯 똑같은 건물에서<br /> 
                                    수업을 듣고, 우리 학교에만 있는공간 그대로
                                    이용할 수 있어요.
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img className="sec2_con_img" src="../resources/images/campus_sec2_03.png" alt="인증 받은 우리 학교 학생만 이용 이미지" />
                            <dl>
                                <dt className="con_title">인증 받은 <br className="br_360_none"/>우리 학교 학생만 이용</dt>
                                <dd className="con_text">
                                    학교 이메일 주소로 인증 받은 우리 학교
                                    학생만 이용할 수 있어 안전해요.
                                    다른 학교 학생은 학교에서 설정한 공간만<br /> 
                                    들어올 수 있어요.
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img className="sec2_con_img" src="../resources/images/campus_sec2_04.png" alt="우리 학교 전용 웹페이지로 접속 이미지" />
                            <dl>
                                <dt className="con_title">우리 학교 전용 <br className="br_360_none"/>웹페이지로 접속</dt>
                                <dd className="con_text">
                                    따로 앱 설치할 필요없이 <br className="br_360_none"/>
                                    우리 학교 전용<br className="br_360_block"/> 
                                    웹페이지로 <br className="br_360_none"/>
                                    접속할 수 있어 편리해요.
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img className="sec2_con_img" src="../resources/images/campus_sec2_05.png" alt="우리 학교 맞춤 기능 이용 이미지" />
                            <dl>
                                <dt className="con_title">우리 학교 <br className="br_360_none"/>맞춤 기능 이용</dt>
                                <dd className="con_text">
                                    우리 학교 커리큘럼에 맞는 <br className="br_360_none"/>
                                    기능을<br className="br_360_block"/>
                                    전문가가 직접 <br className="br_360_none"/>
                                    만들어줘요.
                                </dd>
                            </dl>
                        </li>
                    </ul>
                    <img className="sec2_img_06" src="../resources/images/campus_sec2_06.png" alt="왜 UVERSE를 선택해야 할까요? 이미지" />
                </section>
                <section className="sec3">
                    <div className="sec3_con">
                        <div className="con_inner_01">
                            <span className="pink_gra_text">누가 이용하나요?</span>
                            <dl>
                                <dt className="con_title">인증 받은 우리 학교 학생</dt>
                                <dd className="con_text">
                                    우리 학교 건물 하나 하나 그대로 메타버스 공간에서 <br className="br_360_block"/>
                                    만나보세요. <br className="br_360_none"/>오직 학교가 인증한 학생만 <br className="br_360_block"/>
                                    따로 앱 설치할 필요없이 <br className="br_360_none"/>
                                    전용 웹페이지로 <br className="br_360_block"/>
                                    언제 어디서나 쉽게 접속할 수 있어요.
                                </dd>
                            </dl>
                        </div>
                        <img className="sec3_img_01" src="../resources/images/campus_sec3_01.png" alt="인증 받은 우리 학교 학생 이미지" />
                    </div>
                    <div className="sec3_con">
                        <div className="con_inner_02">
                            <span className="pink_gra_text">누가 이용하나요?</span>
                            <dl>
                                <dt className="con_title">우리 학교 예비 입학생과<br />입학 희망 고등학생</dt>
                                <dd className="con_text">
                                    우리 학교 입학을 희망하는 <br className="br_360_block"/>
                                    전국 수험생 누구나 캠퍼스에 초대할 수 있어요.<br/>
                                    친절하게 학교 구석구석을 안내할 <br className="br_360_block"/>
                                    가상 캐릭터도 설정할 수 있어요.
                                </dd>
                            </dl>
                        </div>
                        <img className="sec3_img_02" src="../resources/images/campus_sec3_02.png" alt="우리 학교 예비 입학생과 입학 희망 고등학생 이미지" />
                    </div>
                </section>
                <section className="sec4">
                    <p className="pink_gra_text">주요 기능</p>
                    <h4 className="sec-title">이렇게 이용하세요</h4>
                    <div className="sec4_con">
                        <ul className="swiper_btn">
                            <li className="active ">대강당</li>
                            <li>강의실</li>
                            <li>도서관</li>
                            <li>입학/취업 박람회</li>
                            <li>상담실</li>
                            <li>전시/홍보관</li>
                            <li>커뮤니티룸</li>
                            <li>각종 행사 툴</li>
                            <li>게시판</li>
                            <li>학교 간 교류</li>
                        </ul>
                    </div>
                    <div className="swiper-container sec4_mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img className="sec4_img" src="../resources/images/campus_sec4_01.png" alt="전교생을 대상으로 강연을 열어요 이미지" />
                                <dl>
                                    <dt className="con_title">전교생을 대상으로 강연을 열어요</dt>
                                    <dd className="con_text">
                                        대강당에는 인원 제한 없이 동시에 접속할 수 있어요.<br/>
                                        강연자 아바타가 무대에서 문서와 동영상을 공유하며<br className="br_360_block" /> 
                                        발표하고,<br className="br_360_none" />
                                        참석자 아바타는 객석에 앉아 음성이나<br className="br_360_block" /> 
                                        텍스트로 질문할 수 있어요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide preparing">
                                <img className="sec4_img" src="../resources/images/campus_sec4_02.svg" alt="내 아바타로 강의에 참여해요 이미지" />
                                <dl>
                                    <dt className="con_title">내 아바타로 강의에 참여해요</dt>
                                    <dd className="con_text">
                                        교수님 아바타가 가상 칠판 앞에서<br className="br_360_none" />
                                        문서와 동영상으로 <br className="br_360_block" />
                                        강의하고, 학생 아바타가 교수님께 질문해요.<br />
                                        교수님, 학생 모두 전세계 어디서나 접속할 수 있어요
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide">
                                <img className="sec4_img" src="../resources/images/campus_sec4_03.png" alt="'스터디윗미'로 집중력도 학점도 높여요 이미지" />
                                <dl>
                                    <dt className="con_title">'스터디윗미'로 집중력도 학점도 높여요</dt>
                                    <dd className="con_text">
                                        실제 캠스터디처럼 친구들과 모여 스터디 목표와 <br className="br_360_block" />
                                        시간을 설정하고, <br className="br_360_none" />
                                        공부하는 모습을 캠으로 공유하니까 <br className="br_360_block" />
                                        동기부여가 돼요. <br className="br_360_none" />
                                        혼자 공부할 땐 백색소음과 <br className="br_360_block" />
                                        ASMR을 들으며 더 집중할 수 있어요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide preparing">
                                <img className="sec4_img" src="../resources/images/campus_sec4_04.svg" alt="필요할 때 언제든지 박람회를 열어요 이미지" />
                                <dl>
                                    <dt className="con_title">필요할 때 언제든지 박람회를 열어요</dt>
                                    <dd className="con_text">
                                        대관 부담없이 필요할 때마다 입학/취업 박람회를 <br className="br_360_block" />
                                        개최할 수 있어요. <br className="br_360_none" />
                                        무대 위에서 전문가가 강연을 <br className="br_360_block" />
                                        진행하는 건을, <br className="br_360_none" />
                                        별도의 공간에서 전문가에게 <br className="br_360_block" />
                                        일대일로 상담 받을 수 있어요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide">
                                <img className="sec4_img" src="../resources/images/campus_sec4_05.png" alt="일대일로 고민 상담을 해요 이미지" />
                                <dl>
                                    <dt className="con_title">일대일로 고민 상담을 해요</dt>
                                    <dd className="con_text">
                                        교내 상담 선생님, 교수님 등이 <br className="br_360_none" />
                                        비밀 상담실을 <br className="br_360_block" />
                                        개설하고 학생을 초대할 수 있어요.<br />
                                        익명성이 필요할 땐 별도의 닉네임으로도 <br className="br_360_block" />
                                        입장 가능해요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide">
                                <img className="sec4_img" src="../resources/images/campus_sec4_06.png" alt="학생들의 작품을 관람해요 이미지" />
                                <dl>
                                    <dt className="con_title">학생들의 작품을 관람해요</dt>
                                    <dd className="con_text">
                                        실제 전시관 같은 공간에 각 학과 학생들의 <br className="br_360_block" />
                                        작품이나 학교 홍보물을 <br className="br_360_none" />
                                        전시할 수 있어요. <br className="br_360_block" />
                                        도슨트 캐릭터도 설정할 수 있고, <br className="br_360_none" />
                                        관람객은 <br className="br_360_block" />
                                        전시 담당자와 소통할 수도 있어요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide">
                                <img className="sec4_img" src="../resources/images/campus_sec4_07.png" alt="과방, 동아리방을 만들어요 이미지" />
                                <dl>
                                    <dt className="con_title">과방, 동아리방을 만들어요</dt>
                                    <dd className="con_text">
                                        과와 동아리 별로 커뮤니티룸을 만들고 <br className="br_360_block" />
                                        친구들을 초대해 <br className="br_360_none" />
                                        영상으로 대화하고, 방명록과 <br className="br_360_block" />
                                        사진첩을 이용할 수도 있어요. <br className="br_360_none" />
                                        시간 제약 없이 <br className="br_360_block" />
                                        24시간 언제나 자유롭게 모일 수 있어요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide">
                                <img className="sec4_img" src="../resources/images/campus_sec4_08.png" alt="다양한 행사를 진행해요 이미지" />
                                <dl>
                                    <dt className="con_title">다양한 행사를 진행해요</dt>
                                    <dd className="con_text">
                                        총학생회 선거, 신입생 환영식, 대학 축제 등 <br className="br_360_block" />
                                        다양한 행사를 진행할 수 있어요. <br className="br_360_none" />
                                        각종 현수막, 영상을 <br className="br_360_block" />
                                        학교 곳곳에 게시할 수 있고, <br className="br_360_none" />
                                        축제 기간에는 캐릭터들이 <br className="br_360_block" />
                                        학교를 돌면서 퍼레이드도 해요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide preparing">
                                <img className="sec4_img" src="../resources/images/campus_sec4_09.svg" alt="학교 소식, 취업 정보 등을 공유해요 이미지" />
                                <dl>
                                    <dt className="con_title">학교 소식, 취업 정보 등을 공유해요</dt>
                                    <dd className="con_text">
                                        실제 게시판처럼 학교 관계자, 학생이 직접 <br className="br_360_block" />
                                        학교/학과/동아리 공지사항, <br className="br_360_none" />
                                        취업 정보등을 <br className="br_360_block" />
                                        업데이트 해요. 기업 광고 공간으로 활용해<br />
                                        UVERSE 월 이용요금 부담을 줄일 수도 있어요.
                                    </dd>
                                </dl>
                            </div>
                            <div className="swiper-slide preparing">
                                <img className="sec4_img" src="../resources/images/campus_sec4_10.svg" alt="다른 학교 학생과 친구가 돼요 이미지" />
                                <dl>
                                    <dt className="con_title">다른 학교 학생과 친구가 돼요</dt>
                                    <dd className="con_text">
                                        UVERSE를 이용 중인 다른 학교 학생들과<br />
                                        한 공간에 모여 채팅을 하며 소통할 수 있어요.<br />
                                        공모전/취업 정보를 나누며 친목을 다져보세요.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="sec4_swiper_mo">
                    <p className="pink_gra_text">주요 기능</p>
                    <h4 className="sec-title">이렇게 이용하세요</h4>
                    <div className="swiper-container gallery-thumbs">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>대강당</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>강의실</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>도서관</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>입학/취업 박람회</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>상담실</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>전시/홍보관</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>커뮤니티룸</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>각종 행사 툴</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>게시판</button></li>
                            <li className="swiper-slide"><button className="swiper-slide-container" disabled>학교 간 교류</button></li>
                        </ul>
                    </div>
                    <div className="swiper-container gallery-top">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_01.png" alt="전교생을 대상으로 강연을 열어요 이미지" />
                                    <dl>
                                        <dt className="con_title">전교생을 대상으로 강연을 열어요</dt>
                                        <dd className="con_text">
                                            대강당에는 인원 제한 없이 동시에 접속할 수 있어요.<br />
                                            강연자 아바타가 무대에서 문서와 동영상을 공유하며<br className="br_360_block" /> 
                                            발표하고,<br className="br_360_none" />
                                            참석자 아바타는 객석에 앉아 음성이나<br className="br_360_block" /> 
                                            텍스트로 질문할 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide preparing">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_02.png" alt="내 아바타로 강의에 참여해요 이미지" />
                                    <dl>
                                        <dt className="con_title">내 아바타로 강의에 참여해요</dt>
                                        <dd className="con_text">
                                            교수님 아바타가 가상 칠판 앞에서<br className="br_360_none" />
                                            문서와 동영상으로 <br className="br_360_block" />
                                            강의하고, 학생 아바타가 교수님께 질문해요.<br />
                                            교수님, 학생 모두 전세계 어디서나 접속할 수 있어요
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_03.png" alt="'스터디윗미'로 집중력도 학점도 높여요 이미지" />
                                    <dl>
                                        <dt className="con_title">'스터디윗미'로 집중력도 학점도 높여요</dt>
                                        <dd className="con_text">
                                            실제 캠스터디처럼 친구들과 모여 스터디 목표와 <br className="br_360_block" />
                                            시간을 설정하고, <br className="br_360_none" />
                                            공부하는 모습을 캠으로 공유하니까 <br className="br_360_block" />
                                            동기부여가 돼요. <br className="br_360_none" />
                                            혼자 공부할 땐 백색소음과 <br className="br_360_block" />
                                            ASMR을 들으며 더 집중할 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide preparing">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_02.png" alt="필요할 때 언제든지 박람회를 열어요 이미지" />
                                    <dl>
                                        <dt className="con_title">필요할 때 언제든지 박람회를 열어요</dt>
                                        <dd className="con_text">
                                            대관 부담없이 필요할 때마다 입학/취업 박람회를 <br className="br_360_block" />
                                            개최할 수 있어요. <br className="br_360_none" />
                                            무대 위에서 전문가가 강연을 <br className="br_360_block" />
                                            진행하는 건을, <br className="br_360_none" />
                                            별도의 공간에서 전문가에게 <br className="br_360_block" />
                                            일대일로 상담 받을 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_05.png" alt="일대일로 고민 상담을 해요 이미지" />
                                    <dl>
                                        <dt className="con_title">일대일로 고민 상담을 해요</dt>
                                        <dd className="con_text">
                                            교내 상담 선생님, 교수님 등이 <br className="br_360_none" />
                                            비밀 상담실을 <br className="br_360_block" />
                                            개설하고 학생을 초대할 수 있어요.<br />
                                            익명성이 필요할 땐 별도의 닉네임으로도 <br className="br_360_block" />
                                            입장 가능해요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_06.png" alt="학생들의 작품을 관람해요 이미지" />
                                    <dl>
                                        <dt className="con_title">학생들의 작품을 관람해요</dt>
                                        <dd className="con_text">
                                            실제 전시관 같은 공간에 각 학과 학생들의 <br className="br_360_block" />
                                            작품이나 학교 홍보물을 <br className="br_360_none" />
                                            전시할 수 있어요. <br className="br_360_block" />
                                            도슨트 캐릭터도 설정할 수 있고, <br className="br_360_none" />
                                            관람객은 <br className="br_360_block" />전시 담당자와 소통할 수도 있어요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_07.png" alt="과방, 동아리방을 만들어요 이미지" />
                                    <dl>
                                        <dt className="con_title">과방, 동아리방을 만들어요</dt>
                                        <dd className="con_text">
                                            과와 동아리 별로 커뮤니티룸을 만들고 <br className="br_360_block" />
                                            친구들을 초대해 <br className="br_360_none" />
                                            영상으로 대화하고, 방명록과 <br className="br_360_block" />
                                            사진첩을 이용할 수도 있어요. <br className="br_360_none" />
                                            시간 제약 없이 <br className="br_360_block" />
                                            24시간 언제나 자유롭게 모일 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_08.png" alt="다양한 행사를 진행해요 이미지" />
                                    <dl>
                                        <dt className="con_title">다양한 행사를 진행해요</dt>
                                        <dd className="con_text">
                                            총학생회 선거, 신입생 환영식, 대학 축제 등 <br className="br_360_block" />
                                            다양한 행사를 진행할 수 있어요. <br className="br_360_none" />
                                            각종 현수막, 영상을 <br className="br_360_block" />
                                            학교 곳곳에 게시할 수 있고, <br className="br_360_none" />
                                            축제 기간에는 캐릭터들이 <br className="br_360_block" />
                                            학교를 돌면서 퍼레이드도 해요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide preparing">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_02.png" alt="학교 소식, 취업 정보 등을 공유해요 이미지" />
                                    <dl>
                                        <dt className="con_title">학교 소식, 취업 정보 등을 공유해요</dt>
                                        <dd className="con_text">
                                            실제 게시판처럼 학교 관계자, 학생이 직접 <br className="br_360_block" />
                                            학교/학과/동아리 공지사항, <br className="br_360_none" />
                                            취업 정보등을 <br className="br_360_block" />
                                            업데이트 해요. 기업 광고 공간으로 활용해<br />
                                            UVERSE 월 이용요금 부담을 줄일 수도 있어요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="swiper-slide preparing">
                                <div className="swiper-slide-container">
                                    <img className="sec4_img" src="../resources/images/campus_sec4_02.png" alt="학교 소식, 취업 정보 등을 공유해요 이미지" />
                                    <dl>
                                        <dt className="con_title">다른 학교 학생과 친구가 돼요</dt>
                                        <dd className="con_text">
                                            UVERSE를 이용 중인 다른 학교 학생들과<br />
                                            한 공간에 모여 채팅을 하며 소통할 수 있어요.<br />
                                            공모전/취업 정보를 나누며 친목을 다져보세요.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="sec5">
                    <div className="sec5_con">
                        <button type="button" className="con_inner_01">
                            자주하는 질문/1:1문의
                            <Link to="/" className="view_btn">바로 가기</Link>
                        </button>
                        <button type="button" className="con_inner_02">
                            가입 문의
                            <Link to="/" className="view_btn">바로 가기</Link>
                        </button>
                        <button type="button" className="con_inner_03">
                            제휴 문의
                            <Link to="/" className="view_btn">바로 가기</Link>
                        </button>
                    </div>
                </section>
                <section className="sec6">
                    <h4 className="sec-title">
                        영상으로 
                        <img src="/resources/images/main_logo_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                        를 확인하세요
                    </h4>
                    <ul className="sec6_con">
                        <li>
                            <button type="button" onClick={() => window.open('https://youtu.be/FdgHhvWJOR8', '_blank')}>
                                <img src="/resources/images/uverse_sec6_01.png" alt="영상" />
                            </button>
                            <button type="button" onClick={() => window.open('https://youtu.be/FdgHhvWJOR8', '_blank')}>
                                <p className="con_title">[숙명여대 전용 메타버스 Snowverse2.0] <br/>중앙도서관 1-2층 둘러보기</p>
                                <p className="con_text">2023.02.20</p>
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => window.open('https://youtu.be/wG8oZF_32hM', '_blank')}>
                                <img src="/resources/images/uverse_sec6_02.png" alt="영상" />
                            </button>
                            <button type="button" onClick={() => window.open('https://youtu.be/wG8oZF_32hM', '_blank')}>
                                <p className="con_title">[숙명여대 전용 메타버스 Snowverse2.0] <br/>스터디룸의 모든 것</p>
                                <p className="con_text">2023.02.20</p>
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => window.open('https://youtu.be/kgNQ5YdVqe8', '_blank')}>
                                <img src="/resources/images/uverse_sec6_01.png" alt="영상" />
                            </button>
                            <button type="button" onClick={() => window.open('https://youtu.be/kgNQ5YdVqe8', '_blank')}>
                                <p className="con_title">[숙명여대 전용 메타버스 Snowverse2.0] <br/>중앙도서관으로 gogo~</p>
                                <p className="con_text">2023.02.20</p>
                            </button>
                        </li>
                    </ul>
                </section>
                <MainFooterMo />
            </div>
        </main>
    </div>
    ) 
}

export default CampusMo;