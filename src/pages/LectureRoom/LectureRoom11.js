import {useState} from "react";

const LectureRoom00 = ({setPopName }) => {
    const [MikeToggle, setMikeToggle] = useState(false);
    const [MikeOn, setMikeOn] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
        setisOn(!isOn)
        }
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-right-top">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">발표자</div>
                    <div className="layer-body">
                        <div className="lecture-call-list">
                            <div className="lecture-call-item">
                                <div className="webcam">
                                    <video className="webcam-video" src="http://amssamples.streaming.mediaservices.windows.net/2e91931e-0d29-482b-a42b-9aadc93eb825/AzurePromo.mp4" />
                                    <button type={"button"} className="webcam-end">발표끝내기</button>
                                    <div className="webcam-info">
                                        <div className="webcam-user">
                                            <span className="webcam-user-image "><img src="/resources/img/bg.png" alt=""/></span>
                                            <span className="webcam-user-name">닉네임은8자까지</span>
                                        </div>
                                        <button type="button" className="btRt-mike" onClick={toggleHandler}>
                                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            <div className="lecture-call-item">
                                <div className="webcam">
                                    <video className="webcam-video" src="" />
                                    {/*<p className="webcam-none-camera">카메라 없음</p>*/}
                                    <button type={"button"} className="webcam-end">발표끝내기</button>
                                    <div className="webcam-info">
                                        <div className="webcam-user">
                                            <span className="webcam-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                            <span className="webcam-user-name">name</span>
                                        </div>
                                        <button type="button" className="btRt-mike" onClick={toggleHandler}>
                                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            <div className="lecture-call-item">
                                <div className="webcam">
                                    <video className="webcam-video" src="" />
                                    <p className="webcam-none-camera">카메라 없음</p>
                                    <button type={"button"} className="webcam-end">발표끝내기</button>
                                    <div className="webcam-info">
                                        <div className="webcam-user">
                                            <span className="webcam-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                            <span className="webcam-user-name">name</span>
                                        </div>
                                        <button type="button" className="btRt-mike" onClick={toggleHandler}>
                                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            <div className="lecture-call-item">
                                <div className="webcam">
                                    <video className="webcam-video" src="" />
                                    <p className="webcam-none-camera">카메라 없음</p>
                                    <button type={"button"} className="webcam-end">발표끝내기</button>
                                    <div className="webcam-info">
                                        <div className="webcam-user">
                                            <span className="webcam-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                            <span className="webcam-user-name">name</span>
                                        </div>
                                        <div className="webcam-buttons">
                                            <button
                                                type="button" className="webcam-icon" onClick={() => {
                                                setMikeOn(!MikeOn)
                                            }}
                                            >
                                                <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
