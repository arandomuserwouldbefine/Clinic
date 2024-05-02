import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-8 md:py-12 border-t mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-start gap-4">
                    <Link className="flex items-center gap-2" href="#">
                        <MountainIcon className="h-6 w-6" />
                        <span className="text-lg font-bold">Rajvi Inc.</span>
                    </Link>
                    <p className="text-sm">Crafting beautiful and functional products for your business.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <h4 className="text-lg font-medium">About</h4>
                        <Link className="text-sm hover:underline" href="#">
                            Our Story
                        </Link>
                        <Link className="text-sm hover:underline" href="#">
                            Our Team
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-lg font-medium">Products</h4>
                        <Link className="text-sm hover:underline" href="#">
                            All Products
                        </Link>
                        <Link className="text-sm hover:underline" href="#">
                            Pricing
                        </Link>
                    </div>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-lg font-medium">Contact</h4>
                    <Link className="text-sm hover:underline" href="#">
                        Get in Touch
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                        Support
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <p className="text-sm">© 2024 Rajvi Inc. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link className="text-sm hover:underline" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="text-sm hover:underline" href="#">
                            Terms of Service
                        </Link>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                    <form className="flex space-x-2">
                        <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
