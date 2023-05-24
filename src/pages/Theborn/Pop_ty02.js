import { useEffect, useState } from "react";

const Pop_ty01 = ({setPopName }) => {

    return (
        <>
        <div className="Pop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="Pop-ty02">
                <div className="Pop-tit-02">미션 성공</div>
                {/* 1. 빽다방 쿠폰 이미지*/}
                <div className="Pop-img">
                    <img className="Pop-img-twinkle" src="/resources/img/twinkle.svg" alt="반짝이 이미지" />
                    <img className="Pop-img-inner" src="/resources/img/paikdb_coupon.svg" alt="빽다방 쿠폰 이미지" />
                    <div className="Pop-img-txt-01">[빽다방] 5000원 쿠폰</div>
                </div>
                {/* 2. 빽다방 선물박스 */}
                {/* <div className="Pop-img">
                    <img className="Pop-img-twinkle" src="/resources/img/twinkle.svg" alt="반짝이 이미지" />
                    <img className="Pop-img-inner" src="/resources/img/giftbox.svg" alt="선물 상자 이미지" />
                </div> 
                <div className="Pop-txt">랜덤 박스에 당첨 되셨습니다!<br/> 메세지함 에서 랜덤박스를 확인 해보세요!</div>*/}
                {/* 3. 더본코리아 상품권 */}
                {/* <div className="Pop-img">
                    <img className="Pop-img-twinkle" src="/resources/img/twinkle.svg" alt="반짝이 이미지" />
                    <img className="Pop-img-inner" src="/resources/img/td_giftcard.svg" alt="더본 코리아 상품권 이미지" />
                    <div className="Pop-img-txt-02">[더본코리아] 10000원 쿠폰</div>
                </div> */}
                <div className="Pop-txt">쿠폰이 발급되었습니다.<br/> 받은 쿠폰은 <span className="txt-Pu">메시지함</span>에서 확인할 수 있습니다</div>
                <button type="button" className="Pop-btn-02">확인</button>
            </div>
        </div>
        </>
    )
}
export default Pop_ty01;
