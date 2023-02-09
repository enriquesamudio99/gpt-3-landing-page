import './Feature.scss';

const Feature = ({ title, text }) => {
    return (
        <div className="feature">
            <div className="feature__container">
                <div className="feature__content">
                    <h3 className="feature__title">{title}</h3>
                    <p className="feature__text">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Feature;