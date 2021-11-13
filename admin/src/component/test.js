import React from 'react';
import '../App';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe src={src} style={{width:'100vw', height:'100vh', border:'0'}}></iframe>
            </div>
        </div>
    );
};

export default Iframe;