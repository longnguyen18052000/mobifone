import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import './style.css'

const BlackList = () => {

    const [startDate, setStartDate] = useState(new Date());

    const style = {
        background: "#4299E1",
        borderRadius: "8px",
        outline: "none"
    }

    const myStyle = {
        background: "#E53E3E",
        borderRadius: "8px",
        outline: "none"
    }

    const box = {
        width: "300px", 
        outline: "none"
    }
    
    return (
        <div className="border border-1 mt-3 mr-3 pt-3 pl-3 rounded">
            <form>
                <div className="title">
                    <p className="font-weight-bold" style={{ fontSize: "17px" }}>Tra cứu theo ngày chọn</p>
                    <div className="pl-2 d-flex align-items-center">
                        <label style={{ minWidth: "170px" }}>Số thuê bao *</label>
                        <input className="p-2 border border-1 rounded" style={box} type="text" />
                    </div>

                    <div className="pl-2 mt-3 d-flex align-items-center">
                        <label style={{ minWidth: "170px" }}>Trạng Thái</label>
                        <select className="p-2 border border-1 rounded" style={box} >
                            <option>Tất cả</option>
                            <option>Hiệu lực</option>
                            <option>Hết hiệu lưc</option>
                        </select>
                    </div>

                    <div className="pl-2 mt-3 d-flex align-items-center">
                        <label style={{ minWidth: "170px" }}>Ngày kiểm tra</label>
                        <DatePicker className="p-2 border border-1 rounded datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="mt-4 mb-3 pb-4 pl-2 d-flex">
                        <button className="border border-0 pl-3 pr-3 pt-1 pb-1 text-center d-flex align-items-center mr-3 text-white" style={style}>
                            <span className="text-white mr-2">TÌM KIẾM</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>

                        <button className="border border-0 text-white pl-3 pr-3" style={myStyle}>
                            <span className="text-white mr-2">LÀM MỚI</span>
                            <i className="fas fa-ban"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BlackList