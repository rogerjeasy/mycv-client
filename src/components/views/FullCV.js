import React from 'react';
import '../../styles/views/FullCV.scss'; // Ensure you import your SCSS file

const FullCV = () => {
    return (
        <div className="cv-container">
            <h1>Full CV</h1>
            <iframe
                src="bav_roger_cv.pdf"
                title="Full CV"
                width="100%"
                height="600px"
            />
        </div>
    );
}

export default FullCV;

