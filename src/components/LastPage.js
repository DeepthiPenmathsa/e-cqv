import React from 'react';
import styled from 'styled-components';

function LastPage() {
    return (
        <DataSection>
            <div className="newsSection">
                <h1>news Section</h1>
            </div>

            <div className="chatSection">
                <h2>Chat Section</h2>
            </div>
        </DataSection>
    )
}

export default LastPage;

const DataSection = styled.div`
    width:40%;
    margin: 2rem 1rem;
    
    .newsSection, .chatSection{
        height:45vh;
        padding: 2rem;
        background-color: white;
        text-align: center;
    }
    .chatSection{
        margin-top:2rem;
    }

`

