import Foreigner from './Foreigner';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'

export default function Content(props) {
    return (
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>
            Geia Sas, <Foreigner name="Vinayak Santhosh" />!! Sorry to startle you with the roaring and manly war cry up there!
            Feel free to explore the once renowned city that was ruled by the great Leonidas.
            Not the protagonist from the movie{' '}
            <a href="https://en.wikipedia.org/wiki/300_(film)" target="_blank">
                <img src="https://whatthelogo.com/storage/logos/frank-millers-300-8841.png" alt="300 movie logo" />
            </a>, but the real King Leonidas.
        </p>
    );
}