import SessionLink from './SessionLink'

export default function Header() {
  return (
    <div className="md:w-2/4 flex justify-start md:justify-center items-start md:items-baseline pl-16 md:pl-0">
      <div className="sticky top-20 flex flex-col">
        <h1 className="font-VT323 text-3xl font-bold mb-2">Matheus Fritzke</h1>
        <span className="font-VT323 text-base font-bold mb-2">
          Desenvolvedor de Software
        </span>

        <span className="font-VT323 text-xs opacity-75">
          Transformando linhas de código
        </span>
        <span className="font-VT323 text-xs opacity-75 mb-16">
          em soluções incríveis.
        </span>
        <SessionLink text="Bio" />
        <SessionLink text="Experiencia" selected />
      </div>
    </div>
  )
}
