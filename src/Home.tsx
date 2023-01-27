import React from 'react'
import ContactUs from './contact-us'
import styled from 'styled-components'

const Wrapper = styled.div`
    color: green;
    text-align: left;
    background: red;
`

export default function Home() {
    return (
        <Wrapper>
            <br />
            <div>Home - 34 Combe street Swindon</div>
            <ContactUs />
        </Wrapper>
    )
}
