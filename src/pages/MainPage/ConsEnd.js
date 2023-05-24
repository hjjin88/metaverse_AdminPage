
import { useEffect, useState } from "react";

const ConsEnd = ({setPopName }) => {

    return (
        <>
        <div className="Alarm">
            <dl>
                <dt>상담 종료</dt>
                <dd className="lh160 txt-15Gy5">
                    현재 진행 중인 상담이 종료되며<br />
                    상담실에서 나가게 됩니다.<br />
                    정말로 종료하시겠습니까?
                </dd>
            </dl>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>취소</button>
                <button>확인</button>
            </div>
        </div>
        </>
    )
}
export default ConsEnd;
