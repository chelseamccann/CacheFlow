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
            inputText: '',
            clicked: false,
            showResults: true
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
                
            }).then(() => this.props.history.push(`/${this.state.inputText}`)).then(() => {this.setState({inputText: ''})})
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
        if(this.node.contains(event.target)){
            this.setState({clicked: true, showResults: true})
        } else{
            this.setState({clicked: false, showResults: false})
        }
      }

          
    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }

    render(){
        length = this.state.searchResults.length
        if(this.state.showResults && (!this.isLoading || this.state.searchResults.length <= 6)){
            return (
                <>
                <form className={`search-form ${`${this.state.clicked ? 'form-clicked': ''}`}`} onSubmit={this.handleSubmit} ref={node => this.node = node} >
                    <input 
                    
                    className={`s search-with-results ${`${this.state.clicked ? 'input-clicked': ''}`}`}
                    autoComplete="off"
                    type="search" 
                    onChange={this.handleInputChange}
                    value={this.state.inputText}
                    
                    />
                    <div className="search-icon-text search-icon"><i className="fa fa-search"></i><br/><p className="search-text">&ensp;{length===0 ? 'Search' : ''}</p></div>
                    <button className="search-button"></button>
                    <Suggestions results={this.state.searchResults.slice(0,5)} inputText={this.state.inputText} clicked={this.state.clicked}/>
                </form>
                </>
            )
        } else if((!this.isLoading || this.state.searchResults.length <= 6) && this.state.showResults === false){
                return (
                    <>
                    <form className={`search-form ${`${this.state.clicked ? 'form-clicked': ''}`}`} onSubmit={this.handleSubmit} ref={node => this.node = node} >
                        <input 
                        className={`s search ${`${this.state.clicked ? 'input-clicked': ''}`}`}
                        autoComplete="off"
                        type="search" 
                        onChange={this.handleInputChange}
                        value={this.state.inputText}
    
                        />
                        <div className="search-icon-text search-icon"><i className="fa fa-search"></i><br/><p className="search-text">&ensp;{length===0 ? 'Search' : ''}</p></div>
                        <button className="search-button"></button>
                        <ul className={`search-results ${`${this.state.clicked ? 'sr': ''}`}`}></ul>
                    </form>
                    </>
                )
        } else {
            return ""
        }
    }
}

export default withRouter(Search);