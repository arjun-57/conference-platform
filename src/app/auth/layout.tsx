import { conferenceConfig } from "@/config/conference";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 animate-in fade-in slide-in-from-left-10 duration-700">
          {children}
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
            <div className="max-w-xl space-y-8">
              <h2 className="text-4xl font-bold">{conferenceConfig.name}</h2>
              <p className="text-xl text-slate-400">
                Join our community of researchers and innovators. Create an account to submit your papers and stay updated with the latest conference news.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                   <p className="text-3xl font-bold text-primary">500+</p>
                   <p className="text-sm text-slate-500">Attendees</p>
                </div>
                <div className="space-y-2">
                   <p className="text-3xl font-bold text-primary">100+</p>
                   <p className="text-sm text-slate-500">Research Papers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--color-primary),transparent_50%)] opacity-20" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,var(--color-blue-500),transparent_50%)] opacity-10" />
        </div>
      </div>
    </div>
  );
}
