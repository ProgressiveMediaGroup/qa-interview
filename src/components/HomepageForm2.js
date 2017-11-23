// Node_Modules
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Glyphicon, Checkbox } from 'react-bootstrap'
import DatePicker from 'react-bootstrap-date-picker'

const emailRX = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const postCodeRX = value =>
  value && !/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(value) ?
  'Invalid postcode' : undefined

const required = value => value ? undefined : 'Required'

const renderTextField = function ({ input, label, type, placeholder, helptext, meta: { touched, error, warning } }) {
  let validationState = null;
  if (touched && (!error && !warning)) validationState = 'success';
  if (touched && error) validationState = 'error';
  if (touched && warning) validationState = 'warning';

  return (<Row>
      <Col md={12}>
        <FormGroup controlId="firstname" validationState={validationState}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            type={type}
            placeholder={placeholder}
            {...input}
          />
          <FormControl.Feedback />
          <HelpBlock>{helptext}</HelpBlock>
        </FormGroup>
      </Col>
    </Row>)
}

const renderSelectField = function ({ input, label, type, placeholder, helptext, meta: { touched, error, warning } }) {
  let validationState = null;
  if (touched && (!error && !warning)) validationState = 'success';
  if (touched && error) validationState = 'error';
  if (touched && warning) validationState = 'warning';

  return (<Row>
      <Col md={12}>
        <FormGroup controlId="firstname" validationState={validationState}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            componentClass="select"
            {...input}>
            <option value="">select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="Etc">Etc</option>
          </FormControl>
          <FormControl.Feedback />
          <HelpBlock>{helptext}</HelpBlock>
        </FormGroup>
      </Col>
    </Row>)
}

const renderDateField = function ({ input, label, type, placeholder, helptext, meta: { touched, error, warning } }) {
  let validationState = null;
  if (touched && (!error && !warning)) validationState = 'success';
  if (touched && error) validationState = 'error';
  if (touched && warning) validationState = 'warning';

  return (<Row>
      <Col md={12}>
        <FormGroup controlId="firstname" validationState={validationState}>
          <ControlLabel>{label}</ControlLabel>
          <DatePicker {...input} />
          <FormControl.Feedback />
          <HelpBlock>{helptext}</HelpBlock>
        </FormGroup>
      </Col>
    </Row>)
}

const renderCheckbox = function ({ input, label, type, placeholder, helptext, meta: { touched, error, warning } }) {
  let validationState = null;
  if (touched && (!error && !warning)) validationState = 'success';
  if (touched && error) validationState = 'error';
  if (touched && warning) validationState = 'warning';

  return (<Row>
      <Col md={12}>
        <Checkbox {...input} validationState={validationState}>
          {label}
        </Checkbox>
      </Col>
    </Row>)
}

class HomepageForm2 extends Component {
  onSubmit (values) {
    console.log(values);
    console.log('hrkki');
    return false;
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div>
        <p>* marked as mandatory fields</p>
        <Row>
          <Col md={12}>
            <FormGroup>
              <label>Gender *</label>
              <br />
              <label><input name="gender" type="radio" value="male" /> Male</label>
              <br />
              <label><input name="gender" type="radio" value="female" /> Female</label>
            </FormGroup>
          </Col>
        </Row>

        <form onSubmit={handleSubmit}>
          <Field component={renderSelectField} label="Title *" name="title" type="select" validate={required} />
          <Field component={renderTextField} label="First name *" name="firstname" type="text" placeholder="Please enter your first name here" validate={required} />
          <Field component={renderTextField} label="Last name *" name="lastname" type="text" placeholder="Please enter your last name here" validate={required} />
          <Field component={renderTextField} label="Pstcode *" name="postcode" type="text" placeholder="e.g. XX99 9XX" validate={[required,postCodeRX]} />
          <Field component={renderTextField} label="Email Address" name="email" type="text" placeholder="Please enter your email address here" validate={[required,emailRX]} />
          <Field component={renderDateField} label="Date of Birth *" name="date" type="date" placeholder="DD/MM/YYYY" validate={[required]} />
          <Field component={renderCheckbox} label="I agree with the terms and conditions" name="agree" type="checkbox" placeholder="jhkh" />

          <br/>

          <button type="submit" className="btn btn-success" disabled={pristine || submitting}>Submit</button>
          <button type="button" className="btn btn-danger" style={{marginLeft: '10px'}} disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
      </div>
    )
  }
}

HomepageForm2 = reduxForm({form: 'manual'})(HomepageForm2)

export default HomepageForm2
