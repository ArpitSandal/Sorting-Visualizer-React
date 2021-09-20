import React from 'react';

function Bars(props){

    const styles={
        height: `${props.height}px`,
    }
    return (
        <div style={styles} className={props.myclass}>
        </div>
    )
}

export default Bars