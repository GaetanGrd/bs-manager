import { createSvgIcon } from "../svg-icon.type";

export const SearchIcon = createSvgIcon((props, ref) => {
    return (
        <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height="40" width="40">
            <path fill="currentColor" d="m31.833 34.167-9.708-9.75q-1.25 1.041-2.896 1.625-1.646.583-3.521.583-4.583 0-7.77-3.208-3.188-3.209-3.188-7.709 0-4.541 3.188-7.729 3.187-3.187 7.729-3.187 4.541 0 7.729 3.187 3.187 3.188 3.187 7.729 0 1.792-.583 3.438-.583 1.646-1.625 3.021l9.792 9.75q.458.458.458 1.104 0 .646-.5 1.146-.458.458-1.146.458-.687 0-1.146-.458ZM15.667 23.458q3.25 0 5.5-2.27 2.25-2.271 2.25-5.48 0-3.25-2.25-5.5t-5.5-2.25q-3.209 0-5.479 2.25-2.271 2.25-2.271 5.5 0 3.209 2.25 5.48 2.25 2.27 5.5 2.27Z" />
        </svg>
    );
});
