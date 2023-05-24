
import { useEffect, useState } from "react";

const More10 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty02 txt-11">
                <li><img src="/resources/img/lecture-information24.svg" alt="강의 정보 버튼 이미지" /><p>강의 정보</p></li>
                <li><img src="/resources/img/privateScreen24.svg" alt="전용화면 버튼 이미지" /><p>전용화면</p></li>
                <li><img src="/resources/img/presenter-list24.svg" alt="발표자 목록 버튼 이미지" /><p>발표자 목록</p></li>
                <li><img src="/resources/img/chromakey24.svg" alt="크로마키 버튼 이미지" /><p>크로마키</p></li>
                <li><img src="/resources/img/screenShare24.svg" alt="화면 공유 버튼 이미지" /><p>화면 공유</p></li>
                <li><img src="/resources/img/vote24.svg" alt="투표 버튼 이미지" /><p>투표</p></li>
                <li><img src="/resources/img/entireExit24.svg" alt="전체 퇴장 버튼 이미지" /><p>전체 퇴장</p></li>
            </ul>
        </div>
        </>
    )
}
export default More10;
