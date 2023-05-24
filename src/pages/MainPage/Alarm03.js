
import { useEffect, useState } from "react";

const Alarm03 = ({setPopName }) => {

    return (
        <>
        <div className="Alarm">
            <dl>
                <dt>전체 퇴장</dt>
                <dd className="txt-15Gy5">강의에서 전체 퇴장 시켰습니다.</dd>
            </dl>
            <button className="sec-btn-100-on02" onClick={ e => { setPopName(); }}>확인</button>
        </div>
        </>
    )
}
export default Alarm03;
