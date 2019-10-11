import React from 'react';
import { fetchFromAPI } from '../../util/search_api_util';
import { Link, withRouter } from 'react-router-dom'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchResults: [],
            isLoading: true,
            inputText: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.search = this.search.bind(this);

    }

    componentDidMount(){
        this.search()
    }


    onSearchChange(e){
        debugger
        this.setState({
            inputText: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.search(this.inputText.value); 
        // e.currentTarget.reset(); //
    }

    // reset() {
    //     this.setState({query: ""})
    // }

    search(query){
        fetchFromAPI(query)
        .then(response => {
            debugger
            this.setState({
                symbol: response.symbol,
                isLoading: false,
                companyName: response.companyName
            })
            
        }).then(() => this.props.history.push(`/${this.state.inputText}`))
        // .catch(error => {
        //     console.log("error getting ticker", error)
        // })
    }

    render(){
        debugger
        
        if(!this.isLoading){
            return (
                <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="search" 
                    onChange={this.onSearchChange}
                    ref={(input) => this.inputText = input}
                    />
                    {/* <input type="submit" value="Search!"/> */}
                    {/* <Link to={`/${this.state.symbol}`}> */}
                        <button>Search!</button>
                    {/* </Link> */}
                </form>
                {/* <Link to={`/${this.state.inputText}`} onClick={}/> */}
                </>
            )
        } else {
            return " "
        }
    }
}

export default withRouter(Search);