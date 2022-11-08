export const getRandomNum = (min: number, max: number): number => {
    const roundedMin = Math.ceil(min);
    const roundedMax = Math.floor(max);
    return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
}