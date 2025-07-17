import { z } from "zod"

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.enum(["under-10k", "10k-50k", "50k-100k", "100k+"]).optional(),
  timeline: z.enum(["asap", "1-3-months", "3-6-months", "6-months+"]).optional(),
  services: z.array(z.string()).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Multi-step intake form schema
export const intakeFormSchema = z.object({
  // Step 1: Basic Info
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  
  // Step 2: Project Details
  projectType: z.enum([
    "automation",
    "ai-integration",
    "workflow-optimization",
    "data-analysis",
    "custom-solution"
  ]),
  currentChallenges: z.array(z.string()).min(1, "Please select at least one challenge"),
  goals: z.string().min(20, "Please describe your goals in detail"),
  
  // Step 3: Budget & Timeline
  budget: z.enum(["under-10k", "10k-25k", "25k-50k", "50k-100k", "100k+"]),
  timeline: z.enum(["asap", "1-month", "2-3-months", "3-6-months", "6-months+"]),
  hasTeam: z.boolean(),
  teamSize: z.number().optional(),
  
  // Step 4: Technical Details
  currentTools: z.array(z.string()).optional(),
  technicalRequirements: z.string().optional(),
  integrations: z.array(z.string()).optional(),
  dataVolume: z.enum(["small", "medium", "large", "enterprise"]).optional(),
  
  // Step 5: Additional Info
  additionalNotes: z.string().optional(),
  hearAboutUs: z.string().optional(),
  marketingConsent: z.boolean(),
})

export type IntakeFormData = z.infer<typeof intakeFormSchema>

// Case study filter schema
export const caseStudyFilterSchema = z.object({
  industry: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

export type CaseStudyFilter = z.infer<typeof caseStudyFilterSchema>

// FAQ search schema
export const faqSearchSchema = z.object({
  query: z.string().min(1, "Search query cannot be empty"),
  category: z.string().optional(),
})

export type FaqSearch = z.infer<typeof faqSearchSchema>

// Validation helpers
export const validateEmail = (email: string): boolean => {
  return newsletterSchema.safeParse({ email }).success
}

export const validateContactForm = (data: ContactFormData) => {
  return contactFormSchema.safeParse(data)
}

export const validateIntakeForm = (data: IntakeFormData) => {
  return intakeFormSchema.safeParse(data)
} 