import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white uppercase">
              CHARITHA SREE<span className="text-brand">.</span>
            </a>
            <p className="text-sm text-neutral-500 max-w-xs text-center md:text-left">
              Software Engineer | S.J.C. Institute of Technology
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <div className="flex items-center gap-6">
              {[
                { icon: <Github size={20} />, href: 'https://github.com' },
                { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
                { icon: <Mail size={20} />, href: 'mailto:daditotacharitha@gmail.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-3 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-neutral-600 tracking-wider">
              © {currentYear} CHARITHA PORTFOLIO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
