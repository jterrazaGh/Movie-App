import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieContextProvider from "./contexts/MovieContext";
import MovieDetailsContextProvider from "./contexts/MovieDetailsContext";
import Header from "./components/Common/Header";
import MoviesDetails from "./components/MoviesDetails";
import NotFound from "./components/NotFound";
import ProgressBar from "./components/Common/ProgressBar"
import "./assets/css/styles.css";
import ErrorBoundaries from "./components/Common/ErrorBoundaries";

const MoviesP = lazy(() => import("./components/MoviesP"));

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Suspense
                fallback={
                    <div>
                        <ProgressBar />
                    </div>
                }
            >
                <Route exact path="/">
                    <MovieContextProvider>
                        <ErrorBoundaries>
                            <MoviesP />
                        </ErrorBoundaries>
                    </MovieContextProvider>
                </Route>
                <Route exact path="/moviesdetails/Movie/:commonmovie_id">
                    <MovieDetailsContextProvider>
                        <ErrorBoundaries>
                            <MoviesDetails />
                        </ErrorBoundaries>
                    </MovieDetailsContextProvider>
                </Route>
                <Route component={NotFound} />
            </Suspense>
        </Switch>

    </BrowserRouter>
);

export default App;
