
import { useEffect, useState } from "react";

const Library_Screen = ({popName, setPopName}) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
        setisOn(!isOn)
        }

    return (
        <>
        <div className="layer01" />
        <div className="PrivateScreen Library_Screen">
            {/* 화면보기 8인 */}
            <div className="cam-con ty04">
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 확대 버튼 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video className="no-cam" src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 확대 버튼 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="cam-desc txt-20Bk center">카메라 없음</div>
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button> 
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
                <div className="camScreen">
                    <video src="" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                    <button type="button" className="topRt">
                        <img src="/resources/img/Full19.svg" alt="화면 확대 버튼 이미지" />
                    </button>                    
                    <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                        <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                    </button>   
                </div>
            </div>
        </div>
        </>
    )
}
export default Library_Screen;
