import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Tutorial  = ({setPopName }) => {
    return (
        <>
        <div className="Tutorial">
          <div className="entire-tit">튜토리얼</div>
          <button type="button" className="entireclose closeWt16" onClick={ e => { setPopName(); }} />
          <div className="Tutorial-con txt-40Wt">
            <Swiper
              modules={[Navigation, Pagination]}
              // spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src="/resources/img/Keyboard01.svg" alt="키보드 이미지" />
                <p>메타스쿨에 오신 것을 환영합니다!<br />키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/Keyboard02.svg" alt="키보드 이미지" />
                <p>화면 하단의 버튼을 눌러<br />해당 장소로 이동할 수 있습니다.</p>
                <button type="button" className="sec-btn on-02 tit-26Wt">시작하기</button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        </>
    )
}
export default Tutorial;
