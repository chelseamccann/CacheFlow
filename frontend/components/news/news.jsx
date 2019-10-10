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
            debugger
            this.setState({ news: news.articles, isLoading: false })
        })
    }

    render(){
        debugger
        if (!this.state.isLoading){
            const { news } = this.state;
            debugger
            return (
                <div className="bigger-news-box">
                <ul>
                    {news.reverse().map((newsPiece, idx) => (
                        <div className="news-box" key={`${newsPiece}-idx`}>
                            <div className="news">{newsPiece.description}</div>
                            <img className="news-image" src={newsPiece.urlToImage} alt=""/>
                        </div>
                    ))}
                </ul>
                </div>
            )
        } else{
            return <div>no news friends </div>
        }
    }
}

export default News