
import { useEffect, useState } from "react";

const More07 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty01 txt-11">
                <li><img src="/resources/img/consulting-entrance24.svg" alt="상담실 입장 버튼 이미지" /><p>상담실 입장</p></li>
                <li><img src="/resources/img/consulting-reservation24.svg" alt="상담 예약 버튼 이미지" /><p>상담 예약</p></li>
                <li><img src="/resources/img/consulting-produce24.svg" alt="상담실 생성 버튼 이미지" /><p>상담실 생성</p></li>
            </ul>
        </div>
        </>
    )
}
export default More07;
