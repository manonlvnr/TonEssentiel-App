import { useState } from "react"

function OilsForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [highlight, setHighlight] = useState(false)
    const [symptomFields, setsymptomFields] = useState([
        {symptom: '', theme: ''}
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
        let data = [...symptomFields];
        data[index][event.target.name] = event.target.value;
        setsymptomFields(data);
    }

    const addFields = () => {
        let newfield = { symptom: '', theme: '' }
    
        setsymptomFields([...symptomFields, newfield])
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

                <h3>Symptomes</h3>
                {symptomFields.map((value, index) => {
                    return (
                        <label htmlFor="theme" key={index}>
                            Symptom :
                            <input
                                name='symptom'
                                value={value.symptom}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <select onChange={event => handleFormChange(index, event)}>
                                <option value="Bien-être">Bien-être</option>
                                <option value="Beauté">Beauté</option>
                                <option value="Parfum">Parfum</option>
                                <option value="Cuisine">Cuisine</option>
                                <option value="Hygiène maison">Hygiène maison</option>
                                <option value="Santé">Santé</option>
                            </select>
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
