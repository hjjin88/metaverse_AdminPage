import { useEffect, useState } from "react";

const CampusLoginPopPc = ({ togglePop }) => {

    const [isBun01, setIsBun01] = useState(false);
    const [isBun02, setIsBun02] = useState(false);

    return (
    <div className="layer layer440">
        <div className="profile-drawer">
            <p className="text-center-lg"><strong>환영합니다!</strong></p>
            <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            <fieldset className="form">
                <legend>로그인</legend>
                <dl>
                    <dt className="form-label"><label htmlFor="user-id">사용하실 닉네임을 입력하세요.</label></dt>
                    <dd className="mgb18">
                        <div className="form-control">
                        <input type="text" id="user-id" placeholder="닉네임 (8자 이내로 입력)" />
                        </div>
                        <p className="form-notice error">필수 입력 값입니다.</p>
                    </dd>
                    <dt className="form-label"><label htmlFor="user-id">사용하실 아바타를 선택하세요.</label></dt>
                    <dd className="Avatar">
                        <div className="form-control-group">
                            <div className="profile-img">
                                <img src="../resources/images/profile-img.png" alt="남성 기본 이미지" />
                                <div className="form-check checked">
                                    <input type="radio" name="radioSet" id="radio1" /><label htmlFor="radio1">남성 기본</label>
                                </div>
                            </div>
                            <div className="profile-img">
                                <img src="../resources/images/profile-img.png" alt="여성 기본 이미지" />
                                <div className="form-check checked">
                                    <input type="radio" name="radioSet" id="radio2" /><label htmlFor="radio2">여성 기본</label>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mgt16"><span>아바타 외형은 마이룸에서 언제든지 변경 가능합니다.</span></p>
                    </dd>
                </dl>
                { isBun01 ? (
                    <button type="button" className="SecBtn bdWt " onClick={ e => { setIsBun01(false); }}>입장</button>
                ) : (
                    <button type="button" className="SecBtn02 " onClick={ e => { setIsBun01(true); }}>입장</button>
                )}
                <p className="text-center-sm mgt32"><span>이미 보유한 아바타로 입장하시려면 로그인하세요.</span></p>
                { isBun02 ? (
                    <button type="button" className="SecBtn01 UvTxt02" onClick={ e => { setIsBun02(false); }}>로그인</button>
                ) : (
                    <button type="button" className="SecBtn02 " onClick={ e => { setIsBun02(true); }}>로그인</button>
                )}
            </fieldset>
        </div>
    </div>
    )
}

export default CampusLoginPopPc;