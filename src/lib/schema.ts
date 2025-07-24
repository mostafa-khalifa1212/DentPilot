import { z } from "zod"

// Booking/contact form schema (matches BookingStepperForm)
export const bookingFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  clinicName: z.string().min(1, 'Clinic name is required'),
  email: z.string().email('Please enter a valid email address'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
})

export type BookingFormData = z.infer<typeof bookingFormSchema> 