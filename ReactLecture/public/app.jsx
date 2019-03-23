/*
import React from 'react';

class app extends React.Component{

}*/

import React, {Component} from 'react';
export default class app extends Component {

    componentDidMount() {
        // const self = this;
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => {//function(response)
                return response.json();
            }).then(postData => {//function(postData)
           /*sel.state*/ this.setState({
                posts: postData
            });
        })
    }

    render() {
        return (
            <div>
                <h3> hello world </h3>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                    <thead>
                    <tbody>
                    {this.state.posts.map(post => (<tr key={post.id}>//post can be uniquely identified by its id. otherwise there will be a warning
                    <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            {/*<td>{this.state.posts[0].title}</td>*/}
                    {/*<td>{this.state.posts[0].body}</td>*/}
                    </tr>)
                    )}
                    </tbody>
                    </thead>
                </table>
            </div>
        );
    }
}


