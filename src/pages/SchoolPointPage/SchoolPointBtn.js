
import { useEffect, useState } from "react";

const SchoolPointBtn = ({ popName, setPopName }) => {

    return (
        <>
        <div className="UnKnowBtn">
            <div className="Btns">
                
                <div style={{flex:'none', width: '100%', border: '1px solid #ddd'}}></div>
                <button onClick={ e => { setPopName('SchoolPointList'); }}>캠퍼스 포인트 상점</button>
                <button onClick={ e => { setPopName('SchoolPointListAdmin'); }}>캠퍼스 포인트 상점_관리자</button>
                <button onClick={ e => { setPopName('Message'); }}>알림메시지 목록</button>
                <button onClick={ e => { setPopName('MessageInner'); }}>알림메시지</button>
                <button onClick={ e => { setPopName('MyProfile'); }}>마이프로필</button>

            </div>
        </div>
        </>
    )
}
export default SchoolPointBtn;
