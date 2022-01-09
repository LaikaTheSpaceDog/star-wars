import Home from "../Home/Home";
import AppComponent from "./app-styles";
import Loading from '../Loading/';

const App = () => {
    return (
        <Loading>
            <AppComponent>
                <Home />
            </AppComponent>
        </Loading>
    );
}

export default App;
