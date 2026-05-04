function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  const alignment = center ? "text-center items-center" : "text-left items-start"

  return (
    <header className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-[#D4A017]/45 bg-[#D4A017]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#9b7312]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-black leading-tight text-[#1F3A5F] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-[#4c6a8f] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}

export default SectionHeading
