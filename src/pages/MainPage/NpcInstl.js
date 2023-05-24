import { useEffect, useState } from "react";

const NpcInstl = ({ popName, setPopName }) => {

    const [isOn, setisOn] = useState(false);
    const toggleClick = () => {
    setisOn(!isOn);
    };

    return (
    <>
        <div className="layer" />
        <div className="Npc-instl">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">NPC 설치</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="npc-box">
                        <div className="npc-box-inner">
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC1</button>
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC2</button>
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC3</button>
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC4</button>
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC5</button>
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC6</button>
                            <button type="button" className={`npc ${isOn ? "check" : null }`} onClick={toggleClick}>NPC7</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC8</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC9</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC10</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC11</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC12</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC13</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC14</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC15</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC16</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC17</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC18</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC19</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC20</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC21</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC22</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC23</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC24</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC25</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC26</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC27</button>
                            <button type="button" className="npc" onClick={(e) => {setPopName('NpcInstlReg');}}>NPC28</button>
                        </div>
                    </div>
                    <div className="tit-13Bk pdl5">엔피씨에 적용할 내용을 입력해 주세요.</div>
                    <div className="write-con name">
                        <textarea type="text" rows="1" placeholder="엔피씨의 이름을 입력해 주세요."/>
                    </div>
                    <div className="write-con detail">
                        <textarea type="text" rows="1" placeholder="엔피씨 대화 내용을 입력해 주세요."/>
                    </div>
                    <div className="toggle_box">
                        <p className="tit-15Gy1">인증된 사용자만 상호작용 가능</p>
                        <label>
                            <input type="checkbox"/>
                            <i></i>
                        </label>
                        <button className="lecture-chromakey-pointer" style={{top: '10px', left: '10px'}}></button>
                    </div>
                </div>
            </div>
            <div className="Lbtns">
                <button type="button" className="sec-btn off-02 tit-16Gy3" onClick={(e) => {setPopName();}}>취소</button>
                <button type="button" className="sec-btn on-02 tit-16Gy3" onClick={(e) => {setPopName('NpcInstlGuide');}}>확인</button>
            </div>
        </div>
    </>
    );
};
export default NpcInstl;
