import { createElement } from 'react'
import { getServiceIcon } from './serviceIconMap'

function ServiceCard({ name, items, href = "#kontak", actionLabel = "Selengkapnya" }) {
  const serviceIconComponent = getServiceIcon(name)

  return (
    <article className="rounded-2xl border border-[#1F3A5F]/12 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-22px_rgba(31,58,95,0.7)]">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/18 text-[#1F3A5F]">
          {createElement(serviceIconComponent, { 'aria-hidden': 'true', className: 'text-lg' })}
        </span>
        <h3 className="text-lg font-extrabold text-[#1F3A5F]">{name}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-[#4c6a8f]">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E7D32]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className="mt-4 inline-flex rounded-lg bg-[#1F3A5F] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#17304f]"
      >
        {actionLabel}
      </a>
    </article>
  )
}

export default ServiceCard
