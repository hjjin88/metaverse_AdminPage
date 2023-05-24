import { useEffect, useState } from "react";

const ConsEntrance = ({ popName, setPopName }) => {

    return (
    <>
        <div className="layer" />
        <div className="ConsEntrance">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">상담실 입장</div>
            <div className="con-wrap">
                <div className="con-inner-col txt-17Bk">
                    <p>
                        웹 브라우저에 마이크/카메라 권한을<br />
                        부여하지 않아 상담실 입장이 제한됩니다.
                    </p>
                    <p>
                        웹 브라우저의 마이크/카메라<br />
                        권한 설정을 확인해주세요.
                    </p>
                </div>
            </div>
        </div>
    </>
    );
};
export default ConsEntrance;
