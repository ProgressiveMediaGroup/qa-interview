// Node_Modules
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

const emailRX = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const postCodeRX = value =>
  value && !/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(value) ?
  'Invalid postcode' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class HomepageForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <div>
            <Field component={renderField} name="name" type="text" placeholder="Name"/>
          </div>
        </div>
        <div>
          <label>Post Code</label>
          <div>
            <Field component={renderField} name="postCode" type="text" placeholder="Post Code" validate={postCodeRX} />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field component={renderField} name="email" type="text" placeholder="Email" validate={emailRX} />
          </div>
        </div>
        <br/>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </form>
    )
  }
}

HomepageForm = reduxForm({form: 'home'})(HomepageForm)

export default HomepageForm
