import './CTA.scss';

const CTA = () => {
    return (
        <section className="cta" id="cta">
            <div className="cta__container container">
                <div className="cta__data">
                    <p className="cta__subtitle">Request Early Access to Get Started</p>
                    <h2 className="cta__title">Register today & start exploring the endless possibilities.</h2>
                </div>
                <a href="#cta" className="cta__btn">Get Started</a>
            </div>
        </section>
    );
}

export default CTA;