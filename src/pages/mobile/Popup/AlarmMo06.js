import { useEffect, useState } from "react";


const AlarmMo04 = ({ togglePop }) => {
    
    return (
        <div className="layer layer300">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">알람</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text center">
                    필수정보는 <br />모두 입력 바랍니다. 
                    </p>
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