
import { useEffect, useState } from "react";

const Alarm02 = ({setPopName }) => {

    return (
        <>
        <div className="Alarm">
            <dl>
                <dt>전체 퇴장</dt>
                <dd className="txt-15Gy5 lh160">
                    현재 강의에 참여중인 모든 참여자들이<br />
                    강제로 퇴장당하게 됩니다.<br />
                    정말로 퇴장시키시겠습니까?<br />
                </dd>
            </dl>
            <div className="Alarm-Btns">
                <button onClick={ e => { setPopName(); }}>취소</button>
                <button type="button">확인</button>
            </div>
        </div>
        </>
    )
}
export default Alarm02;
