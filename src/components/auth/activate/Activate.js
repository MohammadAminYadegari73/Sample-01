import React from 'react';
import '../Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
export const Activate = () => {
    const navigate=useNavigate()
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center font-weight-bold">کد فعال سازی را وارد نمایید</h5>
                            <p className="">کد تایید برای شماره 09126906922 پیامک شد</p>
                            <form className="form-signin">
                                <Formik
                                    initialValues={{ number: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.number) {
                                            errors.number = 'کد فعالسازی را وارد نمایید';
                                        } else if (
                                            ![0 - 9].test(values.number)
                                        ) {
                                            errors.email = 'کد 6 رقمی را وارد نمایید';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        if (values.email == 'test@gmail.com' || values.password == '123456') {
                                            const user = {
                                                userId: 'uuid',
                                                userName: 'derambakht',
                                                fullName: 'محسن درم بخت',
                                                thumbnail: 'https://img.icons8.com/dusk/2x/change-user-male.png',
                                                token: 'a;dnadnasdk abkjdasdmasdmas;dasdmas;dasldmsa;ld'
                                            };
                                            //set data in localStorage
                                            //localStorage.setItem('key', 'value');
                                            localStorage.setItem('user', JSON.stringify(user));

                                            //redirect to dashboard page
                                            navigate('/profile');

                                        } else {
                                            alert(values.email);
                                        }

                                        setSubmitting(false);
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-group">

                                                <Field type="number" name="number" className="form-control" aria-describedby="emailHelp" placeholder="کد فعال سازی حساب" required />
                                                <ErrorMessage name="number" component="div" />
                                            </div>

                                            <div className="forgot-login-footer">
                                                <span><a href="#">دریافت مجدد کد تایید</a></span>
                                            </div>
                                            <hr />
                                            <button className="btn btn-lg btn-login btn-block text-uppercase" type="submit" disabled={isSubmitting}>ورود</button>
                                        </Form>
                                    )}
                                </Formik>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
