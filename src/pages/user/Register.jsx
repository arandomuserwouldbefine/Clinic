import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make the POST request to register the user
            await axios.post('http://localhost:3000/users', {
                name,
                email,
                mobile,
                password
            });
            // Set redirect to true after successful registration
            setRedirect(true);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    // Redirect to login page after successful registration
    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Card className="mx-auto max-w-sm mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Register</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required type="text" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@example.com" required type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile no.</Label>
                                <Input id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="01234567890" required type="number" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="*******" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-slate-800">Already have an account? <Link to="/login" className="font-semibold"> Login here </Link></h1>
                            </div>
                            <Button className="w-full" type="submit">
                                Register
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
