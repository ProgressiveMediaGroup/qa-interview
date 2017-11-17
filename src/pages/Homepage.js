// Node_Modules
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

// Display Components
import Body from '../components/Body'

class HomepageForm extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit = (values) => {
    console.log(values)
  }

  render() {
    return (<Body heading='Progressive Content' subheading='QA Test'>
      <p>[Copy required]</p>
      <form onSubmit={this.submit}>
        <div>
          <label>Name</label>
          <div>
            <Field name="name" component="input" type="text" placeholder="Name"/>
          </div>
        </div>
        <div>
          <label>Post Code</label>
          <div>
            <Field name="post-code" component="input" type="text" placeholder="Post Code"/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="text" placeholder="Email"/>
          </div>
        </div>
      </form>
    </Body>)
  }
}

HomepageForm = reduxForm({form: 'home'})(HomepageForm)

export default HomepageForm
