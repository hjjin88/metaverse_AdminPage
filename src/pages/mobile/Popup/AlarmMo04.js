import { useEffect, useState } from "react";


const AlarmMo04 = ({ togglePop }) => {
    
    return (
        <div className="layer layer300">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">학생/교직원 인증 완료</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text center">인증이 완료되었습니다. <br />캠퍼스로 바로 이동합니다.</p>
                </div>
            </div>
            <div className="layer-btns pd016">
                <button type="button" className="SecBtn" onClick={togglePop}>확인</button>
            </div>
        </div>
    </div>
    )
}

export default AlarmMo04;