import { useEffect, useState } from "react";

const CertiPc = ({ togglePop }) => {

    const [isBun01, setIsBun01] = useState(false);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    
    return (
    <div className="layer certi" id="dialog1" role="dialog" aria-modal="true" aria-labelledby="dialog_label1" aria-describedby="dialog_desc1" tabIndex="-1">
        <dl>
            <dt className="layerHeader mgb10">
                <h1 className="layerTit" id="dialog_label1">휴대폰 본인인증 로그인</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </dt>
            <dd className="layer-contents" id="dialog_desc">
                <div className="ui-tab">
                    <div className="tab-menu button-group line-type">
                        <button type="button" onClick={ e => { setSelectedTabIndex(0); }}>휴대폰본인확인(문자)</button> 
                        <button type="button" onClick={ e => { setSelectedTabIndex(1); }}>간편본인확인(앱)</button>
                    </div>
                    <div className="tab-contents">
                    { selectedTabIndex === 0 ? (
                        <div className="pdt40"> 
                            <div className="form-control mgb8">
                                <input type="text" placeholder="이름" />
                            </div>
                            <p className="form-notice pdb4">*외국인은 외국인 등록번호를 입력해 주세요.</p>
                            <div className="form-control-group mgb26">
                                <div className="form-control">
                                    <input type="text" maxLength="6" title="주민등록번호" placeholder="주민등록번호" />
                                </div>
                                <div className="at">-</div>
                                <div className="form-control">
                                    <input type="password" maxLength="7" title="주민등록번호" />
                                </div>
                            </div>
                            <div className="form-control-group mgb8">
                                <div className="form-control">
                                    <input type="text" maxLength="11" placeholder="휴대폰번호" />
                                </div>
                                <div className="auto toggle ui-toggle">
                                    <button type="button" className="btn toggle-trigger">통신사 선택</button>
                                </div>
                            </div>
                            <div className="form-control-group mgb12">
                                <div className="form-control" style={{position:'relative'}}>
                                    <input type="text" maxLength="6" placeholder="인증번호 입력" />
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">인증번호 요청</button>
                                </div>
                            </div>
                            <div className="form-check terms-wrap mg-left">
                                <input type="checkbox" name="Agree2" id="Agree2" />
                                <label htmlFor="Agree2">다음부터 자동으로 로그인하기</label>
                            </div>
                        </div>
                    ) : (
                        <div className="pdt24">
                            <p className="text pdb24">통신사 인증 앱(PASS)이용하여 간편하게 본인확인 가능합니다.</p>
                            <div className="form-control mgb8">
                                <input type="text" placeholder="이름" />
                            </div>
                            <div className="form-control-group mgb8">
                                <div className="form-control">
                                    <input type="text" maxLength="11" placeholder="휴대폰번호" />
                                </div>
                                <div className="auto toggle ui-toggle">
                                    <button type="button" className="btn toggle-trigger">통신사 선택</button>
                                </div>
                            </div>
                            <div className="terms-wrap form-check mgb16">
                                <div className="btn">
                                    <input type="checkbox" name="allAgree" id="allAgree" className="allAgree" />
                                    <label htmlFor="allAgree">본인 확인을 위해 아래 약관에 동의합니다.</label>
                                </div>
                                <div className="terms">
                                    <div className="identi">
                                        <input type="checkbox" name="agree01" id="agree01" className="agree" />
                                        <label htmlFor="agree01">한국 모바일 인증 이용약관(필수)</label>
                                        <button type="button"><span className="text-next">보기</span></button>
                                    </div>
                                    <div className="identi">
                                        <input type="checkbox" name="agree02" id="agree02" className="agree" />
                                        <label htmlFor="agree02">통신사 이용약관(필수)</label>
                                        <button type="button"><span className="text-next">보기</span></button>
                                    </div>
                                    <div className="identi">
                                        <input type="checkbox" name="agree03" id="agree03" className="agree" />
                                        <label htmlFor="agree03">개인정보수집•이용(필수)</label>
                                        <button type="button"><span className="text-next">보기</span></button>
                                    </div>
                                    <div className="identi">
                                        <input type="checkbox" name="agree04" id="agree04" className="agree" />
                                        <label htmlFor="agree04">고유식별정보처리(필수)</label>
                                        <button type="button"><span className="text-next">보기</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check terms-wrap mg-left">
                                <input type="checkbox" name="Agree2" id="Agree2" />
                                <label htmlFor="Agree2">다음부터 자동으로 로그인하기</label>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </dd>
            { isBun01 ? (
                <button type="button" className="SecBtn bdGy" onClick={ e => { setIsBun01(false); }}>본인인증 및 로그인</button>
            ) : (
                <button type="button" className="SecBtn02" onClick={ e => { setIsBun01(true); }}>본인인증 및 로그인</button>
            )}
        </dl>
    </div>
    )
}

export default CertiPc;