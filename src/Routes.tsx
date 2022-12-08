import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"; //npm i react-router-dom
import { Cart } from "./pages/cart";
import { Catalog } from "./pages/catalog";

export function Routes() {
    return (
        <Router>
            <Route path="/catalog">
                <Catalog />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Router>
    )
}