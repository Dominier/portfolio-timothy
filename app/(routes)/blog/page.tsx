import Image from "next/image";
import { NavigationBar } from "@/components/ui/navbar";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="p-16 space-y-5">
        <div className="text-center justify-center align-middle">
            Coming soon! (still in the works)
        </div>
        <div>
          <Link href="/blog/matcha">
            <Card className="bg-green-300 transform transition duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Matcha reviews</CardTitle>
                <CardDescription>My unserious reviews of matcha places I have tried.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
        <div>
          <Link href="/blog/web">
            <Card className="bg-gray-400 transform transition duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Getting started with frontend engineering</CardTitle>
                <CardDescription>Advice for those with a background of software engineering</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
        {/* <div>
          <Link href="/blog/web">
            <Card className="bg-gray-400 transform transition duration-300 hover:scale-105 hover:cursor-not-allowed">
              <CardHeader>
                <CardTitle>Getting started with frontend engineering</CardTitle>
                <CardDescription>Advice for those who want to get into frontend engineering</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div> */}
     </div>
  )
}
