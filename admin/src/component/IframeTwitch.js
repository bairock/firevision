import React from 'react';
import '../App';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
            <div className="col-md-12twitch">
                <div className="emdeb-responsive">
                <iframe src="https://player.twitch.tv/?channel=teseyo&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
            </div>
    );
};

export default Iframe;