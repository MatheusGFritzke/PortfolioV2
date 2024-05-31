export default function Content() {
  return (
    <div className="w-2/4">
      <div className="h-full mt-20 opacity-75">
        {/* Conteúdo do lado direito com rolagem */}
        {Array.from({ length: 20 }, (_, index) => (
          <section id={"loren_"+index}  key={index}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ut ab optio voluptatem, sint corporis cumque nihil rerum consequatur
              beatae officia odio rem molestiae quibusdam enim eaque aliquam. At,
              total.{index + 1}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
