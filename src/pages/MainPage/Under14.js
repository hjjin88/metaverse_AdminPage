
import { useEffect, useState } from "react";

const Under14 = ({setPopName }) => {

    return (
        <>
        <div className="layer"/>
        <div className="Alarm">
            <dl>
                <dt>만 14세 미만이신가요?</dt>
                <dd className="txt-15Gy5 lh140">만 14세 미만은 <br/>보호자 동의가 필요합니다</dd>
            </dl>
            <div className="Alarm-Btns">
                <button type="button">14세 이상입니다.</button>
                <button type="button" onClick={ e => { setPopName(); }}>14세 이상입니다.</button>
            </div>
        </div>
        </>
    )
}
export default Under14;
