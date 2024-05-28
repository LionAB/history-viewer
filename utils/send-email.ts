import { formSchema } from "@/components/contact/ContactForm";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

type formSchema = z.infer<typeof formSchema>
export const sendEmail = async (object:formSchema) => {
    try {
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        if (!serviceID || !templateID || !userID) {
            throw new Error("Les identifiants EmailJS ne sont pas correctement configurés.");
        }

        await emailjs.send(serviceID, templateID, object, userID);

        toast({
            title: "Votre message a été envoyé avec succès",
            variant: "default",
            description: "Un email de réponse vous a également été envoyé."
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            toast({
                title: "Une erreur s'est produite lors de l'envoi du message",
                variant: "destructive",
                description: error.message
            });
        } else {
            toast({
                title: "Une erreur inconnue s'est produite",
                variant: "destructive"
            });
        }
    }
}