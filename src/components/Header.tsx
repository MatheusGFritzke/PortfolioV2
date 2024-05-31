import SessionLink from "./SessionLink";


export default function Header() {
  return (
    <div className="w-1/2">
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
      <SessionLink text="Experiencia" selected/>
      </div>
    </div>
  )
}
