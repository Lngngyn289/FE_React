import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";


import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { userService} from '../../services'

class Login extends Component {
    constructor(props) {
        super(props);
        // this.btnLogin = React.createRef();
        this.state = {
            username: 'hoidanit',
            password: 'duclong',
            isShowPassword: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        
    }

    handleLogin = (event) => {
        console.log('username' + this.state.username)
        console.log('password' + this.state.password)

    }

    handleShowHidePassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render(){
        //JSX
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">LOGIN</div>
                        <div className="col-12 form-group login-input">
                            <label>Username</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder='Enter password' 
                            onChange={(event) => {this.handleOnChangeUsername(event)}}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <div className="custom-input-password">
                                <input 
                                type={this.state.isShowPassword ? 'text' : 'password'} 
                                className="form-control" 
                                placeholder='Enter password'
                                onChange={(event) => {this.handleOnChangePassword(event)}}
                                />
                                <span onClick={(event) => {this.handleShowHidePassword(event)}}>
                                    <i class={this.state.isShowPassword? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </span>
                                
                            </div>
                           
                        </div>
                        <div className="col-12 ">
                            <button className="btn-login" onClick={(event) => {this.handleLogin(event)}}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login"> Or login with</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
