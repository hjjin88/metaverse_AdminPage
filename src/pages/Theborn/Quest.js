
import { useEffect, useState } from "react";

const Quest = ({setPopName }) => {

    const [view, setView] = useState(false); 

    return (
        <>
        <div className="Quest" onClick={setView}>
            <dl>
                <dt className={`mission ${view ? 'clear' : '' }`}>[미션] 빽다방</dt>
                <dd>빽다방 영상 시청하기</dd>
            </dl>
        </div>
        </>
    )
}
export default Quest;
