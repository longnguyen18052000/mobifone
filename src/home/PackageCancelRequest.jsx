import React from "react";
import './object/style.css';
const PackageCancelRequest = () => {
    const style = {
        background: "#4299E1",
        borderRadius: "8px",
        outline: "none"
    }
    const myStyle = {
        width: "300px",
        outline: "none"
    }

    return (
        <div className="ml-3">
            <div className="mt-4 mb-4 d-flex flex-column">
                <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tra cứu</span>
                <span>Đối tương chương trình</span>
            </div>

            <div className="border border-1 mt-3 mr-3 pt-3 pl-3 rounded">
                <form>
                    <div>
                        <p className="font-weight-bold" style={{ fontSize: "17px" }}>Tra cứu theo ngày chọn</p>
                        <div className="pl-2 d-flex align-items-center">
                            <label style={{ minWidth: "170px" }}>Số thuê bao *</label>
                            <input className="p-2 border border-1 rounded" style={myStyle} type="text" />
                        </div>

                        <div className="pl-2 mt-3 d-flex align-items-center">
                            <label style={{ minWidth: "170px" }}>Nguồn</label>
                            <input className="p-2 border border-1 rounded" style={myStyle} type="text" />
                        </div>

                        <div className="mt-3 d-flex">
                            <div className="pl-2 d-flex align-items-center mr-5">
                                <label style={{ minWidth: "170px" }}>Từ ngày</label>
                                <input className="p-2 border border-1 rounded" style={myStyle} type="date" />
                            </div>
                            <div className="pl-2 d-flex align-items-center">
                                <label style={{ minWidth: "170px" }}>Đến ngày</label>
                                <input className="p-2 border border-1 rounded" style={myStyle} type="date" />
                            </div>
                        </div>

                        <div className="mt-4 mb-3 pb-4 pl-2 d-flex">
                            <button className="border border-0 pl-3 pr-3 pt-1 pb-1 text-center d-flex align-items-center mr-3 text-white" style={style}>
                                <span className="text-white mr-2">TÌM KIẾM</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="border border-1 mb-5 rounded w-100 mt-3" style={{ height: "300px" }}>
                <div className="mt-3 mb-4 ml-3 d-flex flex-column">
                    <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tra cứu đối tượng chương trình</span>
                </div>
                <div className="pr-3 ml-3">
                    <table className="w-100 border border-1 detail" style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th className="p-1 border border-1">Ngày ghi nhận</th>
                                <th className="p-1 border border-1">Ngày phản hồi</th>
                                <th className="p-1 border border-1">Số thuê bao</th>
                                <th className="p-1 border border-1">Nguồn</th>
                                <th className="p-1 border border-1">Kênh gửi</th>
                                <th className="p-1 border border-1">Đầu số</th>
                                <th className="p-1 border border-1">Yêu cầu gửi</th>
                                <th className="p-1 border border-1">Yêu cầu map</th>
                                <th className="p-1 border border-1">Phản hồi</th>
                                <th className="p-1 border border-1">Mô tả</th>
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

export default PackageCancelRequest