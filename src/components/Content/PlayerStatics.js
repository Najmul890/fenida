import React from 'react';
import PlayerProfile from './PlayerProfile';
import InfoChart from './InfoChart';
import PlayerRating from './PlayerRating';

const PlayerStatics = () => {
    return (
        <div className="mx-4" >
            <div className='d-flex' >
                <PlayerProfile/>
                <InfoChart/>
            </div>
            <div>
                <PlayerRating/>
            </div>
        </div>
    );
};

export default PlayerStatics;