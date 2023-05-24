
import { useEffect, useState } from "react";

const Around = ({popName, setPopName }) => {

    const [Camera, setCamera] = useState(false);
    const [Mike, setMike] = useState(false);


    return (
        <>
        <div className="AroundAll">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">주변</div>
            <ul className="popCon ty-01">
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <button type="button" className="IDBox" onClick={ e => { setPopName('MyProfileView'); }}>
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </button>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOff30" /> : <div className="videoOn30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <button type="button" className="IDBox" onClick={ e => { setPopName('ProfileView'); }}>
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </button>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p>상담사</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOff30" /> : <div className="videoOn30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                    <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p>강사</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOn" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOn" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="Profile-con">
                        <div>
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <span className="markOff" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li className="Profile-set">
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li> 
            </ul>
        </div>
        </>
    )
}
export default Around;
