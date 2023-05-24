
import { useEffect, useState } from "react";

const Makeup = ({setPopName }) => {

    const [View, setView] = useState(0); 
    const [View02, setView02] = useState(0); 

    return (
        <>
        <div className="layer" />
        <div className="Closet">
            <img className="Closet_character" src="/resources/img/character.png" alt="캐릭터 이미지" />
            <div className="Closet_con">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">화장대</div>
            <div className="popCon">
                <div className="con-left">
                    <div className="nav nav-tabs">
                        <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                                <div className={`iconbg ${View === 0 ? 'on' : null }`} onClick={() => {setView(0);}}>
                                    <img src={`/resources/img/${View === 0 ? 'clothes_hair_on' : 'clothes_hair_off' }.svg`} alt="헤어 아이콘 버튼 이미지" />
                                </div>
                                <span className="txt">헤어</span>
                        </button>
                        <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                            <div className={`iconbg ${View === 1 ? 'on' : null }`} onClick={(e) => {setView(1);}}>
                                <img src={`/resources/img/clothes_color.png`} alt="칼라 선택 아이콘 버튼 이미지" />
                            </div>
                            <span className="txt">색상</span>
                        </button>
                    </div> 
                    <>
                    <div className="myroom-itemboxs">
                        { View === 0 ? (                        
                            <div className="itembox">
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                            </div>
                        ) : (
                            <div className="itembox">
                                <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                            </div>
                        )
                        }
                    </div>
                    </>
                </div>
            </div>
            <div className="sec-btns tit-16Gy3">
                <button type="button" className="sec-btn-M">취소</button>
                <button type="button" className="sec-btn-M-on02">저장</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default Makeup;
