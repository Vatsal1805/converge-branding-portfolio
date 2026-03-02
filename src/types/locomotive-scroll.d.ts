declare module "locomotive-scroll" {
    export interface LocomotiveScrollOptions {
        el: HTMLElement;
        smooth?: boolean;
        multiplier?: number;
        class?: string;
    }

    export default class LocomotiveScroll {
        constructor(options: LocomotiveScrollOptions);
        update(): void;
        destroy(): void;
        scrollTo(target: string | number | HTMLElement, options?: unknown): void;
        on(event: string, callback: (args?: unknown) => void): void;
        scroll: {
            instance: {
                scroll: {
                    x: number;
                    y: number;
                };
            };
        };
    }
}
