import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
      {/* Castro Capital - Large Card */}
      <div className="col-span-2 relative group">
        <Link href="/projects/castro-capital">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image 
              src="/projects/castro-capital.jpg" 
              alt="Castro Capital" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 p-4 w-full bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl">Castro Capital</h3>
              <span className="text-sm text-white/80">ART DIRECTION</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Mailchimp */}
      <div className="relative group">
        <Link href="/projects/mailchimp">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image 
              src="/projects/mailchimp.jpg" 
              alt="Mailchimp" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 p-4 w-full bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl">Mailchimp</h3>
              <span className="text-sm text-white/80">LOGO DESIGN</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Add more project cards following the same pattern */}
    </div>
  )
} 