import closeButton from '../../../public/icons/close-icon.svg'
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
    const unSubscribeContent = (
        <div className="md:w-[800px] md:h-[auto] mx-auto w-full h-full px-[40px] py-[32px] relative">
            <button
            className="absolute md:top-[16px] md:right-[16px] top-[10px] right-[10px]"
            onClick={() => closeDialog()}>
                <Image 
                src={closeButton}
                alt="close" 
                className="w-[20px] h-[20px]" 
                width={20} 
                height={20}
                />
            </button>
            <div className="text-center flex flex-col gap-4">
                <h6 className="font-farro font-bold heading6 text-grey-300 mb-[12px]">
                    Stop Receiving Future Proposals
                </h6>
                <p className="font-inter text-small text-grey-300 mb-[24px]">
                    We understand that you may not be interested in receiving further proposals. If you prefer to stop receiving any future communications from us, please confirm your decision below.
                </p>
            </div>
            <div className="flex content-start">
                <p className="text-left font-inter font-semibold text-small mb-[6px]">
                    Reasons for Stopping Further Proposals:
                </p>
                <div className='flex gap-[8px]'>
                    <div className="flex justify-start">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            Already accepted an offer from another institution
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            No longer interested in studying abroad
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            Receiving too many proposals
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            Not interested in the courses offered
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            Personal circumstances have changed
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            Plans to pursue a different career path
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            I don't need assistance anymore
                        </label>
                    </div>
                    <div className="flex justify-start m-2 mb-6">
                        <input
                            id="Checkbox type 1"
                            type="checkbox"
                            className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-[12px]"
                        />
                        <label htmlFor="disabled" className="para font-inter">
                            Other reasons (provide option for input)
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex gap-[16px]">
                <button
                    className="btn text-primary-400 bg-white-50 border border-primary-400 md:w-[242px] h-[40px] hover:text-white-50 hover:bg-primary-400 "
                    onClick={() => closeDialog()}>
                    Back
                </button>
                <button
                    className="btn border bg-primary-400 text-white-50 md:w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400"
                    onClick={() => closeDialog()}>
                    Unsubscribe
                </button>
            </div>
        </div>
    )
    const unSubscribeContentResponse = (
        <div className="md:w-[800px] md:h-[auto] mx-auto w-full h-full px-[40px] py-[32px] relative">
            <button
            className="absolute md:top-[16px] md:right-[16px] top-[10px] right-[10px]"
            onClick={() => closeDialog()}>
                <Image 
                src={closeButton}
                alt="close" 
                className="w-[20px] h-[20px]" 
                width={20} 
                height={20}
                />
            </button>
            <div className="text-center flex flex-col gap-[12px] content-center">
                <h1 className="font-farro font-bold heading6 text-grey-300">
                    Thank you for your feedback
                </h1>
                <p className="font-inter text-small text-grey-300">
                    We appreciate you taking the time to share your thoughts with us.
                </p>
                <p className="font-farro text-x-small">
                    Thank you for your feedback! Your input is valuable and helps us improve our offerings. If you decide to reconsider and accept the proposal within the validity period, we would be happy to assist you. If you have any further questions or need assistance in the future, please don't hesitate to reach out. We wish you all the best!"
                </p>
                <button
                onClick={() => closeDialog()}
                className="underline text-primary-400 font-medium hover:no-underline cursor-pointer py-[10px]">Close</button>
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
