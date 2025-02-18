async function getData() {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = () => {
  return (
    <div>
      <h1>View Category</h1>
    </div>
  )
}

export default page
