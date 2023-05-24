import { useEffect, useState } from "react";

const MemPc = ({ togglePop }) => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
    <div className="layer connect mem">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit" id="dialog_label1">학생/교직원 인증</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents">
                <fieldset className="form">
                    <legend>학생/교직원 인증</legend>
                    <dl>
                        <dt className="form-label inTit16_02">필수정보</dt>
                        <dd>
                            <div className="form-control email" style={{position:'relative'}}>
                                <input type="text" placeholder="kim@sookmyung.ac.kr" id="kim@sookmyung.ac.kr" />
                            </div>
                            <div className="form-control-group">
                                <div className="form-control" style={{position:'relative'}}>
                                    <input type="text" placeholder="김숙명" id="김숙명" />
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">확인</button>
                                </div>
                            </div>
                        </dd>
                        <dt className="form-label inTxt14_02">회원구분</dt>
                        <dd>
                            <div className="ui-tab">
                                <div className="tab-menu button-group member">
                                    <button type="button" className="SecBtn" onClick={ e => { setSelectedTabIndex(0); }}>학생</button> 
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
                                    <dl className="dblCheck mgb64">
                                        <dt className="form-label inTxt14_02">소속 학교 내 닉네임 중복 확인</dt>
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
                <button type="button" className="SecBtn01">이전</button>
                <button type="button" className="SecBtn">인증완료</button>
            </div>
        </div>
    </div>
    )
}

export default MemPc;