import { useState } from "react"

function OilsForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [highlight, setHighlight] = useState(false)
    const [themes, setThemes] = useState([])
    const [theme, setTheme] = useState('')
    const [inputFields, setInputFields] = useState([
        {theme: '', useAlone: ''}
    ])  
    const [errors, setErrors] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const oil = {
            name,
            description,
            image,
            highlight
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
            setHighlight(false)
            setErrors(null)
            console.log('New oil created!')
        }
    }

    const handleFormChange = (index, event) => {
        event.preventDefault()
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { theme: '', useAlone: '' }
    
        setInputFields([...inputFields, newfield])
    }

    return (
        <div>
            <h1>Oil Form</h1>
            <form className="form-wrapper">
                <label htmlFor="name">
                    Name
                    <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </label>

                <label htmlFor="description">
                    Description
                    <input 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} 
                    />
                </label>

                <label htmlFor="image">
                    Image
                    <input 
                    type="text" 
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    />
                </label>

                <label htmlFor="highlight">
                    Highlight
                    <select onChange={(e) => setHighlight(e.target.value)}>
                        <option value={highlight}>False</option>
                        <option value={!highlight}>True</option>
                    </select>
                </label>

                <h3>Themes</h3>
                {inputFields.map((input, index) => {
                    return (
                        <label htmlFor="theme" key={index}>
                            Theme :
                            <select onChange={event => handleFormChange(index, event)}>
                                <option value={input.one}>one</option>
                                <option value={input.two}>two</option>
                            </select>
                            <input
                                name='useAlone'
                                value={input.useAlone}
                                onChange={event => handleFormChange(index, event)}
                                />
                        </label>
                    )
                })}
                <button onClick={addFields}>Add More..</button>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {errors && <div>{errors}</div>}
        </div>
    )
}

export default OilsForm
