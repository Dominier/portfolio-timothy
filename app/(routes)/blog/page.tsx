import Image from "next/image";
import { NavigationBar } from "@/components/ui/navbar";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="p-20 space-y-5">
        <div className="text-center justify-center align-middle">
            Coming soon... (still not sure what I am making yet!)
        </div>
        <div>
          <Link href="/blog/matcha">
            <Card className="bg-green-300">
              <CardHeader>
                <CardTitle>Matcha Reviews</CardTitle>
                <CardDescription>My silly reviews of matcha places I have tried.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
        <div>
          <Link href="/blog">
            <Card className="bg-gray-400">
              <CardHeader>
                <CardTitle>Engineering blog</CardTitle>
                <CardDescription>Coming soon...</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
     </div>
  )
}
