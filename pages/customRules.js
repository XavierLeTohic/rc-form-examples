import React, { Component } from 'react'
import { createForm } from 'rc-form';

// Import our custom rules
import formValidation from '../utils/formValidation'

class customRules extends Component {

    submit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((error, value) => {
            // Handle errors and success
        });
    }

    render() {

        let errors;
        const { getFieldProps, getFieldError } = this.props.form;

        return (
            <form onSubmit={this.submit}>
                   <input 
                    placeholder="Email"
                        {...getFieldProps('email', {
                            rules: [
                                {required: true},
                                {type: 'email'},
                                formValidation.customEmailValidation
                            ]
                        })} 
                    />

                    <span className="errors">{(errors = getFieldError('email')) ? errors.join(',') : null}</span>

                   <input 
                    placeholder="Phone"
                        {...getFieldProps('phone', {
                            rules: [
                                {required: true}
                            ]
                        })} 
                    />

                    <span className="errors">{(errors = getFieldError('phone')) ? errors.join(',') : null}</span>

                    <button>Submit</button>
            </form>
        )
    }
}

export default createForm()(customRules);