import idpLogo from "@/../../public/images/idp-logo.61153ab6.svg"
import Image from "next/image"
import { useEffect, useState } from "react"

interface InstitutionLogoProp {
    institutionLogo: string
    institutionName: string
    institutionSite: string
}
interface OfferCountdown extends InstitutionLogoProp {
    expirydate: string
}

const OfferTimelineComponent = ({
    institutionLogo,
    institutionName,
    institutionSite,
    expirydate,
}: OfferCountdown) => {
    const [timeRemaining, setTimeRemaining] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const expirationDate = new Date(expirydate.toString()).getTime()

        const updateCountdown = () => {
            const currentTime = new Date().getTime()
            const difference = expirationDate - currentTime

            // If the time difference is greater than 0, continue calculating
            if (difference > 0) {
                // Calculate hours, minutes, and seconds
                const hours = Math.floor(difference / (1000 * 60 * 60))
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                )
                const seconds = Math.floor((difference % (1000 * 60)) / 1000)

                // Update the state with the remaining time
                setTimeRemaining({ hours, minutes, seconds })
            } else {
                // Time has expired, set the remaining time to 0
                setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 })
            }
        }

        // Update the countdown every second
        const interval = setInterval(updateCountdown, 1000)

        // Cleanup the interval on component unmount
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className="md:h-[40px] bg-secondary-500 flex justify-center md:py-[10px] py-[8px] px-[16px]">
                <p className="text-white-50 text-small h-auto text-center">
                    This proposal is valid until{" "}
                    {`${timeRemaining.hours.toString().padStart(2, "0")}`}h{" "}
                    {`${timeRemaining.minutes.toString().padStart(2, "0")}`}m{" "}
                    {`${timeRemaining.seconds.toString().padStart(2, "0")}`}s.
                    We encourage you to take advantage of this offer before the
                    deadline to ensure your spot in the program.
                </p>
            </div>
            <div className="h-[40px] bg-white flex justify-center">
                <div className="flex flex-shrink-0 items-center gap-[13px]">
                    <a href="https://www.idp.com/">
                        <Image
                            src={idpLogo}
                            alt="IDP Education"
                            className="block h-auto w-[74px]"
                        />
                        <span className="sr-only">IDP Logo</span>
                    </a>
                    <span className="border-r border-darkGrey border-solid h-[30px]"></span>
                    <a href={institutionSite}>
                        <Image
                            src={institutionLogo}
                            alt={institutionName}
                            width={100}
                            height={40}
                            className="block h-auto w-[100px]"
                        />
                        <span className="sr-only">{institutionName}</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default OfferTimelineComponent
