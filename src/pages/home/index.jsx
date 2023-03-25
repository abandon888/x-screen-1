import styles from './index.module.css';
import React, { useState, useEffect, memo } from 'react';
import Nav from './nav';
import Content from './content';

export default memo((props) => {
  return (
    <div>
      <Nav />
      <Content />
    </div>
  )
})
