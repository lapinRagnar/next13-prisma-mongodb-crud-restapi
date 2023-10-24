"use client"

import { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"


const AddPost = () => {

  const router = useRouter()

  const [modalOpen, setModalOpen] = useState(false)
  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("mes inputs", inputs)
    axios.post('/api/posts', inputs)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setInputs({})
        setModalOpen(false)
        router.refresh()
      })
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(prevState => ({...prevState, [name]: value}) )
  }


  return (
    <div>
      <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => setModalOpen(true)}  
      >
        Add New Post
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold pb-3">Ajouter un nouveau post</h1>
          <input
            type="text"
            placeholder="Titre du post"
            name="title"
            className="w-full p-2 mb-3"
            value={inputs.title || ''} 
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description du post"
            name="description"
            className="w-full p-2 my-5" 
            value={inputs.description || ''} 
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Valider
          </button>
        </form>
      </Modal>

    </div>
  )
}

export default AddPost