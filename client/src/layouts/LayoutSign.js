import { Layout } from 'antd';
import React from 'react';

import './LayoutSign.scss'

export default function LayoutSign(props) {


  const {children} = props ; 
  const {Header,Content,Footer} = Layout ; 
  
  
    return (
      <Layout className='layout-sign'>
            <Header className='layout-sign__header'>Header Sign ...</Header>
            <Content className='layout-sign__content'>{children}</Content>
            <Footer className='layout-sign__footer'>Footer Sign  ...</Footer>
      </Layout>
    )
}
