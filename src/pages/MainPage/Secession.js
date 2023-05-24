import { useEffect, useState } from "react";

const Secession = ({ popName, setPopName }) => {
    
  const [isBun01, setIsBun01] = useState(false);

  return (
    <div className="layer new_pop02 layer660 secession">
      <div>
        <div className="layer_top">
          <h1 className="layer_tit">회원 탈퇴</h1>
          <button type="button" className="subclose close16" onClick={ e => { setPopName(); }}></button>
        </div>
        <div className="layer_cont">
          <h2 className="cont_tit">UVERSE를 이용하시면서 불편한 점이 있으셨나요?</h2>
          <p className="cont_txt">이용중 겪으신 불편 및 문의사항은 <button type="button" className="underline">고객센터</button>로 문의 주시면 성심 성의껏 답변 드리겠습니다.</p>
          <div className="box_gray">
            <h3 className="tit_15Bk_B">꼭 확인하세요!</h3>
            <div className="tit_12Bk_SB box_yellow">회원 탈퇴를 진행하기 전 아래 유의사항을 확인해 주세요.</div>
            <ul className="list_dot">
              <li>회원탈퇴를 하시면 <span className="color_red">아이디와 함께 UVERSE에 제공하신 개인정보가 모두 삭제</span>됩니다. <span className="small">(단, UVERSE 플레이 데이터는 15일간 보관되며, 관계법령 규정에 따라 일정기간 정보를 보관할 필요가 있는 경우 회사는 개인정보를 분리하여, 본 정보를 다른 목적으로 절대 이용하지 않습니다.)</span>
              </li>
              <li>회원탈퇴 후 모든 UVERSE 서비스 이용이 불가합니다.</li>
              <li>회원탈퇴 이후 유효기간이 남은 유료 쿠폰은 사용하실 수 없습니다.</li>
              <li>회원탈퇴를 하시면 코스튬, 이벤트 참여 및 당첨 내역 등 활동하신 내역이 모두 삭제됩니다.</li>
              <li>채팅 및 게시판 작성글은 탈퇴 후에도 삭제되지 않습니다. 특정 게시물 삭제를 원하실 경우 탈퇴 전 진행해 주시기 바랍니다.</li>
            </ul>
            <div className="tit_13BK_SB">[필수] <span className="color_red">*</span>무엇이 불편하셨나요? (탈퇴사유)</div>
            <ul className="list_check">
              <li className="form_check">
                <input type="radio" name="agree" id="agree01" />
                <label htmlFor="agree01">사용빈도 낮음</label>
              </li>
              <li className="form_check">
                <input type="radio" name="agree" id="agree02" />
                <label htmlFor="agree02">서비스/콘텐츠 이용 불만</label>
              </li>
              <li className="form_check">
                <input type="radio" name="agree" id="agree03" />
                <label htmlFor="agree03">고객응대 불만</label>
              </li>
              <li className="form_check">
                <input type="radio" name="agree" id="agree04" />
                <label htmlFor="agree04">기타</label>
              </li>
            </ul>
            <div className="form_control">
              <textarea className="text_area" placeholder="사유를 입력하세요." ></textarea>
            </div>
          </div>
          <div className="form_check allAgree">
            <input type="checkbox" name="agreeCheck" id="agreeCheck" />
            <label htmlFor="agreeCheck">
              <p>유의사항을 모두 확인하였으며, UVERSE 탈퇴에 동의합니다.</p>
            </label>
          </div>
        </div>
        
        <div className="layer_bottom">
          <div className="layer_btns">
              { isBun01 ? (
                <button type="button" className="btn_df on" onClick={ e => { setIsBun01(false); }}>취소</button>
              ) : (
                <button type="button" className="btn_df line" onClick={ e => { setIsBun01(true); }}>취소</button>
              )}
            <button type="button" className="btn_df line">탈퇴</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secession;