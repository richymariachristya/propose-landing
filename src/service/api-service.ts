import { API_END_POINTS } from "@/constants/end-points"

const STUDENT_INFO = `${process.env.NEXT_PUBLIC_API_END_POINT_DEV}${API_END_POINTS.GET_STUDENT_INFO}`

export const getStudentInfo = async <T>(payload: any): Promise<T> => {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY_DEV}`,
    })
    const response = await fetch(
        `${STUDENT_INFO}${payload.token}&campaign_id=${payload.campaign_id}`,
        {
            method: "GET",
            headers: headers,
        }
    )
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`)
    }
    const data: T = await response.json()
    return data
}
