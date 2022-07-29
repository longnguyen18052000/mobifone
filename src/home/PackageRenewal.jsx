import React from "react";

const PackageRenewal = () => {
    const style = {
        background: "#4299E1",
        borderRadius: "8px",
        outline: "none"
    }
    return (
        <div className="ml-3">
            <div className="mt-4 mb-4 d-flex flex-column">
                <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tiện ích</span>
                <span>Tiện ích gói cước</span>
            </div>

            <div className="border border-1 mr-3 pt-3 pl-3 rounded">
                <form>
                    <div>
                        <p className="font-weight-bold" style={{ fontSize: "17px" }}>Hủy retry không gia hạn</p>
                        <div className="pl-2 d-flex align-items-center">
                            <label style={{ minWidth: "170px" }}>Số thuê bao *</label>
                            <input className="p-2 border border-1 rounded" style={{ width: "300px", outline: "none" }} type="text" />
                        </div>

                        <div className="mt-4 mb-3 pb-4 pl-2 d-flex">
                            <button className="border border-0 pl-3 pr-3 pt-1 pb-1 text-center d-flex align-items-center mr-3" style={style}>
                                <span className="text-white mr-2">THỰC HIỆN</span>
                                <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                            </button>

                            <button className="border border-0 text-white pl-3 pr-3" style={style}>HỦY RETRY</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="border border-1 mb-5 rounded w-100 mt-3" style={{ height: "300px" }}>
                <div className="mt-3 mb-4 ml-3 d-flex flex-column">
                    <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Thông tin hủy retry không gia hạn</span>
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

export default PackageRenewal