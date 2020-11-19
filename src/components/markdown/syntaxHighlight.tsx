/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { FunctionComponent } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/oceanicNext"
import copy from "copy-to-clipboard"

interface CopyButtonProps {
  data: string
}

const copyButtonStyles = css`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 7px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-radius: 7px;
    border-color: #0000ee;
  }
`

const CopyButton: FunctionComponent<CopyButtonProps> = ({
  data,
}: CopyButtonProps) => {
  return (
    <button css={copyButtonStyles} onClick={() => copy(data)}>
      Copy
    </button>
  )
}

interface SyntaxHighlighterProps {
  children: string
  className: string
}

const syntaxHighlightStyles = css`
  position: relative;
`

const SyntaxHighlighter: FunctionComponent<SyntaxHighlighterProps> = (
  props: SyntaxHighlighterProps
) => {
  const matches = props.className.match(/language-(?<lang>.*)/)
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""
  return (
    <div css={syntaxHighlightStyles}>
      <CopyButton data={props.children} />
      <Highlight
        {...defaultProps}
        code={props.children.trim()}
        //@ts-ignore
        language={language}
        theme={github}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={`${className} syntax-highlight`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        )}
      </Highlight>
    </div>
  )
}

export default SyntaxHighlighter
