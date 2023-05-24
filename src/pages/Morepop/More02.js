
import { useEffect, useState } from "react";

const More02 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty02 txt-11">
                <button><img src="/resources/img/studyStatus24.svg" alt="스터디 현황 버튼 이미지" onClick={ e => { setPopName('StudyStatus'); }} /><p>스터디 현황</p></button>
                <button><img src="/resources/img/studyRanking24.svg" alt="스터디 랭킹 버튼 이미지" onClick={ e => { setPopName('StudyRanking'); }} /><p>스터디 랭킹</p></button>
                <button><img src="/resources/img/camFloat.svg" alt="캠플로트 버튼 이미지" onClick={ e => { setPopName('CamFloat'); }} /><p>캠플로트</p></button>
                <button><img src="/resources/img/BGM.svg" alt="BGM 버튼 이미지" onClick={ e => { setPopName('BGM'); }} /><p>BGM</p></button>
                <button><img src="/resources/img/memo24.svg" alt="메모 버튼 이미지" onClick={ e => { setPopName('Memo'); }} /><p>메모</p></button>
            </div>
        </div>
        </>
    )
}
export default More02;
