import Head from "next/head"
import ProposeLandingPage from "./proposal/[campaignId]"

export default function Home() {
    const headerData = {
        studentName: "Neil",
    }
    const contentData = {
        universityName: "RMIT",
        courseName: "Bachelor of Engineering",
    }
    return (
        <>
            <Head>
                <title>Propose - Home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" type="image/x-icon" href="/fav-icon.png" />
            </Head>
            <ProposeLandingPage />
        </>
    )
}
