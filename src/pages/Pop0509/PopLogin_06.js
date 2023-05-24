import { useEffect, useState } from "react";

const PopLogin_06 = ({ togglePop }) => {

    const [isOpen, setisOpen] = useState(false);

  return (
    <div className="layer new_pop">
        <div>
            <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            <div className="layer_top">
                <img className="pop_logo" src="../resources/images/pop_logo.svg" alt="유버스 로고" />
                <h1 className="main_tit"><strong>계정 연동</strong></h1>
            </div>
            
            <div className="layer_cont h100 layer_bgImg">
                <div className="account_wrap">
                    <p className="txt_bk16 pb40">계정을 연동하면 <br />다른 기기에서 내 아바타를 볼 수 있어요.</p>
                    <div className="account_school">
                        <p className="txt_bk15 pb8">유버스를 이용하는 학교라면</p>
                        <div className="ui_select">
                            <button type="button" className={`select_trigger ${isOpen ? `` : "open"}`}  onClick={() => {setisOpen(!isOpen)}}><span>학교 계정으로 시작하기</span></button>
                            {isOpen &&   
                                <ul className="select_layer">
                                    <li><button type="button" className="option">숙명여자대학교</button></li>
                                    <li><button type="button" className="option">청주대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                    <li><button type="button" className="option">진주교육대학교</button></li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PopLogin_06;