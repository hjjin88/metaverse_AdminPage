import {useState} from "react";

const LectureRoom00 = ({setPopName }) => {

    const [View, setView] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">투표 목록</div>
                    <div className="layer-body">
                        <div className="poll-chart">
                            <div className="poll-chart-title">방장을 누구로 할까요?</div>
                            <div className="poll-chart-info">
                                <div>
                                    <span>남은 투표 시간</span>
                                    <strong>00:34:27</strong>
                                </div>
                                <div>
                                    <span>참여</span>
                                    <strong>4명</strong>
                                </div>
                            </div>
                            <ul className="poll-chart-list">
                                <li>
                                    <label>
                                        <input type="checkbox"/>
                                        <div>
                                            <span className="poll-chart-name">짜장</span>
                                            <span className="poll-chart-value">1/4</span>
                                            <span className="poll-chart-graph" style={{width: '10%'}}></span>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox"/>
                                        <div>
                                            <span className="poll-chart-name">짜장</span>
                                            <span className="poll-chart-value">1/4</span>
                                            <span className="poll-chart-graph" style={{width: '20%'}}></span>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox"/>
                                        <div>
                                            <span className="poll-chart-name">짜장</span>
                                            <span className="poll-chart-value">1/4</span>
                                            <span className="poll-chart-graph" style={{width: '30%'}}></span>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox"/>
                                        <div>
                                            <span className="poll-chart-name">짜장</span>
                                            <span className="poll-chart-value">1/4</span>
                                            <span className="poll-chart-graph" style={{width: '40%'}}></span>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                            <div className="poll-chart-desc">※ 투표 후 선택지를 변경할 수 없습니다.</div>
                        </div>
                    </div>
                    <div className="layer-footer center mb10">
                        <button type="button" 
                        className={`sec-btn-L${View ? "on02" : "off02"} tit-20Gy3`}
                        onClick={() => {setView(!View)}} 
                        >투표 목록</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
