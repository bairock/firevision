import React from 'react';
import '../App';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
            <div className="col-md-12">
                <div className="emdeb-responsive">
                    <iframe src={src} style={{width:'100vw', height: '80vh', border:'0', bottom:'2000px'}}></iframe>
                </div>
            </div>
    );
};

export default Iframe;