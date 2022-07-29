import React from "react";
import logo from '../image/logo.png'
import style from './home.module.css';
import { useContext } from "react";
import { EmailContext } from "../register/Login";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    const email = useContext(EmailContext);
    return (
        <div className="d-flex">
            <div className={style['package-left']}>
                <div className="border border-1 d-flex justify-content-center">
                    <img className="p-2" style={{ width: "100%" }} src={logo} alt="logo" />
                </div>
                <div className={style['package-left-content']}>
                    <div className="d-flex justify-content-center">
                        <p className="p-4 mt-3">{email}</p>
                    </div>

                    <div>
                        <p className="ml-3">TIỆN ÍCH</p>
                        <ul className="ml-4">
                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="/home" className="text-white text-decoration-none h-100 w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                                    <span className="ml-2">Đăng ký gói cước</span>
                                </Link>
                            </li>

                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="/home/package-cancel" className="text-white text-decoration-none h-100 w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                    <span className="ml-2">Hủy gói cước</span>
                                </Link>
                            </li>

                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="/home/package-renewal" className="text-white text-decoration-none h-100 w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                                    <span className="ml-2">Hủy retry không gia hạn</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="ml-3">TRA CỨU</p>
                        <ul className="ml-4">
                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="/home/package-object" className="text-white text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                    <span className="ml-2">Đối tượng trương trình</span>
                                </Link>
                            </li>

                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="/home/package-cancel-request" className="text-white text-decoration-none w-100 h-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                                    <span className="ml-2">Log yêu cầu đăng ký/hủy</span>
                                </Link>
                            </li>

                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="package-history" className="text-white text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span className="ml-2">Lịch sử gói cước</span>
                                </Link>
                            </li>

                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="package-log" className="text-white text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    <span className="ml-2">Log thực hiện thuê bao</span>
                                </Link>
                            </li>
                            <li className="pb-2 pt-2 pl-1 mr-3">
                                <Link to="todolist" className="text-white text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    <span className="ml-2">TodoList</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={style['package-right']}>
                <div className="d-flex justify-content-between border border-bottom pt-3 pb-3 pl-1 pr-5">
                    <button className="border border-0 bg-white ml-2" style={{ outline: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>

                    <button className="border border-0 bg-white" style={{ outline: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </button>
                </div>

                <Outlet />
            </div>
        </div>
    );
}

export default Home;