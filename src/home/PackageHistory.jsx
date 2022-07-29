import React from "react";
import Infomation from "./history/Infomation";
import First from "./history/First";

const PackageHistory = () => {

    
    return (
        <>
            <div>
                <div className="mt-4 mb-4 ml-3 d-flex flex-column">
                    <span className="font-weight-bold mt-2" style={{ fontSize: "19px" }}>Tra cứu</span>
                    <span>Lịch sử gói cước</span>
                </div>

                <First />
            </div>

            <Infomation />
        </>
    )
}

export default PackageHistory