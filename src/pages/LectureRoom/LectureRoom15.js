import {useState} from "react";

const LectureRoom15 = ({setPopName }) => {

    const [View, setView] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center app-color-wrap">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">크로마키</div>
                    <div className="layer-body">
                        <div className="lecture-chromakey-title">배경 제거</div>
                        <div className="lecture-chromakey">
                            <div className="lecture-chromakey-color">
                                <div className="lecture-chromakey-color-select" style={{backgroundColor: '#1F1F1F'}}>
                            </div>
                            <div className="app-color">
                                <div className="colorPicker-box">
                                    <div className="colorPicker"/>
                                    <div className="colorPickerBar"/>
                                </div>
                                <div className="app-color-inputs">
                                    <div className="hex">
                                        <label for="colorPickerInput647">Hex :</label><input type="text" maxLength={7} name="colorPickerInput647" id="colorPickerInput647"/>
                                    </div>
                                    <div className="colorFields">
                                        <div className="color r">
                                            <label for="colorPickerInput301">R :</label><input type="text" maxLength={3} name="colorPickerInput301" id="colorPickerInput301"/>
                                        </div>
                                        <div className="color g">
                                            <label for="colorPickerInput756">G :</label><input type="text" maxLength={3} name="colorPickerInput756" id="colorPickerInput756"/>
                                        </div>
                                        <div className="color b">
                                            <label for="colorPickerInput654">B :</label><input type="text" maxLength={3} name="colorPickerInput654" id="colorPickerInput654"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lecture-chromakey-color-list">
                                <button type="button" style={{backgroundColor: '#FF0000'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9900'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9811'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9722'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9633'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9544'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9455'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9366'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9277'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9188'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9990'}}></button>
                                <button type="button" style={{backgroundColor: '#FF8920'}}></button>
                                <button type="button" style={{backgroundColor: '#FF7930'}}></button>
                                <button type="button" style={{backgroundColor: '#FF6940'}}></button>
                                <button type="button" style={{backgroundColor: '#FF5950'}}></button>
                                <button type="button" style={{backgroundColor: '#FF4960'}}></button>
                                <button type="button" style={{backgroundColor: '#FF3970'}}></button>
                                <button type="button" style={{backgroundColor: '#FF2980'}}></button>
                                <button type="button" style={{backgroundColor: '#FF1990'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9911'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9912'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9913'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9914'}}></button>
                                <button type="button" style={{backgroundColor: '#FF9915'}}></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                                <button type="button"></button>
                            </div>
                            </div>
                            <div className="app-color-range">
                                <div>
                                    <div className="lecture-chromakey-color-title">컷오프 (0.1234)</div>
                                    <div className="color-range" style={{background: `linear-gradient(90deg, #FFFFFF 20.65%, #1F1F1F 100%)`}}>
                                        <i style={{left: `5%`}}></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="lecture-chromakey-color-title">페더링 (0.1234)</div>
                                    <div className="color-range" style={{background: `linear-gradient(90deg, #FFFFFF 20.65%, #1F1F1F 100%)`}}>
                                        <i style={{left: `80%`}}></i>
                                    </div>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox"/>
                                        <span className="txt-11Gy1">크로마키 켜기</span>
                                        <i></i>
                                    </label>
                                    <button className="lecture-chromakey-pointer" style={{top: '10px', left: '10px'}}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layer-footer btns">
                        <button type="button" 
                        className={`sec-btn-L${View ? "on02" : "off02"} tit-20Gy3`}
                        onClick={() => {setView(!View)}} 
                        >적용하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom15;
