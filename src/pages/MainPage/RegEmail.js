
import { useEffect, useState } from "react";

const RegEmail = ({popName, setPopName}) => {

    return (
        <>
        <div className="layer" />
        <div className="MsgCon">
            <dl>
                <dt className="tit-17Gy2 pb11">오류</dt>
                <dd className="txt-15Gy5">이미 등록된 이메일이 존재합니다.</dd>
            </dl>
            <div className="sec-btns tit-15Gy3">
                <button type="button"
                className="txt-Pu"
                onClick={ e => { setPopName(); }}
                >확인</button>
            </div>
        </div>
        </>
    )
}
export default RegEmail;
