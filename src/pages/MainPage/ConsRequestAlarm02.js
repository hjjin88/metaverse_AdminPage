
import { useEffect, useState } from "react";

const ConsRequestAlarm02 = ({setPopName }) => {

    return (
        <>
        <div className="Alarm ty-02">
            <dl>
                <dt>상담 참여 요청</dt>
                <dd className="txt-15Gy5 "><span className="txt-Pu">경찬 </span>님이 참여 요청하셨습니다</dd>
            </dl>
            <div className="RequestMsg_con">
                <div className="">요청 메시지 :</div>
                <input type="text" placeholder="상담 입장 요청 메시지 공백 포함 27글자 입니다."/>
            </div>
            <div className="tit-32Pu pb30">57초</div>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>입장 거부</button>
                <button >수락</button>
            </div>
        </div>
        </>
    )
}
export default ConsRequestAlarm02;
