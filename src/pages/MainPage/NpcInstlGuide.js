import { useEffect, useState } from "react";

const NpcInstlGuide = ({ popName, setPopName }) => {

    return (
    <>
        <div className="NpcInstlGuide">
            <div className="Tour tit-25Gy1">
                적용
                <button type="button" className="close12" onClick={ e => { setPopName(); }} />
            </div>
            <div className="Npc-guide">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">유버스의 안내 NPC</div>
                <div className="con-wrap">
                    <div className="con-inner-col">
                        <div className="Invite-guide tit-15Bk">
                            안녕! 캠퍼스에 대한 정보를 알고싶니?
                            안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?
                        </div>
                        {/* <button type="button" className="skip-btn" onClick={(e) => {setPopName('NpcTourEnd');}}>
                            다음<span className="skip12"></span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default NpcInstlGuide;
