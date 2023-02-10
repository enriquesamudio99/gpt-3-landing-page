import './App.scss';

import { About, Features, Header } from './containers';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <About />
                <Features />
            </main>
        </>
    );
}

export default App;