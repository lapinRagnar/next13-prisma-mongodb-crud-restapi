import AddPost from "../components/AddPost"


const Crud = () => {
  return (
    <div className="max-w-4xl mx-auto mt-4 ">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">To do list</h1>
        <AddPost />
      </div>
    </div>
  )
}

export default Crud