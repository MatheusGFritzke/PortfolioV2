import { Separator } from './ui/separator'

type SessionLinkProps = {
  text: string
  selected?: boolean
}

export default function SessionLink({ text, selected }: SessionLinkProps) {
  const className = selected
    ? 'flex items-center w-10 font-bold cursor-pointer'
    : 'flex items-center w-6 opacity-75 cursor-pointer hover:opacity-100 hover:w-10 hover:font-bold'

  return (
    <div className={className}>
      <Separator />{' '}
      <span className="px-2 text-xs font-VT323">{text.toUpperCase()}</span>
    </div>
  )
}
