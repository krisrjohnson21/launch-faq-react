import React, { useState } from 'react'
import Question from './Question'

const FAQContainer = props => {
  const [selectedId, setSelectedId] = useState(null)
  const questionObjectArray = props.data.map((questionObject) => {
    let selected = false;

    const setSelectedIdClosure = event => {
      event.preventDefault()
      if (selectedId === questionObject.id) {
        setSelectedId(null)
      } else {
        setSelectedId(questionObject.id)
      }
    }

    if (selectedId === questionObject.id) {
      selected = true
    }

    return(
      <Question
      key={questionObject.id}
      question={questionObject.question}
      answer={questionObject.answer}
      selected={selected}
      setSelectedIdClosure={setSelectedIdClosure}
      />
    )
  })

  return (
    <div className="FAQContainer">{questionObjectArray}</div>
  )
}

export default FAQContainer;
