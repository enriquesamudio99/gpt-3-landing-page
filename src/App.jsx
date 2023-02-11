import './App.scss';

import { About, CTA, Features, Header, Possibility } from './containers';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <About />
                <Features />
                <Possibility />
                <CTA />
            </main>
        </>
    );
}

export default App;