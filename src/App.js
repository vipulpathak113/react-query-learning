import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Box>
          <Navbar/>
          <Switch>
            <Route exact path="/rq-infinite">
              <InfiniteQueriesPage />
            </Route>
            <Route exact path="/rq-paginate">
              <PaginatedQueriesPage />
            </Route>
            <Route exact path="/rq-dependent">
              <DependentQueriesPage email={"vipul@pathak.com"} />
            </Route>
            <Route exact path="/rq-parallel">
              <ParallelQueriesPage />
            </Route>
            <Route exact path="/rq-dynamic-parallel">
              <DynamicParallelPage heroIds={[1, 3]} />
            </Route>
            <Route exact path="/">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route exact path="/rq-super-hero/:heroId">
              <RQSuperHeroPage />
            </Route>
          </Switch>
        </Box>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
