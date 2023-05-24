import { useEffect, useState } from "react";
import PopFooter from "../PopFooter";

const Message = ({ popName, setPopName }) => {

    const [Alarm, setAlarm] = useState(false);
   
    return (
        <>
        <div className="layer" />
            <div className="Message">
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">메세지</div>
                <div className="con-wrap">
                    <ul className="con-inner-col">
                        <li>
                            <div className="Profile-box" onClick={ e => { setPopName('MessageInner'); }}>
                                <div className="Profile-set cheongju_alert" >
                                    <img className="Profile-img" src="/resources/img/img_cheongju_profile.svg" alt="청주대학교 프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">알림메시지</p>
                                    <p className="txt-11Gy3 message-txt">
                                        안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                        마이프로필에서 확인하세요.
                                        안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                        마이프로필에서 확인하세요.
                                        안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.<br /> 
                                        마이프로필에서 확인하세요.
                                        안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.<br /> 
                                        마이프로필에서 확인하세요.
                                        안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.<br /> 
                                        마이프로필에서 확인하세요.
                                    </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">1</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                            {Alarm && 
                                <div className="Alarm">
                                    <dl>
                                        <dt>안내</dt>
                                        <dd className="txt-15Gy5">메시지를 삭제 하시겠습니까?</dd>
                                    </dl>
                                    <div className="Alarm-Btns">
                                        <button onClick={ e => { setPopName(); }}>취소</button>
                                        <button type="button">예</button>
                                    </div>
                                </div>
                            }
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set img-set4" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set img-set2" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">2023-01-21</div>
                                <div className="-No ">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                        <li>
                            <div className="Profile-box" >
                                <div className="Profile-set img-set4" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set img-set2" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <button type="button" className="trash-img" onClick={() => {setAlarm(!Alarm)}}>
                                <img src="/resources/img/trash.svg" alt="휴지통 이미지" />
                            </button>
                        </li>
                    </ul>
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </>
    )
}
export default Message;
