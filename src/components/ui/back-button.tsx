"use client"

import { useRouter } from "next/navigation"
import { Button } from "./button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <Button size="lg" variant="outline" onClick={() => router.back()}>
      <ArrowLeft className="mr-2 w-5 h-5" />
      Go Back
    </Button>
  )
} 