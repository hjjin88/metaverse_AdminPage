import { Link } from "react-router-dom";

const MainFooterPc = () => {
    return (
    <footer className="footer" id="footer"> 
        <div className="inner_wrap">
            <div className="footer_top">
                <p className="footer_top_text">가입/일반문의 1544-0001<span className="footer_s_text">(평일 09:00 - 18:00)</span></p>
            </div>
            <ul className="footer_body">
                <li><Link href="#none">회사소개</Link></li>
                <li><Link href="#none">이용약관</Link></li>
                <li><Link href="#none">개인정보처리방침</Link></li>
            </ul>
            <ul className="footer_bottom">
                <li>㈜엘지유플러스 주소 서울특별시 용산구 한강대로32</li>
                <li>대표이사 황현식</li>
                <li>사업자등록번호 220-81-39938</li>
                <li>통신판매신고 제 2015-서울용산-00481호</li>
                <li>사업자정보확인</li>
                <li>고객센터 1544-0001</li>
            </ul> 
        </div> 
        <div className="footer_bar"></div>
    </footer>
    )
}

export default MainFooterPc;