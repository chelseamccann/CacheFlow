import React from 'react'
import { fetchNews, fetchCompanyNews } from '../../util/news_api_util';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
        this.getNews = this.getNews.bind(this);
    }


    componentDidMount(){
        this.getNews();
    }

    componentDidUpdate(prevProps){
        if (prevProps.location.pathname.toUpperCase() !== this.props.location.pathname.toUpperCase()){
            this.getNews();
        }
    }

    getNews(){
        let ticker = this.props.location.pathname
        if (ticker === "/"){
            fetchNews().then(news => {
                this.setState({ news: news.articles, isLoading: false })
            })
        } else {
            fetchCompanyNews(ticker.slice(1,ticker.length)).then(news => {

                this.setState({ news: news.articles, isLoading: false })
            })
        }
    }

    render(){

        if (!this.state.isLoading){
            const { news } = this.state;
            return (
                <ul className="news-box">
                    {news.map((newsPiece, idx) => (

                        <a href={newsPiece.url} className="news-box nws" key={`${newsPiece}-${idx}`} >
                            <div className="news-text">
                                <div className="news-name">{newsPiece.source.name}</div> 
                                <div className="news nws-text">{newsPiece.description}</div>
                            </div>
                            <div className="news-pic">
                                <img className="news-image news-img" src={newsPiece.urlToImage} alt=""/>
                            </div>
                        </a>

                    ))}
                </ul>
            )
        } else{
            return <div>   </div>
        }
    }
}

export default News