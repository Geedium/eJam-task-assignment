import Container from "./Container";
import Divider from "./Divider";
import LockIcon from "./LockIcon";

export default function Footer() {
    return <div className="bg-surface text-white">
        <Container className="flex md:flex-row flex-col py-8 px-8">
            <div className="flex flex-1 gap-2 md:self-auto self-center whitespace-nowrap">
                Copyright (C) 2023 <Divider width={1} color={"border-white"} /> <a href="mailto:clarifionsupport@clarifion.com">clarifionsupport@clarifion.com</a>
            </div>
            <div className="flex gap-2 md:mt-0 mt-4 md:self-auto self-center">
                <LockIcon width={20} height={20} color={"#fff"} />
                <div>Secure 256-Bit SSL Encryption.</div>
            </div>
        </Container>
    </div>
}