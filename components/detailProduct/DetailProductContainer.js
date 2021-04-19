import React from "react";
import { Carousel } from "react-bootstrap";

function DetailProductContainer(props) {
  return (
    <div className="box-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Carousel fade>
              <Carousel.Item>
                <img
                  width="100%"
                  className="d-block"
                  src="https://thoitrangngaynay.com/upload/sanpham/quan-short-jeans-nu-lung-cao-co-2-tui-chat-jeans-dep-899-2.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="100%"
                  className="d-block"
                  src="https://thoitrangngaynay.com/upload/sanpham/quan-short-jeans-nu-lung-cao-co-2-tui-chat-jeans-dep-899-1.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 col-md-6">
            <p className="name-product">
              QUẦN SHORT JEANS NỮ LƯNG CAO CÓ 2 TÚI CHẤT JEANS ĐẸP
            </p>
            <div className="box-detail-text">
              <span>Mã SP:</span>
              <span>
                <b>SJNUA1</b>
              </span>
            </div>
            <div className="box-detail-text">
              <span>Trạng thái:</span>
              <span>
                <b>Còn hàng</b>
              </span>
            </div>
            <div className="box-detail-text">
              <span>Chất liệu:</span>
              <span>
                <b>Chất liệu vải jean 100%</b>
              </span>
            </div>
            <div className="box-detail-text">
              <p>Kích thước:</p>
              <div>
                <button className="size-product">S</button>
                <button className="size-product">M</button>
                <button className="size-product">L</button>
                <button className="size-product">XL</button>
              </div>
            </div>
            <div className="box-detail-text">
              <p>Màu sắc:</p>
              <div>
                <button className="size-product">XÁM</button>
              </div>
            </div>
            <div className="box-price">
              <span className="price-real">160,000 đ</span>
              <span className="cost">170,000 đ</span>
              <span className="precent">{Math.round((1 / 17) * 100, 2)}%</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductContainer;
