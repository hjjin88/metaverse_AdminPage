
import { useEffect, useState } from "react";

const LtTopBar = ({ popName, setPopName }) => {

    return (
        <>
        <div className="LtTopBar">
            <button type="button" className="hamburgerMenu24" onClick={ e => { setPopName('Menu'); }} />
            {/* 상담실에서 나가기 버튼 이미지*/}
            {/* <button type="button" className="exit24" onClick={ e => { setPopName('ConsEnd'); }} /> */}
            <button type="button" className="loc" onClick={ e => { setPopName('Map'); }}>
                <img src="/resources/img/location24.svg" alt="현재장소 이름 이미지" />
                <div>평화문(정문)으로 가보자요요요오오오</div>
            </button>
        </div>
        </>
    )
}
export default LtTopBar;
