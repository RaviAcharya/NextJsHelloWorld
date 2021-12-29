import React, {Component} from 'react'

class mainPageLayout extends Component{
   
    constructor(props)
    {
        super(props)
        this.state = {email : ''}
        this.setRef = React.createRef();
    }

    handleNameChange = (event) =>
    {
          this.setState({email: event.target.value});
    }
    
    componentDidMount(){
        console.log("component  ",this.setRef.current);
        this.setRef.current.focus();
    }
    render()
    {
        console.log("hellooo");
        return(
                <div>
                    <label> Email : </label>
                    <input className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value = {this.state.email} onChange = {this.handleNameChange} ref={this.setRef}/>
            
                    
                    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Click Me! </button>
                </div>
            
        )
    }
}
export default mainPageLayout