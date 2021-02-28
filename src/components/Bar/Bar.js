import React from 'react'
import "./Bar.css";

const Bar = ({ height, color }) => {
    return (
        <div className="bar" style={{
            height: `${(height * 75)/500}vh`,
            backgroundColor: color
        }}>
        </div>
    )
}

export default Bar
