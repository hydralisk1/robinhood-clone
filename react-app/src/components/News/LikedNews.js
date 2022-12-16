import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticleFromDb, getArticlesFromDb } from "../../store/news";
import "../../stylesheets/SymbolNews.css"

const LikedNews = () => {
    const likedArticles = useSelector(state => state.news)
    const dispatch = useDispatch()

    const handleDeleteToggle = article => {
        dispatch(deleteArticleFromDb(article))
    }

    useEffect(() => {
        dispatch(getArticlesFromDb())
    }, [])

    return (
        <div className="news-container">
            {Object.keys(likedArticles).map(key => {
                return (
                    <a href={likedArticles[key].article_link} target="_blank" rel="noopener noreferrer" >
                        <div id="all-news-container">
                            <div id="all-news-inner-container">
                                <div id="all-news-source-container">
                                    <div id="all-news-source">
                                        {likedArticles[key].source}
                                        <div id="profile-liked-news-remove-button-container" style={{cursor: 'pointer'}}>
                                            <i className="fa-solid fa-x" id="profile-liked-news-remove-button" onClick={e => handleDeleteToggle(likedArticles[key])} />
                                        </div>
                                    </div>
                                </div>
                                <div id="all-news-bottom-half">
                                    <div id="all-news-title-and-tickers">
                                        <div id="all-news-article-title">
                                            {likedArticles[key].title}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="news-image-container">
                                                <img src={likedArticles[key].image} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default LikedNews;
