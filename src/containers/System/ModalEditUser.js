import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {emitter} from '../../utils/emitter';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

        this.listenToEmitter(); // Listen to the emitter event when the component mounts
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }

    componentDidMount() {
      console.log('didmount modal edit user', this.props.currentUser);
    }

    toggle = () => { 
        this.props.toggleFromParent(); // Call the function passed from parent to toggle modal
    }

    handleOnchangeInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value; // Update the state with the new value
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                alert('Missing parameter: ' + arrInput[i]);
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    handleCreateNewUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            this.props.createNewUser(this.state); // Call the function passed from parent to create new user
        }
    }

    render() {
        console.log('check props', this.props.currentUser);
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={() => {this.toggle()}} 
            className={'modal-user-container'} 
            size="lg" centered>
                <ModalHeader toggle={() => {this.toggle()}}> Edit a user </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" onChange={(event) => {this.handleOnchangeInput(event, "email")}}
                            value={this.state.email}
                            />  
                        </div> 
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password" onChange={(event) => {this.handleOnchangeInput(event, "password")}}
                            value={this.state.password}
                            />
                        </div>
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" onChange={(event) => {this.handleOnchangeInput(event, "firstName")}}
                            value={this.state.firstName}
                            />  
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" onChange={(event) => {this.handleOnchangeInput(event, "lastName")}}
                            value={this.state.lastName}
                            />  
                        </div>
                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="text" onChange={(event) => {this.handleOnchangeInput(event, "address")}}
                            value={this.state.address}
                            />  
                        </div>
                        </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                    color="primary" 
                    className="px-3" 
                    onClick={(event) => this.handleCreateNewUser()}>Create</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => this.toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
