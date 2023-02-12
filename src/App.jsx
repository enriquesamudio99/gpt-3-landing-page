import './App.scss';

import { About, Blog, CTA, Features, Header, Possibility } from './containers';

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
        </>
    );
}

export default App;