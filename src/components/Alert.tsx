import IconButton from "./IconButton";
import PercentIcon from "./PercentIcon";

export interface AlertProps {
    children: React.ReactNode;
}

export default function Alert({ children }: AlertProps) {
    return <div className="flex items-center gap-4 p-2 rounded-md my-2" style={{ background: "#EDF3FD"}}>
        <IconButton icon={<PercentIcon width={20} height={20} />} />
        <div>{children}</div>
    </div>
}
