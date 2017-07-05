import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions';
import { Card, Feed, Grid, Button, Modal, Header, Form, TextArea, Icon } from 'semantic-ui-react';
import './home.css'

class UpdateComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
     input: this.props.comment.comment,
     modalOpen: false
    }
  }

  updateInput = (event) => {
      this.setState({
       input: event.target.value
      })
  }
  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    const { comment, user } = this.props;
    if (user.uid === comment.uid) {
      return (
        <div className="commentdelete">
          <div className="delete">
            <Icon color="red" name='remove' size='large'
              type="submit" onClick={(e) => {
                e.preventDefault();
                deleteComment(comment);
              }}
            ></Icon>
          </div>

          <Icon className="edit" color="green" name='write' size='large' onClick={this.handleOpen}></Icon>
          <Modal open={this.state.modalOpen}>
            <Modal.Header>Edit Comment</Modal.Header>
            <Modal.Content>
               <Form className="links ui form">
                    <Modal.Content>
                      <TextArea rows="2" value={this.state.input} className="editcomment"  onChange={this.updateInput} />
                   </Modal.Content>

                  <div className="update">
                   <Button
                     color="blue" type="onSubmit" onClick={(e) => {
                       e.preventDefault();
                       editComment(comment, user, this.state.input);
                       this.handleClose();
                     }}
                   >Update</Button>
                  </div>

                  <div className="cancel">
                    <Button color="red" type="cancel" onClick={(e) =>{
                      e.preventDefault();
                      this.handleClose()
                    }} >Cancel</Button>
                  </div>
              </Form>
             </Modal.Content>
           </Modal>

        </div>
      );
    }
    return (
     <div></div>
    );
  }

}

export default connect(null, ({ deleteComment, editComment }))(UpdateComments);
