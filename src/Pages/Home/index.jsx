import { useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

    const [items, setItems] = useState(null)

    return (
      <Layout>
        Home
        <Card />
      </Layout>
    )
}

export default Home
