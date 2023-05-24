
import { useEffect, useState } from "react";

const More11 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty01 txt-11">
                <button type="button" onClick={ e => { setPopName('ConsProduce'); }}><img src="/resources/img/consulting-produce24.svg" alt="상담실 등록 버튼 이미지" /><p>상담실 생성</p></button>
                <button type="button" onClick={ e => { setPopName('ConsEntrance02'); }}><img src="/resources/img/consulting-entrance24.svg" alt="상담실 입장 버튼 이미지" /><p>상담실 입장</p></button>
            </div>
        </div>
        </>
    )
}
export default More11;
