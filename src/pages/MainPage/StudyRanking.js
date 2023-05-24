
import { useEffect, useState } from "react";

const StudyRanking = ({setPopName }) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
      setisOn(!isOn)
    }

    return (
        <>
        <div className="StudyRanking TopCtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">실시간 스터디 팝업</div>
            <div className="realTimeStudy-container">
                <div className="realTimeStudy-container-top">
                    <div className="realTimeStudy-tab">
                        <button type="button"
                        className={` ${isOn ? "on" : null}`}
                        onClick={toggleHandler}
                        >실시간</button>
                        <button type="button"
                        className={` ${isOn ? "on" : null}`}
                        onClick={toggleHandler}
                        >주간</button>
                        <button type="button"
                        className={`${isOn ? "on" : null}`}
                        onClick={toggleHandler}
                        >월간</button>
                    </div>
                </div>
                <div className="realTimeStudy-container-box">
                <div className="realTimeStudy-ranking">
                    <div className="study-ranking">
                        <span className="ranking-img r-02 bg_beige">
                            <img src="resources/img/bg.png" alt="프로필 이미지" />
                        </span>
                        <span className="ranking-txt-name">ZZAZANG</span>
                        <span className="ranking-txt-time">00:00:10</span>
                    </div>
                    <div className="study-ranking">
                        <span className="ranking-img r-01 bg_pink">
                            <img src="resources/img/bg.png" alt="프로필 이미지" />
                        </span>
                        <span className="ranking-txt-name">BBOOGGUM</span>
                        <span className="ranking-txt-time">00:00:10</span>
                    </div>
                    <div className="study-ranking">
                        <span className="ranking-img r-03 bg_purple">
                            <img src="resources/img/bg.png" alt="프로필 이미지" />
                        </span>
                        <span className="ranking-txt-name">Angela</span>
                        <span className="ranking-txt-time">00:00:10</span>
                    </div>
                </div>
                <div className="board-area">
                <table className="board-list">
                    <caption><p>BGM 리스트</p></caption>
                    <colgroup>
                        <col width="8%"/>
                        <col width="80%"/>
                        <col width="12%"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><span>4</span></td>
                            <td className="align-left">
                                학생 입니다.
                            </td>
                            <td className="align-left">
                                00:00:00
                            </td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td className="align-left">
                                학생 입니다.
                            </td>
                            <td className="align-left">
                                00:00:00
                            </td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td className="align-left">
                                학생 입니다.
                            </td>
                            <td className="align-left">
                                00:00:00
                            </td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td className="align-left">
                                학생 입니다.
                            </td>
                            <td className="align-left">
                                00:00:00
                            </td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td className="align-left">
                                학생 입니다.
                            </td>
                            <td className="align-left">
                                00:00:00
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default StudyRanking;
