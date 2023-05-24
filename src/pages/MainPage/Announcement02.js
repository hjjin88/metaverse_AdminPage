import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Announcement02  = ({setPopName }) => {
    return (
        <>
        <div className="Tutorial Announcement02">
          <div className="Tutorial-con txt-40Wt">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img className="img_box" src="/resources/img/bg.png" alt="공지사항 이미지" />
                <div className="check">
                  <label for="checkbox">오늘 하루 보지 않기</label><input type="text" name="checkbox" id="checkbox"/>
                </div>
                <p className="Slide_textarea">메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_box">
                  <div className="img_box_inner">
                    <button type="button" className="sec-btn-L tit-20Gy2">이미지 등록</button>
                  </div>
                </div>
                <div className="check plus">
                  <label for="checkbox">공지사항 추가</label><input type="text" name="checkbox" id="checkbox"/>
                </div>
                <div className="Slide_textarea cor">
                  <textarea name="" id="" rows="1" maxLength={100} placeholder="내용을 입력해주세요(100자 이내)" />
                  <button type="button">수정</button>
                </div> 
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_box">
                  <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                    <div className="btns">
                      <button type="button">변경</button>
                      <button type="button">삭제</button>
                    </div>
                </div>
                <div className="check plus">
                  <label for="checkbox">공지사항 추가</label><input type="text" name="checkbox" id="checkbox"/>
                </div>
                <div className="Slide_textarea cor textarea_check">
                  <p className="txt">메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
                  <button type="button">확인</button>
                </div> 
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <div className="check">
                  <label for="checkbox">오늘 하루 보지 않기</label><input type="text" name="checkbox" id="checkbox"/>
                </div>
                <p className="Slide_textarea">메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <div className="check">
                  <label for="checkbox">오늘 하루 보지 않기</label><input type="text" name="checkbox" id="checkbox"/>
                </div>
                <p className="Slide_textarea">메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        </>
    )
}
export default Announcement02;
