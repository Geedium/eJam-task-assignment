export default function Divider({ color = "border-frame", width = 2} : { color?: string, width?: number }) {
    return <div className={`${width > 1 ? `border-r-${width}`: `border-r`} ${color}`}></div>
}
