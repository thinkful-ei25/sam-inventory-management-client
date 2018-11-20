import React from 'react';

import TopNav from './top-nav';

export default function Header(props){
  return(
    <header>
      <TopNav />
      <h1>Inventory Manager</h1>
    </header>
  );
}