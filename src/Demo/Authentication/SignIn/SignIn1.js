import React from 'react';
import {NavLink} from 'react-router-dom';

import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import DEMO from "./../../../store/constant";

import avatar1 from './../../../assets/images/user/avatar-1.jpg';
import avatar2 from './../../../assets/images/user/avatar-2.jpg';
import avatar3 from './../../../assets/images/user/avatar-3.jpg';

import './../../../assets/scss/style.scss';
import './../../../assets/scss/login.css';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper1">
                    <div className="row">
                        
                    <Col md={6} xl={5} className="b24network-auth">
                    <div className="b24-network-auth-cover">
                        <div className="b24-network-auth-cover-top">
                            <div className="b24-network-auth-cover-img-block">
                                
                            </div>
                            <div className="b24-network-auth-cover-back">
                                <a href="https://www.bitrix24.com" className="b24-network-auth-cover-back-link">back to site</a>
                            </div>
                        </div>
                        <div className="b24-network-auth-cover-header">
                        <div className="b24-network-auth-cover-header">
                        <div className="b24-network-auth-cover-title">COSEKE U LTD</div>
                        <div className="b24-network-auth-cover-subtitle">
                            <span className="b24-network-auth-cover-subtitle-text">Quality.</span>
                            <span className="b24-network-auth-cover-subtitle-text"> Means No .</span>
                            <span className="b24-network-auth-cover-subtitle-text">Online.</span>
                        </div>
                        
                        <div className="b24-network-auth-cover-subtitle">
                            <span className="b24-network-auth-cover-subtitle-text" >Register today and get free forever plan and unlimited user</span>
                        </div>
                        </div>		
                        </div>
                        <div className="b24-network-auth-cloud-block">
                            <div className="b24-network-auth-cloud b24-network-auth-cloud-lg"></div>
                            <div className="b24-network-auth-cloud b24-network-auth-cloud-sm"></div>
                            <div className="b24-network-auth-cloud b24-network-auth-cloud-md"></div>
                            <div className="b24-network-auth-cloud b24-network-auth-cloud-fill"></div>
                        </div>
                    </div>
                    </Col>
                    <Col md={6} xl={7}>
                    <div class="b24-network-auth-form">
                        <div class="b24-network-auth-form-wrap">
                            <div class="b24-network-auth-form-inner">
                                <div id="authorize-layout">
                                    <div>
                                        <div class="b24-network-auth-form-title-block">
                                            <span class="b24-network-auth-form-title">C-Planner Login</span>
                                        </div>
                                
                                    </div>
                                
                                </div>

                                <div class="auth-content">
                                   
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <div class="mb-4">
                                            <i class="feather icon-unlock auth-icon"></i>
                                            </div>
                                            <h3 class="mb-4">Login</h3>
                                            <div class="input-group mb-3">
                                            <input type="email" class="form-control" placeholder="Email"></input>
                                            </div>
                                            <div class="input-group mb-4">
                                            <input type="password" class="form-control" placeholder="password"></input>
                                            </div>
                                            <div class="form-group text-left">
                                          
                                            </div>
                                            <button class="btn btn-primary shadow-2 mb-4">Login</button>
                                            <p class="mb-2 text-muted">Forgot password? <a href="auth-reset-password.html">Reset</a></p>
                                            <p class="mb-0 text-muted">Don’t have an account? <a href="auth-signup.html">Signup</a></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </Col>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;