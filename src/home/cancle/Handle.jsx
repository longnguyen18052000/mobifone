import React from "react";
import './style.css';
import Detail from "./Detail";
import Logic from "./Logic";
import PackageInfo from "./PackageInfo";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const Handle = () => {
    return (
        <>
            <div className="w-100 handlee">
                <ul className="w-100">
                    <Tabs defaultActiveKey="first" className="w-100">
                        <Tab eventKey="first" className="mt-3" title="Chi tiết">
                            <Detail />
                        </Tab>
                        <Tab eventKey="second" title="Logic xử lý">
                            <Logic />
                        </Tab>
                        <Tab eventKey="third" title="Thông tin gói cước">
                            <PackageInfo />
                        </Tab>
                    </Tabs>
                </ul>
            </div>
        </>
    );
}

export default Handle;