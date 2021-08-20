import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn } from './HeroElements';


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toogle={toogle} />
            <Sidebar isOpen={isOpen} toogle={toogle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>La meilleure pizza jamais vue</HeroH1>
                    <HeroP>Prêt en 60 secondes</HeroP>
                    <HeroBtn>commandez</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;