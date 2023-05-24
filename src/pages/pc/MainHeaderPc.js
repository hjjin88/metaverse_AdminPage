import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeaderPc = ({ selectedGnbIndex, popVisible }) => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
    { selectedGnbIndex === 0 ? (
      <header className="main_header" id="header">
          <div className="header_inner">
              <h1><Link to="/"><img src="/resources/images/main_logo.png" alt="유버스 로고 이미지" /></Link></h1>
              <div className="header_right">
                  <div className="login_on">
                      <img src="/resources/images/school_mo_M_sec2_07.png" alt="로그인 이미지" />
                      <div className="login_name">홍길동홍길동홍길동님</div>
                  </div>
                  <nav className="gnb" id="gnb">
                    <div className="gnb_on"><Link to="/">홈</Link></div>
                    <div><Link to="/School">유버스 스쿨(초중고)</Link></div>
                    <div><Link to="/Campus">유버스 캠버스(대학)</Link></div>
                  </nav>
              </div>
              { popVisible && (
                <div className="con_app">
                  <div className="ic_hp"></div>
                  <dl>
                      <dt>1544-0001</dt>
                      <dd>가입/일반문의</dd>
                      <dd>평일 9시 ~ 18시</dd>
                  </dl>
                  <button type="button" className="con_app_btn">빠른상담신청</button>
              </div>
              )}
              
          </div>
      </header>
    ) :  selectedGnbIndex === 1 ?  (
      <header className="uverse_header" id="header">
        <div className="header_inner">
          <h1><Link to="/"><img src="/resources/images/school_logo.png" alt="유버스 스쿨 로고 이미지" /></Link></h1>
          <nav className="gnb" id="gnb">
            <div className={`${selectedGnbIndex === 0 ? 'gnb_on' : ''}`}><Link to="/">홈</Link></div>
            <div className={`${selectedGnbIndex === 1 ? 'gnb_on' : ''}`}><Link to="/School">유버스 스쿨(초중고)</Link></div>
            <div className={`${selectedGnbIndex === 2 ? 'gnb_on' : ''}`}><Link to="/Campus">유버스 캠버스(대학)</Link></div>
          </nav>
        </div>
        <span className="header_boder"></span>
        <nav className="nav">
            <h2 className="hidden">네비게이션영역</h2>
            <ul className="nav_menu nav_menu_01">
                <li>Why 유버스 스쿨?</li>
                <li>서비스 소개</li>
                <li>자주하는 질문/1:1문의</li>
                <li>가입문의</li>
                <li>제휴문의</li>
            </ul>

            <ul className="nav_btn">
              { isLogin ? (
                <li className="login_on"><img src="/resources/images/school_mo_M_sec2_07.png" alt="로그인 이미지" /><a  onClick={ e => { setIsLogin(false); }}>홍길동홍길동홍길동님</a></li>
              ) : (
                <li className="login_btn"><button type="button" onClick={ e => { setIsLogin(true); }}>로그인/회원가입</button></li>
              )}
                <li className="my_room_btn"><button type="button" href="#none">마이룸 입장</button></li>
            </ul>
        </nav>
        <div className="login_btn_box">
            <ul>
                <li>계정 연결</li>
                <li>닉네임 변경</li>
                <li>로그아웃</li>
            </ul>
        </div>
      </header> 
    ) : (
      <header className="uverse_header" id="header">
        <div className="header_inner">
          <h1><Link to="/"><img src="/resources/images/campus_logo.png" alt="유버스 캠퍼스 로고 이미지" /></Link></h1>
          <nav className="gnb" id="gnb">
            <div className={`${selectedGnbIndex === 0 ? 'gnb_on' : ''}`}><Link to="/">홈</Link></div>
            <div className={`${selectedGnbIndex === 1 ? 'gnb_on' : ''}`}><Link to="/School">유버스 스쿨(초중고)</Link></div>
            <div className={`${selectedGnbIndex === 2 ? 'gnb_on' : ''}`}><Link to="/Campus">유버스 캠버스(대학)</Link></div>
          </nav>
        </div>
        <span className="header_boder"></span>
        <nav className="nav">
            <h2 className="hidden">네비게이션영역</h2>
            <ul className="nav_menu nav_menu_01">
                <li>Why 유버스 캠퍼스?</li>
                <li>서비스 소개</li>
                <li>자주하는 질문/1:1문의</li>
                <li>가입 문의</li>
                <li>제휴문의</li>
            </ul>

            <ul className="nav_btn">
              { isLogin ? (
                <li className="login_on"><img src="/resources/images/campus_pc_login_on.png" alt="로그인 이미지" /><a  onClick={ e => { setIsLogin(false); }}>홍길동홍길동홍길동홍길동님</a></li>
              ) : (
                <li className="login_btn"><button type="button" onClick={ e => { setIsLogin(true); }}>로그인/회원가입</button></li>
              )}
                <li className="my_room_btn"><button type="button" href="#none">마이룸 입장</button></li>
            </ul>
        </nav>
        {/* 0504 수정 작업 계정 연결 전*/}
        {/* <div className="login-account">
          <div className="connect before">
            <p><Link to="#none" className="link">계정을 연결</Link>하면 다른 기기에서도 <br/>내 아바타를 볼 수 있어요.</p>
          </div>
        </div> */}
        {/* 0504 수정 작업 계정 연결 후*/}
        <div className="login-account">
            <ul className="connect after">
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
                <button className="check off">
                  등록안됨
                </button>
              </li>
              <li>
                <div className="tit">이메일</div>
                <button className="check">
                  등록됨
                </button>
              </li>
              <li className="none">
                <div className="tit">닉네임 변경</div>
                <button className="check">
                </button>
              </li>
              <li>
                <div className="tit">로그아웃</div>
              </li>
            </ul>
        </div>
        {/* 초기 작업 */}
        {/* <div className="login_btn_box">
            <ul>
                <li>계정 연결</li>
                <li>닉네임 변경</li>
                <li>로그아웃</li>
            </ul>
        </div> */}
      </header> 
    )
  }
  </>
  )
}

export default MainHeaderPc;