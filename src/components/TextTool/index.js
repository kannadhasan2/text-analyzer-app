import {useState, useEffect} from 'react'
import './index.css'

const TextTool = () => {
  const [text, setText] = useState('')
  const [searchStr, setSearchStr] = useState('')
  const [replaceStr, setReplaceStr] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [uniqueWordCount, setUniqueWordCount] = useState(0)

  useEffect(() => {
    const words = text.match(/\b\w+\b/g) || []
    setWordCount(words.length)

    const characters = text.replace(/[\s\W]+/g, '')
    setCharCount(characters.length)

    const uniqueWords = new Set(words.map(word => word.toLowerCase()))
    setUniqueWordCount(uniqueWords.size)
  }, [text])

  const handleReplace = () => {
    const replacedText = text.replaceAll(searchStr, `${replaceStr}`)
    setText(replacedText)
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">Text Analyzer & Modifier</h1>
      <textarea
        className="textarea"
        value={text}
        placeholder="Enter your text here..."
        onChange={event => setText(event.target.value)}
      />

      <div className="stats">
        <p>
          Total Words: <span>{wordCount}</span>
        </p>
        <p>
          Unique Words: <span>{uniqueWordCount}</span>
        </p>
        <p>
          Character Count: <span>{charCount}</span>
        </p>
      </div>

      <div className="replace-section">
        <input
          className="input"
          type="text"
          placeholder="Enter the string to replace"
          value={searchStr}
          onChange={event => setSearchStr(event.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Replacement string"
          value={replaceStr}
          onChange={event => setReplaceStr(event.target.value)}
        />
        <button type="button" className="replace-btn" onClick={handleReplace}>
          Replace String
        </button>
      </div>
    </div>
  )
}

export default TextTool
