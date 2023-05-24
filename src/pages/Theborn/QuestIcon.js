import { useEffect, useState } from "react";

const QuestIcon = ({ popName, setPopName }) => {

    const [isMark, setisMark] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn);
    };

    return (
    <>
        <div className="Quest-icon">
            {/* 미션 알림 아이콘 */}
            <button type="button" className="Npc-alert">
                <img src="/resources/img/tb-alert50.svg" alt="미션 알림 아이콘" />
            </button>
            {/* 이벤트 보기 아이콘 */}
            <button type="button" className="Event-view">
                <img src="/resources/img/tb-zoom50.svg" alt="이벤트 보기 아이콘" />
            </button>
            {/* 이벤트 재생 아이콘 */}
            <button type="button" className="Event-play">
                <img src="/resources/img/tb-play50.svg" alt="이벤트 재생 아이콘" />
            </button>
            {/* 히든 메뉴 말풍선 */}
            <button type="button" className="Event-balloon">
                <p className="tit-13Gy2">한신닭발</p>
            </button>
        </div>
    </>
    );
};
export default QuestIcon;
