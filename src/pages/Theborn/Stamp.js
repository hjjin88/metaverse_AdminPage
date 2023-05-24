import { useEffect, useState } from "react";

const Stamp = ({setPopName }) => {

    return (
        <>
        <div className="Stamp">
            <button type="button" 
                className="subclose-out" 
                onClick={(e) => {setPopName();}}>
                <img src="/resources/img/close16.svg" alt="닫기 버튼 이미지" />
            </button>
            <div className="Stamp-con">
                <div className="Stamp-con-left">
                    <p className="tit">오늘의 스터디</p>
                    <div className="time">48분</div>
                    <div className="loading_bar">
                        <img src="/resources/img/loading_bar_bg.svg" alt="로딩 바 배경 이미지" />
                        <img className="loading_bar_img" src="/resources/img/loading_bar.svg" alt="로딩 바 이미지" />
                    </div>
                    <p className="txt">목표달성까지 12분 남았어요!</p>
                </div>
                <div className="Stamp-con-right">
                    <ul className="Stamp-con-right-list">
                        <li><img src="/resources/img/stamp_on.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_off.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_coffee_on.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_coffee_off.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_box_off.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_box_on.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_final_box_on.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_final_box_off.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_on.svg" alt="빽다방 스탬프 이미지" /></li>
                        <li><img src="/resources/img/stamp_on.svg" alt="빽다방 스탬프 이미지" /></li>
                    </ul>
                    <ul className="Stamp-con-right-desc">
                        <li>&nbsp;&nbsp;스터디 1시간 진행 시 기간 내 10번 스탬프 발급(1일 1회 한정)</li>
                        <li>&nbsp;&nbsp;10번 스탬프를 모두 모으면 추첨을 통해 더본코리아 상품권 지급</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Stamp;
