import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import MainNavigation from './header/nav/main-navigation';
import MinorNavigation from './header/nav/minor-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MinorNavigation />
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
