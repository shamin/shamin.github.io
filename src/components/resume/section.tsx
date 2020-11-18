/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const resumeSectionStyles = css`
  .section__heading {
    margin-bottom: 0;
  }
  @media print {
    .section__heading {
      margin-top: 14px;
      margin-bottom: 5px;
    }
  }
`

export default function ResumeSection({
  title,
  children,
}: {
  title: string
  children: React.ReactChild
}) {
  return (
    <section css={resumeSectionStyles}>
      <h2 className="section__heading">{title}</h2>
      <hr />
      <div className="content">{children}</div>
    </section>
  )
}
