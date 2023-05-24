
import { useEffect, useState } from "react";

const BGM = ({setPopName}) => {

    const [Repeat, setRepeat] = useState(false);
    const [Shuffle, setShuffle] = useState(false);
    const [Btn01, setBtn01] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
      setisOn(!isOn)
    }

    return (
        <>
        <div className="popCenter BGM">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">BGM</div>
            <div className="bgm-container-top">
                <div className="bgm-tab">
                    <button type="button" 
                    className={`sec-btn ${isOn ? "-on02" : null}`}
                    onClick={toggleHandler}
                    >클래식</button>
                    <button type="button" 
                    className={`sec-btn ${isOn ? null : "-on02"}`}
                    onClick={toggleHandler}
                    >ASMR</button>
                </div>
                <div className="bgm-btn">
                    <button type="button" 
                    className={`${Repeat ? "repeatOn15" : "repeatOff15"}`}
                    onClick={() => {setRepeat(!Repeat)}}/>
                    <button type="button" 
                    className={`${Shuffle ? "shuffleOff15" : "shuffleOn15"}`}
                    onClick={() => {setShuffle(!Shuffle)}}/>
                </div>
            </div>
            <div className="board-area">
                <table className="board-list">
                    <caption><p>BGM 리스트</p></caption>
                    <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">제목</th>
                        </tr>
                    </thead>
                    <>
                    {isOn === false ?
                    <div className="popCon">
                        <tbody>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <div className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</div>
                                    <div className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                     :
                    <div className="popCon">
                        <tbody>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <div className="bgm-play-tit">????????????.</div>
                                    <div className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr> <tr>
                                <td><span className="num">1</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">2</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">3</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="num">4</span></td>
                                <td className="align-left on">
                                    <span className="bgm-play-tit">리스트 파가니니 주제에 의한 대연습곡 리스트 파가니니dddddddddddddddddddd...</span>
                                    <span className="bgm-play-btn">
                                        <button type="button" 
                                        className={`${Btn01 ? "Stop-pu12" : "Play-gy12"}`}
                                        onClick={() => {setBtn01(!Btn01)}}/>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                     }
                    </>
                </table>
            </div>
        </div>
    </>
    )
}
export default BGM;