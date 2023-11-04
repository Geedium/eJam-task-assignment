import Container from "./Container"

export default function Header() {
    return <Container className="shadow-lg md:shadow-none p-4">
        <div className="flex items-center gap-8">
            <div className="flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={"/clarifion.png"} />
            </div>
            <div className="flex gap-4 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={"/mcafee.png"} />
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={"/norton.png"} />
            </div>
        </div>
    </Container>
}
