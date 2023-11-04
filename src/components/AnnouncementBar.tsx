import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import Container from "./Container";
import HeartIcon from "./HeartIcon";
import RefundIcon from "./RefundIcon";
import ShippingIcon from "./ShippingIcon";
import VerifiedIcon from "./VerifiedIcon";

export default function AnnouncementBar() {
    return <div className="p-4 text-white bg-surface">
        <Container className="flex items-center justify-center md:justify-start">
            <div className="md:hidden block px-2">
                <ChevronLeftIcon />
            </div>
            <div className="flex items-center gap-2 md:w-1/4 text-sm">
                <VerifiedIcon outlined={true} />
                30-DAY SATISFACTION GUARANTEE
            </div>
            <div className="md:hidden block px-2">
                <ChevronRightIcon />
            </div>
            <div className="md:flex hidden items-center gap-2 w-1/4 text-sm">
                <ShippingIcon />
                FREE DELIVERY ON ORDERS OVER $40.00
            </div>
            <div className="md:flex hidden items-center gap-2 w-1/4 text-sm">
                <HeartIcon />
                50.000+ HAPPY CUSTOMERS
            </div>
            <div className="md:flex hidden items-center gap-2 w-1/4 text-sm">
                <RefundIcon />
                100% MONEY BACK GUARANTEE
            </div>
        </Container>
    </div>
}