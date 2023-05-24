
import { useEffect, useState } from "react";
import Chatting from './Chatting';

const PrivateScreen = ({setPopName }) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn)
    }

    return (
        <>
        {/* 상담사 화면보기 - 전용화면 클릭 */}
        <div className="layer01" />
        <div className="PrivateScreen">
            {/* 화면보기 1인 */}
            <div className="cam-con ty01">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                </div>
            </div>

            {/* 화면보기 2인 */}
            {/* <div className="cam-con ty02">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
            </div> */}

            {/* 화면보기 2인-축소 */} {/* 화면보기 2인-축소-카메라없음 */}
            {/* <div className="cam-con ty01">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoomOut20.svg" alt="화면 축소 버튼 이미지" />
                    </button>
                    <div className="btRt zoomOut">
                        <video src="" />
                        <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                        <img className="btLt bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <button type="button" className="topRt-pfp">
                            <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                        </button>
                        <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                        <div className="cam-desc txt-13Bk center">카메라 없음</div>
                    </div>   
                </div>
            </div> */}
            {/* 화면보기 4인 */}
            {/* <div className="cam-con ty03">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
            </div> */}

            {/* 화면보기 8인 */}
            {/* <div className="cam-con ty04">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
            </div> */}
        </div>





        {/* 화면보기 + 채팅창 */}
        {/* <div className="PrivateScreen ty01"> */}
            {/* 화면보기 1인 */}
            {/* <div className="cam-con-ty01">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                </div>
            </div> */}

            {/* 화면보기 2인 */}
            {/* <div className="cam-con ty02">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
            </div> */}

            {/* 화면보기 2인-축소 */} {/* 화면보기 2인-축소-카메라없음 */}
            {/* <div className="cam-con-ty01">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoomOut20.svg" alt="화면 축소 버튼 이미지" />
                    </button>
                    <div className="btRt zoomOut">
                        <video src="" />
                        <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                        <img className="btLt bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <button type="button" className="topRt-pfp">
                            <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                        </button>
                        <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                        <div className="cam-desc txt-13Bk center">카메라 없음</div>
                    </div>   
                </div>
            </div> */}

            {/* 화면보기 4인 */}
            {/* <div className="cam-con ty03">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
            </div> */}

            {/* 화면보기 8인 */}
            {/* <div className="cam-con ty04">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt-pfp">
                        <img src="/resources/img/zoom20.svg" alt="화면 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOff20" : "mikeOn20" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
            </div> */}
        {/* </div>
        <Chatting/> */}
        </>
    )
}
export default PrivateScreen;
