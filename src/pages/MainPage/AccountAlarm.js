
import { useEffect, useState } from "react";

const AccountAlarm = ({setPopName }) => {

    return (
        <>
        <div className="Alarm AccountAlarm">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <dl>
                <dt>계정연결</dt>
                <dd className="txt-15Gy5 lh160">
                    지금 인증한 계정은 사용중입니다.<br/>
                    <div className="name">[혜진킴]</div>
                    기존 계정을 삭제하고 현재 계정으로 연결하시겠습니까?
                </dd>
            </dl>
            <div className="Btns">
                <button className="sec-btn-100-off05" onClick={ e => { setPopName(); }}>취소</button>
                <button className="sec-btn-100-off05" onClick={ e => { setPopName(); }}>다시 로그인</button>
                <button className="sec-btn-100-on02" type="button">현재 계정으로 연결</button>
            </div>
        </div>
        </>
    )
}
export default AccountAlarm;
