import './Features.scss';

import { Feature } from '../../components';

const Features = () => {

    return (
        <section className="features">
            <div className="features__container container">
                <div className="features__gradient"></div>
                <div className="features__data">
                    <h2 className="features__title">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                    <a href="#" className="features__link">Request Early Access to Get Started</a>
                </div>
                <div className="features__grid">
                    <Feature title="Improving end distrusts instantly" text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." futureSection={true} />
                    <Feature title="Become the tended active instantly" text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." futureSection={true} />
                    <Feature title="Message or am nothing" text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address." futureSection={true} />
                    <Feature title="Really boy law county" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush." futureSection={true} />
                </div>
            </div>
        </section>
    );

}

export default Features;