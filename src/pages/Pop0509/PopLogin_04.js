import { useEffect, useState } from "react";

const PopLogin_04 = ({ setPopName }) => {

    const [But01, setBut01] = useState(false);

  return (
    <div className="layer new_pop">
        <div>
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="layer_top">
                <img className="pop_logo" src="../resources/images/pop_logo.svg" alt="유버스 로고" />
                <h1 className="main_tit"><strong>아바타 만들기</strong></h1>
            </div>
            
            <div className="layer_cont">
                <div className="avatar_form">
                    <dl>
                        <dt className="form-label">
                            <label htmlFor="user-id">아이디</label>
                        </dt>
                        <dd>
                            <div className="form-control">
                                <input type="text" id="user-id" maxLength={8} placeholder="영문, 숫자 조합하여 2자~8자 이내로 입력" />
                            </div>
                            <p className="form-notice">유버스 캠퍼스에서 친구들과 메시지를 주고 받을 때 사용돼요.</p>
                            <p className="form-notice green">멋진 아이디네요!</p>
                            <p className="form-notice red">이미 사용중이거나 적합한 아이디가 아닙니다.</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="form-label">
                            <label htmlFor="user-char">캐릭터 선택</label>
                        </dt>
                        <dd className="Avatar">
                            <div className="form-control-group">                                    
                                <div className="form-check">                                    
                                    <label htmlFor="radio1">
                                        <img src="../resources/images/avatar_m.svg" alt="남성 기본 이미지" />
                                    </label>
                                    <input type="radio" name="radioSet" id="radio1" checked/>
                                </div>                                 
                                <div className="form-check">                                    
                                    <label htmlFor="radio2">
                                        <img src="../resources/images/avatar_f.svg" alt="여성 기본 이미지" />
                                    </label>
                                    <input type="radio" name="radioSet" id="radio2" />
                                </div>
                            </div>
                            <p className="text-center mgt12"><span>아바타의 외형과 의상은 마이룸에서 설정할 수 있어요.</span></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="form-label">
                            <label htmlFor="user-name">아바타 이름 </label>
                        </dt>
                        <dd>
                            <div className="form-control">
                                <input type="text" id="user-name" maxLength={8} placeholder="영문, 한글, 숫자 2자~8자 이내로 입력" />
                            </div>
                            <p className="form-notice">아바타 이름은 언제든 바꿀 수 있어요.</p>
                            <p className="form-notice error">2자-8자 이내로 입력해주세요.</p>
                        </dd>
                    </dl>
                </div>         
            </div>

            <div className="layer_bottom">
                <div className="layer-btns">
                    <button type="button" 
                    className={`Btn_df block ${But01 ? 'On' : ''}`}
                    onClick={() => {setBut01(!But01)}} 
                    >다음</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PopLogin_04;