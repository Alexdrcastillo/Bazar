import axios from 'axios';
import React, { useState } from 'react'
import style from "./form.module.css"

const Form = () => {

    const [form, setForm] = useState({
      title: "",
      description: "",
      price: "",
      stock: "",
      brand: "",
      category: "",
      images : ""
    })

    const handleChange = (e) => {
      const { name,value } = e.target;
      setForm({ ...form, [name]: value });
      
    }

    const handleSubmit = (e) => {
      e.preventDefault();
         axios.post("http://localhost:4000/", form).then((res) => alert("fue creado con exito")).catch((res) => alert("error-"))
    }


  return (
    <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={form.title} name='title' placeholder='title' onChange={handleChange} />
          <input type="text" value={form.description} name='description' placeholder='description' onChange={handleChange} />
          <input type="text" value={form.price} name='price' placeholder='price' onChange={handleChange} />
          <input type="text" value={form.stock} name='stock' placeholder='stock' onChange={handleChange} />
          <input type="text" value={form.brand} name='brand' placeholder='brand' onChange={handleChange} />
          <input type="text" value={form.category} name='category' placeholder='category' onChange={handleChange} />
          <input type="text" value={form.images} name='images' placeholder='images' onChange={handleChange} />
          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form