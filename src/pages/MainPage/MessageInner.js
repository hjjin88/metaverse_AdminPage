
import { useEffect, useState } from "react";

const Chatting = ({setPopName, selectedGnbIndex }) => {

    const [Enter, setEnter] = useState(false);

    return (
        <>
        <div className="MessageInner">
            <img className="msg-pfp" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">메세지</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="ChatCon">
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/img_cheongju_profile.svg" alt="프로필 사진 이미지" />                          
                            <div className="ChatProfile">
                                <div className="ChatBox PointAlertBox">
                                    <div className="PointAlert">
                                        <div className="PointAlertTxt">알림메시지</div>
                                        <div className="ChatTxt txt-13Gy3-02 ">
                                            안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                            마이프로필에서 확인하세요.
                                            안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                            마이프로필에서 확인하세요.
                                            안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                            마이프로필에서 확인하세요.
                                            안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                            마이프로필에서 확인하세요.
                                            안녕하세요.복지포인트 200을 구매하여 200이 차감되었습니다.
                                            마이프로필에서 확인하세요.
                                            <button type="button" className="btn_go">마이프로필 가기</button>
                                        </div>
                                    </div>
                                    <div className="ChatTime">09:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">안녕하세요 😎</div>
                                    <div className="ChatTime">09:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="Chat-desc-time">2023년 12월 26일</div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">후배님들 안녕하세요 OT는 내일 모레 입 니다🔥 블베 앞에서 모일꺼예요 다들 늦지 않게 오세요~!!</div>
                                    <div className="ChatTime">09:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">네네 🙆‍♀️</div>
                                    <div className="ChatTime">10:10</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐?진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 이거보고교수님</div>
                                    <div className="ChatTime">10:15</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat02">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">네네 알겠습니다</div>
                                    <div className="ChatTime">10:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">주의할께요!!</div>
                                    <div className="ChatTime">10:15</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">네 내일 휴강이라 푹 쉬고 일찍 갈께요~~</div>
                                    <div className="ChatTime">10:38</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">학생서비스센터는 몇 층이예요? </div>
                                    <div className="ChatTime">10:40</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">넵 동기들에게 공유하겠습니다!</div>
                                    <div className="ChatTime">10:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat02">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">샤워실은 3층 화장실 옆이예요</div>
                                    <div className="ChatTime">10:46</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">안녕하세요 😎</div>
                                    <div className="ChatTime">09:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">후배님들 안녕하세요 OT는 내일 모레 입 니다🔥 블베 앞에서 모일꺼예요 다들 늦지 않게 오세요~!!</div>
                                    <div className="ChatTime">09:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">네네 🙆‍♀️</div>
                                    <div className="ChatTime">10:10</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">넵 동기들에게 공유하겠습니다!</div>
                                    <div className="ChatTime">10:15</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat02">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">네네 알겠습니다</div>
                                    <div className="ChatTime">10:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">주의할께요!!</div>
                                    <div className="ChatTime">10:15</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">네 내일 휴강이라 푹 쉬고 일찍 갈께요~~</div>
                                    <div className="ChatTime">10:38</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">학생서비스센터는 몇 층이예요? </div>
                                    <div className="ChatTime">10:40</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat01">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">넵 동기들에게 공유하겠습니다!</div>
                                    <div className="ChatTime">10:45</div>
                                </div>
                            </div>
                        </div>
                        <div className="ChatInner Chat02">
                            <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <div className="ChatProfile">
                                <div className="ChatBox">
                                    <div className="ChatTxt txt-13Gy3-02">샤워실은 3층 화장실 옆이예요</div>
                                    <div className="ChatTime">10:46</div>
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
export default Chatting;