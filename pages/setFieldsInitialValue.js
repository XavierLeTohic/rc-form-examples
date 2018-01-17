import React, { Component } from 'react'
import { createForm } from 'rc-form';

class setFieldsInitialValue extends Component {

    submit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((error, value) => {
            // Handle errors and success
        });
    }

    componentDidMount() {

        setTimeout(() => {
            this.props.form.setFieldsInitialValue({
                email: 'test@mail.com',
              });

            this.forceUpdate()
        }, 1000);

    }

    render() {

        let errors;
        const { getFieldProps, getFieldError } = this.props.form;

        return (
            <form onSubmit={this.submit}>
                   <input 
                        {...getFieldProps('email', {
                            rules: [
                                {required: true},
                                {type: 'email'}
                            ],
                            initialValue: 'test@mail.com'
                        })} 
                    />

                    <span className="errors">{(errors = getFieldError('email')) ? errors.join(',') : null}</span>

                   <input 
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

export default createForm()(setFieldsInitialValue);