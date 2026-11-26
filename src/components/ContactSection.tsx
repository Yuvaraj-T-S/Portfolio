import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function ContactSection() {
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const hasEmail = Boolean(PORTFOLIO_DATA.contact.email.trim());
  const hasLinkedIn = Boolean(PORTFOLIO_DATA.contact.linkedinUrl.trim());

  const composedText = [
    subject ? `Subject: ${subject}` : '',
    senderName ? `From: ${senderName}` : '',
    message,
  ]
    .filter(Boolean)
    .join('\n\n');

  const handleAction = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (hasEmail) {
      const mailto = `mailto:${encodeURIComponent(PORTFOLIO_DATA.contact.email)}?subject=${encodeURIComponent(
        subject || `Hello from ${senderName || 'Portfolio Visitor'}`
      )}&body=${encodeURIComponent(composedText)}`;
      window.location.href = mailto;
      return;
    }

    try {
      await navigator.clipboard.writeText(composedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[#E5E3DC] bg-[#FAF9F6] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Direct public contact paths */}
          <div className="lg:col-span-5">
            <h2
              id="contact-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl"
            >
              Contact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475569]">
              I welcome conversations with recruiters, collaborators, and fellow learners interested in software development, Artificial Intelligence, and Machine Learning.
            </p>

            <dl className="mt-8 space-y-5 border-t border-[#E5E3DC] pt-6">
              <div>
                <dt className="text-xs font-medium tracking-wide text-[#57606F]">
                  GitHub Profile
                </dt>
                <dd className="mt-1">
                  <a
                    href={PORTFOLIO_DATA.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Yuvaraj T S GitHub profile (opens in a new tab)"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B365D] hover:text-[#142947] underline-offset-4 hover:underline"
                  >
                    <span>github.com/{PORTFOLIO_DATA.contact.githubHandle}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium tracking-wide text-[#57606F]">
                  Email
                </dt>
                <dd className="mt-1 flex flex-wrap items-center gap-3 text-sm text-[#475569]">
                  {hasEmail ? (
                    <>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-[#1B365D] hover:text-[#142947] underline-offset-4 hover:underline"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span>{PORTFOLIO_DATA.contact.email}</span>
                      </a>
                      <button
                        type="button"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2500);
                          } catch {
                            // Ignore clipboard error if denied
                          }
                        }}
                        aria-label="Copy email address to clipboard"
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#475569] hover:bg-[#E5E3DC]/60 hover:text-[#111827] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#1B365D]" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <span>
                      Not yet published — add your preferred email in{' '}
                      <code className="font-mono text-xs text-[#111827]">src/data/portfolio.ts</code>.
                    </span>
                  )}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium tracking-wide text-[#57606F]">
                  LinkedIn
                </dt>
                <dd className="mt-1 text-sm text-[#475569]">
                  {hasLinkedIn ? (
                    <a
                      href={PORTFOLIO_DATA.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Yuvaraj T S LinkedIn profile (opens in a new tab)"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B365D] hover:text-[#142947] underline-offset-4 hover:underline"
                    >
                      <span>linkedin.com/in/yuvaraj-t-s</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span>
                      Optional — add your LinkedIn URL in{' '}
                      <code className="font-mono text-xs text-[#111827]">src/data/portfolio.ts</code>.
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right column: Clean message drafter */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleAction}
              className="rounded-2xl border border-[#E5E3DC] bg-white p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-[#111827]">
                {hasEmail ? 'Send a Message' : 'Draft an Introduction Note'}
              </h3>
              <p className="mt-1.5 text-sm text-[#57606F]">
                {hasEmail
                  ? 'Compose your note below to open it in your default email application.'
                  : 'Write your message below to copy it to your clipboard, or connect directly via LinkedIn or GitHub.'}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#334155]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Chen"
                    className="mt-1.5 w-full rounded-xl border border-[#CBD5E1] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#94A3B8] focus:border-[#1B365D] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-[#334155]"
                  >
                    Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Collaboration or opportunity"
                    className="mt-1.5 w-full rounded-xl border border-[#CBD5E1] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#94A3B8] focus:border-[#1B365D] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#334155]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Yuvaraj, I noticed your projects on GitHub and would like to connect..."
                  className="mt-1.5 w-full rounded-xl border border-[#CBD5E1] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#94A3B8] focus:border-[#1B365D] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-[#1B365D] px-5 py-3 text-sm font-semibold text-white hover:bg-[#142947] transition-colors min-h-[44px]"
                >
                  {hasEmail ? (
                    <>
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </>
                  ) : copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      <span>Copy Note</span>
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center gap-4">
                  {hasLinkedIn && (
                    <a
                      href={PORTFOLIO_DATA.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#1B365D] underline-offset-4 hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                  <a
                    href={PORTFOLIO_DATA.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#1B365D] underline-offset-4 hover:underline"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
