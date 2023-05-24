import { useEffect, useState } from "react";
import PopFooter from "../PopFooter";

const MyFriend = ({ popName, setPopName }) => {

    const [isMark, setisMark] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
      setisOn(!isOn)
    };

    return (
        <>
        <div className="layer" />
            <div className="MyFriend">
                <div className="heartBtn">
                    <button type="button" onClick={ e => { setPopName('Follow'); }}><img src="/resources/img/heart.svg" alt="닫기 버튼 이미지" /></button>
                    <div className="markRd"></div>
                </div>
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">마이 친구</div>
                <div className="con-wrap">
                    <div className="MyFriendToggle" onClick={toggleHandler}>
                        <button type="button" className={`toggle-btn ${isOn ? null : "toggle-btnOn"}`}>팔로워</button>
                        <button type="button" className={`toggle-btn ${isOn ? "toggle-btnOn" : null}`}>팔로잉</button>
                    </div>
                {isOn === false ?
                    <ul className="con-inner-col">
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : null }`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">거절</button>
                                <button type="button" className="sec-btn">수락</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markOn" : "markGy"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">삭제</button>
                                <button type="button" className="sec-btn on plus"> <img src="/resources/img/plus-pu.svg"/>팔로우</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markOn" : "markGy"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markOn" : "markGy"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 2023-01-21</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">삭제</button>
                            </div>
                        </li>
                    </ul>
                :
                    <ul className="con-inner-col">
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? null : "markGy"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? null :  "markGy"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 2023-01-21</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn plus">팔로우</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn">취소</button>
                                <button type="button" className="sec-btn off">요청중</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 2023-01-21</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 2023-01-21</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <div className="Profile-check-bg"/>
                                    <div className={`markOn ${isMark ? "markGy" : "markOn"}`}/>
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                    <p className="txt-11Gy17">최근 접속일: 방금 전</p>
                                </div>
                            </div>
                            <div className="followBtns txt-16Gy5">
                                <button type="button" className="sec-btn on">팔로잉</button>
                            </div>
                        </li>
                    </ul>
                }
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </>
    )
}
export default MyFriend;
