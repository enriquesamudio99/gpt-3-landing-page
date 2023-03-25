import './Possibility.scss';

import { images } from '../../constants';

const Possibility = () => {
    
    return (
        <section className="possibility" id="possibility">
            <div className="possibility__container container">
                <div className="possibility__image-container">
                    <img src={images.possibility} alt="Possibility Image" className="possibility__image" />
                </div>
                <div className="possibility__data">
                    <a href="#possibility" className="possibility__link possibility__link--top">Request Early Access to Get Started</a>
                    <h2 className="possibility__title">The possibilities are beyond your imagination</h2>
                    <p className="possibility__text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <a href="#possibility" className="possibility__link">Request Early Access to Get Started</a>
                </div>
            </div>
        </section>
    );

}

export default Possibility;