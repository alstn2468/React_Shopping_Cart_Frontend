import { numberWithComma } from 'utils/numberWithComma';

describe('numberWithComma 유틸 함수 테스트', () => {
    it('한자리 숫자 테스트', () => {
        expect('1').toEqual(numberWithComma(1));
    });

    it('두자리 숫자 테스트', () => {
        expect('10').toEqual(numberWithComma(10));
    });

    it('세자리 숫자 테스트', () => {
        expect('100').toEqual(numberWithComma(100));
    });

    it('네자리 숫자 테스트', () => {
        expect('1,000').toEqual(numberWithComma(1000));
    });

    it('일곱자리 숫자 테스트', () => {
        expect('1,000,000').toEqual(numberWithComma(1000000));
    });

    it('소숫점이 있는 일곱자리 숫자 테스트', () => {
        expect('1,000,000.1').toEqual(numberWithComma(1000000.1));
    });

    it('네자리 음수 테스트', () => {
        expect('-1,000').toEqual(numberWithComma(-1000));
    });

    it('소숫점이 있는 네자리 음수 테스트', () => {
        expect('-1,000.5').toEqual(numberWithComma(-1000.5));
    });
});
