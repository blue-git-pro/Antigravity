import react from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NewsList from "../news/NewsList";
import NewsView from "../news/NewsView";

const News = ({}) => (
  <div className='page-news'>
    <BrowserRouter>
      <Switch>
        <Route exact path="/news">
          <NewsList />
        </Route>
        <Route path="/newsview/:id">
          <NewsView />
        </Route>
        <Route exact path="/">
          <Redirect to="/news" />
        </Route>
        <Route path="*">
          <NewsList />
        </Route>{" "}
      </Switch>
    </BrowserRouter>
  </div>
)

export default News