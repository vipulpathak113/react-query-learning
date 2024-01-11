import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import React from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />
            <Route path="/rq-paginate" element={<PaginatedQueriesPage />} />
            <Route path="/rq-dependent" element={<DependentQueriesPage email={"vipul@pathak.com"} />} />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroIds={[1, 3]} />} />
            <Route path="/" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-super-hero/:heroId" element={<RQSuperHeroPage />} />
          </Routes>
        </Box>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
