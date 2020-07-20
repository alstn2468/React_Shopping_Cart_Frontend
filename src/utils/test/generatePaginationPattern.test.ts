import {
    generatePaginationPattern,
    PatternType,
} from 'utils/generatePaginationPattern';

const RANGE_ONE_CURRENT_PAGE_ONE: PatternType = [1];
const RANGE_FOUR_CURRENT_PAGE_ONE: PatternType = [1, 2, 3, 4];
const RANGE_SEVEN_CURRENT_PAGE_TWO: PatternType = [1, 2, 3, 4, 5, '...', 7];
const RANGE_SEVEN_CURRENT_PAGE_FIVE: PatternType = [1, '...', 3, 4, 5, 6, 7];
const RANGE_TEN_CURRENT_PAGE_FIVE: PatternType = [1, '...', 4, 5, 6, '...', 10];

describe('generatePaginationPattern 유틸 함수 테스트', () => {
    it('범위 1 현재 페이지 1 페이지네이션 패턴 생성 테스트', () => {
        expect(RANGE_ONE_CURRENT_PAGE_ONE).toEqual(
            generatePaginationPattern(1, 1),
        );
    });

    it('범위 4 현재 페이지 2 페이지네이션 패턴 생성 테스트', () => {
        expect(RANGE_FOUR_CURRENT_PAGE_ONE).toEqual(
            generatePaginationPattern(4, 2),
        );
    });

    it('범위 7 현재 페이지 2 페이지네이션 패턴 생성 테스트', () => {
        expect(RANGE_SEVEN_CURRENT_PAGE_TWO).toEqual(
            generatePaginationPattern(7, 2),
        );
    });

    it('범위 7 현재 페이지 5 페이지네이션 패턴 생성 테스트', () => {
        expect(RANGE_SEVEN_CURRENT_PAGE_FIVE).toEqual(
            generatePaginationPattern(7, 5),
        );
    });

    it('범위 10 현재 페이지 5 페이지네이션 패턴 생성 테스트', () => {
        expect(RANGE_TEN_CURRENT_PAGE_FIVE).toEqual(
            generatePaginationPattern(10, 5),
        );
    });
});
