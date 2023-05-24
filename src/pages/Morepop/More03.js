
import { useEffect, useState } from "react";

const More03 = ({setPopName }) => {

    return (
        <>
        <div className="layer" />
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty02 txt-11">
                <button type="button" onClick={ e => { setPopName('StudyStatus'); }}><img src="/resources/img/studyStatus24.svg" alt="스터디 현황 버튼 이미지" /><p>스터디 현황</p></button>
                <button type="button" onClick={ e => { setPopName('StudyRanking'); }}><img src="/resources/img/studyRanking24.svg" alt="스터디 랭킹 버튼 이미지" /><p>스터디 랭킹</p></button>
                <button type="button" onClick={ e => { setPopName('Library_Screen'); }}><img src="/resources/img/privateScreen24.svg" alt="전용화면 버튼 이미지" /><p>전용화면</p></button>
                <button type="button" onClick={ e => { setPopName('BGM'); }}><img src="/resources/img/BGM.svg" alt="BGM 버튼 이미지" /><p>BGM</p></button>
                <button type="button" onClick={ e => { setPopName('CamView'); }}><img src="/resources/img/camView24.svg" alt="캠보기 버튼 이미지" /><p>캠보기</p></button>
            </div>
        </div>
        </>
    )
}
export default More03;
