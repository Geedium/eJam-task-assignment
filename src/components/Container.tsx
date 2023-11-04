export interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return <div className={`md:mx-auto mx-0 gap-2 w-full max-w-screen-xl ${className}`}>
        {children}
    </div>
}
