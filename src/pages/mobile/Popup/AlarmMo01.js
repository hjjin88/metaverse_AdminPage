import { useEffect, useState } from "react";


const AlarmMo01 = ({ togglePop }) => {

    return (
    <div className="layer connect_ly layer300">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">알람</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text">해당 기능을 사용하려면 인증이 필요합니다.<br />인증하시겠습니까?</p>
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

export default AlarmMo01;