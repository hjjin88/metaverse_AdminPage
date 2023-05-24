
import { useEffect, useState } from "react";

const NpcDeletePop = ({setPopName }) => {

    return (
        <>
        <div className="layer" />
        <div className="Alarm">
            <dl>
                <dt>NPC 삭제</dt>
                <dd className="txt-15Gy5">NPC를 삭제 하시겠습니까?</dd>
            </dl>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>취소</button>
                <button>확인</button>
            </div>
        </div>
        </>
    )
}
export default NpcDeletePop;
