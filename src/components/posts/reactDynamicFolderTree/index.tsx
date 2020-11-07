/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import { update, cloneDeep, flatMap } from "lodash"

function loadFilesForFolder(files, path) {
  const subFiles = getFolderContents(path.join("/"))
  const newFiles = cloneDeep(files)

  const writePath = flatMap(path, (value, index: number, array) =>
    array.length - 1 !== index ? [value, "files"] : value
  )

  update(newFiles, writePath, function (n) {
    return {
      ...n,
      files: subFiles,
    }
  })

  return newFiles
}

export function AccordionExample() {
  const [files, setFiles] = useState(getFolderContents("/"))
  function loadFiles(path) {
    const newFiles = loadFilesForFolder(files, path)
    setFiles(newFiles)
  }

  return <Accordion files={files} onFolderItemClick={path => loadFiles(path)} />
}

const accordionItemStyles = css`
  background: #4c5057;
  color: #ffffff;
  padding: 12px 20px;
  list-style: none;
`

function AccordionFileItem(props) {
  return (
    <li
      css={accordionItemStyles}
      onClick={e => {
        e.stopPropagation()
        props.onFileItemClick()
      }}
    >
      file:
      {props.file.name}
    </li>
  )
}

const accordionFolderItemStyles = isOpen => css`
  ul {
    transition: max-height 0.3s ease;
    overflow: hidden;
    max-height: ${isOpen ? 300 : 0};
  }
`

function AccordionFolderItem(props) {
  return (
    <li
      css={[accordionItemStyles, accordionFolderItemStyles(props.isOpen)]}
      onClick={e => {
        e.stopPropagation()
        props.onFolderItemClick([props.file.name])
      }}
    >
      folder:
      {props.file.name}
      {props.file.files && (
        <Accordion
          files={props.file.files}
          onFolderItemClick={path =>
            props.onFolderItemClick([props.file.name, ...path])
          }
        />
      )}
    </li>
  )
}

function Accordion(props) {
  const [openFolders, setOpenFolders] = useState([])

  function isFolderOpen(openFolders, folderName) {
    return openFolders.find(f => f === folderName)
  }

  function openCloseFolder(folder) {
    const isOpen = isFolderOpen(openFolders, folder)
    if (isOpen) {
      setOpenFolders(openFolders.filter(f => f !== folder))
    } else {
      setOpenFolders([...openFolders, folder])
    }
  }
  return (
    <ul className="accordion">
      {Object.values(props.files).map((file: any) => {
        if (file.dir) {
          return (
            <AccordionFolderItem
              key={file.name}
              file={file}
              onFolderItemClick={fileData => {
                const isOpen = isFolderOpen(openFolders, file.name)
                if (!isOpen || fileData.length !== 1) {
                  props.onFolderItemClick(fileData)
                }
                if (fileData.length === 1) {
                  openCloseFolder(file.name)
                }
              }}
              isOpen={isFolderOpen(openFolders, file.name)}
            />
          )
        }
        return (
          <AccordionFileItem
            key={file.name}
            file={file}
            onFileItemClick={() => {
              console.log(file.name)
            }}
          />
        )
      })}
    </ul>
  )
}

const folder = {
  "/": [
    { name: "documents", dir: true },
    { name: "downloads", dir: true },
    { name: "my.pptx", dir: false },
  ],
  documents: [
    { name: "doc1.docx", dir: false },
    { name: "pres.pptx", dir: false },
  ],
  downloads: [
    { name: "music", dir: true },
    { name: "file1.csv", dir: false },
    { name: "file2.txt", dir: false },
  ],
  "downloads/music": [
    { name: "doc1.docx", dir: false },
    { name: "pres.pptx", dir: false },
  ],
}

export default function getFolderContents(directory) {
  return folder[directory].reduce((acc, cur) => {
    acc[cur.name] = cur
    return acc
  }, {})
}
