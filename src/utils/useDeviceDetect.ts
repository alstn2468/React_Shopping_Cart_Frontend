import * as React from 'react';

type DeviceDetectResult = {
    isMobile: boolean;
};

export function useDeviceDetect(): DeviceDetectResult {
    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const userAgent: string =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile: boolean = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
            ),
        );
        setMobile(mobile);
    }, []);

    return { isMobile };
}
