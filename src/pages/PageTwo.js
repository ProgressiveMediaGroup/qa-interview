// Node_Modules
import React, { Component } from 'react'
import { Panel, Button, Modal } from 'react-bootstrap'

// Display Components
import Header from '../components/Header'
import Body from '../components/Body'

var timerid = 0;

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      data: [],
      starting: 0,
      maxNumber: 5,
      showModal: false,
      modalTitle: ''
    }

    this.addMoreData = this.addMoreData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderOpenButton = this.renderOpenButton.bind(this);
  }

  componentDidMount() {
    timerid = setTimeout(this.addMoreData, 5000);
  }

  componentWillUnmount() {
    clearTimeout(timerid)
  }

  loadMoreData() {
    this.setState({
      loading: true
    }, function () {
      timerid = setTimeout(this.addMoreData, 5000);
    })
  }

  addMoreData () {
    let target = this.state.starting + this.state.maxNumber;
    let data = this.state.data.concat([]);

    for (let a = this.state.starting; a < target; a = a + 1) {
      let newItem = {
        id: a,
        title: 'This is a title ' + a,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id elit eget nunc malesuada molestie vitae sed velit.'
      }

      data.push(newItem);
    }

    this.setState({
      loading: false,
      data: data,
      starting: target
    })
  }

  renderOpenButton (itemTitle) {
    return <Button onClick={this.openModal.bind(this,itemTitle)}>More details</Button>
  }

  mapList (item,index) {
    return (<Panel key={index} header={item.title} footer={this.renderOpenButton(item.title)}>
      {item.description}
      </Panel>)
  }

  displayList () {
    return this.state.data.map(this.mapList.bind(this))
  }

  displayLoadingBar () {
    if (this.state.loading) {
      return <div className="loading" />
    }

    return <Button onClick={this.loadMoreData} className="loadmore">Load More</Button>;
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal(itemTitle) {
    this.setState({ showModal: true, modalTitle: itemTitle });
  }

  render () {
    return (
      <div>
        <Header url='/automated/test-case-2' pagetitle='Automated QA: Test Case 2' />
        <Body heading='Automated QA' subheading='Test Case 2'>
          <p>The automated end-to-end test should check that:</p>
          <ul>
            <li>Click on ‘More Details’  button from ‘This is title 2’ and then close the pop up </li>
            <li>Click on ‘Load More’  will load additional Titles</li>
            <li>Click on ‘More Details’ button from ‘This is title 9’  and then close the pop up</li>
            <li>Take a screenshot</li>
          </ul>

          <hr />

          <div className="messagelist">
            {this.displayList()}
            {this.displayLoadingBar()}
          </div>

          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>More details: {this.state.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Body>
      </div>
    )
  }
}

export default Homepage
