import React from 'react';

const Question = props => {
  let answer;
  let iconClass = "fas "
  if (props.selected === true) {
    answer = props.answer;
    iconClass += "fa-minus"
  } else {
    iconClass += "fa-plus"
  }

  return(
    <div className="row">
      <div className="columns small-1">
        <button type="button"><i onClick={props.setSelectedIdClosure} className={iconClass}></i></button>
      </div>
      <p className="columns small-11">{props.question}</p>
      <p className="columns small-12">{answer}</p>
      <hr />
    </div>
  )
}

export default Question;
