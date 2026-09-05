/** Official supplied artwork, displayed without recoloring or recreating it. */
export default function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Apex Freelancing home">
      <picture>
        <source media="(max-width: 600px)" srcSet="/assets/brand/apex-logo-icon.png" />
        <img
          src="/assets/brand/apex-logo-horizontal.png"
          alt="Apex Freelancing"
          width="2048"
          height="683"
        />
      </picture>
    </a>
  )
}
