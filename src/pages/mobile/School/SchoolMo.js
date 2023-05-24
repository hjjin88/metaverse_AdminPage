
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { importCss, importJs } from "../../../common/util";
import MainFooterMo from "../MainFooterMo";
import MainHeaderMo from "../MainHeaderMo";

const SchoolMo = () => {

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
    <div className="wrapper school_wrap uverse_wrap" id="wrapper">
        <MainHeaderMo selectedGnbIndex={1} />
        <main className="container">         
                <div className="contents" id="contents">       
                    <section className="sec1">
                        <div className="swiper sec1_mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="sec1_con sec1_swiper_01">
                                        <h3 className="sec-title">
                                            국내 유일 초/중/고 전용 <br />
                                            메타버스 플랫폼 <br />
                                            <img src="/resources/images/school_logo_txt_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                                        </h3>
                                        <p className="sec-desc">
                                            학생 모두 자발적으로 참여하는 메타버스 스쿨로 <br />
                                            온라인에서도 적극적인 수업 분위기를 느껴 보세요.
                                        </p>
                                        {/* <button type="button" className="SecBtn">체험하기</button> */}
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sec1_con sec1_swiper_02">
                                        <h3 className="sec-title">
                                            국내 유일 초/중/고 전용 <br />
                                            메타버스 플랫폼 <br />
                                            <img src="/resources/images/school_logo_txt_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                                        </h3>
                                        <p className="sec-desc">
                                            학생 모두 자발적으로 참여하는 메타버스 스쿨로 <br />
                                            온라인에서도 적극적인 수업 분위기를 느껴 보세요.
                                        </p>
                                        {/* <button type="button" className="SecBtn">체험하기</button> */}
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sec1_con sec1_swiper_01">
                                        <h3 className="sec-title">
                                            국내 유일 초/중/고 전용 <br />
                                            메타버스 플랫폼 <br />
                                            <img src="/resources/images/school_logo_txt_wt.png" alt="유버스 캠퍼스 로고 이미지" />
                                        </h3>
                                        <p className="sec-desc">
                                            학생 모두 자발적으로 참여하는 메타버스 스쿨로 <br />
                                            온라인에서도 적극적인 수업 분위기를 느껴 보세요.
                                        </p>
                                        {/* <button type="button" className="SecBtn">체험하기</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </section>
                    <section className="sec2">
                        <p className="green_gra_text">UVERSE 여야 하는 이유</p>
                        <h4 className="sec-title">학교에 왜 메타버스가<br/>필요할까요?</h4>
                        <ul className="sec-text">
                            <li>온라인 원격 수업이 보편화되었지만 <br/>선생님과 학생 모두 긴 시간 집중하며 수업하기 힘들었어요.</li>
                            <li>우리 학교와 똑같이 생긴 메타버스 스쿨에 <br/>내 아바타로 등교하고 수업을 듣는다면? <br/>몰입도가 더 높아져서 학생들이 수업에 <br className="br_360_block"/>더 적극적으로 참여하게 돼요.</li>
                            <li>학생과 선생님은 물론 학부모까지 <br className="br_360_block"/>모두 함께 만들어 가는 <br className="br_360_none"/>우리 학교 메타버스 공간! <br className="br_360_block"/>UVERSE에서 시작하세요.</li>
                        </ul>
                        <div className="sec2_con_01">
                            <p className="sec2_con_01_desc">*학생 참여율 그래프</p>
                            <div className="sec2_img_01"></div>
                            <ul className="graph_texts">
                                <li className="graph_text_01">
                                    <p>오프라인 학교 생활</p> 
                                </li>
                                <li className="graph_text_02">
                                    <p>온라인 원격 수업</p> 
                                    <dl>
                                        <dt>Zoom을 통한 원격수업 진행</dt>
                                        <dd>· 선생님과 학생 간 활발한 소통에 대한 한계</dd>
                                        <dd>· 학생 관리에 대한 어려움</dd>
                                        <dd>· 학생 스스로 긴 시간 집중하기 힘듦</dd>
                                    </dl>
                                </li>
                                <li className="graph_text_03">
                                    <p>현실과 가상공간이 통합된 학교 메타버스</p> 
                                    <dl>
                                        <dt>한번 구축된 가상공간에 대한 지속성</dt>
                                        <dd>· 학생들에게 친숙한 메타버스 서비스</dd>
                                        <dd>· 실제 우리 학교와 똑같이 구현된 메타버스 스쿨</dd>
                                        <dd>· 학생들의 자발적인 학습 참여율 상승</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <p className="green_gra_text">UVERSE 여야 하는 이유</p>
                        <h4 className="sec-title">
                            왜 <img src="../resources/images/school_logo_bk.png" alt="유버스 로고 이미지" />
                            를<br />선택해야 할까요?
                        </h4>
                        <ul className="sec2_con">
                            <li className="con_inner_01">
                                <img className="sec2_con_img" src="../resources/images/school_sec2_01.png" alt="실제 학교와 똑같은 교실 이미지" />
                                <dl>
                                    <dt className="con_title">실제 학교와 똑같은 교실</dt>
                                    <dd className="con_text">
                                        실제 학교에 있는 듯 똑같은 교실에<br className="br_360_none"/>
                                        서 <br className="br_360_block"/>
                                        수업을 듣고, 대강당, 운동장, <br className="br_360_none"/>
                                        도서관 등도 <br className="br_360_block"/>
                                        이용할 수 있어요.
                                    </dd>
                                </dl>
                            </li>
                            <li className="con_inner_02">
                                <img className="sec2_con_img" src="../resources/images/school_sec2_02.png" alt="선생님이 학생들을 관리 이미지" />
                                <dl>
                                    <dt className="con_title">선생님이 학생들을 관리</dt>
                                    <dd className="con_text">
                                        학생들만의 단체톡 운영, 수업 외 메<br />
                                        신저 사용 금지 등 선생님의 관리자 <br />
                                        권한 부여
                                    </dd>
                                </dl>
                            </li>
                            <li className="con_inner_03">
                                <img className="sec2_con_img" src="../resources/images/school_sec2_03.png" alt="우리 학교 활동 공유 이미지" />
                                <dl>
                                    <dt className="con_title">우리 학교 활동 공유</dt>
                                    <dd className="con_text">
                                        등교하면 학생은 다른 메신저를 사용<br />
                                        할 수 없고, 선생님이 직접 관리하는 <br />
                                        채팅방에서 소통할 수 있어요.
                                    </dd>
                                </dl>
                            </li>
                            <li className="con_inner_04">
                                <img className="sec2_con_img" src="../resources/images/school_sec2_04.png" alt="활발한 학부모 참여 소통 이미지" />
                                <dl>
                                    <dt className="con_title">활발한 학부모 참여 소통</dt>
                                    <dd className="con_text">
                                        학부모님을 초대해 간담회를 진행할 <br className="br_360_none"/>
                                        수 <br className="br_360_block"/>
                                        있어요. 선생님과 학부모 상담이 <br className="br_360_none"/>
                                        필요할 땐 <br className="br_360_block"/>
                                        별도의 공간에서 만나 <br className="br_360_none"/>
                                        상담할 수 있어요.
                                    </dd>
                                </dl>
                            </li>
                            <li className="con_inner_05">
                                <img className="sec2_con_img" src="../resources/images/school_sec2_05.png" alt="우리 학교 맞춤 기능 이용 이미지" />
                                <dl>
                                    <dt className="con_title">우리 학교 맞춤 기능 이용</dt>
                                    <dd className="con_text">
                                        우리 학교 커리큘럼에 맞는 기능을 <br />
                                        전문가가 직접 만들어줘요.
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </section>
                    <section className="sec3">
                        <p className="green_gra_text">서비스 소개</p>
                        <h4 className="sec-title">어떤 점이 좋은가요?</h4>
                        <div className="sec3_con">
                            <dl>
                                <dt className="con_title">인증 받은 우리 학교 학생만 이용</dt>
                                <dd className="con_text">
                                    학교가 인증한 우리 학교 학생만 이용할 수 있고, <br />
                                    따로 앱 설치할 필요없이 <br className="br_360_block"/>
                                    전용 웹사이트로 언제 어디서나 쉽게 접속할 수 있어요.
                                </dd>
                            </dl>
                            <dl>
                                <dt className="con_title">선생님이 손쉽게 관리</dt>
                                <dd className="con_text">
                                    학생들의 수업 집중도를 높이고, <br className="br_360_block"/>
                                    선생님이 학생들을 쉽게 관리할 수 있도록 <br />
                                    선생님에게 관리자 권한을 부여해요.
                                </dd>
                            </dl>
                        </div>                         
                        <div className="sec3_img_01"></div>
                    </section>
                    <section className="sec4">
                        <p className="green_gra_text">서비스 소개</p>
                        <h4 className="sec-title">주요 기능</h4>
                        <div className="sec4_con">
                            <ul className="swiper_btn">
                                <li className="active">교실</li>
                                <li>수업</li>
                                <li>대강당</li>
                                <li>도서관</li>
                                <li>상담실</li>
                                <li>전시/홍보관</li>
                                <li>운동장</li>
                                <li>마이룸</li>
                                <li>커뮤니티룸</li>
                                <li>학교 간 교류('23년 중)</li>
                            </ul>
                        </div>
                        <div className="swiper-container sec4_mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_01.png" alt="다양한 수업 방식을 시도해요 이미지" />
                                    <dl>
                                        <dt className="con_title">다양한 수업 방식을 시도해요</dt>
                                        <dd className="con_text">
                                            줌, 웹엑스 등 기존에 이용하고 있는 온라인 수업 <br className="br_360_block"/>
                                            플랫폼은 물론, <br className="br_360_none"/>
                                            엑셀, PDF, PPT 등도 연동해서 <br className="br_360_block"/>
                                            사용할 수 있어요. <br className="br_360_none"/>
                                            앞으로도 수업을 진행할 <br className="br_360_block"/>
                                            다양한 방식이 업데이트 될 예정이에요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_02.png" alt="선생님이 학생들을 관리해요 이미지" />
                                    <dl>
                                        <dt className="con_title">선생님이 학생들을 관리해요</dt>
                                        <dd className="con_text">
                                            수업 참여를 위해 필요했던 메신저 대신 <br className="br_360_none"/>
                                            선생님이 <br className="br_360_block"/>
                                            직접 채팅방을 만들어 학생들의 관리할 수 있어요. <br/>
                                            수업에 참여하면 다른 메신저는 차단돼서 <br className="br_360_block"/>
                                            집중력이 올라가요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_03.png" alt="'다양한 행사를 진행해요 이미지" />
                                    <dl>
                                        <dt className="con_title">다양한 행사를 진행해요</dt>
                                        <dd className="con_text">
                                            대강당에는 300명 이상이 동시에 접속할 수 있어요. <br/>
                                            입학식이나 졸업식, 교장 선생님 월간 조례, 학부모 <br/>
                                            간담회 등 매년 학교에서 열리는 행사를 진행해 보세요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_04.png" alt="스터디윗미로 스스로 공부해요 이미지" />
                                    <dl>
                                        <dt className="con_title">'스터디윗미'로 스스로 공부해요</dt>
                                        <dd className="con_text">
                                            실제 캠스터디처럼 친구들과 모여 스터디 목표와 시간을<br />
                                            설정하고, 공부하는 모습을 캠으로 공유하니까 <br className="br_360_block"/>
                                            동기부여가 돼요. <br className="br_360_none"/>
                                            목표를 이루면 보상이 주어지니까 <br className="br_360_block"/>
                                            공부가 더 재밌어져요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_05.png" alt="일대일로 고민 상담을 해요 이미지" />
                                    <dl>
                                        <dt className="con_title">일대일로 고민 상담을 해요</dt>
                                        <dd className="con_text">
                                            교내 상담 선생님, 교수님 등이 비밀 상담실을 <br className="br_360_block"/>
                                            개설하고<br className="br_360_none"/>
                                            학생을 초대할 수 있어요. 익명성이 필요할 땐 <br className="br_360_block"/>
                                            별도의 닉네임으로도 <br className="br_360_none"/>
                                            입장 가능해요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_06.png" alt="학생들의 활동 사진과 작품을 관람해요 이미지" />
                                    <dl>
                                        <dt className="con_title">학생들의 활동 사진과 작품을 관람해요</dt>
                                        <dd className="con_text">
                                            실제 전시관 같은 공간에서 학생들의 활동 사진이나 <br/>
                                            작품, 학교 홍보물을 전시할 수 있어요. <br/>
                                            학부모들을 초청해서 다양한 행사 진행도 가능해요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_07.png" alt="비가 와도 체육대회를 진행해요 이미지" />
                                    <dl>
                                        <dt className="con_title">비가 와도 체육대회를 진행해요</dt>
                                        <dd className="con_text">
                                            체육대회 날 비가와도 걱정하지 마세요. <br/>
                                            전교생이 메타버스 운동장에 모여 OX 퀴즈, <br/>
                                            줄다리기 등 신나는 게임을 즐길 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_08.png" alt="내 아바타 룸에 친구를 초대해요 이미지" />
                                    <dl>
                                        <dt className="con_title">내 아바타 룸에 친구를 초대해요</dt>
                                        <dd className="con_text">
                                            UVERSE에서 공부하는 또 다른 나 '아바타'와 <br/>
                                            아바타의 방을 취향대로 꾸밀 수 있어요 <br/>
                                            친구들의 아바타 룸에도 방문하고 소통할 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide">
                                    <img className="sec4_img" src="../resources/images/school_sec4_09.png" alt="동아리방, 스터디 모임방을 만들어요 이미지" />
                                    <dl>
                                        <dt className="con_title">동아리방, 스터디 모임방을 만들어요</dt>
                                        <dd className="con_text">
                                            동아리나 스터디 모임의 커뮤니티룸을 만들고 <br className="br_360_block"/>
                                            친구들을 초대해 <br className="br_360_none"/>
                                            영상으로 대화하고, 방명록과 <br className="br_360_block"/>
                                            사진첩을 이용할 수도 있어요. <br className="br_360_none"/>
                                            시간 제약 없이 <br className="br_360_block"/>
                                            방과후 언제나 자유롭게 모일 수 있어요.
                                        </dd>
                                    </dl>
                                </div>
                                <div className="swiper-slide preparing">
                                    <img className="sec4_img" src="../resources/images/school_sec4_10.png" alt="다른 학교 학생과 친구가 돼요 이미지" />
                                    <dl>
                                        <dt className="con_title">다른 학교 학생과 친구가 돼요</dt>
                                        <dd className="con_text">
                                            UVERSE를 이용 중인 다른 학교 학생들과 <br/>
                                            한 공간에 모여 채팅을 통해 소통할 수 있어요. <br/>
                                            진로/진학 정보나 취미 관련 대화를 나눠보세요.
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
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>교실</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>수업</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>대강당</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>도서관</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>상담실</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>전시/홍보관</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>운동장</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>마이룸</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>커뮤니티룸</button></li>
                                <li className="swiper-slide"><button className="swiper-slide-container" disabled>학교 간 교류('23년 중)</button></li>
                            </ul>
                        </div>
                        <div className="swiper-container gallery-top">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_01.png" alt="다양한 수업 방식을 시도해요 이미지" />
                                        <dl>
                                            <dt className="con_title">다양한 수업 방식을 시도해요</dt>
                                            <dd className="con_text">
                                                줌, 웹엑스 등 기존에 이용하고 있는 온라인 수업 <br className="br_360_block"/>
                                                플랫폼은 물론, <br className="br_360_none"/>
                                                엑셀, PDF, PPT 등도 연동해서 <br className="br_360_block"/>사용할 수 있어요. <br className="br_360_none"/>
                                                앞으로도 수업을 진행할 <br className="br_360_block"/>다양한 방식이 업데이트 될 예정이에요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_02.png" alt="선생님이 학생들을 관리해요 이미지" />
                                        <dl>
                                            <dt className="con_title">선생님이 학생들을 관리해요</dt>
                                            <dd className="con_text">
                                                수업 참여를 위해 필요했던 메신저 대신 <br className="br_360_none"/>
                                                선생님이 <br className="br_360_block"/>
                                                직접 채팅방을 만들어 학생들의 관리할 수 있어요. <br/>
                                                수업에 참여하면 다른 메신저는 차단돼서 <br className="br_360_block"/>
                                                집중력이 올라가요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_03.png" alt="'다양한 행사를 진행해요 이미지" />
                                        <dl>
                                            <dt className="con_title">다양한 행사를 진행해요</dt>
                                            <dd className="con_text">
                                                대강당에는 300명 이상이 동시에 접속할 수 있어요. <br/>
                                                입학식이나 졸업식, 교장 선생님 월간 조례, 학부모 <br/>
                                                간담회 등 매년 학교에서 열리는 행사를 진행해 보세요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_04.png" alt="스터디윗미로 스스로 공부해요 이미지" />
                                        <dl>
                                            <dt className="con_title">'스터디윗미'로 스스로 공부해요</dt>
                                            <dd className="con_text">
                                                실제 캠스터디처럼 친구들과 모여 스터디 목표와 <br/>
                                                시간을 설정하고, 공부하는 모습을 캠으로 공유하니까 <br className="br_360_block"/>
                                                동기부여가 돼요. 목표를 <br className="br_360_none"/>
                                                이루면 보상이 주어지니까 <br className="br_360_block"/>
                                                공부가 더 재밌어져요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_05.png" alt="일대일로 고민 상담을 해요 이미지" />
                                        <dl>
                                            <dt className="con_title">일대일로 고민 상담을 해요</dt>
                                            <dd className="con_text">
                                                교내 상담 선생님, 교수님 등이 비밀 상담실을 <br className="br_360_block"/>
                                                개설하고<br className="br_360_none"/>
                                                학생을 초대할 수 있어요. 익명성이 필요할 땐 <br className="br_360_block"/>
                                                별도의 닉네임으로도 <br className="br_360_none"/>
                                                입장 가능해요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_06.png" alt="학생들의 활동 사진과 작품을 관람해요 이미지" />
                                        <dl>
                                            <dt className="con_title">학생들의 활동 사진과 작품을 관람해요</dt>
                                            <dd className="con_text">
                                                실제 전시관 같은 공간에서 학생들의 활동 사진이나 <br/>
                                                작품, 학교 홍보물을 전시할 수 있어요. <br/>
                                                학부모들을 초청해서 다양한 행사 진행도 가능해요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_07.png" alt="비가 와도 체육대회를 진행해요 이미지" />
                                        <dl>
                                            <dt className="con_title">비가 와도 체육대회를 진행해요</dt>
                                            <dd className="con_text">
                                                체육대회 날 비가와도 걱정하지 마세요. <br/>
                                                전교생이 메타버스 운동장에 모여 OX 퀴즈, <br/>
                                                줄다리기 등 신나는 게임을 즐길 수 있어요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_08.png" alt="내 아바타 룸에 친구를 초대해요 이미지" />
                                        <dl>
                                            <dt className="con_title">내 아바타 룸에 친구를 초대해요</dt>
                                            <dd className="con_text">
                                                UVERSE에서 공부하는 또 다른 나 '아바타'와 <br/>
                                                아바타의 방을 취향대로 꾸밀 수 있어요 <br/>
                                                친구들의 아바타 룸에도 방문하고 소통할 수 있어요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_09.png" alt="동아리방, 스터디 모임방을 만들어요 이미지" />
                                        <dl>
                                            <dt className="con_title">동아리방, 스터디 모임방을 만들어요</dt>
                                            <dd className="con_text">
                                                동아리나 스터디 모임의 커뮤니티룸을 만들고 <br className="br_360_block"/>
                                                친구들을 초대해 <br className="br_360_none"/>
                                                영상으로 대화하고, 방명록과 <br className="br_360_block"/>
                                                사진첩을 이용할 수도 있어요. <br className="br_360_none"/>
                                                시간 제약 없이 <br className="br_360_block"/>
                                                방과후 언제나 자유롭게 모일 수 있어요.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="swiper-slide preparing">
                                    <div className="swiper-slide-container">
                                        <img className="sec4_img" src="../resources/images/school_sec4_10.png" alt="다른 학교 학생과 친구가 돼요 이미지" />
                                        <dl>
                                            <dt className="con_title">다른 학교 학생과 친구가 돼요</dt>
                                            <dd className="con_text">
                                                UVERSE를 이용 중인 다른 학교 학생들과 <br/>
                                                한 공간에 모여 채팅을 통해 소통할 수 있어요. <br/>
                                                진로/진학 정보나 취미 관련 대화를 나눠보세요.
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
                    {/* <section className="sec6">
                        <h4 className="sec-title">영상으로 <img src="../resources/images/school_logo_wt.png" alt="유버스 로고 이미지" />를<br/>확인하세요</h4>
                        <ul className="sec6_con">
                            <li>						
                                <Link to="/">
                                    <img src="../resources/images/school_sec6_01.png" alt="영상" />
                                    <dl>
                                        <dt className="con_title">영상제목 위치</dt>
                                        <dd className="con_text">YYY.MM.DD</dd>
                                    </dl>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src="../resources/images/school_sec6_02.png" alt="영상" />
                                    <dl>
                                        <dt className="con_title">영상제목 위치</dt>
                                        <dd className="con_text">YYY.MM.DD</dd>
                                    </dl>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src="../resources/images/school_sec6_01.png" alt="영상" />
                                    <dl>
                                        <dt className="con_title">영상제목 위치</dt>
                                        <dd className="con_text">YYY.MM.DD</dd>
                                    </dl>
                                </Link>
                            </li>
                        </ul>
                    </section> */}
                    <MainFooterMo />
                </div>
        </main>
    </div>
    ) 
}

export default SchoolMo;