import { useEffect, useState } from "react";

const PopLogin_02 = ({ setPopName }) => {

    const [But01, setBut01] = useState(false);
    const [But02, setBut02] = useState(false);

    const [Toggle, setToggle] = useState(false); 
    const [Check, setCheck] = useState(false); 

  return (
    <div className="layer new_pop Account">
        <div>
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="layer_top">
                <img className="pop_logo" src="/resources/img/pop_logo.svg" alt="유버스 로고" />
                <h1 className="main_tit"><strong>약관 동의</strong></h1>
            </div>
            
            {/* <div className="layer_cont">
                <p className="txt_bk16">이용 약관 동의 후 <br/>유버스를 체험할 수 있어요.</p>
                <div className="terms-wrap">
                    <div className="form-check all-check">
                        <label htmlFor="allAgree">
                            <input type="checkbox" name="allAgree" id="allAgree" className="allAgree" />
                            <span>약관 전체동의</span>
                        </label>
                    </div>
                    <ul className="terms-list">
                        <li>
                            <div className="form-check">
                                <input type="checkbox" name="agree01" id="agree01" className="agree" />
                                <label htmlFor="agree01">(필수) 서비스 이용약관 동의</label>
                            </div>                            
                            <button type="button"><span className="text-next">보기</span></button>
                        </li>
                        <li>
                            <div className="form-check">
                                <input type="checkbox" name="agree02" id="agree02" className="agree" />
                                <label htmlFor="agree02">(필수) 개인정보 수집 및 이용 동의</label>
                            </div>
                            <button type="button"><span className="text-next">보기</span></button>
                        </li>
                        <li>
                            <div className="form-check">
                                <input type="checkbox" name="agree03" id="agree03" className="agree" />
                                <label htmlFor="agree03">(필수) 개인정보 처리 및 위탁, 제3자 <br />제공동의</label>
                            </div>   
                            <button type="button"><span className="text-next">보기</span></button>
                        </li>
                        <li>
                            <div className="form-check">
                                <input type="checkbox" name="agree04" id="agree04" className="agree" />
                                <label htmlFor="agree04">(선택) 마케팅 정보 수신 동의</label>
                            </div>
                            <button type="button"><span className="text-next">보기</span></button>
                        </li>
                    </ul>
                    <div className="form-check">
                        <input type="checkbox" name="agree05" id="agree05" className="agree" />
                        <label htmlFor="agree05">(필수) 만 14세 이상입니다.</label>
                    </div>
                </div>                
            </div> */}
                        <div className="accdian-wrap">
                            <div className="acc-item">
                                <div className="acc-tit" onClick={() => {setToggle(!Toggle)}}>
                                    <label className="checkbox-label" for="authcheck_all">
                                        <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck_all" />
                                        <button 
                                        className={`checkbox-box ${Check ? "on" : null }`}
                                        onClick={() => {setCheck(!Check)}}/>
                                        약관 전체동의{" "}
                                    </label>
                                        {Toggle ? <button type="button" className="downArrow"></button> : <button type="button" className="downArrow up"></button>} 
                                </div>
                            { Toggle &&
                                <div className="acc-cont">
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck1">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck1" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (필수) 서비스 이용약관 동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck2">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck2" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (필수) 개인정보 수집 및 이용 동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck3">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck3" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (필수) 개인정보 처리 및 위탁, 제3자 제공동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck4">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck4" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (선택) 마케팅 정보 수신 동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
            <div className="layer_bottom">
                <p className="txt_gr14 pt25">고객님께서는 위 사항에 대해 거부하실 권리가 있습니다. <br />단, 동의하지 않으면 서비스 이용에 제한이 있습니다.</p>
                <div className="layer-btns">
                    <button type="button" 
                    className={`Btn_df ${But01 ? 'On' : ' '}`}
                    onClick={() => {setBut01(!But01)}} 
                    >동의하지 않습니다</button>
                    <button type="button" 
                    className={`Btn_df ${But02 ? ' ' : 'On'}`}
                    onClick={() => {setBut02(!But02)}} 
                    >동의합니다</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PopLogin_02;