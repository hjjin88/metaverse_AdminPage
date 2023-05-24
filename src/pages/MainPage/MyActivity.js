import { useEffect, useState } from "react";
import PopFooter from "../PopFooter";

const MyActivity = ({ popName, setPopName }) => {

    const [view, setView] = useState(false); 
    const [Detail, setDetail] = useState(false); 

    return (
        <>
        <div className="layer" />
            <div className="MyActivity">
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">나의 활동일지</div>
                <div className="con-wrap">
                    <div className="con-inner-col">
                        <div className="board-option">
                            <div className="ui-dropdown">
                                <button type="button" className="txt-13Gy2" onClick={() => {setView(!view)}}>
                                    옵션{" "}
                                    {view ? <svg className="downArrow" /> : <svg className="downArrow up" />} 
                                </button>
                                {view && 
                                    <div className="dropdown-layer txt-13Gy2">
                                        <button type="button">옵션1</button>
                                        <button type="button">옵션2</button>
                                        <button type="button">옵션3</button>
                                    </div>
                                }
                            </div>
                            <div className="form-control">
                                <input type="text" className="datepicker-input" defaultValue="22.02.06 - 23.09.26"/>
                                <button type="button" className="btn-date">
                                    <svg className="ico-date">달력</svg>
                                </button>
                            </div>
                        </div> 
                        <div className="board-area">
                            <table className="board-list">
                                <caption><p>나의 활동일지 테이블</p></caption>
                                <thead>
                                    <tr>
                                        <th scope="col" width="20%">번호</th>
                                        <th scope="col" width="20%">스페이스</th>
                                        <th scope="col" width="20%">참여유형</th>
                                        <th scope="col" width="20%">날짜</th>
                                        <th scope="col" width="20%">상세</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>1</span></td>
                                        <td><span>상담실</span></td>
                                        <td><span>상담사</span></td>
                                        <td><span>23-01-26</span></td>
                                        <td>
                                            <button type="button" onClick={() => {setDetail(!Detail)}}>
                                                {" "}{Detail ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                            </button>
                                        </td>
                                    </tr>
                                    {Detail && 
                                    <tr className="toggle-contents" aria-labelledby="toggleTrigger">
                                        <td colSpan="5">
                                            <div className="toggle-title">
                                                <p>이용시간 이용시간 14:30:00~14:30:00 <span>총 시간 14:30:00</span></p>
                                            </div>
                                            <div className="toggle-text">
                                                상담실<br/>
                                                sdfghsdfghjcx (방 코드 표시)<br/>
                                                학번과 이름을 작성해 주세요. <br/>
                                                (상담등록시 상담정보 작성 내용 표시)<br/><br/>
                                                1. 혜진킴 (참여자닉네임) 01:30:1~02:30:00<br/>
                                                    (입장 시간 및 퇴장시간 표시)<br/>
                                                2. 내가버스 01:30:11~02:30:00<br/>
                                                3. 경찬성 01:30:11~02:30:00<br/>
                                            </div>
                                        </td>
                                    </tr>
                                    }
                                    <tr>
                                        <td><span>2</span></td>
                                        <td><span>상담실</span></td>
                                        <td><span>상담사</span></td>
                                        <td><span>23-01-26</span></td>
                                        <td>
                                            <button type="button" onClick={() => {setDetail(!Detail)}}>
                                                {" "}{Detail ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                            </button>
                                        </td>
                                    </tr>
                                    {Detail && 
                                    <tr className="toggle-contents">
                                        <td colSpan="5">
                                            <div className="toggle-title">
                                                <p>이용시간 이용시간 14:30:00~14:30:00 <span>총 시간 14:30:00</span></p>
                                            </div>
                                            <div className="toggle-text">
                                                상담실<br />
                                                sdfghsdfghjcx (방 코드 표시)<br />
                                                학번과 이름을 작성해 주세요. <br />
                                                (상담등록시 상담정보 작성 내용 표시)<br /><br />
                                                1. 혜진킴 (참여자닉네임) 01:30:1~02:30:00<br />
                                                    (입장 시간 및 퇴장시간 표시)<br />
                                                2. 내가버스 01:30:11~02:30:00<br />
                                                3. 경찬성 01:30:11~02:30:00<br />
                                            </div>
                                        </td>
                                    </tr>
                                    }
                                    <tr>
                                        <td><span>3</span></td>
                                        <td><span>상담실</span></td>
                                        <td><span>상담사</span></td>
                                        <td><span>23-01-26</span></td>
                                        <td>
                                            <button type="button" onClick={() => {setDetail(!Detail)}}>
                                                {" "}{Detail ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                            </button>
                                        </td>
                                    </tr>
                                    {Detail && 
                                    <tr className="toggle-contents" aria-labelledby="toggleTrigger" id="toggleContents">
                                        <td colSpan="5">
                                            <div className="toggle-title">
                                                <p>이용시간 이용시간 14:30:00~14:30:00 <span>총 시간 14:30:00</span></p>
                                            </div>
                                            <div className="toggle-text">
                                                상담실<br />
                                                sdfghsdfghjcx (방 코드 표시)<br />
                                                학번과 이름을 작성해 주세요. <br />
                                                (상담등록시 상담정보 작성 내용 표시)<br /><br />
                                                1. 혜진킴 (참여자닉네임) 01:30:1~02:30:00<br />
                                                    (입장 시간 및 퇴장시간 표시)<br />
                                                2. 내가버스 01:30:11~02:30:00<br />
                                                3. 경찬성 01:30:11~02:30:00<br />
                                            </div>
                                        </td>
                                    </tr>
                                    }
                                    <tr>
                                        <td><span>4</span></td>
                                        <td><span>상담실</span></td>
                                        <td><span>상담사</span></td>
                                        <td><span>23-01-26</span></td>
                                        <td>
                                            <button type="button" onClick={() => {setDetail(!Detail)}}>
                                                {" "}{Detail ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                            </button>
                                        </td>
                                    </tr>
                                    {Detail && 
                                    <tr className="toggle-contents" aria-labelledby="toggleTrigger" id="toggleContents">
                                        <td colSpan="5">
                                            <div className="toggle-title">
                                                <p>이용시간 이용시간 14:30:00~14:30:00 <span>총 시간 14:30:00</span></p>
                                            </div>
                                            <div className="toggle-text">
                                                상담실<br />
                                                sdfghsdfghjcx (방 코드 표시)<br />
                                                학번과 이름을 작성해 주세요. <br />
                                                (상담등록시 상담정보 작성 내용 표시)<br /><br />
                                                1. 혜진킴 (참여자닉네임) 01:30:1~02:30:00<br />
                                                    (입장 시간 및 퇴장시간 표시)<br />
                                                2. 내가버스 01:30:11~02:30:00<br />
                                                3. 경찬성 01:30:11~02:30:00<br />
                                            </div>
                                        </td>
                                    </tr>
                                    }
                                    <tr>
                                        <td><span>5</span></td>
                                        <td><span>상담실</span></td>
                                        <td><span>상담사</span></td>
                                        <td><span>23-01-26</span></td>
                                        <td>
                                            <button type="button" onClick={() => {setDetail(!Detail)}}>
                                                {" "}{Detail ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                            </button>
                                        </td>
                                    </tr>
                                    {Detail && 
                                    <tr className="toggle-contents" aria-labelledby="toggleTrigger" id="toggleContents">
                                        <td colSpan="5">
                                            <div className="toggle-title">
                                                <p>이용시간 이용시간 14:30:00~14:30:00 <span>총 시간 14:30:00</span></p>
                                            </div>
                                            <div className="toggle-text">
                                                상담실<br />
                                                sdfghsdfghjcx (방 코드 표시)<br />
                                                학번과 이름을 작성해 주세요. <br />
                                                (상담등록시 상담정보 작성 내용 표시)<br /><br />
                                                1. 혜진킴 (참여자닉네임) 01:30:1~02:30:00<br />
                                                    (입장 시간 및 퇴장시간 표시)<br />
                                                2. 내가버스 01:30:11~02:30:00<br />
                                                3. 경찬성 01:30:11~02:30:00<br />
                                            </div>
                                        </td>
                                    </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </>
    )
}
export default MyActivity;
