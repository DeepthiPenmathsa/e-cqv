import React from 'react'
import  styles from 'styled-components';

function Footer() {
    return (
        <FooterSection>
            <h2>Footer Section</h2>
        </FooterSection>
    )
}

export default Footer;

const FooterSection = styles.div`
    width:100%;
    height: 15vh;
    background-color: #293846;
    color: white;
    text-align: center;
`

