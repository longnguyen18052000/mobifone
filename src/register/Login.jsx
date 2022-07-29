import React from "react";
import { createContext } from "react";
import style from '../app.module.css';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const EmailContext = createContext();

const Login = () => {
    const navigation = useNavigate();
    const loginFormik = useFormik({
        initialValues: {
            username: "",
            email: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("required").min(6, "ten nguoi dung khong duoc nho hon 6"),
            email: Yup.string().required("required"),
        }),
        onSubmit: (values) => {
            const api = "https://62d0eaf5d9bf9f17058f59db.mockapi.io/register/register";
            fetch(api)
                .then((res) => res.json())
                .then((posts) => {
                    var postApi = true;
                    posts.map(item => {
                        if (item.email !== values.email || item.username !== values.username) {
                            postApi = false;
                        } else {
                            postApi = true;
                            const currenUser = item
                            console.log(currenUser);

                        }
                    })
                    if (postApi === true) navigation("/home");
                    else alert("Username hoặc password không đúng");
                })
                .catch(function (err) {
                    console.log('err', err);
                });
        }
    });

    return (
        <EmailContext.Provider value={loginFormik.values.email}>
            <div className={style.container}>
                <div className="w-25 border border-2 bg-white" style={{ borderRadius: "10px" }}>
                    <form className="p-4" onSubmit={loginFormik.handleSubmit}>
                        <div>
                            <h4>Đăng nhập vào mobifone</h4>
                        </div>

                        <div className="pt-2">
                            <label>Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="d-block mt-1 w-100 p-1 rounded border border-2"
                                style={{ outlineColor: "blue" }}
                                value={loginFormik.values.username}
                                onChange={loginFormik.handleChange}
                            />
                            {loginFormik.errors.username && (
                                <p style={{ color: "red" }}>{loginFormik.errors.username}</p>
                            )}
                        </div>

                        <div className="mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="d-block mt-1 w-100 p-1 rounded border border-2"
                                style={{ outlineColor: "blue" }}
                                value={loginFormik.values.email}
                                onChange={loginFormik.handleChange}
                            />
                            {loginFormik.errors.email && (
                                <p style={{ color: "red" }}>{loginFormik.errors.email}</p>
                            )}
                        </div>

                        <div className="mt-4 d-flex align-items-center">
                            <input type="checkbox" style={{ marginRight: "5px" }}></input>
                            <span>Remember me</span>
                        </div>

                        <div className="mt-2">
                            <em>Forget password</em>
                        </div>

                        <div className="mt-4 d-flex justify-content-end pb-3 ">
                            <Link to="/" className={style.sign_in} style={{ marginRight: "10px", textDecoration: "none" }}>Back</Link>
                            <button type="submit" className={style.sign_up}>Sign in</button>
                        </div>

                    </form>
                </div>
            </div>
        </EmailContext.Provider>
    );
}

export default Login;