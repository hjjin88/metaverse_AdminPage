const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" onClick={(e) => {
                setPopName();
            }} />
            <div className="lecture-viewer">
                <div className="lecture-viewer-announce">
                    <div className="webcam">
                        <video className="webcam-video" src="" />
                        {/*<p className="webcam-none-camera">카메라 없음</p>*/}
                        <div className="webcam-info">
                            <div className="webcam-user">
                                <span className="webcam-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                <span className="webcam-user-name">name</span>
                            </div>
                            <div className="webcam-buttons">
                                <button type="button" className="webcam-icon">
                                    <i className={`pin`} />
                                </button>
                                <button type="button" className="webcam-icon">
                                    <i className={`zoom`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lecture-viewer-list">
                    <div className="webcam">
                        <video className="webcam-video" src="" />
                        {/*<p className="webcam-none-camera">카메라 없음</p>*/}
                        <div className="webcam-info">
                            <div className="webcam-user">
                                <span className="webcam-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                <span className="webcam-user-name">name</span>
                            </div>
                            <div className="webcam-buttons">

                            </div>
                        </div>
                    </div>
                    <div className="webcam">
                        <video className="webcam-video" src="" />
                        <p className="webcam-none-camera">카메라 없음</p>
                        <div className="webcam-info">
                            <div className="webcam-user">
                                <span className="webcam-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                <span className="webcam-user-name">name</span>
                            </div>
                            <div className="webcam-buttons">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
