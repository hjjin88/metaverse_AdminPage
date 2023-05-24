import { useEffect, useState } from "react";

const NpcMessage = ({ popName, setPopName }) => {

    const [isMark, setisMark] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn);
    };

    return (
    <>
        <div className="Npc-guide Tb-NpcMessage">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName('TourEnd');}} />
            <div className="popTit">빽다방 아르바이트생</div>
            <img className="Npc-img" src="/resources/img/paikdb_npc.png" alt="NPC 빽다방 이미지" />
            {/* <img className="Npc-img" src="/resources/img/hspc_npc.png" alt="NPC 한신포차 이미지" /> */}
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="Invite-guide tit-15Bk">
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                    </div>
                    <button type="button" className="sec-btn on-02">
                        다음
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};
export default NpcMessage;
