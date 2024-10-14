import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

    const [items, setItems] = useState(null)

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    return (
      <Layout>
        Home
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </Layout>
    )
}

export default Home
