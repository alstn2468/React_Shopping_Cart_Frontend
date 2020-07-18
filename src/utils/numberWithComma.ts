export function numberWithComma(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
