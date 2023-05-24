import { useEffect, useState } from "react";


const AlarmPc03 = ({ togglePop }) => {
    
    return (
        <div className="layer alliance">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">알람</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text center">인증코드가 틀렸습니다. <br />다시 확인 후 입력 부탁드립니다.</p>
                </div>
            </div>
            <div className="layer-btns pd016">
                <button type="button" className="SecBtn" onClick={togglePop}>확인</button>
            </div>
        </div>
    </div>
    )
}

export default AlarmPc03;