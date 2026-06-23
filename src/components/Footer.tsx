import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border pt-16 pb-8 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logos/PITCH BLACK CYBER LOGOoutline 2023.png" 
                alt="Pitch Black Cyber" 
                width={200} 
                height={50} 
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-text-secondary text-base leading-relaxed max-w-sm mb-6">
              Approachable, expert cybersecurity and compliance consulting for local SMBs, healthcare clinics, and defense contractors.
            </p>
            <div className="flex flex-col gap-1 text-sm text-text-muted">
              <p>Based in Logan, Utah</p>
              <p>Serving Cache Valley and beyond</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-text-primary font-bold mb-4 tracking-wide">Enterprise & SMB</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><Link href="/services#cmmc" className="hover:text-cyan transition-colors">CMMC & NIST Compliance</Link></li>
              <li><Link href="/services#pentest" className="hover:text-cyan transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services#vciso" className="hover:text-cyan transition-colors">vCISO Services</Link></li>
              <li><Link href="/services#assessments" className="hover:text-cyan transition-colors">Security Assessments</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-text-primary font-bold mb-4 tracking-wide">Community</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><Link href="/family-safety" className="hover:text-cyan transition-colors">Family Safety Workshop</Link></li>
              <li><Link href="/about" className="hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-cyan transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Pitch Black Cyber. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
