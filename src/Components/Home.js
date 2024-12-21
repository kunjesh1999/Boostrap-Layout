import { BsChevronCompactRight } from 'react-icons/bs';
import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

function Home() {
    return (
        <div>


            {/* <h1 className='text'>Your one-Stop Destination for Funding education</h1> */}
            <Row>
                <Col md={5} lg={5} sm={6} >
                    <div className='text'>

                        Your one-Stop Destination for  Funding education
                    </div>
                    <p className='text1'>Find scholarships made for you unlock opportunities with your Addhar id and Email </p>
                    <input type='text' placeholder='Adhar card NO' className='form-control' />
                    <br />
                    <button type='Apply Now' className='button btn-sm'>Apply Now <BsChevronCompactRight />  </button>

                </Col>
                <Col></Col>
            </Row>

            <Row>
                <Col>
                    <Card className='card'>
                        <CardBody>
                            <CardTitle className='scholar'>Scholarship</CardTitle>
                            <CardText>
                                <p>Apply now for our scholarship and receive financial assistance <br />to help you
                                    achieve your academic aspirations</p>
                                <button type='Apply Now' className='Apply' >Apply<BsChevronCompactRight /></button>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <CardBody>
                            <CardTitle className='scholar'>Loan</CardTitle>
                            <CardText>
                                <p>Apply now for our scholarship and receive financial assistance <br />to help you
                                    achieve your academic aspirations</p>
                                <button type='Apply Now' className='ct-bc'>Apply <BsChevronCompactRight /></button>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='card1'>
                        <CardBody>
                            <CardTitle className='scholar'>Crowdfunding</CardTitle>

                            <CardText>
                                <p>Apply now for our scholarship and receive financial assistance <br />to help you
                                    achieve your academic aspirations</p>
                                <button type='Apply Now' className='Apply'>Apply <BsChevronCompactRight /> </button>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>




            {/* <h1 className='scholar'>Scholarship</h1>
            <br /> */}


            {/* <h1 className='loan'>Loan</h1>
            <p className='text2'>Apply now for our scholarship and receive financial assistance <br />to help you
                achieve your academic aspirations</p>
            <button type='Apply Now' className='Apply2' >Apply Now</button>

            <h1 className='Crow'>Crowdfunding</h1>
            <p className='text3'>Apply now for our scholarship and receive financial assistance <br />to help you
                achieve your academic aspirations</p>
            <button type='Apply Now' className='Apply3' >Apply Now</button> */}
            <Row>
                <Col md={5} lg={5} sm={6}>
                    <div className='Counseling'>

                        <div className='Get'>
                            <h1>Get Counseling</h1>
                        </div>
                        <p className=''>Receive personalized education counseling from our team and take control of your academic journey today </p>
                        <button type='Apply Now' className='Apply4'>Apply Now<BsChevronCompactRight /></button>

                    </div>

                </Col>
                <Col></Col>
            </Row>

            {/* <h1 className='Get'>Get Counseling</h1>
            <p>Receive personalized education counseling from our team <br /> and take control of your academic journey today </p>
            <button type='Apply Now' className='Apply4' >Apply Now</button> */}
            <Row>
                <Col>

                </Col>
                <Col md={5} lg={5} sm={6}>

                    <div className="">
                        <h1 className='Applyf'>Apply for university</h1>
                        <p className='text4'>your journey towards higher education starts here-apply to our top-    rated <br />university and join a diverse community of learners</p>
                        <button type='Apply Now' className='Apply4'>Apply Now <BsChevronCompactRight /></button>

                    </div>
                </Col>
            </Row>

            {/* <h1 className='Applyf'>Apply for university</h1>
            <p className='text4'>your journey towards higher education starts here-apply to our top-    rated <br />university and join a diverse community of learners</p>
            <button type='Apply Now' className='Apply4' >Apply Now</button> */}
             <div className='height'>
            <Row className='office '>

                <Col className='col-border'>

                    <div className='checkbox'></div>
                    <p className='Home'>Office Home</p>
                    <p className='Home1'>422/38 Rajiv colony,NH-8 Gurgon(HR)-122001</p>


                </Col>

                <Col className='col-border'>
                    <div className='checkbox'></div>
                    <p className='Home'>Working Hours</p>
                    <p className='Home1'>weekdays 8am-22pm</p>
                    <p className='Home1'>weekend 10am-12pm</p>
                </Col>
                <Col className='col-border'>
                <div className='checkbox'></div>
                <p className='Home'>Contact us</p>
                <p className='Home1'>info@tech58.in</p>
                <p className='Home1'>+91 96980 00058</p>




                </Col>

            </Row>

            {/* <p>422/38 Rajiv colony,Nh-8 Gurgon(Hr)-122001</p>

            <h1> contact us</h1>
            <p>info@tech58.in</p> */}

            <Row>
            <Col >
            <h6 className='About'>About</h6>
                    <p className='About'>contact us</p>
                    <p className='About'>About us</p>
                    <p className='About'>career</p>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <h6>Help</h6>   
                    <p>payments</p>
                    <p>FAQ</p>
                    <p>Concellation</p>
                </Col>
                <Col  style={{textAlign:'center'}}>
                    <h6>Legal</h6>
                    <p>Terms and condition</p>
                    <p>privacy Police</p>
                </Col>
            </Row>
                   </div>
            
            
        </div>
    )
}


export default Home







