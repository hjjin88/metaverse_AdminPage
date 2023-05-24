import { useEffect, useState } from "react";

const StudyStatus = ({ popName, setPopName }) => {

    const [view, setView] = useState(false); 
    const [view02, setView02] = useState(false); 
    const [view03, setView03] = useState(false); 
    const [view04, setView04] = useState(false); 
    const [ErrorPop, setErrorPop] = useState(false); 
    const [Target, setTarget] = useState(false); 

    return (
    <>
        <div className="layer" />
        <div className="StudyStatus CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">경찬 님의 스터디 현황</div>
            <div className="con-wrap">
                <div className="con-inner">
                    <div className="con-left">
                        <dl className="write-wrap pdb50">
                            <dt className="tit-13Bk">나의 다짐</dt>
                            <dd className="write-con">
                                <textarea type="text" rows="1" placeholder="다짐의 말을 작성하세요. 1줄"/>
                                <button type="button" className="write16" onClick={() => {setView(!view)}} />
                            </dd>
                        </dl>
                        {view && 
                            <div className="layer">
                                <div className="Alarm">
                                    <dl className="pdb13">
                                        <dt className="pdb16">나의 다짐</dt>
                                        <dd>
                                            <textarea className="write-box" type="text" rows="1" placeholder="다짐의 말을 작성하세요. 1줄"/>
                                        </dd>
                                    </dl>
                                    <div className="Alarm-Btns">
                                        <button onClick={ e => { setPopName(); }}>취소</button>
                                        <button type="button" onClick={ e => { setPopName(); }}>적용</button>
                                    </div>
                                </div>
                            </div>
                        }
                        <dl className="write-wrap pdb50">
                            <dt className="tit-13Bk">D-Day</dt>
                            <dd className="write-con">
                                <textarea type="text" rows="1" placeholder="D-Day를 선택하세요."/>
                                <button type="button" className="sec-btn-on01 txt-13Pu" onClick={() => {setView02(!view02)}}>D-Day 설정</button>
                            </dd>
                        </dl>
                        {view02 && 
                            <div className="layer">
                                <div className="Alarm">
                                    <dl className="pdb13">
                                        <dt className="pdb16">D-Day<button type="button" className="reset-btn txt-13GyD">초기화</button></dt>
                                        <dd className="mgb10">
                                            <textarea className="write-box txt-15Gy2" type="text" rows="1" placeholder="제목을 입력해 주세요."/>
                                        </dd>
                                        <dd>
                                            <input className="write-box txt-15Bk3" type="button" value="날짜를  선택해 주세요." onClick={() => {setView03(!view03)}}/>
                                            {view03 && 
                                                <div className="Alarm-calendar">
                                                    <img src="/resources/img/calendar02.png" alt="달력 이미지" />
                                                </div>
                                            }
                                        </dd>
                                    </dl>
                                    <div className="Alarm-Btns">
                                        <button onClick={ e => { setPopName(); }}>취소</button>
                                        <button type="button" onClick={() => {setErrorPop(!ErrorPop)}}>적용</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {ErrorPop && 
                            <div className="layer">
                                <div className="Alarm">
                                    <dl>
                                        <dt>오류</dt>
                                        <dd className="txt-15Gy5">디데이 제목 최소 1자 이상 입니다.</dd>
                                    </dl>
                                    <button type="button" className="sec-btn-100-on02" onClick={ e => { setPopName(); }}>확인</button>
                                </div>
                            </div>
                        }
                        <dl className="graph-wrap">
                            <dt className="tit-13Bk pdb20">오늘의 스터디</dt>
                            <dd>
                                <div className="graph-con">
                                    <img src="/resources/img/graph.png" alt="수정 버튼 이미지" />
                                    <div className="tit-34Gy3">13%</div>
                                </div>
                                <div className="txt-15Gy2 center pdb10">목표 달성까지<br/>24시간 59분 남았어요!</div>
                                <button type="button" className="sec-btn-on01 txt-13Pu" onClick={() => {setTarget(!Target)}} >목표 설정</button>
                            </dd>
                        </dl>
                        {Target && 
                            <div className="layer">
                                <div className="Alarm">
                                    <dl className="pdb13">
                                        <dt className="pdb16">D-Day</dt>
                                        <dd className="Dday">
                                            <div className="hour">
                                                <textarea className="write-box" type="text" maxLength="2" rows="1" placeholder="24"/>
                                                <p>시간</p>
                                            </div>
                                            <div className="minute">
                                                <textarea className="write-box" type="text" maxLength="2" rows="1" placeholder="24"/>
                                                <p>분</p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div className="Alarm-Btns">
                                        <button onClick={ e => { setPopName(); }}>취소</button>
                                        <button type="button" onClick={ e => { setPopName(); }}>적용</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="con-right">
                        <div className="weekly-con">
                            <button type="button" className="tit-13Bk pdb20" onClick={() => {setView04(!view04)}}>주간 스터디</button>
                            <div className="weekly-inner">
                                <button type="button" className="leftArrow16" />
                                <div className="txt-14Bk3">2023.01.16~2023.01.22</div>
                                <button type="button" className="rightArrow16" />
                            </div>
                        </div>
                        {view04 && 
                            <div className="layer">
                                <div className="Alarm">
                                    <dl className="pdb13">
                                        <dt className="pdb16">1월 18일의 공부 이력</dt>
                                        <dd>
                                            <textarea className="write-box" type="text" rows="1" />
                                            <div className="sec-time txt-15Gy5">00:00:00</div>
                                            <span className="sec-desc txt-13Bk15">* 0값은 표시안함</span>
                                        </dd>
                                    </dl>
                                    <button type="button" className="sec-btn-100-on02" onClick={ e => { setPopName(); }}>적용</button>
                                </div>
                            </div>
                        }
                        <div className="weekly-graph">
                            <img src="/resources/img/graph02.png" alt="주간 스터디 그래프 이미지" />
                        </div>
                        <div className="tit-13Bk pdb20">주간 스터디</div>
                        <div className="calendar">
                            <img src="/resources/img/calendar.png" alt="달력 이미지" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default StudyStatus;
