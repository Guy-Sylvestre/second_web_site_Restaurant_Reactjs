import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements'


const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza du jour</h1>
            <p>Sauce alfredo aux truffes avec de la poussière d'or 24 carats.</p>
            <FeatureButton>Commandez</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;