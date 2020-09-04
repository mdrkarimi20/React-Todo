import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./Components/Header/Header";
import Start from "./Containers/Start/Start";
import NewFrom from "./Containers/NewFrom/NewForm";
import EditForm from "./Containers/EditForm/EditForm";
import theme from "./themes/theme";

function App() {

   return (
    <ThemeProvider theme={theme}>
      <Container data-aos="fade-left">
        <Header data-aos="fade-right"/>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/add" component={NewFrom} />
          <Route exact path="/update/:listId" component={EditForm} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;