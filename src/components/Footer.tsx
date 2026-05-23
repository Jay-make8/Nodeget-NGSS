import { HardDriveDownload } from 'lucide-react'


export function Footer({ text, repo }: { text?: string, repo?: string, dist_page?: string }) {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-end gap-3 text-xs text-muted-foreground">
        <a href={repo || 'https://github.com/0xUnixIO/NGSS'} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors mr-auto">
          {text || 'Powered by NodeGet'}
        </a>
        <a href="download.html" target="_blank" rel="noreferrer" className="ml-2 flex items-center hover:text-primary transition-colors">
          <HardDriveDownload className='inline-block w-3 mr-1' />
          提取当前主题
        </a>
      </div>
    </footer>
  )
}
