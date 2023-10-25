"use client"

import { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"

const Post = ({post}) => {

  const router = useRouter()

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [postToEdit, setPostToEdit] = useState(post)

  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleEditSubmit = (e) => {
    e.preventDefault()
    console.log("post à modifié", postToEdit)
    axios.patch(`/api/posts/${post.id}`, postToEdit)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setOpenModalEdit(false)
        router.refresh()
      })
  }



  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPostToEdit(prevState => ({...prevState, [name]: value}) )
  }


  const handleDeletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then(res => {
        console.log("j'ai supprimé le post", id, res.data)
        router.refresh()
      })
      .catch(err => {
        console.log("erreur de suppression", err)
      })
      .finally(() => {
        setOpenModalDelete(false)
        router.refresh()
      })
  }

  return (
    <li className="p-3 my-5 bg-slate-400 rounded-md" key={post.id}>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.description}</p>

      <div className="pt-5">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mr-5"
          onClick={() => setOpenModalEdit(true)}  
        >
          Modifier
        </button>


        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form className="w-full" onSubmit={handleEditSubmit}>
            <h1 className="text-2xl font-bold pb-3">Ajouter un nouveau post</h1>
            <input
              type="text"
              placeholder="Titre du post"
              name="title"
              className="w-full p-2 mb-3"
              value={postToEdit.title || ''} 
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="description du post"
              name="description"
              className="w-full p-2 my-5" 
              value={postToEdit.description || ''} 
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Valider
            </button>
          </form>
        </Modal>


        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => setOpenModalDelete(true)}    
        >
          Supprimer
        </button>

        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h1 className="text-2xl font-bold pb-3">Voulez-vous vraiment supprimer ce post</h1>
          <div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mr-5"
              onClick={() => handleDeletePost(post.id)}
            >
              Oui
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer mr-5"
              onClick={() => setOpenModalDelete(false)}  
            >
              Non
            </button>
          </div>
        </Modal>

      </div>
    </li>
  )
}

export default Post