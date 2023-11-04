"use client";

import Container from "./Container";
import IconButton from "./IconButton";
import CheckIcon from "./CheckIcon";
import THEME from "@/theme";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const STEPS = [
    { name: "Card Review", checked: true, current: false, next: false },
    { name: "Checkout", checked: true, current: false, next: false },
    { name: "Special Offer", checked: false, current: true, next: false },
    { name: "Confirmation", checked: false, current: false, next: true },
];

export default function Steps() {
    const { width } = useWindowDimensions();

    return <Container className="flex items-center mt-8 mb-0 px-6 md:my-8">
        {
            STEPS.map((step, index) => {
                return <div key={index} className={`flex md:flex-row flex-col text-center items-center gap-2 w-1/4 text-sm md:text-lg ${step.current ? "font-medium": "font-light"} `}>
                    <IconButton outlined={step.next}
                        color={!step.current && !step.next ? THEME.ok : THEME.background}
                        icon={!step.current && !step.next ? <CheckIcon /> : null} 
                        fallbackText={index + 1}
                    />
                    {width > 768 ? `Step ${index + 1}: `: null}{step.name}
                </div>
            })
        }
    </Container>
}
