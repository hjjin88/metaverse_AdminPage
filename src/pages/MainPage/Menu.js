
import { useEffect, useState } from "react";

const Menu = ({setPopName }) => {

    const [LogOut, setLogOut] = useState(false); 
    const [LogIn, setLogIn] = useState(false); 
    const [ELogin, setELogin] = useState(false); 
    const [ELogin_Btn, setELogin_Btn] = useState(false); 
    const [PwReset, setPwReset] = useState(false); 
    const [Mail_Send, setMail_Send] = useState(false); 
    const [Pw_input, setPw_input] = useState(false); 
    const [PwResetPop, setPwResetPop] = useState(false); 
    // 인증시간
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const countdown = setInterval(() => {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              clearInterval(countdown);
            } else {
              setMinutes(parseInt(minutes) - 1);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }, 1000);
        return () => clearInterval(countdown);
      }, [minutes, seconds]);

    
    return (
        <>
        <div className="layer"/>
            <div className="Menu">
                <button type="button" className="menuclose" onClick={ e => { setPopName(); }}><img src="/resources/img/close16.svg" alt="닫기 버튼 이미지" /></button>
                <div className="MenuCon">
                    <img src="/resources/img/bg.png" alt="프로필 이미지" />
                    <div className="Point tit-13Wt">
                        <span>p</span>
                        <p>2,30555503</p>
                    </div>
                    <div className="tit-30Bk2">Jennie Park</div>
                </div>
                <div className="MenuList">
                    <button type="button" className="btn" onClick={ e => { setPopName('ProfileDrawer'); }}>프로필 변경</button>
                    <button type="button" className="btn Txt-pkgr">마이룸 이동</button>
                    <button type="button" className="btn">고객센터</button>
                    <button type="button" className="btn" onClick={() => {setLogIn(!LogIn)}}>로그인</button>
                    <button type="button" className="btn" onClick={() => {setLogOut(!LogOut)}}>로그아웃</button>
                    {/* 로그인 */}
                    {LogIn && 
                        <div className="layer">
                            <div className="Alarm LogIn">
                                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                                <div className="popTit">로그인</div>
                                <div className="LogIn-con">
                                    <button type="button" className="google">구글로 시작하기</button>
                                    <button type="button" className="facebook">페이스북으로 시작하기</button>
                                    <button type="button" className="cacao">카카오로 시작하기</button>
                                    <button type="button" className="naver">카카오로 시작하기</button>
                                    <button type="button" className="apple">Apple로 시작하기</button>
                                    <button type="button" >휴대폰 번호로 로그인</button>
                                    <button type="button" onClick={() => {setELogin(!ELogin)}}>이메일로 로그인</button>
                                </div>
                            </div>
                        </div>
                    }
                    {/* 이메일로 로그인 */}
                    {ELogin && 
                        <div className="layer">
                            <div className="Alarm ELogin">
                                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                                <div className="popTit">로그인</div>
                                <div className="ELogin-con">
                                    <div className="inp-wrap pb30">
                                        <input type="email" placeholder="이메일을 입력 하세요."/>
                                        <input type="password" placeholder="비밀번호를 입력 하세요."/>
                                        <span className="er">
                                            <img className="w16" src="/resources/img/error16.svg" alt="에러 아이콘 이미지" />
                                            인증번호를 정확히 입력해 주세요.
                                        </span>
                                    </div>
                                    <button type="button"
                                    className={`sec-btn ${ELogin_Btn ? "off04" : "on02"}`}
                                    onClick={() => {setELogin_Btn(!ELogin_Btn)}}
                                    >로그인</button>
                                    <div className="ELogin-box">
                                        <div>처음 방문이세요? <button type="button">회원 가입</button></div>
                                        <div>비밀번호를 잊으셨나요? <button type="button" onClick={() => {setPwReset(!PwReset)}}>비밀번호 재설정</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {/* 비밀번호 재설정 */}
                    {PwReset && 
                        <div className="layer">
                            <div className="Alarm PwReset">
                                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                                <div className="popTit">비밀번호 재설정</div>
                                <div className="PwReset-con">
                                    <div className="er pb30 center">*발송된 인증코드는 1시간 동안 유효 합니다. 인증코드를 받지 못한 경우 ‘메일 발송’ 을 눌러 새 인증코드를 발송하세요.</div>
                                   {/* 이메일 기입 */}
                                    {/* <div className="inp-wrap">
                                        <div className="inp-tit">이메일</div>
                                        <input type="email" placeholder="이메일을 입력 하세요."/>
                                        <span className="er msg">이메일을 정확하게 입력해 주세요.</span>
                                    </div> */}
                                    {/* 이메일 발송 */}
                                    <div className="inp-wrap">
                                        <div className="inp-tit">이메일</div>
                                        <div className="inp-con ctr">
                                            <input type="email" className="inp-error" placeholder="이메일을 입력 하세요."/>
                                            <button type="button" className="inp-btn" onClick={() => {setMail_Send(!Mail_Send)}}>메일<br/>발송</button>
                                            <span 
                                            className={`er msg ${Pw_input ? "d-none" : null}`}
                                            >이메일을 정확하게 입력해 주세요.</span>
                                        </div>
                                            <span 
                                            className={`pw-msg ${Pw_input ? null : "d-none"} pb30`}
                                            >비밀번호 입력 시, 영문/숫자/특수문자를 포함한 8~15자 이내 입력해 주세요.</span>
                                    </div>
                                    {Mail_Send && 
                                    // <div className="inp-wrap pt25">
                                    //     <div className="inp-tit">인증번호</div>
                                    //     <input type="text" placeholder="인증번호" />
                                    //     <div className="Cert_time">
                                    //         <span className="txt-12Bk3 pr5">유효시간</span>
                                    //         <span className="txt-12Gy5">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                                    //     </div>
                                    //     <span className="er msg">인증코드를 정확하게 입력해 주세요.</span>
                                    // </div> 

                                    // 인증확인
                                    <div className={`inp-wrap pt25 ${Pw_input ? "d-none" : null}`}>
                                        <div className="inp-tit">인증번호</div>
                                        <div className="inp-con ctr">
                                            <input type="text" placeholder="인증번호" />
                                            <div className="Cert_time ty01">
                                                <span className="txt-12Bk3 pr5">유효시간</span>
                                                <span className="txt-12Gy5">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                                            </div>
                                            <button type="button" className="inp-btn" onClick={() => {setPw_input(!Pw_input)}}>인증<br/>확인</button>
                                        </div>
                                    </div> 
                                    }
                                    {Pw_input &&
                                    <div>
                                        <div className="inp-wrap">
                                            <div className="inp-tit">비밀번호</div>
                                            <input type="password" placeholder="비밀번호를 입력 하세요."/>
                                            <span className="er msg">등록되지 않은 아메일 입니다.</span>
                                        </div>
                                        <div className="inp-wrap pt30">
                                            <div className="inp-tit">8~15자리로 입력해 주세요.</div>
                                            <input type="password" placeholder="8~15자리로 입력해 주세요."/>
                                            <span className="er msg">비밀번호를 정확하게 입력해 주세요.</span>
                                        </div>
                                    </div>
                                    }
                                </div>
                                <button type="button" className="sec-btn on02" onClick={() => {setPwResetPop(!PwResetPop)}}>로그인</button>
                                {PwResetPop &&
                                    <div className="layer">
                                        <div className="Alarm">
                                            <dl>
                                                <dt>비밀번호 재설정</dt>
                                                <dd className="txt-15Gy5 lh160">비밀번호가 재설정되었습니다.<br/>로그인 하시겠습니까?</dd>
                                            </dl>
                                            <div className="Alarm-Btns">
                                                <button onClick={ e => { setPopName(); }}>아니요</button>
                                                <button type="button">네</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    {/* 로그아웃 */}
                    {LogOut && 
                        <div className="layer">
                            <div className="Alarm">
                                <dl>
                                    <dt>로그아웃</dt>
                                    <dd className="txt-15Gy5">로그아웃 하시겠습니까?</dd>
                                </dl>
                                <div className="Alarm-Btns">
                                    <button onClick={ e => { setPopName(); }}>아니요</button>
                                    <button type="button">네</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Menu;
