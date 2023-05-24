import { useEffect, useState } from "react";

const PopLogin_07 = ({ togglePop }) => {

    const [isOpen, setisOpen] = useState(false);

  return (
    <div className="layer new_pop">
        <div>
            <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            <div className="layer_top">
                <img className="pop_logo" src="../resources/images/pop_logo.svg" alt="유버스 로고" />
                <h1 className="main_tit"><strong>로그인</strong></h1>
            </div>
            
            <div className="layer_cont h100">
                <div className="account_wrap">
                    <div className="account_school">
                        <p className="txt_bk15 pb8">유버스를 이용하는 학교라면</p>
                        <div className="ui_select">
                            <button type="button" className={`select_trigger ${isOpen ? `` : "open"}`}  onClick={() => {setisOpen(!isOpen)}}><span>학교 계정으로 시작하기</span></button>
                            {isOpen &&   
                                <ul className="select_layer">
                                    <li><button type="button" className="option">숙명여자대학교</button></li>
                                    <li><button type="button" className="option">청주대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                </ul>
                            }
                        </div>
                        <button type="button" className="Btn_df line block">
                            <span>휴대폰 번호로 로그인</span>
                            {/* <span className="tooltip">마지막으로 <strong>로그인한 계정</strong>이예요!</span> */}
                        </button>
                        <button type="button" className="Btn_df line block">
                            <span>이메일로 로그인</span>
                            {/* 말풍선 - 다시 로그인시 표시 - 0503 김혜진님 내용 확인 후 히든처리*/}
                            {/* <span className="tooltip">마지막으로 <strong>로그인한 계정</strong>이예요!</span> */}
                        </button>
                    </div>
                    <div className="account_social">
                        <p className="txt">또는</p>
                        <ul className="social_list">
                            <li><button type="button"><img src="../resources/images/icon_google.svg" alt="구글계정으로 시작하기" /></button></li>
                            <li><button type="button"><img src="../resources/images/icon_naver.svg" alt="네이버계정으로 시작하기" /></button></li>
                            <li><button type="button"><img src="../resources/images/icon_kakao.svg" alt="카카오계정으로 시작하기" /></button></li>
                            <li><button type="button"><img src="../resources/images/icon_facebook.svg" alt="페이스북계정으로 시작하기" /></button></li>
                            <li><button type="button"><img src="../resources/images/icon_apple.svg" alt="애플계정으로 시작하기" /></button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="layer_bottom">
                <div className="shortcut_link">
                    <p className="txt">유버스가 처음이신가요?</p>
                    <button type="button">아바타 만들기</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PopLogin_07;