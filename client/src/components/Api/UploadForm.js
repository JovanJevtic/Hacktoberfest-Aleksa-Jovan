import React, { Fragment, useState } from 'react'
import axios from 'axios'

const UploadForm = () => {
    
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})

    const onFileChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const onFormSubmit = async e => {
        e.preventDefault()
        const fd = new FormData()
        fd.append('file', file)

        try {
            const res = await axios.post('https://memeit-aj.herokuapp.com/api/posts', fd, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const { fileName, filePath } = res.data

            setUploadedFile({ fileName, filePath })
        } catch(err) {
           console.log(err)
        }
    }

    return (
        <Fragment>
            <form onSubmit={onFormSubmit}>
                <div className="imageInputGroup">
                    <input onChange={onFileChange} style={{display: 'none'}} id="imageFile" type="file" />
                    <label htmlFor="imageFile">
                        { filename }
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </Fragment>
    )
}

export default UploadForm
