
import { useEffect, useState } from "react";

const ScreenShareAlarm = ({popName, setPopName}) => {

    return (
        <>
        <div className="Alarm">
            <dl>
                <dt>화면 공유</dt>
                <dd className="txt-15Gy5 lh160">다른 사용자가 알림을 비롯하여 내 화면의<br />모든 내용을 볼 수 있습니다.</dd>
            </dl>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>취소</button>
                <button type="button" onClick={ e => { setPopName('ScreenShare'); }}>공유시작</button>
            </div>
        </div>
        </>
    )
}
export default ScreenShareAlarm;
