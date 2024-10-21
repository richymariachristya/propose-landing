import { API_END_POINTS } from "@/constants/end-points"
import { v4 as uuidv4 } from "uuid"

const STUDENT_INFO = `${process.env.NEXT_PUBLIC_API_END_POINT}${API_END_POINTS.GET_STUDENT_INFO}`

export const getStudentInfo = async <T>(token: any): Promise<T> => {
    const newUuid = uuidv4()
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
        Authorization: token,
        "x-correlation-id": newUuid || "",
        source_app: "Proposal_Landing_Page",
    })
    const response = await fetch(`${STUDENT_INFO}`, {
        method: "GET",
        headers: headers,
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`)
    }
    const data: T = await response.json()
    return data
}
