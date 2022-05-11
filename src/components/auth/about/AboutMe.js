import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Collapse, CardBody, Card, CardHeader, Table, Progress } from 'reactstrap';
import Imagess from '../../../assets/images/personalPic.jpg';
export const AboutME = () => {
    const [toggleQuestion, setToggequestion] = useState();
    return (
        <>
        <Helmet><title>درباره من</title></Helmet>
            <div className="middle-container container">
                <div className="profile block">
                    <div className="profile-picture big-profile-picture clear">
                        <img alt="محدامین یادگاری" src={Imagess} />
                    </div>
                    <h4 className="user-name">محمدامین یادگاری</h4>
                    <div className="profile-description">
                        <p className="scnd-font-color">برنامه نویس Front-end</p>
                    </div>
                </div>
            </div>
            <div>
                <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <span className="font-weight-bold">درباره من</span>
                    </CardHeader>
                    <Collapse isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                            <p>محمدامین یادگاری هستم ، متولد سال 1373 و ساکن تهران می باشم .
                                برنامه نویس React Developer می باشم.
                            </p><br />
                            <p>پس از گذراندن دوره های تخصصی برنامه نویسی باتوجه به علایق خود و هم راستا بودن با اهداف شرکتی تمایل به همکاری را در سازمان مورد نظر دارم. </p><br />
                            <p>با در نظر گرفتن به سابقه کاری در این سالها دارای فن بیان موثر در ارتباط بادیگران را دارا می باشم .</p><br />
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <span className="font-weight-bold">سوابق کاری</span>
                    </CardHeader>
                    <Collapse isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>سال کاری</th>
                                        <th>حوزه فعالیت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1391-1392</td>
                                        <td>تحلیلگر و آنالیزور داده فروش</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>1392-1400</td>
                                        <td>کارشناس کنترل  پروژه و تحلیلگر فروش</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Collapse>
                </Card>

                <Card>
                    <CardHeader onClick={() => setToggequestion(3)}>
                        <span className="font-weight-bold">سوابق تحصیلی</span>
                    </CardHeader>
                    <Collapse isOpen={toggleQuestion === 3 ? true : false}>
                        <CardBody>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>مدرک</th>
                                        <th>دانشگاه</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>کارشناسی مهندسی صنایع</td>
                                        <td>دانشگاه دماوند</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>کارشناسی ارشد بهینه سازی سیستم ها</td>
                                        <td>دانشگاه ارشاد</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Collapse>
                </Card>

                <Card>
                    <CardHeader onClick={() => setToggequestion(4)}>
                        <span className="font-weight-bold">ویژگی ها</span>
                    </CardHeader>
                    <Collapse isOpen={toggleQuestion === 4 ? true : false}>
                        <CardBody>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th></th>
                                        <th>ردیف</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>با انگیزه</td>
                                        <td>7</td>
                                        <td>با اعتماد بنفس</td>


                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>نظم کاری</td>
                                        <td>8</td>
                                        <td>تعهد در تحویل کار</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>با پشتکار</td>
                                        <td>9</td>
                                        <td>توانا در حل مسايل و پیشرفت کار</td>


                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>اهل مطالعه</td>
                                        <td>10</td>
                                        <td>دارای روحیه رقابتی</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>تعاملگر</td>
                                        <td>11</td>
                                        <td>صمیمیت در کار</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>مسئولیت پذیر</td>
                                        <td>12</td>
                                        <td>کوشا در بروز رسانی مهارت ها</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Collapse>
                </Card>

                <Card>
                    <CardHeader onClick={() => setToggequestion(5)}>
                        <span className="font-weight-bold">مهارت ها</span>
                    </CardHeader>
                    <Collapse isOpen={toggleQuestion === 5 ? true : false}>
                        <CardBody>
                            <div>
                                <Progress value={70}>HTML</Progress><br />
                                <Progress value={70}>CSS</Progress><br />
                                <Progress value={20}>React Developer</Progress><br />
                                <Progress value={20}>EcmaSript6</Progress><br />
                                <Progress value={40}>Bootstrap</Progress><br />
                                <Progress value={15}>Restful Api</Progress><br />
                                <Progress value={10}>Redux</Progress><br />
                                <Progress value={80}>PowerBi</Progress><br />


                                {/* <Progress multi>
                                <Progress bar value="15">Meh</Progress>
                                <Progress bar color="success" value="30">Wow!</Progress>
                                <Progress bar color="info" value="25">Cool</Progress>
                                <Progress bar color="warning" value="20">20%</Progress>
                                <Progress bar color="danger" value="5">!!</Progress>
                            </Progress> */}
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(6)}>
                        <span className="font-weight-bold">نحوه پیاده سازی پروژه</span>
                    </CardHeader>
                    <Collapse isOpen={toggleQuestion === 6 ? true : false}>
                        <CardBody>
                            <p>
                                ابتدا صفحه لاگین باز می شود و دیتای آن از طریق Localstorage
                                بدست می آید . این دیتا از سایت https://apitester.ir/api/Users/authenticate
                                بدست آمده است ، سپس با وارد کردن نام ali با رمز 1234 وارد صفحه پروفایل می شویم.
                                
                            </p>
                            <br />
                            
                            <p>
                            این عمل با React-router-dom بدست آمده است .
                            صفحات ما دارای 
                            /login و /register  و /activate/  و adminlayous  و /adminlayous/profile  و /adminlayous/aboutme می باشد .
                            </p>
                            <br />

                            <p>
                            کامپوننت لاگین با استفاده از  Formik  زده شده است .
                            </p>
                            <br />
                            <p>
                            سپس با طراحی منو ساید بار از طریق Navlink  این روت ها را باهم در ارتباط قرار می دهیم .
                            </p>
                            <br />                            
                        </CardBody>
                    </Collapse>
                </Card>
            </div>
        </>
    )
}
