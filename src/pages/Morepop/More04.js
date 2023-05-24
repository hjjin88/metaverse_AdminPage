
import { useEffect, useState } from "react";

const More04 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty02 txt-11">
                <button type="button" onClick={ e => { setPopName(' '); }}><img src="/resources/img/studyStatus24.svg" alt="스터디 현황 버튼 이미지" /><p>스터디 현황</p></button>
                <button type="button" onClick={ e => { setPopName(' '); }}><img src="/resources/img/studyRanking24.svg" alt="스터디 랭킹 버튼 이미지" /><p>스터디 랭킹</p></button>
                <button type="button" onClick={ e => { setPopName('Study_Screen'); }}><img src="/resources/img/privateScreen24.svg" alt="전용화면 버튼 이미지" /><p>전용화면</p></button>
                <button type="button" onClick={ e => { setPopName('Study_Share'); }}><img src="/resources/img/screenShare24.svg" alt="화면공유 버튼 이미지" /><p>화면공유</p></button>
                <button type="button" onClick={ e => { setPopName('HostPass'); }}><img src="/resources/img/hostPass24.svg" alt="방장 넘기기 버튼 이미지" /><p>방장 넘기기</p></button>
            </div>
        </div>
        </>
    )
}
export default More04;