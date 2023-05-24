import { useEffect, useState } from "react";

const TourParticipant = ({ setPopName }) => {

    const [Toggle, setToggle] = useState(false);
    
    return (
        <>
            <div className={`Tour tit-25Gy1 ${Toggle ? "on" : null}`}>
                <button
                    onClick={() => {
                        setToggle(!Toggle);
                    }}
                >
                    캠퍼스 투어 진행중
                </button>
                {Toggle && (
                    <div className="toggle tit-16Gy3">
                        <button type="button">참여하기</button>
                    </div>
                )}
            </div>
        </>
    );
};
export default TourParticipant;
