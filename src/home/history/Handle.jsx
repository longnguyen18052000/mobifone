import React from "react";
import Detail from "./Detail";
import Logic from "./Logic";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './style.css'
const Handle = () => {
    return (
        <>
            <div className="w-100 handle">
                <ul className="w-100">
                    <Tabs defaultActiveKey="first" className="w-100">
                        <Tab eventKey="first" className="mt-3" title="Chi tiết">
                            <Detail />
                        </Tab>
                        <Tab eventKey="second" title="Logic xử lý">
                            <Logic />
                        </Tab>
                    </Tabs>
                </ul>
            </div>
        </>
    );
}

export default Handle;