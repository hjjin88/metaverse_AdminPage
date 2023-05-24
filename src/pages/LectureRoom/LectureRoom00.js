const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            {/* [layer-center, layer-right-center, layer-right-bottom, layer-right-top] */}
            <div className="lecture-room layer-right-center">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">###title</div>
                    <div className="layer-body">
                        <div style={{height: '1000px'}}>####content</div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="button button-primary">확인</button>
                        <button type="button" className="button button-outline">확인</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
