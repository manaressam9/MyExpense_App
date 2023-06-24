import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'

 function Orb() {

    const [size, setSize] = useState([400,500])
    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth,window.innerHeight])
        }
        window.addEventListener('resize', updateSize)

        //cleanr func
        return () => window.removeEventListener('resize', updateSize)
    }, [])

const moveOrb = keyframes`
0%{
    transform: translate(0, 0);
}
50%{
    transform: translate(${size[0]}px, ${size[1]}px);
}
100%{
    transform: translate(0, 0);
}
`
const OrbStyle = styled.div`
width: 70vh;
height: 70vh;
position: absolute;
border-radius: 50%;
margin-left: -37vh;
margin-top: -37vh;
background: linear-gradient(180deg, #9032FF 0%, #a700e9 100%);
filter: blur(200px);
animation: ${moveOrb} 10s alternate linear infinite;

`;
    return (
        <OrbStyle></OrbStyle>
    )
}
export default Orb;