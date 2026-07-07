import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { profile } from "@/data/profile";

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

/**
 * Serverless email delivery — messages land directly in the inbox.
 * The +portfolio alias keeps the FormSubmit form record separate while
 * delivering to the same mailbox. The custom backend (VITE_API_URL)
 * takes priority when configured.
 */
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${"namrp.18+portfolio@gmail.com"}`;

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Location", value: profile.location },
];

const inputStyles =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent/60 focus:outline-none";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = API_URL
        ? await fetch(`${API_URL}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          })
        : await fetch(FORMSUBMIT_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              _subject: `Portfolio contact from ${formData.name}`,
              _template: "table",
              _captcha: "false",
              _autoresponse:
                "Hi — thanks for reaching out! I've received your message and will get back to you soon. — Namratha R",
            }),
          });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        // FormSubmit returns 200 with success:"false" until the form is activated
        if (data && String(data.success) === "false") {
          toast.error("The form isn't active yet — opening your email app instead.");
          openMailDraft();
        } else {
          toast.success("Message sent — I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        }
      } else {
        const data = await response.json().catch(() => null);
        toast.error(data?.error ?? "Failed to send — opening your email app instead.");
        openMailDraft();
      }
    } catch {
      toast.error("Failed to send — opening your email app instead.");
      openMailDraft();
    } finally {
      setIsSending(false);
    }
  };

  const openMailDraft = () => {
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio contact")}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="bg-halo absolute inset-x-0 top-0 h-96" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to software engineering roles, internships, research collaborations, and interesting problems."
        />

        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-5">
          {/* Info panel */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="glass shadow-premium flex h-full flex-col rounded-3xl p-8">
              <h3 className="text-lg font-semibold text-foreground">Reach me directly</h3>
              <ul className="mt-6 space-y-5">
                {contactInfo.map((info) => (
                  <li key={info.label}>
                    {info.href ? (
                      <a href={info.href} className="group flex items-center gap-4">
                        <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:border-accent/40">
                          <info.icon className="h-4 w-4 text-accent" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">{info.label}</span>
                          <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent-soft">
                            {info.value}
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl">
                          <info.icon className="h-4 w-4 text-accent" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">{info.label}</span>
                          <span className="text-sm font-medium text-foreground">{info.value}</span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-white/[0.07] pt-6">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</p>
                <div className="flex gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-muted-foreground transition-all duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-muted-foreground transition-all duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    <Github className="h-5 w-5" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass shadow-premium space-y-5 rounded-3xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputStyles}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputStyles}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell me about the role, project, or idea…"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="glow-accent-sm flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" aria-hidden />
                {isSending ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
