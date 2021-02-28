import React from 'react'
import "./Bar.css";

const Bar = ({ height, color, width }) => {
    return (
        <div className="bar" style={{
            height: `${(height * 75)/500}vh`,
            width: width || "100%",
            backgroundColor: color,
        }}>
        </div>
    )
}

export default Bar
