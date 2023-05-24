import { useEffect, useState } from "react";
import PopFooter from "../PopFooter";

const MySetting = ({ popName, setPopName }) => {

    const [MikeToggle, setMikeToggle] = useState(false); 
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    const [CamToggle, setCamToggle] = useState(false); 
    return (
        <>
        <div className="layer" />
            <div className="MySetting">
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }}></button>
                <div className="popTit">마이 설정</div>
                <div className="con-wrap">
                    <div className="con-inner">
                        <div className="con-left">
                            <h2 className="ct-title">디바이스 설정</h2>
                            <div className="cam-view">
                                <div className="cam-box">
                                    <video className="video" src="" />
                                    <p>카메라 없음</p>
                                    <div className="cam-box-btns">
                                        <button type="button" className="btn-cam" onClick={() => {setCamOn(!CamOn)}}>
                                            <div className={`camOff ${CamOn ? "camOn" : "camOff"}`}/>
                                        </button>
                                        <button type="button" className="btn-cam" onClick={() => {setMikeOn(!MikeOn)}}>
                                            <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`}/>
                                        </button>
                                    </div>                            
                                </div>
                                <p className="cam-notice">
                                    마이크/카메라 연결 확인
                                    <span>(설정 &gt; 개인정보 및 보안 &gt; 권한에서 카메라와 마이크 권한 허용이 <br />되어있는지 확인하세요.</span>
                                </p>
                            </div>
                        </div>
                        <div className="con-right">
                            <div className="setting-option">
                                <h3 className="ct-title-sm">마이크</h3>
                                <div className="ui-dropdown">
                                    <button type="button" onClick={() => {setMikeToggle(!MikeToggle)}}>
                                        기본값-마이크배열(디지털마이크){" "}{MikeToggle ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                    </button>
                                    {MikeToggle&&
                                    <div className="dropdown-layer">
                                        <button type="button">기본값-마이크배열(디지털마이크)</button>
                                        <button type="button">기본값-마이크배열(디지털마이크)</button>
                                        <button type="button">기본값-마이크배열(디지털마이크)</button>
                                    </div>
                                    }
                                </div>
                                <h3 className="ct-title-sm">카메라</h3>
                                <div className="ui-dropdown">
                                    <button type="button" onClick={() => {setCamToggle(!CamToggle)}}>
                                        720p HD Camera{" "}{CamToggle ? <span className="downArrow"></span> : <span className="downArrow up"></span>} 
                                    </button>
                                    {CamToggle&&
                                    <div className="dropdown-layer">
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                        <button type="button">720p HD Camera</button>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </>
    )
}
export default MySetting;
