import { useEffect, useState } from "react";

const ConnectPc = ({ togglePop }) => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
    <div className="layer connect mem">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit" id="dialog_label1">학생/교직원 인증</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents pdt24 pdb20">
                <fieldset className="form">
                    <legend>이메일 인증</legend>
                    <p className="text">현재 캠퍼스 입장 시 학교 이메일 인증이 필요합니다.<br />이메일을 입력해주세요.</p>
                    <p className="form-notice pdb4">*숙명여대 이메일 주소(@sookmyung.ac.kr)로 입력 바랍니다.</p>
                    <div className="form-check terms-wrap">
                        <input type="checkbox" name="Agree2" id="Agree2" />
                        <label htmlFor="Agree2">개인정보 제3자 동의</label>
                        <button type="button"><span className="text-next">보기</span></button>
                    </div>
                    <dl>
                        <dt className="form-label">이메일 인증</dt>
                        <dd className="sns-wrap">
                            <button type="button" className="btn btn-google">구글로 시작하기</button>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="form-label inTit16_02">필수정보</dt>
                        <dt className="inTxt14_02 pdt4 pdb4">회원구분</dt>
                        <dd>
                            <div className="ui-tab">
                                <div className="tab-menu button-group member">
                                    <button type="button" className="SecBtn" onClick={ e => { setSelectedTabIndex(0); }} disabled>학생</button> 
                                    <button type="button"className="SecBtn" onClick={ e => { setSelectedTabIndex(1); }}>교직원</button>
                                </div>
                                <div className="tab-contents">
                                { selectedTabIndex === 0 ? (
                                    <div> 
                                        <div className="form-control-group">
                                            <div className="form-control" style={{position:'relative'}}>
                                                <input type="text" placeholder="학번" />
                                            </div>
                                            <div className="auto">
                                                <button type="button" className="btn">확인</button>
                                            </div>
                                        </div>
                                        <div className="form-control-group">
                                            <div className="form-control" style={{position:'relative'}}>
                                                <input type="text" placeholder="학과" />
                                            </div>
                                            <div className="auto">
                                                <button type="button" className="btn">확인</button>
                                            </div>
                                        </div>
                                        <div className="form-control-group">
                                            <div className="form-control" style={{position:'relative'}}>
                                                <input type="text" placeholder="휴대폰 번호(-빼고 숫자만 입력)" />
                                            </div>
                                            <div className="auto">
                                                <button type="button" className="btn">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="form-control-group">
                                            <div className="form-control" style={{position:'relative'}}>
                                                <input type="text" placeholder="교번"  />
                                            </div>
                                            <div className="auto">
                                                <button type="button" className="btn">확인</button>
                                            </div>
                                        </div>
                                        <div className="form-control-group">
                                            <div className="form-control" style={{position:'relative'}}>
                                                <input type="text" placeholder="휴대폰 번호(-빼고 숫자만 입력)" />
                                            </div>
                                            <div className="auto">
                                                <button type="button" className="btn">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                    <dl className="dblCheck pdt30 pdb20">
                                        <dt className="inTxt14_02 pdb4">소속 학교 내 닉네임 중복 확인</dt>
                                        <dd>
                                            <div className="form-control email mgb8" style={{position:'relative'}}>
                                                <input type="text" placeholder="현재 닉네임" />
                                                <p className="redTxt inTxt12">이미 사용중인 닉네임입니다.</p>
                                            </div>
                                            <div className="form-control-group pd0">
                                                <div className="form-control" style={{position:'relative'}}>
                                                    <input type="text" maxLength='8' placeholder="변경 닉네임 (8자 이내로 입력)" />
                                                </div>
                                                <div className="auto">
                                                    <button type="button" className="btn">확인</button>
                                                </div>
                                            </div>
                                            <p className="redTxt inTxt12">이미 사용중인 닉네임입니다. <br /> 사용할 수 없는 문자가 포함되어 있습니다.</p>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </fieldset>
            </div>
            <div className="layer-btns">
                <button type="button" className="SecBtn01" onClick={togglePop}>이전</button>
                <button type="button" className="SecBtn">다음</button>
            </div>
        </div>
    </div>
    )
}

export default ConnectPc;