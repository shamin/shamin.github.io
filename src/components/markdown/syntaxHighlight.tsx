import React, { FunctionComponent } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/oceanicNext"

interface SyntaxHighlighterProps {
  children: string
  className: string
}

const SyntaxHighlighter: FunctionComponent<SyntaxHighlighterProps> = (
  props: SyntaxHighlighterProps
) => {
  const matches = props.className.match(/language-(?<lang>.*)/)
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""
  return (
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
  )
}

export default SyntaxHighlighter
