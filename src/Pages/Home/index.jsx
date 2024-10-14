import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

    const [items, setItems] = useState(null)

    useEffect(() => {

    }, [])

    return (
      <Layout>
        Home
        <Card />
      </Layout>
    )
}

export default Home
