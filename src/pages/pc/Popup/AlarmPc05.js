import { useEffect, useState } from "react";


const AlarmPc04 = ({ togglePop }) => {
    
    return (
        <div className="layer alliance">
        <div>
            <div className="layer-header mgb10">
                <h1 className="layer-title">알람</h1>
            </div>
            <div className="layer-contents">
                <div className="inner-html">
                    <p className="text center">
                    ‘구글로 시작하기’에서 <br />
                    소속 학교 이메일 주소 <br />
                    (@sookmyung.ac.kr)로 <br />
                    다시 인증 바랍니다.
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

export default AlarmPc04;