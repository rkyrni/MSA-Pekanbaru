function TestimonialCard({ name, quote }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#2E7D32]/20 bg-white p-5 shadow-sm">
      <div className="mb-3 text-[#D4A017]" aria-hidden="true">
        ★★★★★
      </div>
      <p className="flex-1 text-sm leading-relaxed text-[#4f6e94]">"{quote}"</p>
      <p className="mt-4 text-sm font-bold text-[#1F3A5F]">{name}</p>
    </article>
  )
}

export default TestimonialCard
