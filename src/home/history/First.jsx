import React from "react";
import { useState } from "react";

const First = () => {

    const [date, setDate] = useState('12/12/2022');

    const minWidthStyle = {
        minWidth: "170px"
    }

    const myStyle = {
        width: "300px",
        outline: "none"
    };

    const butonStyle = {
        background: "#4299E1",
        borderRadius: "8px",
        outline: "none",
        fontWeight: "500"
    };

    return (
        <div className="border border-1 ml-3 mr-3 pt-3 pl-3 rounded">
            <form>
                <div>
                    <p className="font-weight-bold" style={{ fontSize: "17px" }}>Tra cứu theo ngày</p>
                    <div className="pl-2 d-flex align-items-center">
                        <label style={minWidthStyle}>Số thuê bao*</label>
                        <input className="p-2 border border-1 rounded" style={myStyle} type="text" />
                    </div>

                    <div className="mt-3 pl-2 d-flex align-items-center">
                        <label style={minWidthStyle}>Từ ngày*</label>
                        <input className="p-2 border border-1 rounded" style={myStyle} value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    </div>

                    <div className="mt-3 pl-2 d-flex align-items-center">
                        <label style={minWidthStyle}>Đến ngày*</label>
                        <input className="p-2 border border-1 rounded" style={myStyle} type="date" />
                    </div>

                    <div className="mt-3 pl-2 d-flex align-items-center">
                        <label style={minWidthStyle}>Tên dịch vụ/gói cước</label>
                        <select className="p-2 border border-1 rounded" style={myStyle}>
                        </select>
                    </div>

                    <div className="mt-3 pl-2 d-flex align-items-center">
                        <label style={minWidthStyle}>Trạng thái</label>
                        <select className="p-2 border border-1 rounded" style={myStyle}>
                            <option>Tất cả</option>
                            <option>Hiệu lực</option>
                            <option>Hết hiệu lực</option>
                        </select>
                    </div>

                    <div className="mt-4 mb-3 pb-4 pl-2 d-flex text-white" style={{ fontSize: "14px" }}>
                        <button className="border border-0 pl-3 pr-3 pt-1 pb-1 text-white text-center d-flex align-items-center" style={butonStyle}>
                            <span className="text-white mr-2">Tìm kiếm</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default First