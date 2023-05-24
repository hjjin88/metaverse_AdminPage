import { useEffect, useState } from "react";


const AlarmPc02 = ({ togglePop }) => {
    
    return (
    <div className="layer alliance connect_ly">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">알람</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text center">입력하신 XXX가 정확한가요?</p>
                </div>
            </div>
            <div className="layer-btns pd016">
                <button type="button" className="SecBtn01" onClick={togglePop}>취소</button>
                <button type="button" className="SecBtn">예</button>
            </div>
        </div>
    </div>
    )
}

export default AlarmPc02;