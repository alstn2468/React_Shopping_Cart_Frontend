export type PatternType = (string | number)[];

export function generatePaginationPattern(
    range: number,
    currentPage: number,
): PatternType {
    let pattern = null;

    switch (true) {
        case range < 7:
            pattern = [...new Array(range)].map((_, i) => i + 1);
            break;
        case currentPage < 4:
            pattern = [1, 2, 3, 4, 5, '...', range];
            break;
        case currentPage > range - 4:
            pattern = [
                1,
                '...',
                range - 4,
                range - 3,
                range - 2,
                range - 1,
                range,
            ];
            break;
        default:
            pattern = [
                1,
                '...',
                currentPage - 1,
                currentPage,
                currentPage + 1,
                '...',
                range,
            ];
    }

    return pattern;
}
