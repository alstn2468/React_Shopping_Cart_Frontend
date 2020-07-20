import { renderHook } from '@testing-library/react-hooks';
import { useDeviceDetect } from 'utils/useDeviceDetect';

describe('useDeviceDetect 커스텀 Hook 테스트', () => {
    it('User Agent가 빈 문자열일 경우 테스트', () => {
        jest.spyOn(window.navigator, 'userAgent', 'get').mockImplementationOnce(
            () => '',
        );
        const { result } = renderHook(() => useDeviceDetect());
        expect(result.current.isMobile).toBeFalsy();
    });

    it('User Agent가 Mozila일 경우 테스트', () => {
        jest.spyOn(window.navigator, 'userAgent', 'get').mockImplementationOnce(
            () => 'Mozila',
        );
        const { result } = renderHook(() => useDeviceDetect());
        expect(result.current.isMobile).toBeFalsy();
    });

    it('User Agent가 iPhone일 경우 테스트', () => {
        jest.spyOn(window.navigator, 'userAgent', 'get').mockImplementationOnce(
            () => 'iPhone',
        );
        const { result } = renderHook(() => useDeviceDetect());
        expect(result.current.isMobile).toBeTruthy();
    });

    it('User Agent가 Android일 경우 테스트', () => {
        jest.spyOn(window.navigator, 'userAgent', 'get').mockImplementationOnce(
            () => 'Android',
        );
        const { result } = renderHook(() => useDeviceDetect());
        expect(result.current.isMobile).toBeTruthy();
    });

    it('window.navigator가 unefined일 경우 테스트', () => {
        jest.spyOn(window, 'navigator', 'get').mockImplementationOnce(
            () => undefined,
        );
        const { result } = renderHook(() => useDeviceDetect());
        expect(result.current.isMobile).toBeFalsy();
    });
});
