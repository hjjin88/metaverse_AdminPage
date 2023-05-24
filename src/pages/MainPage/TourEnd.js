
import { useEffect, useState } from "react";

const TourEnd = ({setPopName }) => {

    return (
        <>
        <div className="Alarm">
            <dl>
                <dt>NPC 투어 종료</dt>
                <dd className="txt-15Gy5">NPC 투어를 종료 하시겠습니까?</dd>
            </dl>
            <div className="Alarm-Btns">
                <button type="button" onClick={ e => { setPopName(); }}>취소</button>
                <button type="button">확인</button>
            </div>
        </div>
        </>
    )
}
export default TourEnd;
