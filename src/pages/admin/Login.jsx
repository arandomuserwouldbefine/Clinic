import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/user/Footer"
import Navbar from "@/components/user/Navbar"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div>
      <Navbar />
      <Card className="mx-auto max-w-sm mt-20 mb-20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="johndoe@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" placeholder="*******" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  )
}