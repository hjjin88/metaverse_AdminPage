const AdminPage07 = () => {
  return (
    <div className="pageClass">
      <div className="AdminTit">스페이스 관리자 설정 (페이지 타이틀)</div>
      <div className="AdminStit">방문자 수 (하단 여백은 페이지별로 설정)</div>
      <div className="AdminBtn-wrap">
        {/* 버튼 2개이상 Defalut => center */}
        <button type="button" className="AdminBtn on">계정 추가하기</button>
        <button type="button" className="AdminBtn off">삭제</button>
      </div>
      <div className="AdminBtn-wrap left">
        {/* 버튼 2개이상 왼쪽 정렬 left */}
        <button type="button" className="AdminBtn on">계정 추가하기</button>
        <button type="button" className="AdminBtn off">삭제</button>
      </div>
      <div className="AdminBtn-wrap right">
        {/* 버튼 2개이상 왼쪽 정렬 right */}
        <button type="button" className="AdminBtn on">계정 추가하기</button>
        <button type="button" className="AdminBtn off">삭제</button>
      </div>
      {/* 버튼 small 123px  */}
      <button type="button" className="AdminBtn on small">저장</button>
      <button type="button" className="AdminBtn off small">저장</button>
      <button type="button" className="AdminBtn on02 small">저장</button>
      {/* 버튼 Defalut 136px  */}
      <button type="button" className="AdminBtn on">저장</button>
      <button type="button" className="AdminBtn off">저장</button>
      <button type="button" className="AdminBtn on02">저장</button>
    </div>
  )
}

export default AdminPage07;