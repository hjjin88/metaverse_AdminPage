import { useEffect, useState } from "react";


const ConApp = ({ togglePop }) => {
    
    return (
    <div className="appLayer">
        <div className="con_app">
            <div className="ic_hp"></div>
            <dl>
                <dt>1544-0001</dt>
                <dd>가입/일반문의</dd>
                <dd>평일 9시 ~ 18시</dd>
            </dl>
            <button type="button" className="con_app_btn">빠른상담신청</button>
        </div>
    </div>
    )
}

export default ConApp;