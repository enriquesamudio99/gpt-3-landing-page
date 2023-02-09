import './About.scss';

import { Feature } from '../../components';

const About = () => {
    return (
        <div className="about">
            <div className="about__container container">
                <div className="about__gradient about__gradient--one"></div>
                <div className="about__gradient about__gradient--two"></div>
                <header className="about__header">
                    <h2 className="about__title">What is GPT-3</h2>
                    <p className="about__text">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                </header>
                <div className="about__features">
                    <div className="about__features-header">
                        <h2 className="about__features-title">The possibilities are beyond your imagination</h2>
                        <a href="#about" className="about__features-link">Explore The Library</a>
                    </div>

                    <div className="about__features-grid">
                        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;