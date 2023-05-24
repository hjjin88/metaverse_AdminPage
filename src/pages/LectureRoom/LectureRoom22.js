const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">투표 현황</div>
                    <div className="layer-body">
                        <div className="poll-list">
                            <table className="table-list">
                                <colgroup>
                                    <col/>
                                    <col style={{width: '33.3334%'}}/>
                                    <col style={{width: '33.3334%'}}/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>진행현황</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td colSpan={3} className="table-empty">
                                        <div className="table-empty-box">
                                            <i className="table-empty-icon"></i>
                                            <span className="table-empty-text">투표가 없습니다.</span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
