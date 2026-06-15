import * as React from "react";

interface SubmissionConfirmProps {
  authorName: string;
  paperTitle: string;
  submissionId: string;
  track: string;
}

export const SubmissionConfirmEmail: React.FC<Readonly<SubmissionConfirmProps>> = ({
  authorName,
  paperTitle,
  submissionId,
  track,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
    <h1>Submission Confirmation</h1>
    <p>Dear {authorName},</p>
    <p>Thank you for submitting your research paper to our conference.</p>
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', margin: '20px 0' }}>
      <p><strong>Title:</strong> {paperTitle}</p>
      <p><strong>Track:</strong> {track}</p>
      <p><strong>Submission ID:</strong> {submissionId}</p>
    </div>
    <p>Your paper is now in the review queue. You can track the status through your dashboard.</p>
    <p>Best regards,<br />The Conference Committee</p>
  </div>
);
