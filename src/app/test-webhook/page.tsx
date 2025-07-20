"use client"

import { useState } from 'react'

export default function TestWebhook() {
  const [message, setMessage] = useState('')
  const [logs, setLogs] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const addLog = (log: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${log}`])
  }

  const testWebhook = async () => {
    if (!message.trim()) return
    
    setLoading(true)
    addLog(`Testing webhook with message: "${message}"`)
    
    try {
      // Test 1: Basic request
      addLog('Sending basic request...')
      const response1 = await fetch('https://mostafakhalifa1212.app.n8n.cloud/webhook-test/b7b63b95-aa55-48e1-b9b2-83d472f136b2', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          message: message,
          timestamp: new Date().toISOString(),
          sessionId: 'test-' + Date.now()
        }),
      })

      addLog(`Response 1 Status: ${response1.status}`)
      addLog(`Response 1 Headers: ${JSON.stringify(Object.fromEntries(response1.headers.entries()))}`)
      
      if (response1.ok) {
        const data1 = await response1.json()
        addLog(`Response 1 Data: ${JSON.stringify(data1, null, 2)}`)
      } else {
        const errorText = await response1.text()
        addLog(`Response 1 Error: ${errorText}`)
      }

      // Test 2: Simple JSON
      addLog('Sending simple JSON...')
      const response2 = await fetch('https://mostafakhalifa1212.app.n8n.cloud/webhook-test/b7b63b95-aa55-48e1-b9b2-83d472f136b2', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message }),
      })

      addLog(`Response 2 Status: ${response2.status}`)
      
      if (response2.ok) {
        const data2 = await response2.json()
        addLog(`Response 2 Data: ${JSON.stringify(data2, null, 2)}`)
      } else {
        const errorText = await response2.text()
        addLog(`Response 2 Error: ${errorText}`)
      }

      // Test 3: Form data
      addLog('Sending form data...')
      const formData = new FormData()
      formData.append('message', message)
      
      const response3 = await fetch('https://mostafakhalifa1212.app.n8n.cloud/webhook-test/b7b63b95-aa55-48e1-b9b2-83d472f136b2', {
        method: 'POST',
        body: formData,
      })

      addLog(`Response 3 Status: ${response3.status}`)
      
      if (response3.ok) {
        const data3 = await response3.json()
        addLog(`Response 3 Data: ${JSON.stringify(data3, null, 2)}`)
      } else {
        const errorText = await response3.text()
        addLog(`Response 3 Error: ${errorText}`)
      }

    } catch (error) {
      addLog(`Network Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const clearLogs = () => {
    setLogs([])
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Webhook Test Page</h1>
        
        <div className="bg-white/10 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Message</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter test message..."
              className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder-white/50"
            />
            <button
              onClick={testWebhook}
              disabled={loading || !message.trim()}
              className="px-6 py-2 bg-linear-to-r from-accent-blue to-accent-green rounded disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Webhook'}
            </button>
            <button
              onClick={clearLogs}
              className="px-6 py-2 bg-white/10 border border-white/20 rounded hover:bg-white/20"
            >
              Clear Logs
            </button>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Test Logs</h2>
          <div className="bg-black/50 rounded p-4 h-96 overflow-y-auto font-mono text-sm">
            {logs.length === 0 ? (
              <p className="text-white/50">No logs yet. Send a test message to see results.</p>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1">
                  <span className="text-green-400">{log}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting Tips</h2>
          <ul className="space-y-2 text-sm">
            <li>• Check if the webhook URL is correct and active in n8n</li>
            <li>• Ensure the webhook node is activated in your n8n workflow</li>
            <li>• Check n8n logs for any errors</li>
            <li>• Verify CORS settings in n8n if needed</li>
            <li>• Make sure your n8n workflow returns JSON with a &apos;reply&apos; field</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 