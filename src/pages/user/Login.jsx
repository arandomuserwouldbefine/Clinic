import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request to login
      await axios.post('http://localhost:3000/users', {
        email,
        password
      });
      // Set loggedIn to true after successful login
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Redirect to home page after successful login
  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Card className="mx-auto max-w-sm mt-20 mb-20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@example.com" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="*******" />
              </div>
              <div className="space-y-2">
                <h1 className="text-slate-800">Don't have an account? <Link to="/register" className="font-semibold"> Register here </Link></h1>
              </div>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
