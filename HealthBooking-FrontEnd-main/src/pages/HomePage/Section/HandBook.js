import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";

export default class HandBook extends Component {
    render() {
        return (
            <div className="section-share section-handbook">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            <FormattedMessage id="homepage.hand-book" />
                        </span>
                        <button className="btn-section">
                            <FormattedMessage id="homepage.more-infor" />
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-img handbook-img"></div>
                                <div className="description">
                                    5 khác biệt khi tầm soát bệnh, khám tổng
                                    quát tại Doctor Check
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-img handbook-img"></div>
                                <div className="description">
                                    HOT: Hoàn ngay 10% phí xét nghiệm NIPT tại
                                    Hệ thống Medlatec - Hà Nội
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-img handbook-img"></div>
                                <div className="description">
                                    Hệ thống Phòng khám Sản phụ khoa Dr.Marie có
                                    tốt không? Review chi tiết
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-img handbook-img"></div>
                                <div className="description">
                                    Bài 2: Kinh nghiệm leo đỉnh Tà Xùa, một hành
                                    trình đáng giá để trải nghiệm
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-img handbook-img"></div>
                                <div className="description">
                                    Các phương pháp điều trị đau thắt lưng và
                                    lưu ý giảm đau tại nhà
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-img handbook-img"></div>
                                <div className="description">
                                    Các phương pháp điều trị đau vai và lưu ý
                                    giảm đau tại nhà
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
