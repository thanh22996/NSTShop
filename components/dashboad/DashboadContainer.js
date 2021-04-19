import React from "react";
import { Carousel } from "react-bootstrap";
import { useRouter } from "next/router";

const DashboadContainer = () => {
  const router = useRouter();
  const handleOnclick = () => {
    console.log("you was onclick now!");
    router.push("/detail-product");
  };

  return (
    <div className="dashboard-shop">
      <div id="viewport">
        {/* Sidebar */}
        <div id="sidebar">
          <header>
            <a href="#">Lựa chọn</a>
          </header>
          <ul className="nav"></ul>
        </div>
        {/* Content */}
        <div id="content">
          <div className="box-clother">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq1.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq2.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq3.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq4.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq5.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq6.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq7.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq8.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq9.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq10.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq11.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="img-clother">
                    <img
                      width="100%"
                      src="/assets/img/img-shop/aq12.jpg"
                      alt="clother"
                    />
                    <button className="btn-add-cart" onClick={handleOnclick}>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="box-product">
                    <em>tên sản phẩm</em>
                    <button className="btn-detail" onClick={handleOnclick}>
                      Chi tiết
                    </button>
                  </div>
                  <p className="price-clother">150,000 đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboadContainer;
