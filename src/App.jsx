import './App.scss';

import { About, Features, Header, Possibility } from './containers';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <About />
                <Features />
                <Possibility />
            </main>
        </>
    );
}

export default App;