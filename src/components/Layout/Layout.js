import React from "react";
import classes from "./Layout.module.css"

import Aux from "../../hoc/Auxiliar"

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrops</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;