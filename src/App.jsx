import './App.scss';

import { About, Header } from './containers';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <About />
            </main>
        </>
    );
}

export default App;