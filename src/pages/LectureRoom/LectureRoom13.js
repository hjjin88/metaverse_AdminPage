const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="layer-center layer-share">
                <div className="layer-wrap">
                    <div className="layer-body">
                        <strong>화면공유</strong>
                        <p>다른사용자가 알림을 비롯하여 내 화면의 모든 내용을 볼수 있습니다.</p>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="button button-sm" onClick={(e) => {setPopName();}}>취소</button>
                        <button type="button" className="button button-sm button-primary">공유시작</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
