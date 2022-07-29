import React from "react";

const PackageRegister = () => {
    
    const style = {
        background: "#4299E1", 
        borderRadius: "8px", 
        outline: "none"
    }

    return (
        <div>
            <div className="mt-4 mb-4 ml-3 d-flex flex-column">
                <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tiện ích</span>
                <span>Tiện ích gói cước</span>
            </div>

            <div className="border border-1 ml-3 mr-3 pt-3 pl-3 rounded">
                <form>
                    <div>
                        <p className="font-weight-bold" style={{ fontSize: "17px" }}>Đăng ký thông tin gói cước</p>
                        <div className="pl-2 d-flex align-items-center">
                            <label style={{ minWidth: "170px" }}>Số thuê bao *</label>
                            <input className="p-2 border border-1 rounded" style={{ width: "300px", outline: "none" }} type="text" />
                        </div>

                        <div className="mt-3 pl-2 d-flex align-items-center">
                            <label style={{ minWidth: "170px" }}>Mã SOAP request</label>
                            <select className="p-2 border border-1 rounded" style={{ width: "300px", outline: "none" }}>
                                <option>TCB2_FOGIHUG - 0</option>
                                <option>T79 - DK 79</option>
                                <option>Y5 - 13213123</option>
                                <option>Y5 - DK_Y5_TEST_SELFCARE</option>
                            </select>
                        </div>

                        <div className="mt-3 pl-2 d-flex align-items-center">
                            <label style={{ minWidth: "170px" }}>Mã SOAP request</label>
                            <textarea className="p-2 border border-1 rounded" style={{ width: "300px", outline: "none" }}/>
                        </div>

                        <div className="mt-4 mb-3 pb-4 pl-2">
                            <button className="border border-0 pl-3 pr-3 pt-1 pb-1 text-center d-flex align-items-center" style={style}>
                                <span className="text-white mr-2">THỰC HIỆN</span>
                                <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16"              fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PackageRegister;