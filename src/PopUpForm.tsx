import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from 'react-modal'
import PreEntityForm from './PreEntityForm'
interface Props {
    numEx: number
}
interface States {
    modalIsOpen: boolean
}

export default class PopUpForm extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {modalIsOpen: false}
        
    }
    setIsOpen(b: boolean) {
        this.setState({modalIsOpen: b})
    }

    openModal() {
        this.setIsOpen(true);
      }
    closeModal(){
        this.setIsOpen(false);
      }
    render() {
        return (
            <div>
            <button onClick={this.openModal.bind(this)}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal.bind(this)}
              contentLabel="Example Modal"
            >
                <PreEntityForm></PreEntityForm>
              <button onClick={this.closeModal.bind(this)}>close</button>
            </Modal>
          </div>
        )
    }
}