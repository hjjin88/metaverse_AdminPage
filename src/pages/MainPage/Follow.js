import { useEffect, useState } from "react";
import PopFooter from "../PopFooter";

const Follow = ({ popName, setPopName }) => {

    const [isMark, setisMark] = useState(false);

    return (
        <>
        <div className="layer">
            <div className="Follow">
                <button type="button" className="backBtn"><img src="/resources/img/backArrow.svg" alt="뒤로가기 버튼 이미지" /></button>
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">팔로우 요청</div>
                <div className="con-wrap">
                    <ul className="con-inner-col">
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>                        
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>                        
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>                        
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>                        
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>                        
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" onClick={setisMark}>
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">DDDDDDDDGG</p>
                                </div>
                            </div>
                            <div className="followBtns txt-13Gy5">
                                <button type="button" className="sec-btn on-02">수락</button>
                                <button type="button" className="sec-btn">거절</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </div>
        </>
    )
}
export default Follow;
