declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    group: string;
    width: number | string;
    reverse: boolean;
    position: string | string[];
    classes: string;
    animationName: string;
    speed: number;
    cooldown: number;
    duration: number;
    delay: number;
    max: number;
    ignoreDuplicates: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (item: any) => void;
} & {
    destroy: (item: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    group: string;
    width: number | string;
    reverse: boolean;
    position: string | string[];
    classes: string;
    animationName: string;
    speed: number;
    cooldown: number;
    duration: number;
    delay: number;
    max: number;
    ignoreDuplicates: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
}>>> & {
    onClick?: (item: any) => any;
    onDestroy?: (item: any) => any;
}, {}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
