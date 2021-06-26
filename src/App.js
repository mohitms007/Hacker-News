import React from 'react'
import StoriesContainer from './containers/StoriesContainer'
import {
    GlobalStyle,
    StoriesContainerWrapper,
  } from './styles/StoriesContainerStyles';
import Header from './components/Header'
export const App = () => {
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <StoriesContainer/>
        </>
    )

}

