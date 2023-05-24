import { useEffect, useState } from "react";

const Kiosk = ({setPopName }) => {

    return (
        <>
        <div className="Pop">
        <button type="button" 
            className="subclose-out" 
            onClick={(e) => {setPopName();}}>
            <img src="/resources/img/close16.svg" alt="닫기 버튼 이미지" />
        </button>
            <div className="Pop-ty03">
                <div className="hspc_kiosk_banner">
                    <img src="/resources/img/hspc_kiosk_banner.svg" alt="한신포차 배너 이미지" />
                </div>
                <div className="kiosk">
                    <div className="kiosk-tit">안주 메뉴</div>
                    <div className="kiosk-list">
                        <button type="button" className="kiosk-list-item">
                            <img src="/resources/img/hspc_kiosk-item01.svg" alt="한신 무뼈 닭발 메뉴 이미지" />
                            <p>한신 무뼈 닭발</p>
                        </button>
                        <button type="button" className="kiosk-list-item">
                            <img src="/resources/img/hspc_kiosk-item02.svg" alt="한신 닭발 메뉴 이미지" />
                            <p>한신 닭발</p>
                        </button>
                        <button type="button" className="kiosk-list-item">
                            <img src="/resources/img/hspc_kiosk-item03.svg" alt="한신 통닭 메뉴 이미지" />
                            <p>한신 통닭</p>
                        </button>
                        <button type="button" className="kiosk-list-item">
                            <img src="/resources/img/hspc_kiosk-item04.svg" alt="새우알찜 메뉴 이미지" />
                            <p>새우알찜</p>
                        </button>
                        <button type="button" className="kiosk-list-item">
                            <img src="/resources/img/hspc_kiosk-item05.svg" alt="해물모둠볶음 메뉴 이미지" />
                            <p>해물모둠볶음</p>
                        </button>
                        <button type="button" className="kiosk-list-item">
                            <img src="/resources/img/hspc_kiosk-item06.svg" alt="치즈 돼지 고추장 바베큐 메뉴 이미지" />
                            <p>치즈 돼지 고추장 바베큐</p>
                        </button>
                        <div className="center">
                            <button type="button" className="Pop-btn-02-red">주문하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Kiosk;
