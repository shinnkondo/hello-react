import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
interface Props {
    numEx: number
}

export default class PopUpForm extends Component<Props> {
    render() {
        return (
            <Formik initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);}}>
                {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
            </Formik>
        )
    }
}