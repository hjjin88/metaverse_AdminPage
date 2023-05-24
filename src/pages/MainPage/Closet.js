
import { useEffect, useState } from "react";

const Closet = ({setPopName }) => {

    const [View, setView] = useState(0); 
    const [View02, setView02] = useState(0); 

    return (
        <>
        <div className="layer" />
        <div className="Closet">
            <img className="Closet_character" src="/resources/img/character.png" alt="캐릭터 이미지" />
            <div className="Closet_con">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">옷장</div>
                <div className="popCon">
                    <div className="con-left">
                        <div className="nav nav-tabs">
                            <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                                <div className={`iconbg ${View === 0 ? 'on' : null }`} onClick={() => {setView(0);}}>
                                    <img src={`/resources/img/${View === 0 ? 'clothes_all_on' : 'clothes_all_off' }.svg`} alt="옷 전체 아이콘 버튼 이미지" />
                                </div>
                                <span className="txt">전신</span>
                            </button>
                            <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                                <div className={`iconbg ${View === 1 ? 'on clothes_top_on' : 'clothes_top_off' }`} onClick={(e) => {setView(1);}}>
                                    <img src={`/resources/img/${View === 1 ? 'clothes_top_on' : 'clothes_top_off' }.svg`} alt="상의 아이콘 버튼 이미지"/>
                                </div>
                                <span className="txt">상의</span>
                            </button>
                            <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                                <div className={`iconbg ${View === 2 ? 'on' : null }`} onClick={(e) => {setView(2);}}>
                                    <img src={`/resources/img/${View === 2 ? 'clothes_pants_on' : 'clothes_pants_off' }.svg`} alt="하의 아이콘 버튼 이미지" />
                                </div>
                                <span className="txt">하의</span>
                            </button>
                            <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                                <div className={`iconbg ${View === 3 ? 'on' : null }`} onClick={(e) => {setView(3);}}>
                                    <img src={`/resources/img/${View === 3 ? 'clothes_shoes_on' : 'clothes_shoes_off' }.svg`} alt="신발 아이콘 버튼 이미지" />
                                </div>
                                <span className="txt">신발</span>
                            </button>
                            <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}>
                                <div className={`iconbg ${View === 4 ? 'on' : null }`} onClick={(e) => {setView(4);}}>
                                    <img src={`/resources/img/${View === 4 ? 'clothes_ac_on' : 'clothes_ac_off' }.svg`}  alt="악세사리 아이콘 버튼 이미지" />
                                </div>
                                <span className="txt">악세서리</span>
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
                            ) :  View === 1 ?  (
                                <div className="itembox">
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                </div>
                            ) :  View === 2 ?  (
                                <div className="itembox">
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                </div>
                            ) :  View === 3 ?  (
                                <div className="itembox">
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                </div>
                            ) : View === 4 ? (
                                <div className="itembox">
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                </div>
                            ) : (
                                <div className="itembox">
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>   <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
                                    <button type="button" className={`nav-item ${View02 ? 'on' : null }`} onClick={() => {setView02(!View02)}}><img className="item" src="/resources/img/myroom_items.png" alt="마이룸 아이템 이미지" /></button>
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
export default Closet;
