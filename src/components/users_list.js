import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class UsersList extends Component{

    renderUsers(){
        return  this.props.users.map((user) =>{
            return (
                <li className="current" key={user.id}>
                    <a href="#"><p className="text-primary">{user.name}</p>
                        {user.occupation}
                        <span className="desc">{user.location}</span>
                    </a>
                </li>
            );
         });
    }
    render(){
        return(
            <div className="container">
                <Link className="btn btn-primary" to="/reg">Register</Link>          
                <div className="row">                                
                    <div className="col-sm-4 col-md-3 side-content">
                        <div className="bs-vertical-wizard">
                            <ol className="mylist">                                
                               {this.renderUsers()}                                        
                            </ol>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-9">
                    </div>
                </div>                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        users:state.users
    };
}
export default connect(mapStateToProps)(UsersList);