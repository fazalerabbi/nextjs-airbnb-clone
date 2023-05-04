'use client';

import { FC } from 'react';

interface MapProps {
    center?: number[]
}

const Map: FC<MapProps> = ({
    center
}) => {
    return (
        <div>
            Map
        </div>
    );
}

export default Map;