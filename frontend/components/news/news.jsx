import React from 'react'
import { fetchNews } from '../../util/news_api_util';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }


    componentDidMount(){
        fetchNews().then(news => {
            this.setState({ news: news.articles, isLoading: false })
        })
    }

    render(){
        debugger
        if (!this.state.isLoading){
            const { news } = this.state;
            debugger
            return (
                <ul className="news-box">
                    {news.reverse().map((newsPiece, idx) => (
                        // <div >
                        <a href={newsPiece.url} className="news-box nws" key={`${newsPiece}-idx`} >
                            <div className="news-text">
                            <div className="news-name">{newsPiece.source.name}</div> 
                            <div className="news nws-text">{newsPiece.description}</div>
                            </div>
                            
                            <img className="news-image news-img" src={newsPiece.urlToImage} alt=""/>
                            </a>
                        // </div>
                    ))}
                </ul>
            )
        } else{
            return <div>   </div>
        }
    }
}

export default News