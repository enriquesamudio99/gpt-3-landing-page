import './Companies.scss';

import { images } from '../../constants';

const Companies = () => {

    return (
        <div className="companies">
            <div className="companies__container">
                <img src={images.google} alt="Google Logo" className="company__img" />
                <img src={images.slack} alt="Slack Logo" className="company__img" />
                <img src={images.atlassian} alt="Atlassian Logo" className="company__img" />
                <img src={images.dropbox} alt="Dropbox Logo" className="company__img" />
                <img src={images.shopify} alt="Shopify Logo" className="company__img" />
            </div>
        </div>
    );

}

export default Companies;