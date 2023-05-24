
import { useEffect, useState } from "react";

const ConsRequestAlarm = ({setPopName }) => {

    return (
        <>
        <div className="Alarm ty-02">
            <dl>
                <dt>상담 참여 요청</dt>
                <dd className="txt-15Gy5 "><span className="txt-Pu">경찬 </span>님이 참여 요청하셨습니다</dd>
                <dd className="txt-15Gy9">요청 메시지</dd>
                <dd className="txt-15Gy9 lh160">요청메시지가로최대스물다섯글자최대두줄만노출됩니다<br />요청메시지가로최대스물다섯글자최대두줄만노출됩니다</dd>
            </dl>
            <div className="tit-32Pu pdb30">57초</div>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>입장 거부</button>
                <button >수락</button>
            </div>
        </div>
        </>
    )
}
export default ConsRequestAlarm;
