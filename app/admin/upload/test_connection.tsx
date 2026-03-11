'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TestConnection() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  async function testInsert() {
    setLoading(true)
    setResult('Testing connection...')

    try {
      const { data, error } = await supabase
        .from('projects')
        .insert({
          title: 'Test Project',
          description: 'This is a test',
          image_url: 'https://via.placeholder.com/400x300',
          tags: ['test'],
        })
        .select()
        .single()

      if (error) {
        setResult(`❌ Error: ${error.message}\nDetails: ${JSON.stringify(error)}`)
      } else {
        setResult(`✅ Success! Inserted: ${JSON.stringify(data, null, 2)}`)
        
        // Delete the test record
        await supabase.from('projects').delete().eq('id', data.id)
        setResult(prev => prev + '\n\n(Test record deleted)')
      }
    } catch (err) {
      setResult(`❌ Exception: ${err instanceof Error ? err.message : String(err)}`)
    }

    setLoading(false)
  }

  async function testSelect() {
    setLoading(true)
    setResult('Testing SELECT...')

    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .limit(1)

      if (error) {
        setResult(`❌ Error: ${error.message}\nDetails: ${JSON.stringify(error)}`)
      } else {
        setResult(`✅ Success! Found ${data?.length || 0} projects\n${JSON.stringify(data, null, 2)}`)
      }
    } catch (err) {
      setResult(`❌ Exception: ${err instanceof Error ? err.message : String(err)}`)
    }

    setLoading(false)
  }

  return (
    <Card className="mt-4">
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-4">🔧 Debug Tools</h3>
        <div className="flex gap-2 mb-4">
          <Button onClick={testInsert} disabled={loading} variant="outline">
            Test INSERT
          </Button>
          <Button onClick={testSelect} disabled={loading} variant="outline">
            Test SELECT
          </Button>
        </div>
        {result && (
          <pre className="bg-muted p-4 rounded text-xs whitespace-pre-wrap font-mono">
            {result}
          </pre>
        )}
      </CardContent>
    </Card>
  )
}
