import { useEffect, useState } from "react";

const NpcDelete = ({ setPopName }) => {

    const [Toggle, setToggle] = useState(false);

    return (
        <>
            <div className="Tour on tit-25Gy1">
                <button type="button" onClick={ e => { setPopName('NpcDeletePop'); }}>
                    삭제
                    <button type="button" className="closeWt12" onClick={ e => { setPopName(); }} />
                </button>
            </div>
        </>
    );
};
export default NpcDelete;
