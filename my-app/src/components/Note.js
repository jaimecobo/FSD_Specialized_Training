import React, {Component} from 'react';
import '../css/Note.css';

class Note extends Component {
  constructor(props) {
    super(props);
    
    this.titleContent = React.createRef();
    this.bodyContent = React.createRef(); 
    
    this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false
    }
  }

//.. rest of note.js

    handleEdit(){
        this.setState({
            editMode: true
        });
    }

    // handleSave() {
    //     this.setState({
    //     title: this.titleContent.current.value,
    //     body: this.bodyContent.current.value,
    //     editMode: false
    //     });
    //   }


  handleSave() {
    this.setState({
    title: this.titleContent.current.value,
    body: this.bodyContent.current.value,
    editMode: false
    }, () => 
      this.props.firebaseDBRef.child(this.props.id).set({
        title: this.state.title,
        body: this.state.body
      })
    )
  }



    handleDelete(){
        this.props.deleteHandler(this.props.id);
    }

    render(){
        let titleElement, bodyElement, buttonArea; 
        if (this.state.editMode){
           titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
           bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
           buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
        }else{
            titleElement = <h5 className="card-title">{this.state.title}</h5>;
            bodyElement = <p>{this.state.body}</p>; 
            buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
        }
        return (
            <div className='col-sm-6'>
                <div className="card card-view">
                    <div className="card-body">
                        {titleElement}
                        {bodyElement}
                        {buttonArea}
                </div>
            </div>
        </div>
        );
        
    }
}

Note.defaultProps = {
    title: "A Cool Title",
    body: "A Cool Body"
};

// Note.propTypes = {
//     title: PropTypes.string
// };

export default Note; 