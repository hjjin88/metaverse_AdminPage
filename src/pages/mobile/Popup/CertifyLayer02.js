import { useEffect, useState } from "react";


const CertifyLayer02 = ({ togglePop }) => {
    
    return (
    <div className="layer phone CertifyLayer alarm">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit">학년</h1>
            </div>
            <div className="layer-contents">
                <ul className="carrier">
                    <li><a href="#none">1학년</a></li>
                    <li><a href="#none">2학년</a></li>
                    <li><a href="#none">3학년</a></li>
                    <li><a href="#none">4학년</a></li>
                    <li><a href="#none">5학년</a></li>
                    <li><a href="#none">6학년</a></li>
                </ul>
            </div>
            <div className="layer-btns pd00">
                <button type="button" className="SecBtn01" onClick={togglePop}>취소</button>
                <button type="button" className="SecBtn">확인</button>
            </div>
        </div>
    </div>
    )
}

export default CertifyLayer02;