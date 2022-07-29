import React from "react";
import style from '../app.module.css'
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const Register = () => {

    const navigation = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("required").min(6, "ten nguoi dung khong duoc nho hon 6").max(30, "ten nguoi dung khong duoc lon hon 30"),
            email: Yup.string().required("required").matches(),
            phone: Yup.number().required("required"),
            password: Yup.string().required("required"),
            confirmPassword: Yup.string().required("required").oneOf([Yup.ref("password"), null], "password nhap lai khong dung")
        }),
        onSubmit: (values) => {
            fetch("https://62d0eaf5d9bf9f17058f59db.mockapi.io/register/register", {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            navigation("/login");
        }
    });

    return (
        <div className={style.container}>
            <div className="w-25 border border-2 bg-white" style={{ borderRadius: "10px" }}>
                <form className="p-4" onSubmit={formik.handleSubmit}>
                    <div>
                        <h4>Đăng ký tài khoản mobifone</h4>
                    </div>

                    <div className="pt-2">
                        <label>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="d-block mt-1 w-100 p-1 rounded border border-2"
                            style={{ outlineColor: "blue" }}
                            value={formik.values.username}
                            onChange={formik.handleChange}

                        />
                        {formik.errors.username && (
                            <p style={{ color: "red" }}>{formik.errors.username}</p>
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
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && (
                            <p style={{ color: "red" }}>{formik.errors.email}</p>
                        )}
                    </div>

                    <div className="mt-3">
                        <label>Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="d-block mt-1 w-100 p-1 rounded border border-2"
                            style={{ outlineColor: "blue" }}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.phone && (
                            <p style={{ color: "red" }}>{formik.errors.phone}</p>
                        )}
                    </div>

                    <div className="mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            className="d-block mt-1 w-100 p-1 rounded border border-2"
                            style={{ outlineColor: "blue" }}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && (
                            <p style={{ color: "red" }}>{formik.errors.password}</p>
                        )}
                    </div>

                    <div className="mt-3">
                        <label>Confirm password</label>
                        <input
                            type="text"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="d-block mt-1 w-100 p-1 rounded border border-2"
                            style={{ outlineColor: "blue" }}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirmPassword && (
                            <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
                        )}
                    </div>

                    <div className="mt-3 d-flex justify-content-end pb-3">
                        <button type="submit" className={style.sign_up} style={{ marginRight: "10px" }}>Sign up</button>
                        <Link to="/login" className={style.sign_in} style={{textDecoration: "none"}}>Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;