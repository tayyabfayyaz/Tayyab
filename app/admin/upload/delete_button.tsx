'use client'

import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

interface DeleteButtonProps {
  projectId: string
  action: (formData: FormData) => Promise<void>
}

export default function DeleteButton({ projectId, action }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <form action={action}>
      <input type="hidden" name="id" value={projectId} />
      <Button
        type="submit"
        variant="ghost"
        size="sm"
        disabled={isDeleting}
        className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors"
        onClick={(e) => {
          if (!confirm('Are you sure you want to delete this project?')) {
            e.preventDefault()
          } else {
            setIsDeleting(true)
          }
        }}
      >
        {isDeleting ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <Trash2 className="h-4 w-4" />
        )}
      </Button>
    </form>
  )
}
