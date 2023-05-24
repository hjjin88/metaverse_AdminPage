
import { useEffect, useState } from "react";

const Alarm01 = ({setPopName }) => {

    return (
        <>
        <div className="Alarm">
            <dl>
                <dt>알림</dt>
                <dd className="txt-15Gy5">마이룸에 입장 시 현재 스페이스에서 나가게 됩니다. 마이룸으로 이동하시겠습니까?</dd>
            </dl>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>취소</button>
                <button type="button">예</button>
            </div>
        </div>
        </>
    )
}
export default Alarm01;
