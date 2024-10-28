import React from "react"
import { useRouter } from "next/router"

export default function CongratsPage() {
    const router = useRouter()
    const { campg, token } = router.query

    const navigateBack = () => {
        router.push(`/propose/${campg}?token=${token}`)
    }

    return (
        <div>
            <h1>Congrats Page</h1>
            <p>Your proposal was successful!</p>
            <button onClick={navigateBack}>Back to Home Page</button>
        </div>
    )
}
