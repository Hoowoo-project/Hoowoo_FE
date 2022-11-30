import Coupon from './Coupon';
import MypageNav from './main_content/MypageNav';
import UserCard from './main_content/UserCard';

import { Container, Row, Col } from 'react-bootstrap';

export default function MypageCoupon() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        {' '}
        <UserCard />{' '}
      </Row>
      <Row style={{ marginTop: '100px' }}>
        <Col md={3} className="d-sticky" style={{ marginLeft: '30px' }}>
          <MypageNav />
        </Col>
        <Col md={8}>
          {/* <p
            style={{
              font: 'bold 19px "sans=serif"',
              color: '#545454',
              letterSpacing: '1px',
            }}
          >
            쿠폰/마일리지
          </p> */}

          <main>
            <section>
              <div class="container container--1160">
                {/* <div class="sub-title-box text-center">
                  <h2 class="sub-main__title m-3 p-3">쿠폰/마일리지</h2>
                </div> */}

                <div class="mypage-container d-flex">
                  <div class="mypage-content">
                    <div class="mypage-article">
                      <h3 class="pb-4 sub_title">나의 쿠폰</h3>
                      <div class="px-0 px-lg-5 py-5 py-lg-9 mb-3">
                        <div class="text-left mb-6">
                          <p class="fs-5 fw-bold text-gray-2">쿠폰 등록</p>
                          <p class="fs-6 text-gray-5 mt-3">
                            쿠폰번호를 입력하신 후 쿠폰 등록하기 버튼을
                            클릭하시면 해당 쿠폰이 보유 쿠폰 리스트에
                            등록됩니다. <br />
                            (쿠폰번호는 대소문자를 구분합니다.)
                          </p>
                        </div>
                        <div class="input_find">
                          <input
                            class="input_for"
                            type="text"
                            id="coupon_code"
                            title="쿠폰번호"
                            placeholder="쿠폰번호를 입력해주세요."
                            required=""
                          />
                          <button
                            type="button"
                            class="btn btn-dark btn-lg fs-6 request-btn"
                            onclick="coupon_regist()"
                          >
                            등록하기
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mypage-article pb-5">
                      <div class="sub_title">
                        <h3 class="mb-4">내가 보유한 쿠폰</h3>
                        <p class="fs-6">
                          * 유효기간이 지난 쿠폰은 재발행 되지 않으니 유효기간
                          내에 사용해 주시기 바랍니다.
                        </p>
                        <Coupon />
                      </div>
                      <div class="pt-10">
                        <div class="row mt-n10 mt-md-0 mx-n3 mx-lg-n9 coupon-list"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
