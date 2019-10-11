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
                <ul className="news-box">
                    {news.reverse().map((newsPiece, idx) => (
                        <div className="news-box nws" key={`${newsPiece}-idx`}>
                            <img className="news-image news-img" src={newsPiece.urlToImage} alt=""/>
                            <div className="news nws-text">{newsPiece.description}</div>
                        </div>
                    ))}
                </ul>
            )
        } else{
            return <div>   </div>
        }
    }
}

export default News