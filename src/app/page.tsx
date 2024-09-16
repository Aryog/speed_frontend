import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
      <p className="mb-4">This app uses Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
      <Button variant="destructive">Destructive</Button>
    </main>
  )
}
