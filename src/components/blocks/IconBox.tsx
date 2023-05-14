import { twMerge } from "tailwind-merge"
type prop = {
    text : string
    url? : string
    contStyle? : string
}

export default function IconBox({text = 'hello', url, contStyle} : prop){
    return(
        <div className={twMerge("px-0 py-4 lg:px-8 lg:py-6 tracking-[10px] text-[11px] lg:text-[14px] inline-flex items-center gap-2 justify-center bg-primary-color", contStyle)}>
            <img src={url} width="10%"/>
            <h1 className="font-bold text-black">{text}</h1>
        </div>
    )
}