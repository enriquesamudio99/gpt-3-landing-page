import './Blog.scss';

import { Article } from '../../components';
import { images } from '../../constants';

const Blog = () => {
    return (
        <section className="blog" id="blog">
            <div className="blog__container container">
                <h2 className="blog__title">A lot is happening, <br />We are blogging about it.</h2>

                <div className="blog__grid">
                    <div className="blog__grid-left">
                        <Article img={images.blog01} date="Sep 26, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    </div>
                    <div className="blog__grid-right">
                        <Article img={images.blog02} date="Sep 26, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article img={images.blog03} date="Sep 26, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article img={images.blog04} date="Sep 26, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article img={images.blog05} date="Sep 26, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;