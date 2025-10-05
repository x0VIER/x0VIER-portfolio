import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Github, Mail, ExternalLink, Terminal, Server, Shield, Code2, Database } from 'lucide-react'
import './App.css'

function App() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/x0VIER/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(repo => !repo.fork)
        setRepos(filtered.slice(0, 6))
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const skills = [
    { icon: Terminal, name: 'PowerShell & Bash', color: 'text-blue-500' },
    { icon: Server, name: 'Windows Server', color: 'text-green-500' },
    { icon: Shield, name: 'Network Security', color: 'text-red-500' },
    { icon: Code2, name: 'Python Automation', color: 'text-yellow-500' },
    { icon: Database, name: 'Linux Administration', color: 'text-purple-500' },
    { icon: Server, name: 'Active Directory', color: 'text-indigo-500' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src="https://avatars.githubusercontent.com/u/112355900?v=4" 
            alt="x0VIER"
            className="w-32 h-32 rounded-full border-4 border-primary/20"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">V Vier</h1>
            <p className="text-xl text-muted-foreground mb-4">IT Help Desk Specialist & System Administrator</p>
            <p className="text-base text-muted-foreground max-w-2xl mb-6">
              Certified IT professional with hands-on experience solving technical issues, managing systems, 
              and automating workflows. Passionate about troubleshooting, infrastructure, and making technology work better.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <Button asChild>
                <a href="https://github.com/x0VIER" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:contact@x0vier.dev">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center gap-3 p-6">
                    <Icon className={`h-8 w-8 ${skill.color}`} />
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Help Desk Support</CardTitle>
              <CardDescription>First-line technical assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Troubleshoot hardware, software, and network issues</li>
                <li>• Provide remote and on-site technical support</li>
                <li>• Document solutions and maintain knowledge base</li>
                <li>• Manage tickets and prioritize user requests</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Administration</CardTitle>
              <CardDescription>Infrastructure management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Manage Windows and Linux server environments</li>
                <li>• Configure and maintain Active Directory</li>
                <li>• Implement security policies and monitoring</li>
                <li>• Automate routine tasks with scripts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Management</CardTitle>
              <CardDescription>Connectivity and security</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Configure routers, switches, and firewalls</li>
                <li>• Troubleshoot DNS, DHCP, and VPN issues</li>
                <li>• Monitor network performance and security</li>
                <li>• Implement network segmentation and policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Automation & Scripting</CardTitle>
              <CardDescription>Efficiency through code</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Build PowerShell tools for Windows administration</li>
                <li>• Write Python scripts for automation tasks</li>
                <li>• Create bash scripts for Linux management</li>
                <li>• Develop IT troubleshooting toolboxes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
          {loading ? (
            <div className="text-center text-muted-foreground">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <Card key={repo.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{repo.name.replace(/-/g, ' ')}</CardTitle>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {repo.description || 'A project by x0VIER'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {repo.language && (
                        <Badge variant="secondary">{repo.language}</Badge>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          ⭐ {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 max-w-5xl text-center text-sm text-muted-foreground border-t">
        <p>Built by x0VIER • Open to opportunities in IT Support & System Administration</p>
        <p className="mt-2">
          <a href="https://github.com/x0VIER" className="hover:text-foreground transition-colors">
            github.com/x0VIER
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
