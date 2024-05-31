import Content from '@/components/Content'
import CursorGradient from '@/components/CursorGradient'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-screen w-full">
      <CursorGradient />
      <div className="flex w-full max-w-screen-lg px-32">
        <Header />
        <Content />
      </div>
    </div>
  )
}
