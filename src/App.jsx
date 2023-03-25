import './App.scss';

import { About, Blog, CTA, Features, Footer, Header, Possibility } from './containers';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <About />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
            </main>
            <Footer />
        </>
    );
}

export default App;