import React from "react";
import WhiteList from "./object/WhiteList";
import BlackList from "./object/BlackList";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './object/style.css';
const PackageObject = () => {

    return (
        <div className="ml-3">
            <div className="mt-4 mb-4 d-flex flex-column">
                <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tra cứu</span>
                <span>Đối tương chương trình</span>
            </div>

            <div>
                <Tabs defaultActiveKey="first" className="w-100 object">
                    <Tab eventKey="first" className="mt-3" title="Whitelist">
                        <WhiteList />
                    </Tab>
                    <Tab eventKey="second" title="Blacklist">
                        <BlackList />
                    </Tab>
                </Tabs>
            </div>

            <div className="border border-1 mb-5 rounded w-100 mt-3" style={{ height: "300px" }}>
                <div className="mt-3 mb-4 ml-3 d-flex flex-column">
                    <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tra cứu đối tượng chương trình</span>
                </div>
                <div className="pr-3 ml-3">
                    <table className="w-100 border border-1 detail" style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th className="p-1 border border-1">Ngày đăng ký</th>
                                <th className="p-1 border border-1">Số điện thoại</th>
                                <th className="p-1 border border-1">Gói cước</th>
                                <th className="p-1 border border-1">Số lần gia hạn</th>
                                <th className="p-1 border border-1">Trạng thái</th>
                                <th className="p-1 border border-1">Từ ngày</th>
                                <th className="p-1 border border-1">Đến ngày</th>
                                <th className="p-1 border border-1">Cú pháp ĐK</th>
                                <th className="p-1 border border-1">Chương trình</th>
                                <th className="p-1 border border-1">Hạn ĐKKM</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="text-center mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <span>Không có bản gi nào tồn tại</span>
                </div>
                <div className="mr-3 ml-3 d-flex justify-content-between mt-3 mb-3">
                    <strong>Cuối cùng</strong>
                    <div>
                        <span>Trang 1</span>
                        <strong>trong 0</strong>
                    </div>
                    <select className="p-2">
                        <option>Hiển thị 10</option>
                        <option>Hiển thị 25</option>
                        <option>Hiển thị 50</option>
                        <option>Hiển thị 100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default PackageObject