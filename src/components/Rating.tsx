import StarIcon from "./StarIcon";

export default function Rating({ className, size }: { className?: string; size?: "sm"; }) {
    const stars = Array.from(new Array(5))

    const _size = size && size == "sm" ? 16 : 20;

    return <div className={`flex items-center ${className}`}>
        {stars.map((_, index) => <StarIcon key={index} width={_size} height={_size} color={"#FFC000"} />)}
    </div>
}
