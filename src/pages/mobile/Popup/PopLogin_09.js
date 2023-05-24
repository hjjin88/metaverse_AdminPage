import { useEffect, useState } from "react";

const PopLogin_09 = ({ togglePop }) => {

  const [But01, setBut01] = useState(false);
  const [But02, setBut02] = useState(false);
  const [But03, setBut03] = useState(false);
  const [But04, setBut04] = useState(false);

    return (
    <div className="layer new_pop">
        <div>
            <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            <div className="layer_top">
              <img className="pop_logo" src="../resources/images/pop_logo.svg" alt="유버스 로고" />
              <h1 className="main_tit"><strong>이메일</strong></h1>
            </div>
            <div className="layer_cont h100">
              <div className="account_wrap">
                <p className="txt_bk15 pb78">이메일을 입력해 주세요. <br/>로그인 정보를 잃어 버려도 이메일로 찾을 수 있어요.</p>
                <p className="form-notice desc">*발송된 인증 코드는 1시간 동안 유효합니다. 인증 코드를 받지 못한 경우 ‘메일 발송’을 눌러 새 인증 코드를 발송하세요.</p>
                <div className="layer-contents">
                  <fieldset className="form">
                    <legend>이메일</legend>
                    <dl>
                      <dt className="form-label">이메일</dt>
                      <dd>
                        <div className="form-control-group">
                          <div className="form-control" style={{position:'relative'}}>
                            <input type="text" placeholder="이메일 입력하세요." />
                          </div>
                          <div className="auto">
                            <button type="button" 
                            className={`Btn_df ${But03 ? 'On' : ' '}`}
                            onClick={() => {setBut03(!But03)}} 
                            >메일 <br />발송</button>
                          </div>
                        </div>
                        <p className="form-notice">이메일을 정확히 입력해 주세요.</p>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="form-label">인증번호</dt>
                      <dd>
                        <div className="form-control-group">
                          <div className="form-control" style={{position:'relative'}}>
                            <input type="text" maxLength="4" placeholder="숫자만 입력하세요." />
                            <p className="count">60:00 <span>남음</span></p>
                          </div>
                          <div className="auto">
                            <button type="button" 
                              className={`Btn_df ${But04 ? 'On' : ' '}`}
                              onClick={() => {setBut04(!But04)}} 
                              >시간 <br />연장</button>
                          </div>
                        </div>
                        <p className="form-notice">인증번호를 정확히 입력해 주세요.</p>
                      </dd>
                    </dl>
                  </fieldset>
                </div>
              </div>
              <div className="regist-desc">이메일이 등록되었습니다.</div>
            </div>
            <div className="layer_bottom">
                <div className="layer-btns">
                    <button type="button" 
                    className={`Btn_df ${But01 ? 'On' : ' '}`}
                    onClick={() => {setBut01(!But01)}} 
                    >취소</button>
                    <button type="button" 
                    className={`Btn_df ${But02 ? ' ' : 'On'}`}
                    onClick={() => {setBut02(!But02)}} 
                    >완료</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PopLogin_09;