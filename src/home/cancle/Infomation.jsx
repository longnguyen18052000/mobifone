import React from "react";
import Handle from "./Handle";
import './style.css'
const Infomation = () => {
    return (
        <div className="d-flex mt-3">
            <div className="border border-1 ml-3 mb-5 rounded" style={{ width: "58%", height: "300px" }}>
                <div className="mt-3 mb-4 ml-3 d-flex flex-column">
                    <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Thông tin</span>
                    <span>Hủy gói cước</span>
                </div>
                <div className="pr-3 ml-3">
                    <table className="w-100 border border-1 detail" style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th className="p-1 border border-1">Số thuê bao</th>
                                <th className="p-1 border border-1">Mã dịch vụ</th>
                                <th className="p-1 border border-1">Tên dịch vụ</th>
                                <th className="p-1 border border-1">Từ ngày</th>
                                <th className="p-1 border border-1">Trạng thái</th>
                            </tr>
                        </thead>
                        <tfoot>

                        </tfoot>
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

            <div className="mr-3 ml-3" style={{ width: "42%" }}>
                <Handle />
            </div>
        </div>
    );
}

export default Infomation;