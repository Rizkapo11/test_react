import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getGithub } from '../github/actions/githubActions'

 class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.getGithub("")
    }
    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    handleSubmit(event) {
      this.props.getGithub(this.state.value)
      event.preventDefault();
    }
    render() {
        let github = this.props.github
        console.log(github)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>        <label>
                    Username Github:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    <input type="submit" value="Submit" />
                </form>
                { github.github.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.name}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({github:state.github})

export default connect(mapStateToProps, {getGithub})(Github)