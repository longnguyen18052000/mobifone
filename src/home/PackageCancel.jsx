import React from "react";
import Infomation from "./cancle/Infomation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import '../home/cancle/style.css'
const PackageCancel = () => {

    // const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); 
    const [startDate, setStartDate] = useState(new Date());
    const [lastDate, setLastDate] = useState();

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
        <>
            <div>
                <div className="mt-4 mb-4 ml-3 d-flex flex-column">
                    <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tiện ích</span>
                    <span>Tiện ích gói cước</span>
                </div>

                <div className="border border-1 ml-3 mr-3 pt-3 pl-3 rounded">
                    <form>
                        <div>
                            <p className="font-weight-bold" style={{ fontSize: "17px" }}>Hủy gói cước</p>
                            <div className="pl-2 d-flex align-items-center">
                                <label style={minWidthStyle}>Số thuê bao*</label>
                                <input className="p-2 border border-1 rounded" style={myStyle} type="text" placeholder="Số thuê bao" />
                            </div>

                            <div className="mt-3 pl-2 d-flex align-items-center">
                                <label style={minWidthStyle}>Từ ngày*</label>
                                <DatePicker className="p-2 border border-1 rounded datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className="mt-3 pl-2 d-flex align-items-center">
                                <label style={minWidthStyle}>Đến ngày*</label>
                                <DatePicker className="p-2 border border-1 rounded datePicker" selected={lastDate} onChange={(date) => setLastDate(date)} />
                            </div>

                            <div className="mt-3 pl-2 d-flex align-items-center">
                                <label style={minWidthStyle}>Tên dịch vụ/gói cước</label>
                                <select className="p-2 border border-1 rounded" style={myStyle}>
                                </select>
                            </div>

                            <div className="mt-4 mb-3 pb-4 pl-2 d-flex" style={{ fontSize: "14px" }}>
                                <button className="border border-0 pl-3 pr-3 pt-1 pb-1 text-center d-flex align-items-center" style={butonStyle}>
                                    <span className="text-white mr-2">THỰC HIỆN</span>
                                    <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                    </svg>
                                </button>
                                <button className="ml-3 border border-0 text-white pr-3 pl-3" style={butonStyle}>HỦY</button>
                                <button className="ml-3 border border-0 text-white pr-3 pl-3" style={butonStyle}>HỦY KGH GÓI CƯỚC</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Infomation />
        </>
    )
}

export default PackageCancel;