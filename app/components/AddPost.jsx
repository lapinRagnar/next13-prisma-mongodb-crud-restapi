"use client"

import { useState } from "react"
import Modal from "./Modal"


const AddPost = () => {

  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => setModalOpen(true)}  
      >
        Add New Post
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>le modal est ici</Modal>

    </div>
  )
}

export default AddPost