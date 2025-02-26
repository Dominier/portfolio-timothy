import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function MatchaBlogPage() {
  return (
    <div className="">
        <div className="p-16 space-y-5">
          <h1 className="text-2xl"> My reviews of matcha; updates whenever i feel like it.</h1>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Kei Coffee House</CardTitle>
              <CardDescription>oh yeah this one is a banger. great matcha flavour in the matcha latte, banana matcha latte, and strawberry matcha latte</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Rating: BOOM BOOM BOOM BOOM BOom</p>
            </CardContent>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Airoma Cafe</CardTitle>
              <CardDescription>i think i got the wrong thing? banana matcha latte was okay but I need to come back and regrade</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Rating: BOOM BOOM boom</p>
            </CardContent>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Mugs</CardTitle>
              <CardDescription>this is not a banger and i know bangers. i got the blueberry matcha. matcha flavour was weak</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Rating: boom boom boom</p>
            </CardContent>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Stereoscope</CardTitle>
              <CardDescription>amazing and fresh strawberry matcha, would come back again!!! has long lines sometimes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Rating: BOOM BOOM BOOM BOOM BOOM</p>
            </CardContent>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>SIP Coffee</CardTitle>
              <CardDescription>photogenic strawberry matcha that comes with a pockey. this one is delicious</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Rating: BOOM BOOM BOOM BOOM BOom</p>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}
