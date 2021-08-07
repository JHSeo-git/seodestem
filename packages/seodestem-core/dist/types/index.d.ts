declare function sum(i: number, j: number): number;
declare function sub(i: number, j: number): number;
declare function logger(text: string): string;
export { sum };
export { sub };
export { logger };
declare const _default: {
    sum: typeof sum;
    sub: typeof sub;
    logger: typeof logger;
};
export default _default;
