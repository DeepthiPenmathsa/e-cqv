import React from 'react';
import Sidebar from "./Sidebar";
import styled from 'styled-components';
import MainPage from './MainPage';
import LastPage from './LastPage';
import Footer from './Footer';

function Main() {
    return (
        <>
            <Wrapper>
                <Sidebar />
                <MainPage />
                <LastPage />
            </Wrapper>
            <Footer />
        </>
    )
}

export default Main;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #eeeeee;
    display: flex;
`