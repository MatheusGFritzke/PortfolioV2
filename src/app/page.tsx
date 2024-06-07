import Content from '@/components/Content'
import CursorGradient from '@/components/CursorGradient'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-screen w-full pt-20">
      <CursorGradient />
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl">
        <Header />

        <Content />
      </div>
    </div>
  )
}
