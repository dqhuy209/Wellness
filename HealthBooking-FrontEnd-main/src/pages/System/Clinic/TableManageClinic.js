import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Table, Space, Input } from "antd";
import { LANGUAGE } from "../../../utils";

export default class TableManageClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFilter: "",
            filteredData: [],
        };
    }

    handleEditClinic = (clinic) => {
        //Gửi data sang parent để lưu data vào form
        this.props.handleEditClinicFromParent(clinic);
    };
    render() {
        let { data, language } = this.props;
        let { nameFilter, filteredData } = this.state;

        //Tạo key props khi render
        const dataSource =
            data &&
            data.length > 0 &&
            data.map((item) => {
                if (item.descriptionMarkdown.length > 100) {
                    item.description =
                        item.descriptionMarkdown.slice(0, 100) + "...";
                } else {
                    item.description = item.descriptionMarkdown;
                }
                item.key = item.id;
                return { ...item };
            });

        //Tạo columns
        const columns = [
            {
                title:
                    language === LANGUAGE.VI ? "Tên phòng khám" : "Name Clinic",
                dataIndex: language === LANGUAGE.VI ? "nameVi" : "nameEn",
                key: "nameClinic",
                defaultSortOrder: "descend",
                sorter: (a, b) => a.id - b.id,
                filterDropdown: () => (
                    <div style={{ padding: 8 }}>
                        <Input
                            placeholder="Search name"
                            value={nameFilter}
                            onChange={(e) =>
                                this.setState({
                                    nameFilter: e.target.value,
                                })
                            }
                            onPressEnter={handleFilter}
                        />
                    </div>
                ),
            },
            {
                title: language === LANGUAGE.EN ? "Description" : "Giới thiệu",
                dataIndex: "description",
                key: "description",
            },
            {
                title: language === LANGUAGE.EN ? "Address" : "Địa chỉ",
                dataIndex: "address",
                key: "address",
            },
            {
                title: "Action",
                key: "action",
                render: (_, record) => (
                    <Space size="middle">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                this.handleEditClinic(record);
                            }}
                        >
                            <FormattedMessage id={"actions.edit"} />
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                // console.log(record.id);
                                this.props.deleteClinic(record.id);
                            }}
                        >
                            <FormattedMessage id={"actions.delete"} />
                        </button>
                    </Space>
                ),
            },
        ];

        // Hàm xử lý bộ lọc
        const handleFilter = () => {
            let filteredData = dataSource;
            if (nameFilter) {
                filteredData = filteredData.filter((record) => {
                    if (language === LANGUAGE.VI) {
                        return record.nameVi
                            .toLowerCase()
                            .includes(nameFilter.toLowerCase());
                    } else {
                        return record.nameEn
                            .toLowerCase()
                            .includes(nameFilter.toLowerCase());
                    }
                });
            }
            this.setState({ filteredData });
        };

        return (
            <div className="mt-5">
                <Table
                    dataSource={
                        filteredData &&
                        filteredData.length > 0 &&
                        nameFilter !== ""
                            ? filteredData
                            : dataSource
                    }
                    columns={columns}
                    bordered
                    title={() => (
                        <h3>
                            {/* <FormattedMessage id={"manage-user.listUser"} /> */}
                            Danh sách phòng khám
                        </h3>
                    )}
                    pagination={{
                        defaultPageSize: 5, // Số lượng bản ghi hiển thị trên mỗi trang
                        showSizeChanger: true, // Hiển thị chọn kích thước trang
                        pageSizeOptions: ["5", "10", "15"], // Các tùy chọn kích thước trang
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} of ${total} items`, // Hiển thị tổng số bản ghi
                    }}
                />
            </div>
        );
    }
}
