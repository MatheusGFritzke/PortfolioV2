export default function Content() {
  return (
    <div className="w-4/4 md:w-2/4 flex justify-start items-start md:items-baseline px-16 md:px-0">
      <div className="h-full top-20 opacity-75 scroll">
        {/* Conteúdo do lado direito com rolagem */}
        {Array.from({ length: 15 }, (_, index) => (
          <section id={'loren_' + index} key={index}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ut ab optio voluptatem, sint corporis cumque nihil rerum
              consequatur beatae officia odio rem molestiae quibusdam enim eaque
              aliquam. At, total.{index + 1}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
