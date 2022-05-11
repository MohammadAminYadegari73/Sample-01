import React from 'react'
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink, useNavigate,Redirect } from 'react-router-dom';
import axios from 'axios';
export const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">



                                <h5 className="card-title text-center font-weight-bold">ورود به حساب کاربری</h5>
                                <p className="">با پشتیبانی در ارتباط باشید</p>
                                <div className="form-signin">
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> ورود با گوگل</button>
                                    <div className="division">
                                        <div className="line l"></div>
                                        <span className="form-span-signin-email" >یا ورود با ایمیل</span>
                                        <div className="line r"></div>
                                    </div>

                                    <Formik
                                        initialValues={{ firstName: '', password: '' }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.firstName) {
                                                errors.firstName = 'Required';
                                            } 
                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            const apiUrl = `https://apitester.ir/api/Users/authenticate?username=${values.firstName}&password=${values.password}`;
                                            axios.get(apiUrl)
                                                .then(response => {
                                                    if (response.status == 200) {
                                                        localStorage.setItem('user', JSON.stringify(response.data));                                                       
                                                        navigate("/adminlayous/profile");
                                                    } else {
                                                        alert('رمز صحیح نمی باشد');
                                                    }
                                                })

                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="form-group">
                                                    <Field type="text" name="firstName" className="form-control" id="firstName" placeholder="نام ali  را وارد نمایید" required />
                                                    <ErrorMessage name="firstName" component="div" />
                                                </div>
                                                <div className="form-group">
                                                    <Field type="password" name="password" className="form-control" placeholder="رمز عبور 1234 می باشد" required />
                                                    <ErrorMessage name="password" component="div" />
                                                </div>

                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" for="customCheck1">مرا به خاطر بسپار</label>
                                                </div>
                                                <div className="text-right mb-3">
                                                    <NavLink to='/activate' className="password-forget" href="#">رمز عبور خود را فراموش کردید؟</NavLink>
                                                </div>
                                                <button className="btn btn-lg btn-login btn-block text-uppercase" type="submit" disabled={isSubmitting} >ورود</button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <div className="forgot-login-footer">
                                        <span>آیا هنوز ثبت نام نکرده اید؟
                                            <NavLink to='/register' href="#">ایجاد حساب کاربری</NavLink>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}









//onClick={()=>navigate("/profile")}//
