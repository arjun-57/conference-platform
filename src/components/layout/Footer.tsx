import Link from "next/link";
import { conferenceConfig } from "@/config/conference";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-10">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">{conferenceConfig.name}</h3>
          <p className="text-sm text-muted-foreground">
            {conferenceConfig.description}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-sm hover:underline">About Us</Link>
            <Link href="/cfp" className="text-sm hover:underline">Call for Papers</Link>
            <Link href="/speakers" className="text-sm hover:underline">Speakers</Link>
            <Link href="/venue" className="text-sm hover:underline">Venue</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Important Dates</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Submission Deadline:</span>
              <span className="font-medium">{new Date(conferenceConfig.dates.submissionDeadline).toLocaleDateString()}</span>
            </li>
            <li className="flex justify-between">
              <span>Notification:</span>
              <span className="font-medium">{conferenceConfig.dates.reviewNotification}</span>
            </li>
            <li className="flex justify-between">
              <span>Conference:</span>
              <span className="font-medium">{conferenceConfig.dates.conference}</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <div className="space-y-2 text-sm">
            <p>{conferenceConfig.location}</p>
            <p>Email: <a href={`mailto:${conferenceConfig.contact.email}`} className="hover:underline">{conferenceConfig.contact.email}</a></p>
            <p>Twitter: {conferenceConfig.contact.twitter}</p>
          </div>
        </div>
      </div>
      <div className="container mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {conferenceConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
