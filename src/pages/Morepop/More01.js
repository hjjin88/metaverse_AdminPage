
import { useEffect, useState } from "react";

const More01 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty01 txt-11">
                <button type="button"><img src="/resources/img/alarm24.svg" alt="알림 버튼 이미지" /><p>알림</p></button>
                <button type="button"><img src="/resources/img/alarmSetting24.svg" alt="알림 설정 버튼 이미지" /><p>알림 설정</p></button>
            </div>
        </div>
        </>
    )
}
export default More01;
