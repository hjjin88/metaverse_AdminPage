import { useEffect, useRef, useState } from "react";
import PopFooter from "../PopFooter";

const MyProfile = ({ popName, setPopName }) => {

    const [view, setView] = useState(false); 
    const [Bun01, setBun01] = useState(false);

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn)
    }
    const [isAgree, setisAgree] = useState(false);
    const Marketing = () => {
    setisAgree(!isAgree)
    }
    

    const [isMark, setisMark] = useState(false);
    const [isOn02, setisOn02] = useState(false);
    const toggleHandler02 = () => {
      setisOn02(!isOn02)
    };


    return (
        <>
        <div className="layer" />
        <div className="MyProfile">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">마이 프로필</div>
            <div className="MyProfileCon">
                <div className="MyProfileInner">
                    <div className="online">
                        <div className="onlineCon">
                            <div className="markOn"></div>
                            <button type="button" onClick={() => {setView(!view)}}>
                                <div>Online{" "}</div>
                                {view ? <svg className="downArrow" /> : <svg className="downArrow up" />} 
                            </button>
                        </div>
                        {view && 
                            <ul className="onlineList">
                                <li>
                                    <div className="onlineCon">
                                        <div className="markOn"></div>
                                        <button type="button">
                                            <div>Online{" "}</div>
                                            {view ? <svg className="downArrow up" /> : <svg className="downArrow" />} 
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="onlineCon">
                                        <div className="markGy"></div>
                                        <button type="button"><div>Sleeping</div></button>
                                    </div>
                                </li>
                            </ul>
                        }
                    </div>
                    {/* Sleeping 상태 */}
                    {/* <div className="online offline">
                        <div className="onlineCon">
                            <div className="markGy"></div>
                            <button type="button" onClick={() => {setView(!view)}}>
                                <div>Sleeping{" "}</div>
                                {view ? <svg className="downArrowWt12" /> : <svg className="downArrowWt12 up" />} 
                            </button>
                        </div>
                        {view && 
                            <ul className="onlineList">
                                <li>
                                    <div className="onlineCon">
                                        <div className="markGy"></div>
                                        <button type="button">
                                            <div>Sleeping{" "}</div> 
                                            {view ? <svg className="downArrowWt12 up" /> : <svg className="downArrowWt12" />} 
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="onlineCon">
                                        <div className="markOn"></div>
                                        <button type="button"><div>Online</div></button>
                                    </div>
                                </li>
                            </ul>
                        }
                    </div> */}
                    <img className="MyProfileImg" src="/resources/img/bg.png" alt="프로필 이미지" />
                    <button type="button" className="changeBtn">
                        <img src="/resources/img/camera18.svg" alt="프로필 이미지 변경 버튼 이미지" />
                    </button>
                    <div className="tit-18Bk2 pdb5">Jennie Park</div>
                    <div className="phone-number txt-14Gy2">
                        <div className="userID">CA761232-ED42-11CE-BACD-00AA0057B223</div>
                        <button type="button" className="copy17" onClick={toggleHandler} />
                    </div>
                    {/* <div className="Point tit-13Wt">
                        <span>p</span>
                        <p>2,30555503</p>
                    </div> */}
                    <div className="Point Point02">
                        <ul className="Point02-wrap">
                            <li className="item">
                                <img src="/resources/img/icon_p.svg" alt="포인트 아이콘" />
                                <p className="num">999,999</p>
                            </li>
                            <li className="item">
                                <img src="/resources/img/icon_u.svg" alt="포인트 아이콘" />
                                <p className="num">999,999</p>
                            </li>
                        </ul>
                    </div>
                    <div className="Point Point03">
                        <ul className="Point03-wrap">
                            <li className="item">
                                <img src="/resources/img/icon_point.svg" alt="포인트 아이콘" />
                                <p className="num">999,999</p>
                            </li>
                            <li className="item">
                                <span>P</span>
                                <p className="num">999,999</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="MyProfileList">
                    <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">닉네임 변경</p>
                            <p className="txt-13Bk3">(8자 이내로 입력)</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="닉네임을 입력하세요." />
                            <button type="button" onClick={() => {setBun01(!Bun01)}}>
                                <div className={`form-btn ${Bun01 ? "on" : null }`}>변경</div>
                            </button>
                        </dd>
                    </dl>
                    <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">유버스 ID</p>
                            <p className="txt-13Bk3">(30일에 한 번 변경 가능)</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="ID를 입력하세요." />
                            <button type="button" className="form-btn-data">D-28</button>
                        </dd>
                    </dl>
                    {/* <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">유저 ID</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="ID를 입력하세요." />
                            <button type="button" onClick={() => {setBun01(!Bun01)}}>
                                <div className={`form-btn ${Bun01 ? "on" : null }`}>확인</div>
                            </button>
                        </dd>
                    </dl> */}
                    <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">인증정보</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="인증정보를 입력하세요." />
                            <button type="button" onClick={() => {setBun01(!Bun01)}}>
                                <div className={`form-btn ${Bun01 ? "on" : null }`}>
                                    {" "}{Bun01 ? '인증' : '인증됨'}
                                </div>
                            </button>
                        </dd>
                    </dl>
                    {/* 0511 추가팝업 */}
                    <dlv className="ProfileFooter txt-13GyC">
                        <button type="button">회원탈퇴</button>
                        <button type="button">이용약관 확인</button>
                        <button type="button" onClick={Marketing}>마케팅 정보 수신 동의 설정</button>
                        <button type="button">고객센터</button>
                    </dlv>
                    {isAgree &&
                        <div className="TestCon">
                            <div className="app-color-range">
                                <label>
                                    <input type="checkbox"/>
                                    {/* <div className="AgreePop " style={{color: `#fff`}}> */}
                                        {/* <div className="TestCon">
                                            <dl>
                                                <dt>알림</dt>
                                                <dd className="txt-15Gy5">마이룸에 입장 시 현재 스페이스에서 나가게 됩니다. 마이룸으로 이동하시겠습니까?</dd>
                                            </dl>
                                            <div className="Alarm-Btns">
                                                <button onClick={ e => { setPopName(); }}>취소</button>
                                                <button type="button">예</button>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                    <span>크로마키</span>
                                    <i></i>
                                </label>
                            </div>
                            <div>
                                UVERSE(유버스)마케팅 활용 및 광고성 정보 수신에 동의할 경우 <br />
                                회사가 전송하는 혜택 및 광고성 정보 등이 <br />
                                <span className="underline">전화, 단문메시지, 장문메시지 멀티메시지, WAP 푸시, 
                                이메일, 우편, 앱 안내 및 팝업</span> 등으로 <br />
                                전송될 수 있습니다.
                            </div>
                            <div className="AgreePop TestCon">
                            <dl>
                                <dt>알림</dt>
                                <dd className="txt-15Gy5">마이룸에 입장 시 현재 스페이스에서 나가게 됩니다. 마이룸으로 이동하시겠습니까?</dd>
                            </dl>
                            <div className="Alarm-Btns">
                                <button onClick={ e => { setPopName(); }}>취소</button>
                                <button type="button">예</button>
                            </div>
                        </div> 
                            {/* <div className="MyFriendToggle" onClick={toggleHandler02}>
                                <div className={`toggle-container ${isOn02 ? "toggle--checked" : null}`}/>
                                <div className={`toggle-circle ${isOn02 ? "toggle--checked" : null}`}/>
                                {isOn02 === false ?
                                <div className="Desc"><div className='OFF'>FEJIGU Toggle Switch OFF</div></div> :
                                <div className="Desc"><div className='ON'></div>FEJIGU Toggle Switch ON</div>}
                            </div> */}
                        </div>
                        

                    }
                </div>
            </div>
            {isOn &&
                <div className="Copypop txt-13Gy5">복사되었습니다.</div>
            }
            <PopFooter popName={popName} setPopName={setPopName} />
        </div>
        </>
    )
}
export default MyProfile;
