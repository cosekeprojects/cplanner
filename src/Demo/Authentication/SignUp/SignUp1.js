import React from 'react';
import {NavLink} from 'react-router-dom';


import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";

class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
               <div class="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
                <div class="row align-items-center w-100 align-items-stretch bg-white">
                <div class="d-none d-lg-flex col-lg-7 aut-bg-img align-items-center d-flex justify-content-center">
                <div class="col-md-8">
                <h1 class="text-white mb-5">Login in Datta Able</h1>
                <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                </div>
                </div>
                <div class="col-lg-5 align-items-stret h-100 align-items-center d-flex justify-content-center">
                <div class=" auth-content text-center">
                <div class="mb-4">
                <i class="feather icon-unlock auth-icon"></i>
                </div>
                <h3 class="mb-4">Login</h3>
                <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email"/>
                </div>
                <div class="input-group mb-4">
                <input type="password" class="form-control" placeholder="password"/>
                </div>
                <div class="form-group text-left">
                <div class="checkbox checkbox-fill d-inline">
                <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked=""/>
                <label for="checkbox-fill-a1" class="cr"> Save credentials</label>
                </div>
                </div>
                <button class="btn btn-primary shadow-2 mb-4">Login</button>
                <p class="mb-2 text-muted">Forgot password? <a href="auth-reset-password-v2.html">Reset</a></p>
                <p class="mb-0 text-muted">Don’t have an account? <a href="auth-signup-v2.html">Signup</a></p>
                </div>
                </div>
                </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;