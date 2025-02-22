

const Newarrival = () => {
  return (
    <main className="flex justify-between mt-10">
      <section>
        <h1 className="font-medium text-2xl"> <span className="text-green-700 ">New</span>  <span className="text-purple-500 ">Arrival</span> </h1>
        <p className="text-gray-400">Shop online for new arrivals and get free shipping!</p>
      </section>
      <section>
        <ul className="flex gap-x-10">
            <li>All</li>
            <li>Mobile</li>
            <li>Electronics</li>
            <li>Education</li>
        </ul>
      </section>
    </main>
  )
}

export default Newarrival
