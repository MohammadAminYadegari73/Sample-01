import React from 'react'
import '../Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
export const Register = () => {
    const navigate=useNavigate
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center font-weight-bold">صفحه ثبت نام</h5>
                            <form className="form-signin">
                                <Formik
                                    initialValues={{ fristname: '', lastname: '', phone: '', password: '' }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        if (values.email == 'test@gmail.com' || values.password == '123') {
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
                                            navigate('/activate');

                                        } else {
                                            alert(values.email);
                                        }

                                        setSubmitting(false);
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-group">
                                                <label>*نام</label>
                                                <Field type="text" name="fristname" className="form-control" placeholder="نام" required />
                                                <ErrorMessage name="fristname" component="div" />
                                            </div>
                                            <div className="form-group">
                                                <label>*نام خانوداگی</label>
                                                <Field type="text" name="lastname" className="form-control" placeholder="نام خانوداگی" required />
                                                <ErrorMessage name="lastname" component="div" />
                                            </div>
                                            <div className="form-group">
                                                <label>*تلفن همراه</label>
                                                <Field type="number" name="phone" className="form-control" placeholder="تلفن همراه" required />
                                                <ErrorMessage name="phone" component="div" />
                                            </div>
                                            <div className="form-group">
                                                <label>*رمز ورود</label>
                                                <Field type="password" name="password" className="form-control" placeholder="رمز ورود را وارد نمایید" required />
                                                <ErrorMessage name="password" component="div" />
                                            </div>
                                            <button className="btn btn-lg btn-login btn-block text-uppercase" type="submit" disabled={isSubmitting}>ورود</button>
                                        </Form>
                                    )}
                                </Formik>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}