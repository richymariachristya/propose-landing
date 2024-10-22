import React from "react"
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
        <div className="w-[450px] h-[auto] mx-auto">
            <div className="text-center flex flex-col gap-4">
                <h1 className="font-farro font-bold heading1">
                    We are sorry to hear that
                </h1>
                <h6 className="font-farro italic para">
                    Dear Student, We understand that you may not be interested
                    in receiving further proposals. If you prefer to stop
                    receiving any future communications from us, please confirm
                    your decision below
                </h6>
                <p className="mt-6 para-lg">
                    Need to choose any one Yes, please unsubscribe me from all
                    future proposals No, I would like to continue receiving
                    proposals
                </p>
                <p className="text-center">
                    Enabling students to choose applicable reason for their
                    rejection of proposal.
                </p>
            </div>
            <div>
                {/* checkbox  */}
                <div className="flex justify-start m-2 mb-6">
                    <input
                        id="Checkbox type 1"
                        type="checkbox"
                        className="w-[24px] h-[24px] text-blue-600 rounded-2xl mr-4"
                    />
                    <label htmlFor="disabled" className="para font-inter">
                        Already accepted an offer from another institution
                    </label>
                </div>
            </div>
            <div className="my-4 w-full flex justify-center mt-[100px]">
                <button
                    className="btn border bg-primary-400 text-white-50 w-[242px] h-[40px] hover:text-primary-400 hover:bg-white-50 hover:border-primary-400"
                    onClick={() => closeDialog()}>
                    Submit
                </button>
            </div>
        </div>
    )
    return (
        <footer className="container rounded-lg px-[16px]">
            <div className="flex flex-col items-center justify-between p-[16px] bg-neutral-50">
                <p className="text-grey-300 small font-inter font-normal">
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
