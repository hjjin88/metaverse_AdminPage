
import { useEffect, useState } from "react";

const More08 = ({ popName, setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty01 txt-11">
                <button type="button" onClick={ e => { setPopName('PrivateScreen'); }}>
                    <img src="/resources/img/privateScreen24.svg" alt="전용화면 버튼 이미지" />
                    <p>전용화면</p>
                </button>
                <button type="button" onClick={ e => { setPopName('ScreenShareAlarm'); }}>
                    <img src="/resources/img/screenShare24.svg" alt="화면공유 버튼 이미지" />
                    <p>화면공유</p>
                </button>
            </div>
        </div>
        </>
    )
}
export default More08;
