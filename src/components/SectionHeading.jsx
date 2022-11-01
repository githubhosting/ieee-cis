export function SectionHeading({ number, children, ...rest }) {
  return (
    <h2
      className="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600"
      {...rest}
    >
      <span className="ml-0 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}
