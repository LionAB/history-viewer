"use client"
import { Mail } from "lucide-react"
import { zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { sendEmail } from "@/utils/send-email";
import ShimmerButton from "../magicui/shimmer-button";
export const formSchema = z.object({
  from_firstname: z.string().min(2, {
    message: "Prenom doit avoir au moins 2 lettres.",
    }),
    from_lastname: z.string().min(2, {
    message: "Nom doit avoir au moins 2 lettres.",
    }),
    from_email: z.string().email({
        message: "Email invalide.",
    }),
    from_number:z.string().optional(),
    message: z.string({
        required_error: "Message ne peut pas être vide.",
    }),
    projet: z.string().optional(),
})

export default function ContactForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        from_firstname: "",
        from_lastname: "",
        from_email: "",
        from_number: "",
        message:"",
        projet:"HistoriMap"
      },
    })
    const onSubmit =(values: z.infer<typeof formSchema>)=> {
        sendEmail(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="flex flex-col space-y-4 items-center">
           <div className="flex flex-row gap-6 min-h-[150px] flex-wrap">
          <FormField
            control={form.control}
            name="from_firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input size={30} placeholder="prenom" {...field} />
                </FormControl>
                <FormDescription>
                  Entrez votre prénom.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="from_lastname"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input size={30} placeholder="nom" {...field} />
              </FormControl>
              <FormDescription>
                Entrez votre nom.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
          </div>
          <div className="flex flex-row gap-6 min-h-[150px] flex-wrap">
          <FormField
          control={form.control}
          name="from_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse mail</FormLabel>
              <FormControl>
                <Input size={30} placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                Entrez votre email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField
          control={form.control}
          name="from_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input size={30} placeholder="07..." {...field} />
              </FormControl>
              <FormDescription>
                Entrez votre numéro.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
          </div>
          </div>

          <div className="w-full mb-9 ">

         
          <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Entrez votre message" {...field} />
              </FormControl>
              <FormDescription>
                Ce message me sera transmis.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
           </div>
           
    <ShimmerButton type="submit" className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
         ✉️  Envoyer 
        </span>
      </ShimmerButton>
        </form>
      </Form>
    )
}

