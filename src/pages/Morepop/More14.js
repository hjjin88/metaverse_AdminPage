
import { useEffect, useState } from "react";

const More14 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty02 txt-11">
                <button type="button" onClick={ e => { setPopName('Tutorial'); }}><img src="/resources/img/tutorial24.svg" alt="튜토리얼 버튼 이미지" /><p>튜토리얼</p></button>
                <button type="button" onClick={ e => { setPopName(); }}><img src="/resources/img/screenshot24.svg" alt="스크린샷 버튼 이미지" /><p>스크린샷</p></button>
                <button type="button" onClick={ e => { setPopName('Tour'); }}><img src="/resources/img/touring24.svg" alt="투어하기 버튼 이미지" /><p>투어하기</p></button>
                <button type="button" onClick={ e => { setPopName('Invite'); }}><img src="/resources/img/invite24.svg" alt="초대하기 버튼 이미지" /><p>초대하기</p></button>
                <button type="button" onClick={ e => { setPopName('NpcInstl'); }}><img src="/resources/img/npc-install24.svg" alt="NPC설치 버튼 이미지" /><p>NPC설치</p></button>
                <button type="button" onClick={ e => { setPopName(); }}><img src="/resources/img/setting.svg" alt="설정 버튼 이미지" /><p>설정</p></button>
            </div>
        </div>
        </>
    )
}
export default More14;
