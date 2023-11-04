interface IconButtonProps {
    icon?: JSX.Element | null;
    fallbackText?: string | number;
    color?: string;
    outlined?: boolean;
}

export default function IconButton({ icon, outlined = false, color = "#2C7EF8", fallbackText }: IconButtonProps) {
    const computedStyle = outlined ? {
        borderColor: color,
        borderWidth: 2,
        color: color,
    } : {
        background: color,
        color: "#ffffff"
    }

    return <div className="w-8 h-8 font-light rounded-full inline-flex justify-center items-center" style={computedStyle}>
        {icon ?? fallbackText}
    </div>
}
