
import { useEffect, useState } from "react";

const EventMessage = ({setPopName, selectedGnbIndex }) => {

    const [Enter, setEnter] = useState(false);

    return (
        <>
        <div className="MessageInner Tb-MessageInner">
            <img className="msg-pfp" src="/resources/img/tb_profileimg30.svg" alt="프로필 사진 이미지" />
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">메시지</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="ChatCon">
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/tb_profileimg30.svg" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox ChatAlertBox">
                                    <div className="ChatAlert">
                                        <div className="ChatAlertTxt">알림 메세지</div>
                                        <div className="ChatTxt txt-13Gy3-02 ">
                                            팝업스토어 미션 참여로 빽다방 5000원 쿠폰이 발급되었습니다.<br /><br /> 
                                            코드번호 : xxxxxxxxxxxx<br /><br /> 
                                            매장에서 코드를 사용하세요.
                                        </div>
                                    </div>
                                    <div className="ChatTime">09:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/tb_profileimg30.svg" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox ChatAlertBox">
                                    <div className="ChatAlert">
                                        <div className="ChatAlertTxt">알림 메세지</div>
                                        <div className="ChatTxt txt-13Gy3-02 Alert">
                                            팝업스토어 미션 참여로 랜덤 박스 아이템에 당첨 되었습니다.<br /><br />
                                            마이룸의 옷장을 확인해보세요.<br /><br />*프로모션 기간 한정 아이템입니다.
                                        </div>
                                    </div>
                                    <div className="ChatTime">09:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="Chat-desc-time">2023년 12월 26일</div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/tb_profileimg30.svg" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox ChatAlertBox">
                                    <div className="ChatAlert">
                                        <div className="ChatAlertTxt">알림 메세지</div>
                                        <div className="ChatTxt txt-13Gy3-02 ">
                                            팝업스토어 미션 참여로 빽다방 5000원 쿠폰이 발급되었습니다.<br /><br /> 
                                            코드번호 : xxxxxxxxxxxx<br /><br /> 
                                            매장에서 코드를 사용하세요.
                                        </div>
                                    </div>
                                    <div className="ChatTime">09:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/tb_profileimg30.svg" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox ChatAlertBox">
                                    <div className="ChatAlert">
                                        <div className="ChatAlertTxt">알림 메세지</div>
                                        <div className="ChatTxt txt-13Gy3-02 ">
                                            팝업스토어 미션 참여로 빽다방 5000원 쿠폰이 발급되었습니다.<br /><br /> 
                                            코드번호 : xxxxxxxxxxxx<br /><br /> 
                                            매장에서 코드를 사용하세요.
                                        </div>
                                    </div>
                                    <div className="ChatTime">09:45</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ChatMessage">
                    <div className="MessageBox">
                        <textarea type="text" className="messageInput txt-13Gy3-02Gy3" />
                        <button type="button" onClick={() => {setEnter(!Enter)}} className={`Enter20 ${Enter ? null : 'EnterOn20'}`}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default EventMessage;