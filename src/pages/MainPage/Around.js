
import { useEffect, useState } from "react";

const Around = ({popName, setPopName }) => {

    return (
        <>
        <div className="Around">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">주변</div>
            <ul className="AroundCon txt-12Gy6">
                <li className="Profile-set"><button type="button" onClick={ e => { setPopName('AroundAll'); }}><div className="allBtn">ALL</div></button></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" /><p className="txt-pu">방장</p></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/presenter.svg" alt="발표자 아이콘 이미지" /><p>발표자</p></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/counselor.svg" alt="상담사 아이콘 이미지" /><p>상담사</p></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/teacher.svg" alt="강사 아이콘 이미지" /><p>강사</p></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" /><p className="txt-pu">방장</p></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/presenter.svg" alt="발표자 아이콘 이미지" /><p>발표자</p></li>
                <li className="Profile-set"><img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" /><img className="Profile-mark" src="/resources/img/counselor.svg" alt="상담사 아이콘 이미지" /><p>상담사</p></li>
            </ul>
        </div>
        </>
    )
}
export default Around;
