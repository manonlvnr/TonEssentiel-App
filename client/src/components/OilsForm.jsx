import { useState } from "react"

function OilsForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [errors, setErrors] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const oil = {
            name,
            description,
            image
        }

        const response = await fetch('api/oils', {
            method: 'POST',
            body: JSON.stringify(oil),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(oil)

        const data = await response.json()

        if (!response.ok) {
            setErrors(data.errors)
            console.log('Error creating new oil!')
        }

        if (response.ok) {
            setName('')
            setDescription('')
            setImage('')
            setErrors(null)
            console.log('New oil created!')
        }
    }

    return (
        <div>
            <h1>Oil Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <label htmlFor="description">Description</label>
                <input 
                type="text" 
                onChange={(e) => setDescription(e.target.value)}
                value={description} 
                />
                <label htmlFor="image">Image</label>
                <input 
                type="text" 
                onChange={(e) => setImage(e.target.value)}
                value={image}
                />
                <button type="submit">Submit</button>
            </form>
            {errors && <div>{errors}</div>}
        </div>
    )
}

export default OilsForm
