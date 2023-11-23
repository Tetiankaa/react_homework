import {Component} from "react";

class Comment extends Component{

    render() {
        const {postId, id, name, email, body} = this.props.comment;

        return(
            <div style={{fontSize:'14px'}}>
                <div>postId: {postId}</div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
}