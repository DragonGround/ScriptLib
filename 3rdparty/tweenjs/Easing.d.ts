export declare type EasingFunction = (amount: number) => number;
declare const Easing: {
    Linear: {
        None: (amount: number) => number;
    };
    Quadratic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Cubic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Quartic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Quintic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Sinusoidal: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Exponential: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Circular: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Elastic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Back: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Bounce: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    generatePow: (power?: number) => {
        In(amount: number): number;
        Out(amount: number): number;
        InOut(amount: number): number;
    };
};
export default Easing;
