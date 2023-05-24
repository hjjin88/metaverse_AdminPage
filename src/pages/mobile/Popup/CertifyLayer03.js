import { useEffect, useState } from "react";


const CertifyLayer03 = ({ togglePop }) => {
    
    return (
    <div className="layer phone CertifyLayer alarm">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit">반</h1>
            </div>
            <div className="layer-contents">
                <ul className="carrier">
                    <li><a href="#none">1반</a></li>
                    <li><a href="#none">2반</a></li>
                    <li><a href="#none">3반</a></li>
                    <li><a href="#none">4반</a></li>
                    <li><a href="#none">5반</a></li>
                    <li><a href="#none">6반</a></li>
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

export default CertifyLayer03;