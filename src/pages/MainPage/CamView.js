
import { useEffect, useState } from "react";

const CamView = ({setPopName }) => {

    // const [MessageToggle, setMessageToggle] = useState(false); 
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn)
    }


    return (
        <>
        <div className="popCenter CamView">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">캠보기</div>
            <div className="popCon">
                <div className="cam-con">
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" style={{background:'pink'}} />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                    <div className="camScreen">
                        <video src="" />
                        <div className="cam-desc txt-20Bk center">카메라 없음</div>
                        <div className="btLt">
                            <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                            <p className="txt-12Wt">Sophia</p>
                        </div>
                        <button type="button" className="btRt-pfp br-100" onClick={toggleHandler}>
                            <img src={`/resources/img/${isOn ? "mikeOn20_02" : "mikeOff20_02" }.svg`} alt="마이크 버튼 이미지" />
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default CamView;