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
        debugger
    }

    componentDidMount(){
        debugger
        this.search()
    }


    onSearchChange(e){
        this.setState({
            inputText: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.search(this.state.inputText); 
    }

    search(query){
        fetchFromAPI(query)
        .then(response => {
            this.setState({
                symbol: response.symbol,
                isLoading: false,
                companyName: response.companyName
            })
            
        }).then(() => this.props.history.push(`/${this.state.inputText}`))
        // .catch(error => {
        //     console.error(error)
        // })
    }

    render(){
        
        if(!this.isLoading){
            return (
                <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    id="search"
                    autoComplete="off"
                    type="search" 
                    onChange={this.onSearchChange}
                    // ref={(input) => this.inputText = input}
                    />
                    <button className="search-button"></button>

                </form>
                </>
            )
        } else {
            return " "
        }
    }
}

export default withRouter(Search);