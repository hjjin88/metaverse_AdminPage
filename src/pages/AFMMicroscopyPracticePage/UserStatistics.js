import { useState } from "react";

const UserStatistics = ({ popName, setPopName }) => {

    const [View02, setView02] = useState(false); 

    return (
        <>
        <div className="layer user-statistics">
            <div>
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">사용자 통계</div>
                <div className="con-wrap">
                    <div className="con-inner-col">
                        <div className="statistics-wrap">
                            <div className="sub_title">사용자 통계</div>
                            <div className="statistics-number-wrap">
                                <div className="statistics-number">
                                    <img class="icon" src="/resources/img/user_profile_icon.svg" alt="사용자 통계 아이콘"/>
                                    <span>일일 사용자수</span>
                                    <div>17</div>
                                </div>
                                <div className="statistics-number">
                                    <img class="icon" src="/resources/img/user_profile_icon.svg" alt="사용자 통계 아이콘"/>
                                    <span>누적 방문자 수</span>
                                    <div>999</div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-wrap">
                            <div className="sub_title">사용자 학습 내역</div>
                            <div className="board-option">
                                <div className="form-control">
                                    <input type="text" className="datepicker-input search" placeholder="닉네임 검색하기"/>    
                                    <button type="button" class="search20"></button>
                                </div>
                                <div className="form-control">
                                    <button type="button" className="datepicker-input" onClick={() => {setView02(!View02)}}>
                                        <div className="date">23-03-22 ~ 23-03-23</div>
                                        <svg className="ico-date">달력</svg>
                                    </button>
                                    {View02 &&
                                        <div className="calendar-modal">
                                            <img src="/resources/img/calendar_img.svg" alt="캘린더 이미지"/>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="board-area">
                                <table className="board-list">
                                    <caption><p>나의 활동일지 테이블</p></caption>
                                    <thead>
                                        <tr>
                                            <th scope="col" width="15%">날짜</th>
                                            <th scope="col" width="35%">학습 시간</th>
                                            <th scope="col" width="35%">닉네임</th>
                                            <th scope="col" width="15%">학습률(%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>2023-03-20</span></td>
                                            <td><span>00:13:05</span></td>
                                            <td><span>Keuns1234</span></td>
                                            <td><span>70%</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default UserStatistics;
