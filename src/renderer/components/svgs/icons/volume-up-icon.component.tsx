import { CSSProperties } from "react";

export function VolumeUpIcon(props: {className?: string, style?: CSSProperties}) {
    return (
        <svg className={props.className} style={props.style} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor">
            <path d="M596.512 889.152q-12.846 4.846-23.91-3.416-11.063-8.263-11.063-22.794 0-6.763 4.012-12.007 4.013-5.243 10.244-7.397 84.769-32 136.282-104.936Q763.589 665.667 763.589 575t-51.512-163.808q-51.513-73.141-136.282-104.73-6.821-2.154-10.539-7.965-3.717-5.812-3.717-12.587 0-13.96 11.268-21.934 11.269-7.974 23.705-3.385 97.64 38.231 157.486 123.339 59.846 85.107 59.846 191.07t-59.846 191.07q-59.846 85.108-157.486 123.082ZM177.438 675.999q-13.468 0-22.375-8.907t-8.907-22.375V507.283q0-13.468 8.907-22.375t22.375-8.907h117.178L412.948 357.67q14.769-14.769 33.987-6.722 19.218 8.047 19.218 28.593v392.661q0 20.803-19.218 28.85t-33.987-6.722L294.616 675.999H177.438Zm374.357 49.949V424.463q43.051 19.102 68.704 60.551 25.654 41.448 25.654 90.986 0 50.205-25.654 90.525-25.653 40.32-68.704 59.423ZM415.898 429.436l-99.128 96.82H196.411v99.488H316.77l99.128 97.23V429.436ZM318.872 576Z"/>
        </svg>
    )
}