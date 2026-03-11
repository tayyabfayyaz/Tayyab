'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function DebugConnection() {
  const [url, setUrl] = useState(process.env.NEXT_PUBLIC_SUPABASE_URL || '')
  const [key] = useState(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20) + '...' || '')
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  async function testConnection() {
    setLoading(true)
    setResult('Testing connection to: ' + url + '...')

    try {
      const response = await fetch(`${url}/rest/v1/projects?limit=1`, {
        headers: {
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setResult(`✅ Connection successful!\n\nURL: ${url}\nKey prefix: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 30)}...\n\nProjects found: ${data.length}`)
      } else {
        const error = await response.text()
        setResult(`❌ HTTP ${response.status}: ${error}`)
      }
    } catch (err) {
      setResult(`❌ Failed to connect:\n${err instanceof Error ? err.message : String(err)}\n\nCheck:\n1. Supabase URL is correct\n2. API key is valid\n3. Network connection`)
    }

    setLoading(false)
  }

  return (
    <Card className="mt-4 border-destructive">
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-4 text-destructive">🔴 Connection Debug</h3>
        
        <div className="space-y-4">
          <div>
            <Label>Supabase URL</Label>
            <Input 
              value={url} 
              onChange={(e) => setUrl(e.target.value)}
              className="font-mono text-sm"
            />
          </div>
          
          <div>
            <Label>Anon Key (preview)</Label>
            <Input 
              value={key} 
              readOnly
              className="font-mono text-sm"
            />
          </div>

          <Button onClick={testConnection} disabled={loading} className="w-full">
            {loading ? 'Testing...' : 'Test Connection'}
          </Button>

          {result && (
            <pre className="bg-muted p-4 rounded text-xs whitespace-pre-wrap font-mono max-h-96 overflow-auto">
              {result}
            </pre>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
