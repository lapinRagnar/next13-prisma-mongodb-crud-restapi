import Link from "next/link"


const page = () => {
  return (
    <div>
    <h1 className='text-4xl'>About page</h1>
    <p className='py-10'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus consequatur quos distinctio libero rem, ad facere ut consequuntur totam praesentium, quidem necessitatibus, vitae nostrum. Mollitia accusantium quisquam commodi! Repudiandae.
    Provident quis inventore eos, quaerat quas, aliquid commodi nisi placeat sit, ad quibusdam nihil sed modi et voluptatibus. Ullam aperiam nihil iusto cupiditate eum qui! Nobis ab quasi dolores animi?
    Assumenda, eveniet ad, impedit sed aperiam ex deleniti perferendis optio atque at nam iure asperiores explicabo veniam reprehenderit aliquam eos debitis praesentium? Vero id accusamus ratione, perspiciatis dolores sunt ipsum?
    </p>

    <Link 
      href='/' 
      className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
    >
      Back to Home
    </Link>
  </div>
  )
}

export default page