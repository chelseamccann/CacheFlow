import React from 'react';
import { fetchFromAPI, fetchAllFromAPI } from '../../util/search_api_util';
import { Link, withRouter } from 'react-router-dom'
import Suggestions from './suggestions'

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
        this.searchOnSubmit = this.searchOnSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onSearchChange(e){
        this.setState({
            inputText: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.searchOnSubmit(this.state.inputText); 
    }

    searchOnSubmit(query){
        if (query !== undefined){
        fetchFromAPI(query)
            .then(response => {
                this.setState({
                    symbol: response.symbol,
                    isLoading: false,
                    companyName: response.companyName,
                    searchResults: []
                })
                
            }).then(() => this.props.history.push(`/${this.state.inputText}`))
        }
    }


    getInfo(){
        fetchAllFromAPI(this.state.inputText).then(response => {
            this.setState({
                searchResults: response
            })
          })
      }
    
      handleInputChange(){
        this.setState({ inputText: event.target.value }, () => {
          if (this.state.inputText && this.state.inputText.length > 0) {
              this.getInfo()
          } else if (this.state.inputText.length === 0){
              this.setState({ searchResults: [] })
          }
        })
      }

      handleClick(){

      }

    render(){

        if(!this.isLoading || this.state.searchResults.length <= 5){
            return (
                <>
                <form className="search-form" onSubmit={this.handleSubmit} onClick={() => this.handleClick}>
                    <input 
                    id="search"
                    autoComplete="off"
                    type="search" 
                    // ref={input => this.searchOnSubmit = input}
                    // ref={(input) => this.inputText = input}
                    onChange={this.handleInputChange}

                    />
                    <button className="search-button"></button>
                    <Suggestions results={this.state.searchResults.slice(0,5)}/>
                </form>
                </>
            )
        } else {
            return ""
        }
    }
}

export default withRouter(Search);