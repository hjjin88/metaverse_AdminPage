import { useState } from "react";
import MainFooterPc from "../MainFooterPc";
import MainHeaderPc from "../MainHeaderPc";
import AllianceSubmitPc from "../Popup/AllianceSubmitPc";

const CampusAlliancePc = () => {

    const [popSubmitOpened, setPopSubmitOpened] = useState(false);
    const toggleSubmitPop = () => {
        setPopSubmitOpened(!popSubmitOpened);
    }

    return (
    <div className="wrapper uverse_wrap" id="wrapper">
        <MainHeaderPc selectedGnbIndex={2} />
        <div className="fancy-header"><div className="fancy-header-gradient"></div></div>
        <main className="container uverse_container">
            <div className="modal_back"></div>
            <div className="contents" id="contents">
                <section className="Partnership alliance" id="Partnership">
                    <h3 className="page-title">제휴 문의</h3>
                    <p className="form-notice title">* 표시는 반드시 입력해 주세요.</p>
                    <form action="">
                        <fieldset className="form">
                            <legend>제휴 문의</legend>
                            <dl>
                                <dt className="form-label"><label htmlFor="회사/조직">회사/조직 <span className="required">필수입력</span></label></dt>
                                <dd>
                                    <div className="form-control"><input type="text" id="회사/조직" placeholder="회사명/조직명을 입력해 주세요." /></div>
                                </dd>
                                <p className="form-notice error">필수 입력 값입니다.</p>
                            </dl>
                            <dl className="form-flex">
                                <div>
                                    <dt className="form-label"><label htmlFor="회사/조직">성함 <span className="required">필수입력</span></label></dt>
                                    <dd>
                                        <div className="form-control"><input type="text" id="성함" placeholder="이름을 입력해 주세요." /></div>
                                    </dd>
                                    <p className="form-notice error">필수 입력 값입니다.</p>
                                </div>
                                <div>
                                    <dt className="form-label"><label htmlFor="회사/조직">연락처 <span className="required">필수입력</span></label></dt>
                                    <dd>
                                        <div className="form-control"><input type="text" id="연락처" placeholder="연락처를 입력해 주세요." /></div>
                                    </dd>
                                    <p className="form-notice error">필수 입력 값입니다.</p>
                                </div>
                            </dl>
                            <dl>
                                <dt className="form-label"><label htmlFor="메일주소">메일주소 <span className="required">필수입력</span></label></dt>
                                <dd>
                                    <div className="form-control"><input type="text" id="제목" placeholder="메일주소를 입력해 주세요." /></div>
                                </dd>
                                <p className="form-notice error">필수 입력 값입니다.</p>
                            </dl>
                            <dl>
                                <dt className="form-label"><label htmlFor="홈페이지">홈페이지</label></dt>
                                <dd>
                                    <div className="form-control"><input type="text" id="홈페이지" placeholder="홈페이지 주소를 입력해 주세요." /></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="form-label"><label htmlFor="문의/제안">문의/제안 <span className="required">필수입력</span></label></dt>
                                <dd>
                                    <div className="form-control"><textarea name="" id="문의/제안" placeholder="문의/제안 사항을 입력해 주세요."></textarea></div>
                                </dd>
                                <p className="form-notice error">필수 입력 값입니다.</p>
                            </dl>
                            <dl>
                                <dt className="form-label"><label htmlFor="파일첨부">파일첨부</label></dt>
                                <dd className="gap">
                                    <div className="form-control"><input type="text" placeholder="선택된 파일 없음" /></div>
                                    <div className="ui-attach">
                                        <label htmlFor="attach" className="btn-df">파일 찾기</label>
                                        <input type="file" id="attach" />
                                    </div>
                                </dd>
                            </dl>
                            <dl className="last">
                                <dt className="form-label"><label htmlFor="개인정보 수집 이용 동의">개인정보 수집 이용 동의</label></dt>
                                <dd>
                                    <div className="form-control table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>수집/이용 목적</th>
                                                    <th>수집 정보</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>서비스 제공 및 운영</span><br />
                                                        <span>서비스 관련 고지사항 전달/본인의사 확인 등</span>
                                                    </td>
                                                    <td>
                                                        <span>회원 공통 : 이름, 이메일주소, 휴대폰 번호</span><br />
                                                        <span>기업/단체 회원 : 기업 또는 단체명</span><br />
                                                        <span>서비스 계약이행과정에서 자동적으로 생성되는 정보</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul className="Privacy">
                                            <li>※ 본 동의는 서비스의 본질적 기능 제공을 위한 개인정보 수집/이용에 대한 동의로서, 동의하지 않으실 경우 서비스 제공이 불가능합니다.</li>
                                            <li>※ 또한 귀하께서 서비스의 이용 기록 삭제를 하시는 경우에는 지체 없이 관련 정보들은 파기됩니다. 다만, 이용자에게 제공되는 서비스가 있는 경우 VoC 대응을 위해 3년간 관련 정<br />보를 보관할 수 있으며, 또한 관계법령의 규정에 의하여 개인정보를 보유할 필요가 있는 경우에는, 해당 법령에서 정한 일정 기간 동안 정보를 보관할 수 있습니다.</li>
                                            <li>※ 법령에 따른 개인정보의 수집과 이용, 계약의 이행과 편의 증진을 위한 개인정보 위탁, 그리고 이와 관련한 일반 사항은 서비스의 개인정보 처리방침에 따릅니다.</li>
                                        </ul>
                                    </div>
                                </dd>
                            </dl>
                            <div className="form-check mgb60">
                                <input type="checkbox" name="PrivacyAgree" id="privacyAgree" />
                                <label htmlFor="PrivacyAgree">개인정보 수집 이용 동의</label>
                            </div>
                        </fieldset>
                    </form>
                    <button type="button" className="SecBtn" onClick={ e => { toggleSubmitPop(); }}>접수하기</button>
                </section>
                <MainFooterPc />
            </div>
        </main>
        { popSubmitOpened && (
            <AllianceSubmitPc togglePop={toggleSubmitPop} />
        )}
    </div>
    )
}

export default CampusAlliancePc;