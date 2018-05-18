import React from 'react';

export default function SurpriseButton(props) {

    return <button onClick={() => props.onButtonClick(true)}>Surprise!</button>;
}
