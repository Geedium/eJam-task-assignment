import THEME from "@/theme";
import Container from "./Container";
import Rating from "./Rating";
import RadioButtonIcon from "./RadioButtonIcon";
import CheckIcon from "./CheckIcon";
import Alert from "./Alert";
import Divider from "./Divider";
import LockIcon from "./LockIcon";
import VerifiedIcon from "./VerifiedIcon";

export default function Product() {
    return <Container>
        <div className="flex gap-8 bg-transparent md:bg-gray-50 p-8 mb-8 md:mb-16 md:flex-row flex-col rounded-md">
            <div className="w-1/2 hidden md:block">
                <div className="overflow-hidden rounded-md">
                    {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                    <img className="w-full" src={"/product.png"} />
                </div>
                <div className="bg-white-500 p-2">
                    <div className="flex gap-2 items-center">
                        <div className="overflow-hidden w-12 h-12 rounded-full">
                            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                            <img src="/avatar.png" />
                        </div>
                        <div className="flex flex-col self-start">
                            <Rating size={"sm"} />
                            <div className="flex gap-2 items-center mt-1">
                                <div className="font-bold">Ken T.</div>
                                <VerifiedIcon width={20} height={20} color={"#5BB59A"} />
                                <div style={{ color: "#5BB59A" }} className="font-light">Verified Customer</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        {"\"As soon as the Clarifions arrived I put one in my bedroom. This was late\
                                in the afternoon. When I went to the bedroom in the evening it smelled\
                                clean. When I went to bed I felt I could breathe better. Wonderful."}
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="text-2xl font-light md:text-left text-center max-w-md">
                    <span className="font-normal" style={{ color: "#2C7EF8", display: "inline" }}>
                        ONE TIME ONLY
                    </span>{" "}
                    Special Price For 6 Extra Clarifion For Only <span className="font-normal" style={{ color: "#2C7EF8", display: "inline" }}>$14 Each</span> ($84.00 Total!)
                </div>
                <div className="flex my-4">
                    {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                    <img width={128} height={128} className="rounded-lg" src={"/product_img.png"} />
                    <div className="flex-1 flex-col p-2">
                        <div className="flex items-center">
                            <div className="flex-1 text-lg">Clarifion Air Ionizer</div>
                            <div style={{ color: THEME.background }}>
                                <span style={{ color: "GrayText", textDecoration: "line-through" }} className="mr-2">$180</span>
                                <span className="font-semibold text-lg">$84</span>
                            </div>
                        </div>
                        <Rating className="my-2" />
                        <div className="flex items-center my-2 gap-2">
                            <RadioButtonIcon width={20} height={20} color={THEME.background} />
                            12 left in stock
                        </div>
                        <div className="hidden md:block">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                    </div>
                </div>
                <div className="text-center">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                <ul>
                    <li className="flex my-2">
                        <CheckIcon color={THEME.background} />
                        <div className="ml-2">Negative Ion Technology may <b className="font-medium">help with allergens</b></div>
                    </li>
                    <li className="flex my-2">
                        <CheckIcon color={THEME.background} />
                        <div className="ml-2"><b className="font-medium">Designed for air rejuvenation</b></div>
                    </li>
                    <li className="flex my-2">
                        <CheckIcon color={THEME.background} />
                        <div className="ml-2"><b className="font-medium">Perfect for every room</b> in all types of places.</div>
                    </li>
                </ul>
                <Alert>
                    Save <span className="inline text-main">53%</span> and get <span className="inline text-main">6 extra Clarifision</span> for only <span className="inline text-main">$14 Each</span>.
                </Alert>
                <button className="flex mt-8 bg-ok gap-4 text-white px-8 py-4 w-full items-center justify-center rounded-full">
                    <div className="font-semibold">YES - CLAIM MY DISCOUNT</div>
                    <svg focusable="false" fill={"#fff"} width={24} height={24} aria-hidden="true" viewBox="0 0 24 24">
                        <path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                    </svg>
                </button>
                <div className="flex md:flex-row flex-col overflow-hidden border-frame border-2 p-2 my-4 md:gap-2 rounded-md">
                    <div className="flex md:flex-1 gap-2">
                        <div className="whitespace-nowrap self-center">Free Shipping</div>
                        <Divider />
                        <div className="flex flex-1 items-center gap-2 whitespace-nowrap self-center">
                            <LockIcon width={20} height={20} color={"#000"} />
                            <div>Secure 256-Bit SSL Encryption.</div>
                        </div>
                    </div>
                    {/* <Divider /> */}
                    <div className="border-b-2 my-2 md:my-0 md:border-r-2 border-frame"></div>

                    <div className="overflow-hidden items-center self-center flex-shrink flex-grow-0 w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                        <img className="w-full" src={"/cards.png"} />
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <a className="text-red-500 underline" href="#">NO THANKS, I DON&apos;T WANT THIS.</a>
                </div>
                <div className="flex gap-4 mt-8">
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                        <img src="/guarantee.png" className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            If you are not completely thrilled with your Clarifion - We have a <b className="font-medium">30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details.
                            Happy Shopping!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
}