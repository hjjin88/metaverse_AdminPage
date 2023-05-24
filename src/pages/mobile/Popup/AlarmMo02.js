import { useEffect, useState } from "react";


const AlarmMo02 = ({ togglePop }) => {
    
    return (
    <div className="layer connect_ly layer300">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">알람</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text">입력하신 XXX가 정확한가요?</p>
                </div>
            </div>
            <div className="layer-btns mgt6 pd016">
                <button type="button" className="SecBtn01" onClick={togglePop}>취소</button>
                <button type="button" className="SecBtn">예</button>
            </div>
        </div>
    </div>
    )
}

export default AlarmMo02;