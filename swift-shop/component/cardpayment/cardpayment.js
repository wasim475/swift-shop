"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { createCheckoutSession } from '../../../app/action/stripe';
// import { createCheckoutSession } from "@/app/actions/stripe";

export const Cardpayment = () => {
    const formAction = async(data) => {
        const {url} = await createCheckoutSession(data);
        window.location.assign(url)
    }

    return (
        <>
            <form action={formAction}>
                
                    <Button
                    
                        type="submit"
                        variant="ghost"
                        className=" text-white gap-1 w-full bg-blue-500"
                    >
                        Pay Now
                        
                    </Button>
                
            
            </form>
        </>
    );
};