import React, { useState } from 'react'

export default function ImageUploader({onUpload}){
  const [preview, setPreview] = useState(null)
  function handleFile(e){
    const file = e.target.files[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = ()=> { setPreview(reader.result); onUpload && onUpload(reader.result) }
    reader.readAsDataURL(file)
  }
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && <img src={preview} alt="preview" className="mt-2 w-32 h-32 object-cover rounded" />}
    </div>
  )
}
