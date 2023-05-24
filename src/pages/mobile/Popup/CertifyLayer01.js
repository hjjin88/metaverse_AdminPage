import { useEffect, useState } from "react";


const CertifyLayer01 = ({ togglePop }) => {
    
    return (
    <div className="layer phone CertifyLayer alarm">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit">출생연도</h1>
            </div>
            <div className="layer-contents">
                <ul className="carrier">
                    <li><a href="#none">2003</a></li>
                    <li><a href="#none">2002</a></li>
                    <li><a href="#none">2001</a></li>
                    <li><a href="#none">2000</a></li>
                    <li><a href="#none">1999</a></li>
                    <li><a href="#none">1998</a></li>
                    <li><a href="#none">1997</a></li>
                    <li><a href="#none">1996</a></li>
                    <li><a href="#none">1995</a></li>
                    <li><a href="#none">1994</a></li>
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

export default CertifyLayer01;