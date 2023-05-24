import { useState } from "react";

const ToggleItem = ({placeholder, item = []}) => {
    const [SelectToggle, setSelectToggle] = useState(false);

    return (
        <div className={`request-select${SelectToggle ? ' request-select-toggle' : ''}`}>
            <button className="request-select-head" onClick={() => setSelectToggle((prev) => !prev)}>
                <span>{placeholder}</span>
            </button>

            {SelectToggle && <div className="request-select-list">
                {item.map((value, key) => (
                    <button type={"button"} className="request-select-item" key={key}>{value}</button>))}
            </div>}
        </div>
    );
};
const LectureRoom00 = ({setPopName}) => {
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);
    const [View, setView] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="lecture-room MicCamSet layer-center ">
                <button
                    type="button" className="subclose close16" onClick={(e) => {
                    setPopName();
                }}
                />
                <div className="layer-wrap">
                    <div className="layer-head">강의실 설정</div>
                    <div className="layer-body">
                        <div className="lecture-setting">
                            <div className="con-row">
                                <div className="con-col">
                                    <div className="cam-view">
                                        <div className="webcam">
                                            <video className="webcam-video" src="" />
                                            <p className="webcam-none-camera">카메라 없음</p>
                                            <div className="webcam-info">
                                                <div className="webcam-buttons">
                                                    <button
                                                        type="button" className="webcam-icon" onClick={() => {
                                                        setCamOn(!CamOn)
                                                    }}
                                                    >
                                                        <div className={`camOff ${CamOn ? "camOn" : "camOff"}`} />
                                                    </button>
                                                    <button
                                                        type="button" className="webcam-icon" onClick={() => {
                                                        setMikeOn(!MikeOn)
                                                    }}
                                                    >
                                                        <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cam-notice">
                                            마이크/카메라 연결 확인
                                            <small>(설정 &gt; 개인정보 및 보안 &gt; 권한에서 카메라와 마이크 권한 허용이 되어있는지 확인하세요.)</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="con-col">
                                    <div className="request-group">
                                        <strong className="request-title">강사</strong>
                                        <ToggleItem placeholder="강사님A" item={['강사님A', '강사님B']} />
                                    </div>

                                    <div className="request-group">
                                        <strong className="request-title">진행자</strong>
                                        <ul>
                                            <li className="lecture-assistant">
                                                <div className="lecture-assistant-wrap">
                                                    <div className="lecture-assistant-photo" style={{ backgroundColor: '#CAD8ED' }}>
                                                        <img src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                                    </div>
                                                    <div className="lecture-assistant-name">진행자A</div>
                                                </div>
                                                <div>
                                                    <label className="request-radio">
                                                        <input type="radio" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="lecture-assistant">
                                                <div className="lecture-assistant-wrap">
                                                    <div className="lecture-assistant-photo" style={{ backgroundColor: '#E4CAED' }}>
                                                        <img src="/resources/img/npc.png" alt="프로필 사진 이미지" />
                                                    </div>
                                                    <div className="lecture-assistant-name">진행자A</div>
                                                </div>
                                                <div>
                                                    <label className="request-radio">
                                                        <input type="radio" />
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="request-group">
                                        <strong className="request-title">강의 정보를 작성해 주세요.</strong>
                                        <div className="request-textarea">
                                                <textarea
                                                    name="" id="" cols="30" placeholder="
                                                    강의 정보는 1~100자 이내로 입력해주세요.&#13;&#10;
                                                    ex)&#13;&#10;
                                                    강사 : 홍길동&#13;&#10;
                                                    강의제목 : 한국어 초급&#13;&#10;
                                                    유의사항 : 수업 시간 엄수"
                                                ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" 
                        className={`sec-btn-L${View ? "on02" : "off02"} tit-20Gy3`}
                        onClick={() => {setView(!View)}} 
                        >등록</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
