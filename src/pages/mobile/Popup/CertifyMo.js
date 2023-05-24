import { useEffect, useState } from "react";

const CertifyMo = ({ togglePop }) => {

    const [isBun01, setIsBun01] = useState(false);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    
    return (
    <div className="layer connect Certify">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit">사용자 인증</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents">
                <fieldset className="form Certify_form">
                    <legend>사용자 인증</legend>
                    <dl>
                        <dt className="form-label pdt24">필수 항목</dt>
                        <dd>
                            <div className="form-control-group">
                                <div className="form-control pdt16">
                                    <input type="text" placeholder="이름" name="name" />
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">확인</button>
                                </div>
                            </div>
                            <div className="form-control-group">
                                <div className="form-control pdt16">
                                    <input type="text" placeholder="휴대폰번호" name="phone_number" />
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">인증</button>
                                </div>
                            </div>
                            <div className="form-control-group">
                                <div className="form-control pdt16">
                                    <input type="text" placeholder="인증번호" name="Certify_number" />
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="form-label pdt24">선택 항목</dt>
                        <dd>
                            <div className="form-control-group">
                                <div className="form-control">
                                    <input type="text" placeholder="이메일" name="email" />
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">확인</button>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="form-label pdt14">성별</dt>
                        <dd className="tab-menu button-group member">
                            <button type="button" className="SecBtn" >남성</button> 
                            <button type="button" className="SecBtn" >여성</button>
                        </dd>
                        <dd>
                            <div className="form-control-group schoolSearch">
                                <div className="formCon">
                                    <button type="button" className="formBtn">출생년도</button>
                                </div>
                                <div className="schoolSearchBtn ">
                                    <div className="form-control">
                                        <input type="text" placeholder="학교" />
                                        <button type="button"></button>
                                    </div>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="memberCon">
                        <dt className="form-label pdt24">회원구분</dt>
                        <dd>
                            <div className="divisionBtns">
                            <input type="radio" name="division_btn" id="divisionBtn_01" onClick={ e => { setSelectedTabIndex(0); }} />
                                <label htmlFor="divisionBtn_01"><span>학생</span></label>
                                <input type="radio" name="division_btn" id="divisionBtn_02" onClick={ e => { setSelectedTabIndex(1); }} />
                                <label htmlFor="divisionBtn_02"><span>교직원</span></label>
                                <input type="radio" name="division_btn" id="divisionBtn_03" onClick={ e => { setSelectedTabIndex(2); }} />
                                <label htmlFor="divisionBtn_03"><span>외부 게스트</span></label>
                            </div>
                        { selectedTabIndex === 0 ? (
                            <dl className="divisionBox">
                                <dt className="form-label">학년반</dt>
                                <dd>
                                    <div className="formCon">
                                        <button type="button" className="formBtn">학년</button>
                                    </div>
                                    <div className="formCon">
                                        <button type="button" className="formBtn">반</button>
                                    </div>
                                </dd>
                            </dl>
                        ) : selectedTabIndex === 1 ? (
                            <dl className="divisionBox">
                                <dt className="form-label">교직원</dt>
                                <dd>
                                    <div className="formCon">
                                        <button type="button" className="formBtn">학년</button>
                                    </div>
                                    <div className="formCon">
                                        <button type="button" className="formBtn">반</button>
                                    </div>
                                </dd>
                                <dd className="form-control-group pdt8">
                                    <div className="form-control" style={{position:'relative'}}>
                                        <input type="text" />
                                    </div>
                                    <div className="auto">
                                        <button type="button" className="btn">확인</button>
                                    </div>
                                </dd>
                            </dl>
                        ) : (
                            <dl className="divisionBox">
                                <dt className="form-label">외부 게스트</dt>
                                <dd className="form-control-group">
                                    <ul className="form-control">
                                        <li>
                                            <input type='radio' name="out_guest" id="out_guest_01" />
                                            <label htmlFor="out_guest_01"><span>학부모</span></label>
                                        </li>
                                        <li>
                                            <input type='radio' name="out_guest" id="out_guest_02" />
                                            <label htmlFor="out_guest_02"><span>졸업생</span></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="out_guest" id="out_guest_03" />
                                            <label htmlFor="out_guest_03"><span>예비 입학생</span></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="out_guest" id="out_guest_04" />
                                            <label htmlFor="out_guest_04"><span>기타</span></label>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="기타 선택 시 입력란" name="etc" className="etc_text" />
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        )}
                        </dd>
                    </dl>
                    <dl className="dblCheck pdt18 pdb20">
                        <dt className="form-label">소속 학교 내 닉네임 중복 확인</dt>
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
                </fieldset>
            </div>
            { isBun01 ? (
                <button type="button" className="SecBtn bdGy" onClick={ e => { setIsBun01(false); }}>승인요청</button>
            ) : (
                <button type="button" className="SecBtn02" onClick={ e => { setIsBun01(true); }}>승인요청</button>
            )}
        </div>
    </div>
    )
}

export default CertifyMo;