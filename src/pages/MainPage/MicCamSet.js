
import { useEffect, useState } from "react";

const MicCamSet = ({setPopName }) => {

    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    return (
        <>
        <div className="CtPop MicCamSet">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }}></button>
            <div className="popTit">마이크/카메라 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <p className="center txt-10Bk6">(설정 &gt; 개인정보 및 보안 &gt; 권한에서 카메라와 마이크 권한 허용이 되어있는지 확인하세요.</p>
                    <div className="cam-box">
                        <video src="" />
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
                </div>
            </div>
            <div className="center pdb20">
                <button type="button" className="sec-btn-L-on02">확인</button>
            </div>
        </div>
        </>
    )
}
export default MicCamSet;
