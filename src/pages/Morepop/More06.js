
import { useEffect, useState } from "react";

const More06 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="more-ty02 txt-11">
                <button type="button" onClick={ e => { setPopName('CampusSelect'); }}><img src="/resources/img/campus24.svg" alt="캠퍼스 버튼 이미지" /><p>캠퍼스</p></button>
                <button type="button" onClick={ e => { setPopName('Closet'); }}><img src="/resources/img/closet24.svg" alt="옷장 버튼 이미지" /><p>옷장</p></button>
                <button type="button" onClick={ e => { setPopName('Makeup'); }}><img src="/resources/img/dressingTable24.svg" alt="화장대 버튼 이미지" /><p>화장대</p></button>
                <button type="button" onClick={ e => { setPopName(); }}><img src="/resources/img/pointShop24.svg" alt="포인트 상점 버튼 이미지" /><p>포인트 상점</p></button>
            </div>
        </div>
        </>
    )
}
export default More06;
