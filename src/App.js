import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Retailers from "./views/Retailers";
import IndividualsContent from "./views/Individuals";
import AboutUs from "./views/AboutUs";
import Header from "./components/layout/Header";
import ContactUs from "./components/elements/ContactUs";

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <>
          <Header navPosition="right" className="reveal-from-bottom" />

          <Switch>
            <AppRoute
              exact
              path="/about-us"
              component={AboutUs}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/individuals"
              component={IndividualsContent}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/retailers"
              component={Retailers}
              layout={LayoutDefault}
            />
            <AppRoute path="/" component={Home} layout={LayoutDefault} />
          </Switch>
          <ContactUs />
        </>
      )}
    />
  );
};

export default App;
