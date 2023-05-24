
import { useEffect, useState } from "react";

const RtTopBar = ({ popName, setPopName }) => {

    const [Play, setPlay] = useState(false);
    const [view, setView] = useState(false); 
    const [view02, setView02] = useState(false); 
    const [Delete, setDelete] = useState(false); 
    const [Guide01, setGuide01] = useState(false); 
    const [Guide02, setGuide02] = useState(false); 

    return (
        <>
        <div className="RtTopBar">
            <div className="RtTopBarCon">
                <div className="playSubject">
                    <button type="button" onClick={() => {setPlay(!Play)}} >
                        {Play ? <div className="stop12" /> : <div className="play12" />} 
                    </button>
                    <div className="tit-16 playTime">22:00:00</div>
                    <div className="txt-15 subjectName">공부 중인 과목 없음</div>
                    <button type="button" onClick={() => {setView(!view)}}>
                        {" "}{view ? <i className="downArrowWt12" /> : <i className="downArrowWt12 up" />} 
                    </button>
                </div>
            </div>
            {view && 
                <div className="SubjectLists ty-01 mgt6">
                    <div className="SubjectList bd0">
                        <button type="button" onClick={() => {setPlay(!Play)}} className={`Play ${Play ? "stop12" : "play12"}`} />
                        <div className="txt-15 subjectName">
                            <input type="text" placeholder="과목명은 여덟글자"></input>
                        </div>
                        <img src="/resources/img/subjectCheck.svg" alt="과목명 작성 확인 버튼 이미지" />
                        <div className="tit-16 playTime">22:00:00</div>
                        <button type="button" className="closeWt12" onClick={() => {setDelete(!Delete)}} />
                    </div>
                </div>
            }
            {view && 
                <div className="RtTopBarCon center">
                    <button type="button" className="plus16" onClick={() => {setView02(!view02)}}/>
                </div>
            }
            {view02 && 
                <>
                <div className="SubjectLists mgt6">
                    <div className="SubjectList">
                        <button type="button" onClick={() => {setPlay(!Play)}} className={`Play ${Play ? "stop12" : "play12"}`} />
                        <div className="txt-15 subjectName">과목명은 여덟글자</div>
                        <img src="/resources/img/correction16.svg" alt="수정 버튼 이미지" />
                        <div className="tit-16 playTime">22:00:00</div>
                        <button type="button" className="closeWt12" onClick={() => {setDelete(!Delete)}} />
                    </div>
                    <div className="SubjectList">
                        <button type="button" onClick={() => {setPlay(!Play)}} className={`Play ${Play ? "stop12" : "play12"}`} />
                        <div className="txt-15 subjectName txt-NeonGr">국어</div>
                        <div className="tit-16 playTime">22:00:00</div>
                        <button type="button" className="closeWt12" onClick={() => {setDelete(!Delete)}} />
                    </div>
                    <div className="SubjectList">
                        <button type="button" onClick={() => {setPlay(!Play)}} className={`Play ${Play ? "stop12" : "play12"}`} />
                        <div className="txt-15 subjectName">
                            <input type="text" placeholder="과목명은 여덟글자"></input>
                        </div>
                        <img src="/resources/img/subjectCheck.svg" alt="과목명 작성 확인 버튼 이미지" />
                        <div className="tit-16 playTime">22:00:00</div>
                        <button type="button" className="closeWt12" onClick={() => {setDelete(!Delete)}} />
                    </div>
                    <div className="SubjectListPlus">
                        <button type="button" className="plus16" onClick={() => {setView02(!view02)}}/>
                    </div>
                </div>
                </>
            }
            {/* 과목삭제 */}
            {Delete && 
                <div className="layer">
                    <div className="Alarm">
                        <dl>
                            <dt>과목 삭제</dt>
                            <dd className="txt-15Gy5">과목명은 여덟글자 과목을 삭제하시겠습니까?</dd>
                        </dl>
                        <div className="Alarm-Btns">
                            <button onClick={ e => { setPopName(); }}>아니요</button>
                            <button type="button" onClick={() => {setGuide01(!Guide01)}}>네</button>
                        </div>
                    </div>
                </div>
            }
            {/* 스터디 과목 리스트 안내 팝업 */}
            {Guide01 && 
                <div className="layer">
                    <div className="Alarm">
                        <dl>
                            <dt>알림</dt>
                            <dd className="txt-15Gy5 lh160">과목을 추가하여 공부를 시작 하시겠습니까?<br/>(캠, 오디오는 ON/OFF로 설정할 수 있습니다.)</dd>
                        </dl>
                        <div className="Alarm-Btns">
                            <button onClick={ e => { setPopName(); }}>아니요</button>
                            <button type="button" onClick={() => {setGuide02(!Guide02)}}>네</button>
                        </div>
                    </div>
                </div>
            }
            {/* 스터디 과목 리스트 안내 팝업 02 */}
            {Guide02 && 
                <div className="layer">
                    <div className="Alarm">
                        <dl>
                            <dt>과목 삭제</dt>
                            <dd className="txt-15Gy5 lh160">한국사 공부를 시작 하시겠습니까?<br/>(캠, 오디오는 ON/OFF로 설정할 수 있습니다.)</dd>
                        </dl>
                        <div className="Alarm-Btns">
                            <button onClick={ e => { setPopName(); }}>아니요</button>
                            <button type="button" onClick={ e => { setPopName(); }}>네</button>
                        </div>
                    </div>
                </div>
            }
        </div>
        </>
    )
}
export default RtTopBar;
