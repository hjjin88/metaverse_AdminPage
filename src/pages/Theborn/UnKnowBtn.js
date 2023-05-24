
import { useEffect, useState } from "react";

const Tb_UnKnowBtn = ({ popName, setPopName }) => {

    return (
        <>
        <div className="UnKnowBtn">
            <div className="Btns">
                <button onClick={ e => { setPopName('Quest'); }}>퀘스트_확인</button>
                <button onClick={ e => { setPopName('Pop_ty01'); }}>미션 안내 팝업창</button>
                <button onClick={ e => { setPopName('Pop_ty02'); }}>미션 성공 팝업창</button>
                <button onClick={ e => { setPopName('Kiosk'); }}>키오스크</button>
                <button onClick={ e => { setPopName('NpcMessage'); }}>NPC 말풍선</button>
                <button onClick={ e => { setPopName('Message'); }}>이벤트 메세지 목록</button>
                <button onClick={ e => { setPopName('MessageInner'); }}>이벤트 메세지 팝업</button>
                <button onClick={ e => { setPopName('QuestIcon'); }}>퀘스트 아이콘 모음</button>
                <button onClick={ e => { setPopName('Stamp'); }}>스탬프 팝업창</button>
            </div>
        </div>
        </>
    )
}
export default Tb_UnKnowBtn;
