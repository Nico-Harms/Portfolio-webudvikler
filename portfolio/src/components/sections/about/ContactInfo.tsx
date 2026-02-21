import { Phone, Mail, Linkedin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <h4 className="text-3xl max-lg:text-xl font-bold uppercase tracking-tight">
        Lad os tale<span className="text-golden">.</span>
      </h4>
      <p className="text-gray-500 dark:text-gray-400 text-lg max-lg:text-base leading-relaxed">
        Har jeg fanget din interesse? Tøv ikke med at kontakte mig.
      </p>

      <div className="flex flex-col gap-4 mt-2">
        <a
          className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-golden/50 hover:bg-golden/5 transition-all duration-300 group"
          href="mailto:nicolai.harms@gmail.com"
        >
          <div className="w-10 h-10 rounded-lg bg-golden/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-golden" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 block mb-0.5">
              Email
            </span>
            <span className="text-lg max-lg:text-base group-hover:text-golden transition-colors duration-300">
              nicolai.harms@gmail.com
            </span>
          </div>
        </a>

        <a
          className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-golden/50 hover:bg-golden/5 transition-all duration-300 group"
          href="tel:+4561720311"
        >
          <div className="w-10 h-10 rounded-lg bg-golden/10 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-golden" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 block mb-0.5">
              Telefon
            </span>
            <span className="text-lg max-lg:text-base group-hover:text-golden transition-colors duration-300">
              +45 61 72 03 11
            </span>
          </div>
        </a>

        <a
          className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-golden/50 hover:bg-golden/5 transition-all duration-300 group"
          href="Https://www.linkedin.com/in/nicolai-harms-0847551b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 rounded-lg bg-golden/10 flex items-center justify-center shrink-0">
            <Linkedin className="w-5 h-5 text-golden" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 block mb-0.5">
              LinkedIn
            </span>
            <span className="text-lg max-lg:text-base group-hover:text-golden transition-colors duration-300">
              linkedin.com/in/nicolaiharms
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
