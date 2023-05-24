
import { useEffect, useState } from "react";

const MemReg = ({popName, setPopName}) => {

    return (
        <>
        <div className="layer" />
        <div className="MsgCon">
            <dl>
                <dt className="tit-17Gy2 pb11">알림</dt>
                <dd className="txt-15Gy5">맴버 등록이 완료되었습니다.</dd>
            </dl>
            <div className="sec-btns tit-15Gy3">
                <button type="button"
                className="txt-Pu"
                onClick={ e => { setPopName('Study_Screen'); }}
                >공유 시작</button>
            </div>
        </div>
        </>
    )
}
export default MemReg;
