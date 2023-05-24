import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeaderMo = ({ selectedGnbIndex, popVisible }) => {

    return (
    <>
    { selectedGnbIndex === 0 ? (
        <header className="main_header" id="header">
            <div className="modalBack"></div>
            <div className="inner-wrap">
            <h1><Link to="/MainHomeMo"><img src="/resources/images/main_logo.png" alt="유버스 로고 이미지" /></Link></h1>
                <div className="menuOpen">
                    <Link to="/MainHomeMo">
                        <span className="bar"></span>
                    </Link>
                </div>
                <nav id="gnb">
                    <ul className="mainMenu">
                        <li className="depth1">
                            <Link to="/SchoolMo">
                                <img src="/resources/images/school_nav_logo_mo.png" alt="유버스 스쿨 로고 이미지" /><br/>  
                                <span className="mainMenu_btn">유버스 스쿨(초중고) 바로가기</span>
                                <button type="button" className="arrow_right"><span className="hidden">유버스 스쿨(초중고) 바로가기</span></button>
                            </Link>
                        </li>
                        <li className="depth1">
                            <Link to="/CampusMo">
                                <img src="/resources/images/campus_nav_logo_mo.png" alt="유버스 캠퍼스 로고 이미지" /><br/>  
                                <span className="mainMenu_btn">유버스 캠퍼스(대학) 바로가기</span>
                                <button type="button" className="arrow_right"><span className="hidden">유버스 캠퍼스(대학) 바로가기</span></button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    ) : selectedGnbIndex === 1 ?(
        <header className="school_header uverse_header" id="header">
            <div className="modalBack"></div>
            <div className="inner-wrap">
                <h1><Link to="/SchoolMo"><img src="/resources/images/school_mo_logo.png" alt="유버스 스쿨 로고 이미지" /></Link></h1>
                <div className="menuOpen">
                    <a href="#none">
                        <span className="bar"></span>
                    </a>
                </div>
                <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <div className="login_status_01">
                            <div className="login_be">
                                <img src="../resources/images/nav_login_img.png" alt="로그인 이미지" />
                                <p className="login_be_title">로그인/회원가입</p>
                            </div>
                            <div className="login_arrow_btn"><Link to="/"></Link></div>
                        </div>
                        <div className="my_room"><a href="#none">마이룸 입장</a></div>
                        <ul className="nav_manu">
                            <li className="depth1"><Link to="#none">why 유버스 캠퍼스?</Link></li>
                            <li className="depth1"><Link to="#none">서비스 소개</Link></li>
                            <li className="depth1"><Link to="#none">자주하는 질문/1:1문의</Link></li>
                            <li className="depth1"><Link to="#none">가입 문의</Link></li>
                            <li className="depth1"><Link to="#none">제휴 문의</Link></li>
                        </ul>
                        <ul className="home_btns">
                            <li className="home_btn_01"><Link to="/MainHomeMo">홈</Link></li>
                            <li><Link to="/CampusMo">유버스 캠퍼스(대학)</Link></li>
                        </ul>
                    </div>
                </nav>
                {/* <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <div className="login_status_02">
                            <img src="../resources/images/nav_login_img.png" alt="로그인 이미지" />
                            <div className="login_af">
                                <p className="login_af_title">홍길동님</p>
                                <ul className="login_af_text">
                                    <li><a className="login_af_text_01" href="#none">이메일</a></li>
                                    <li><a href="#none">닉네임 변경</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="my_room"><a href="#none">마이룸 입장</a></div>
                        <ul className="nav_manu">
                        <li className="depth1"><a href="#none">why 유버스 캠퍼스?</a></li>
                        <li className="depth1"><a href="#none">서비스 소개</a></li>
                        <li className="depth1"><a href="#none">자주하는 질문/튜토리얼</a></li>
                        <li className="depth1"><a href="#none">가입 문의</a></li>
                        <li className="depth1"><a href="#none">제휴 문의</a></li>
                        <li className="depth1 log_out"><a href="#none">로그아웃</a></li>
                        </ul>
                        <ul className="home_btns">
                            <li><a className="home_btn_01" href="#none">홈</a></li>
                            <li><a href="#none">유버스 스쿨(초중고)</a></li>
                        </ul>
                    </div>
                </nav> */}
            </div>
        </header>
    ) : (
        <header className="uverse_header" id="header">
            <div className="modalBack"></div>
            <div className="inner-wrap">
                <h1><Link to="/CampusMo"><img src="/resources/images/campus_logo.png" alt="유버스 캠퍼스 로고 이미지" /></Link></h1>
                <div className="login-img"><img src="/resources/images/campus_mo_visual_01.jpg" alt="유버스 캠퍼스 로고 이미지" /></div>
                <div className="menuOpen">
                    <a href="#none">
                        <span className="bar"></span>
                    </a>
                </div>
                {/* 0504 작업 - 로그인전 01 */}
                {/* <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <img className="burger-logo" src="/resources/images/burger-logo.svg" alt="유버스 캠퍼스 로고 이미지" />
                        <ul className="nav_manu">
                            <li className="depth1"><Link to="#none">why 유버스 스쿨?</Link></li>
                            <li className="depth1"><Link to="#none">서비스 소개</Link></li>
                            <li className="depth1"><Link to="#none">자주하는 질문/1:1문의</Link></li>
                            <li className="depth1"><Link to="#none">가입 문의</Link></li>
                            <li className="depth1"><Link to="#none">제휴 문의</Link></li>
                        </ul>
                    </div>
                </nav> */}

                {/* 0504 작업 - 로그인전 02 */}
                {/* <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <img className="burger-logo" src="/resources/images/burger-logo.svg" alt="유버스 캠퍼스 로고 이미지" />
                        <div className="login_status_01 mt20">
                            <div className="login_be">
                                <img src="../resources/images/nav_login_img.png" alt="유버스 로고 이미지" />
                                <p className="login_be_title">로그인</p>
                            </div>
                            <div className="login_arrow_btn"><Link to="/"></Link></div>
                        </div>
                        <button type="button" className="my_room"><p>체험하기</p></button>
                    </div>
                </nav> */}

                {/* 0504 작업 - 로그인 후 01 */}
                <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <img className="burger-logo" src="/resources/images/burger-logo.svg" alt="유버스 캠퍼스 로고 이미지" />
                        <div className="login_status_01 mt20">
                            <div className="login_be">
                                <img src="../resources/images/campus_mo_visual_01.jpg" alt="유버스 로고 이미지" />
                                <p className="login_be_title">로그인</p>
                            </div>
                            <button type="button" className="login_arrow_btn on"/>
                        </div>
                        <ul className="connect">
                            <li>
                                <div className="tit">계정 연결</div>
                                <button className="check">
                                <img className="connect-icon" src="/resources/images/kakao12.svg" alt="카카오 이미지" />
                                {/* <img className="connect-icon" src="/resources/images/google12.svg" alt="구글 이미지" /> */}
                                {/* <img className="connect-icon" src="/resources/images/facebook12.svg" alt="페이스북 이미지" /> */}
                                {/* <img className="connect-icon" src="/resources/images/apple12.svg" alt="애플 이미지" /> */}
                                {/* <img className="connect-icon" src="/resources/images/uverse12.svg" alt="유버스 이미지" /> */}
                                카카오톡
                                </button>
                            </li>
                            <li>
                                <div className="tit">휴대폰 번호</div>
                                <button className="check">
                                등록안됨
                                </button>
                            </li>
                            <li>
                                <div className="tit">이메일</div>
                                <button className="check off">
                                등록됨
                                </button>
                            </li>
                            <li className="none">
                                <div className="tit">로그아웃</div>
                                <button className="check"/>
                            </li>
                        </ul>
                        <button type="button" className="my_room"><p>마이룸 입장</p></button>
                    </div>
                </nav>
                {/* 초기 작업 */}
                {/* <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <div className="login_status_01">
                            <div className="login_be">
                                <img src="../resources/images/nav_login_img.png" alt="유버스 로고 이미지" />
                                <p className="login_be_title">로그인/회원가입</p>
                            </div>
                            <div className="login_arrow_btn"><Link to="/"></Link></div>
                        </div>
                        <div className="my_room"><a href="#none">마dkdl입장</a></div>
                        <ul className="nav_manu">
                            <li className="depth1"><Link to="#none">why 유버스 스쿨?</Link></li>
                            <li className="depth1"><Link to="#none">서비스 소개</Link></li>
                            <li className="depth1"><Link to="#none">자주하는 질문/1:1문의</Link></li>
                            <li className="depth1"><Link to="#none">가입 문의</Link></li>
                            <li className="depth1"><Link to="#none">제휴 문의</Link></li>
                        </ul>
                        <ul className="home_btns">
                            <li className="home_btn_01"><Link to="/MainHomeMo">홈</Link></li>
                            <li><Link to="/SchoolMo">유버스 스쿨(초중고)</Link></li>
                        </ul>
                    </div>
                </nav> */}
                {/* <nav id="gnb">
                    <h2 className="hidden">네비게이션영역</h2>
                    <div className="mainMenu">
                        <div className="login_status_02">
                            <img src="../resources/images/nav_login_img.png" alt="로그인 이미지" />
                            <div className="login_af">
                                <p className="login_af_title">홍길동님</p>
                                <ul className="login_af_text">
                                    <li><a className="login_af_text_01" href="#none">이메일</a></li>
                                    <li><a href="#none">닉네임 변경</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="my_room"><a href="#none">마이룸 입장</a></div>
                        <ul className="nav_manu">
                        <li className="depth1"><a href="#none">why 유버스 캠퍼스?</a></li>
                        <li className="depth1"><a href="#none">서비스 소개</a></li>
                        <li className="depth1"><a href="#none">자주하는 질문/튜토리얼</a></li>
                        <li className="depth1"><a href="#none">가입 문의</a></li>
                        <li className="depth1"><a href="#none">제휴 문의</a></li>
                        <li className="depth1 log_out"><a href="#none">로그아웃</a></li>
                        </ul>
                        <ul className="home_btns">
                            <li><a className="home_btn_01" href="#none">홈</a></li>
                            <li><a href="#none">유버스 스쿨(초중고)</a></li>
                        </ul>
                    </div>
                </nav> */}
            </div>
        </header>
    )
    }
    </>
    )
}

export default MainHeaderMo;