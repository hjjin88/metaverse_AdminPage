
import { useEffect, useState } from "react";

const AFMMicroscopyPracticeBtn = ({ popName, setPopName }) => {

    return (
        <>
        <div className="UnKnowBtn">
            <div className="Btns">
                <button onClick={ e => { setPopName('AFM3dMode'); }}>현미경3D모드</button>
                <button onClick={ e => { setPopName('AFM3dModeTutorial'); }}>현미경3D모드튜토리얼</button>
                <button onClick={ e => { setPopName('UserStatistics'); }}>사용자 통계</button>
            </div>
        </div>
        </>
    )
}
export default AFMMicroscopyPracticeBtn;
