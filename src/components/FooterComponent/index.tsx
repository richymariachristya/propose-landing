import { useEffect, useState } from "react"
import closeButton from "../../../public/icons/close-icon.svg"
import Image from "next/image"
interface FooterResponse {
    additionalResources: string
    contactInformation: string
}
interface FooterProps {
    footerResponse: FooterResponse
    openDialog: any
    closeDialog: any
}
const FooterComponent = ({
    footerResponse,
    openDialog,
    closeDialog,
}: FooterProps) => {
    const [reasons, setReasons] = useState([{ label: "" }])
    useEffect(() => {
        setReasons([
            { label: "Already accepted an offer from another institution" },
            { label: "No longer interested in studying abroad" },
            { label: "Receiving too many proposals" },
            { label: "Not interested in the courses offered" },
            { label: "Personal circumstances have changed" },
            { label: "Plans to pursue a different career path" },
            { label: "I don't need assistance anymore" },
            { label: "Other reasons (provide option for input)" },
        ])
    }, [])
    const submit = () => {
        closeDialog()
    }
    const unSubscribeContent = (
        <div className="md:w-[800px] md:h-[auto] mx-auto w-full h-full px-[40px] py-[32px] relative">
            <button
                className="absolute md:top-[16px] md:right-[16px] top-[10px] right-[10px] p-[5px] cursor-pointer"
                onClick={() => closeDialog()}>
                <Image
                    src={closeButton}
                    alt="close"
                    className="w-[10px] h-[10px]"
                    width={10}
                    height={10}
                />
            </button>
            <div className="text-center flex flex-col">
                <h6 className="font-farro font-bold text-heading6 text-grey-300 mb-[12px]">
                    Stop Receiving Future Proposals
                </h6>
                <p className="font-inter text-small text-grey-300 mb-[24px] font-normal px-[20px]">
                    We understand that you may not be interested in receiving
                    further proposals. If you prefer to stop receiving any
                    future communications from us, please confirm your decision
                    below.
                </p>
            </div>
            <div className="flex content-start flex-col">
                <p className="text-left font-inter font-semibold text-small">
                    Reasons for Stopping Further Proposals:
                </p>
                <div className="flex flex-col gap-[6px] mt-[24px]">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex justify-start">
                            <input
                                id={`checkbox-${index}`}
                                type="checkbox"
                                className="w-[16px] h-[16px] text-blue-600 rounded-2xl mr-[12px] cursor-pointer"
                            />
                            <label
                                htmlFor={`checkbox-${index}`}
                                className="font-inter font-normal text-grey-300 text-small">
                                {reason.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-end mt-[16px]">
                <button
                    className="btn border bg-primary-400 text-white-50 w-auto h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400 cursor-pointer"
                    onClick={() => submit()}>
                    Submit
                </button>
            </div>
        </div>
    )
    const unSubscribeContentResponse = (
        <div className="md:w-[800px] md:h-[auto] mx-auto w-full h-full px-[40px] py-[32px] relative">
            <button
                className="absolute md:top-[16px] md:right-[16px] top-[10px] right-[10px] p-[5px] cursor-pointer"
                onClick={() => closeDialog()}>
                <Image
                    src={closeButton}
                    alt="close"
                    className="w-[10px] h-[10px]"
                    width={10}
                    height={10}
                />
            </button>
            <div className="text-center flex flex-col">
                <h6 className="font-farro font-bold text-heading6 text-grey-300 mb-[12px]">
                    Thank you for your feedback
                </h6>
                <p className="font-inter text-small text-grey-300 mb-[24px] font-normal px-[20px]">
                    We appreciate you taking the time to share your thoughts
                    with us.
                </p>
            </div>
            <div className="flex content-start flex-col">
                <p className="text-left font-inter font-semibold text-x-small">
                    Thank you for your feedback! Your input is valuable and
                    helps us improve our offerings. If you decide to reconsider
                    and accept the proposal within the validity period, we would
                    be happy to assist you. If you have any further questions or
                    need assistance in the future, please don't hesitate to
                    reach out. We wish you all the best!"
                </p>
                <button
                    onClick={() => closeDialog()}
                    className="underline text-primary-400 font-medium hover:no-underline cursor-pointer py-[10px]">
                    Close
                </button>
            </div>
        </div>
    )

    return (
        <footer className="container rounded-lg px-[16px] md:px-[0px] mx-auto">
            <div className="flex flex-col items-center justify-between p-[16px] bg-neutral-50 rounded-lg">
                <p className="text-grey-300 text-small font-inter font-normal">
                    Don’t want to receive any offers in future?
                    <a
                        className="underline text-primary-400 hover:no-underline cursor-pointer"
                        onClick={() => openDialog(unSubscribeContent)}>
                        {" "}
                        Stop sending Proposals
                    </a>
                </p>
            </div>
        </footer>
    )
}
export default FooterComponent
