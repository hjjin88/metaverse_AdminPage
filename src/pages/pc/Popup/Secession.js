import { useEffect, useState } from "react";


const Secession = ({ togglePop }) => {

  const [isBun01, setIsBun01] = useState(false);
    
  return (
  <div className="layer account layer500">
    <div>
      <div className="layerHeader">
        <h1 className="layerTit" id="dialog_label1">회원 탈퇴</h1>
        <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
      </div>
      <div className="layerCon">
        <dl className="secInner mgb12">
          <dt className="inTit16 mgb10">UVERSE를 이용하시면서 불편한 점이 있으셨나요?</dt>
          <dd className="inTxt13">이용중 겪으신 불편 및 문의사항은 <span className="underBar">고객센터</span>로 문의 주시면 성심 성의껏 답변 드리겠습니다.</dd>
        </dl>
        <div className="guideCon">
          <div className="guideConIn">
            <div className="inTit15">꼭 확인하세요!</div>
            <div className="inTit12 ylBox mgb8">회원 탈퇴를 진행하기 전 아래 유의사항을 확인해 주세요.</div>
            <ul className="guideBox mgb8">
              <li>회원탈퇴를 하시면 <span className="redTxt">아이디와 함께 UVERSE에 제공하신 개인정보가 모두 삭제</span>됩니다. 
                <span className="sTxt">(단, UVERSE 플레이 데이터는 15일간 보관되며, 관계법령 규정에 따라 일정기간 정보를 보관할 필요가 있는 경우 회사는 개인정보를 분리하여, 본 정보를 다른 목적으로 절대 이용하지 않습니다.)</span>
              </li>
              <li>회원탈퇴 후 모든 UVERSE 서비스 이용이 불가합니다.</li>
              <li>회원탈퇴 이후 유효기간이 남은 유료 쿠폰은 사용하실 수 없습니다.</li>
              <li>회원탈퇴를 하시면 코스튬, 이벤트 참여 및 당첨 내역 등 활동하신 내역이 모두 삭제됩니다.</li>
              <li>채팅 및 게시판 작성글은 탈퇴 후에도 삭제되지 않습니다. 특정 게시물 삭제를 원하실 경우 탈퇴 전 진행해 주시기 바랍니다.</li>
            </ul>
            <div className="secReason">
              <div className="inTit13 mgb15">[필수] <span className="redTxt">*</span>무엇이 불편하셨나요? (탈퇴사유)</div>
              <ul className="ReasonCon inTxt13 mgb16">
                <li className="checkIn">
                  <input type="radio" name="agree" id="agree01" />
                  <label htmlFor="agree01">사용빈도 낮음</label>
                </li>
                <li className="checkIn">
                  <input type="radio" name="agree" id="agree02" />
                  <label htmlFor="agree02">서비스/콘텐츠 이용 불만</label>
                </li>
                <li className="checkIn">
                  <input type="radio" name="agree" id="agree03" />
                  <label htmlFor="agree03">고객응대 불만</label>
                </li>
                <li className="checkIn">
                  <input type="radio" name="agree" id="agree04" />
                  <label htmlFor="agree04">기타</label>
                </li>
              </ul>
              <textarea className="etcTxt" placeholder="사유를 입력하세요." ></textarea>
            </div>
          </div>
        </div>
        <div className="checkIn mgt26">
          <input type="checkbox" name="agreeCheck" id="agreeCheck" />
          <label htmlFor="agreeCheck" className="inTit13">유의사항을 모두 확인하였으며, UVERSE 탈퇴에 동의합니다.</label>
        </div>
        <div className="layer-btns exitBtns">
        { isBun01 ? (
              <button type="button" className="SecBtn" onClick={ e => { setIsBun01(false); }}>취소</button>
            ) : (
              <button type="button" className="SecBtn01" onClick={ e => { setIsBun01(true); }}>취소</button>
            )}
          <button type="button" className="SecBtn01">탈퇴</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Secession;