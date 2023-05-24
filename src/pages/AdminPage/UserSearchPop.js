import { useState } from "react";

const UserSearchPop = ({ popName, setPopName }) => {

    return (
        <>
        <div className="layer UserSearchPop">
            <div>
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">스페이스 관리자 설정</div>
                <div className="con-wrap">
                    <div className="con-inner-col">
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default UserSearchPop;
