import { useEffect, useState } from "react";


const EmailCheckMo = ({ togglePop }) => {
    
    return (
    <div className="layer connect EmailCheck">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit" id="dialog_label1">이메일로 시작하기</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents pdt24">
                <fieldset className="form">
                    <legend>이메일로 시작하기</legend>
                    <p className="form-notice pdb26">*발송된 인증 코드는 1시간 동안 유효합니다. 인증 코드를 받지 못한 경우 ‘메일 발송’을 눌러 새 인증 코드를 발송하세요.</p>
                    <dl>
                        <dt className="form-label">이메일</dt>
                        <dd>
                            <div className="form-control-group">
                                <div className="form-control" style={{position:'relative'}}>
                                    <input type="text" placeholder="이메일 입력하세요." />
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">메일 <br />발송</button>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="pdb34">
                        <dt className="form-label pdt18">인증번호</dt>
                        <dd>
                            <div className="form-control-group">
                                <div className="form-control" style={{position:'relative'}}>
                                    <input type="text" maxLength="4" placeholder="인증번호" />
                                    <p className="count">유효시간 <span>60 :00</span></p>
                                    <button type="button">시간<br />연장</button>
                                </div>
                                <div className="auto">
                                    <button type="button" className="btn">인증 <br />확인</button>
                                </div>
                            </div>
                            <p className="redTxt inTxt12">인증번호를 정확히 입력해 주세요.</p>
                        </dd>
                    </dl>
                    <p className="inTxt13_02 pdb26">비밀번호 입력 시, 영문/숫자/특수문자를 포함한 8~15자 이내 입력해주세요.</p>
                    <dl>
                        <dt className="form-label">비밀번호</dt>
                        <dd>
                            <div className="form-control-group">
                                <div className="form-control" style={{position:'relative'}}>
                                    <input type="text" maxLength="15" placeholder="비밀번호를 입력하세요." />
                                </div>
                            </div>
                            <p className="inTxt12_02 pdt18"> 8-15자리로 입력해 주세요.</p>
                            <div className="form-control-group pdb18">
                                <div className="form-control" style={{position:'relative'}}>
                                    <input type="text" maxLength="15" placeholder="비밀번호를 입력하세요." />
                                </div>
                            </div>
                        </dd>
                    </dl>
                </fieldset>
            </div>
            <button type="button" className="SecBtn" >완료</button>
        </div>
    </div>
    )
}

export default EmailCheckMo;