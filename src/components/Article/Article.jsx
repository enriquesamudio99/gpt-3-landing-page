import './Article.scss';

const Article = ({ img = "", date = "date", title = "title", text = "text" }) => {
    return (
        <div className="article">
            <div className="article__container">
                <div className="article__img-container">
                    <img src={img} alt="Article image" className="article__img" />
                </div>
                <div className="article__body">
                    <div className="article__data">
                        <p className="article__date">{date}</p>
                        <h3 className="article__title">{title}</h3>
                    </div>
                    <a href="#article" className="article__btn">Read Full Article</a>
                </div>
            </div>
        </div>
    );
}

export default Article;