import ContactFrom from "@/components/contact/ContactForm"
export default function Contact() {
    return(
        <div className="flex-col p-10 flex-grow ">
            <h1 className="border-b-2 border-b-gray-200 dark:border-b-gray-800 pb-3 mb-5 text-center text-2xl font-semibold">Me contacter</h1>
            <ContactFrom/>
        </div>
    )
}