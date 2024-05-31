import CursorGradient from '@/components/CursorGradient'
import { Button } from '@/components/ui/button'
import { ToogleTheme } from '@/components/ui/toggleTheme'

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CursorGradient />

      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-bold">Home</h1>
        <Button variant="secondary">Click me</Button>
        <ToogleTheme />
      </div>
    </div>
  )
}
