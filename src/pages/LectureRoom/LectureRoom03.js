import { useState } from "react";
const LectureRoom00 = ({setPopName}) => {

    const [MikeToggle, setMikeToggle] = useState(false);
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);
    
    const [View, setView] = useState(false); 
    const [View02, setView02] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="lecture-room participation layer-right-bottom">
                <button
                    type="button" className="subclose close16" onClick={(e) => {
                    setPopName();
                }}
                />
                <div className="layer-wrap">
                    <div className="layer-head">참여자</div>
                    <div className="layer-body">
                        <ul>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position"><img src="/resources/img/host.svg" alt="방장 아이콘 이미지" /></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">방장</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position"><img src="/resources/img/presenter.svg" alt="발표자 아이콘 이미지" /></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">발표자</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position"><img src="/resources/img/counselor.svg" alt="상담사 아이콘 이미지" /></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">상담사</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position"><img src="/resources/img/teacher.svg" alt="강사 아이콘 이미지" /></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">강사</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOff30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOn30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest off"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOff30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="participation-list">
                                <div className="participation-photo">
                                    <span className="participation-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="participation-position guest"></span>
                                </div>
                                <button type="button" className="participation-user">
                                    <span className="participation-user-name">DDDDDDDDGG</span>
                                    <span className="participation-user-position">게스트</span>
                                </button>
                                <div className="participation-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sec-btns">
                        <button type="button" 
                        className={`sec-btn-M${View ? "on02" : "off03"} tit-20Gy3`}
                        onClick={() => {setView(!View)}} 
                        >발표자 선정</button>
                        <button type="button" 
                        className={`sec-btn-M${View02 ? "on02" : "off01"} tit-20Gy3`}
                        onClick={() => {setView02(!View02)}} 
                        >강제 퇴장</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
