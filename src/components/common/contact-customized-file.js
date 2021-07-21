import React, { useState } from 'react'

const ContactCustomizedFile = () => {
  const defaultString = 'Upload file(max size 30M)'
  const [currentFile, setCurrentFile] = useState(defaultString)

  const onClickInput = () => {
    document.getElementsByClassName('customized-file-input')[0].click()
  }

  const onFileChange = () => {
    var fileInput = document.getElementsByClassName('customized-file-input')[0]
    if(fileInput.files.length >= 1)
      setCurrentFile(fileInput.files[0].name)
    else
      setCurrentFile(defaultString)
  }
  return (
    <>
      <input type="file" name="user-file" className="customized-file-input" onChange={() => onFileChange()}/>
      <div onClick={() => onClickInput()} className="file-select">
        {currentFile}
      </div>
    </>
  )
}

export default ContactCustomizedFile