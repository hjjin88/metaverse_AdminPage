
import { useEffect, useState } from "react";

const Study_Share = ({popName, setPopName}) => {

    return (
        <>
        <div className="layer" />
        <div className="Study_Share MsgCon">
            <dl>
                <dt className="tit-17Gy2 pb11">화면공유</dt>
                <dd className="txt-15Gy5">다른사용자가 알림을 비롯하여 내 화면의 모든 내용을 볼수 있습니다.</dd>
            </dl>
            <div className="sec-btns tit-15Gy3">
                <button type="button"
                onClick={ e => { setPopName(); }}
                >취소</button>
                <button type="button"
                className="txt-Pu"
                onClick={ e => { setPopName('Study_Screen'); }}
                >공유 시작</button>
            </div>
        </div>
        </>
    )
}
export default Study_Share;
