import React from "react";
import './style.css';
const Logic = () => {
    return (
        <>
            <table className="w-100 detail mb-3 mt-3 border-black">
                <thead>
                    <tr>
                        <th>Ngày ghi nhận</th>
                        <th>Request</th>
                        <th>Response</th></tr>
                </thead>
            </table>

            <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>Không có bản gi nào tồn tại</span>
            </div>
        </>
    );
}

export default Logic;