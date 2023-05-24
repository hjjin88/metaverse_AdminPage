
import { useEffect, useState } from "react";

const LtTopBar = ({ popName, setPopName }) => {

    return (
        <>
        <div className="LtTopBar Admin">
            <button type="button" className="exit24_bk" onClick={ e => { setPopName('ConsEnd'); }} />
            관리자 설정
        </div>
        </>
    )
}
export default LtTopBar;
