
import { useEffect, useState } from "react";

const CampusSelect = ({setPopName }) => {

    const [View, setView] = useState(0); 
    const [Ent, setEnt] = useState(false); 

    return (
        <>
        <div className="layer" />
        <div className="CampusSelect CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">입장할 캠퍼스를 선택해 주세요</div>
            <div class="wrap-btn-selectcampus">
                <button type="button" onClick={(e) => {setView(0);}}className={`btn-selectcampus ${View === 0 ? 'on' : null }`}>공유 캠퍼스</button>
                <button type="button" onClick={(e) => {setView(1);}}className={`btn-selectcampus ${View === 1 ? 'on' : null }`}>숙명여자 대학교</button>
                <button type="button" onClick={(e) => {setView(2);}}className={`btn-selectcampus ${View === 2 ? 'on' : null }`}>순천향 대학교</button>
                <button type="button" onClick={(e) => {setView(3);}}className={`btn-selectcampus ${View === 3 ? 'on' : null }`}>청주대학교</button>
            </div>
            <div className="sec-btns tit-16Gy3">
                <button type="button" className="sec-btn-M">닫기</button>
                <button type="button" className="sec-btn-M-on02" onClick={() => {setEnt(!Ent)}} >입장</button>
            </div>
            {Ent && 
                <div className="layer">
                    <div className="Alarm">
                        <dl>
                            <dt>알림</dt>
                            <dd className="txt-15Gy5 lh160">캠퍼스에 입장 시 현재 스페이스에서 나가게 됩니다.<br/>캠퍼스로 이동하시겠습니까?</dd>
                        </dl>
                        <div className="Alarm-Btns">
                            <button onClick={ e => { setPopName(); }}>취소</button>
                            <button type="button">예</button>
                        </div>
                    </div>
                </div>
            }
        </div>
        </>
    )
}
export default CampusSelect;
