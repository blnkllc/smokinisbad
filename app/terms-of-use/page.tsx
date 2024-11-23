'use client'

export default function TermsOfUse() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black px-4 py-5">
      <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
      <div className="max-w-4xl text-justify">
        <p className="mb-4"><strong>Effective Date:</strong> November 23, 2024</p>
        <p className="mb-4">
          Welcome to SmokingIsBad! By using SmokingIsBad, you agree to these Terms of Use. Please read them carefully.
        </p>
        <h2 className="text-2xl font-bold mt-6">1. Use of the App</h2>
        <p className="mb-4">
          <strong>Purpose:</strong> SmokingIsBad is designed to help users track and reduce their cigarette consumption as part of their journey toward quitting smoking.
        </p>
        <p className="mb-4">
          <strong>Eligibility:</strong> You must be at least 17 years old to use this app.
        </p>
        <h2 className="text-2xl font-bold mt-6">2. Local Data Storage</h2>
        <p className="mb-4">
          <strong>No Cloud Backup:</strong> SmokingIsBad stores all data locally on your iOS device. If you delete the app or lose access to your device, the data will be unrecoverable.
        </p>
        <p className="mb-4">
          <strong>User Responsibility:</strong> You are responsible for safeguarding your device and the data stored within SmokingIsBad.
        </p>
        <h2 className="text-2xl font-bold mt-6">3. Disclaimer</h2>
        <p className="mb-4">
          <strong>Health and Wellness:</strong> SmokingIsBad is a tool to assist you in your efforts to quit smoking. It is not a substitute for professional medical advice or treatment. Please consult a healthcare professional for guidance.
        </p>
        <p className="mb-4">
          <strong>No Guarantees:</strong> While we strive to provide helpful tools, we do not guarantee specific outcomes, such as successfully quitting smoking.
        </p>
        <h2 className="text-2xl font-bold mt-6">4. User Conduct</h2>
        <p className="mb-4">
          You agree to use SmokingIsBad in compliance with all applicable laws and not to use it for any illegal or unauthorized purposes.
        </p>
        <h2 className="text-2xl font-bold mt-6">5. Intellectual Property</h2>
        <p className="mb-4">
          All content within SmokingIsBad, including but not limited to text, graphics, and design, is owned by BLNK LLC or licensed to us and is protected by copyright laws.
        </p>
        <h2 className="text-2xl font-bold mt-6">6. Updates and Changes</h2>
        <p className="mb-4">
          We may update SmokingIsBad or these Terms of Use at any time. Continued use of the app after changes indicates your acceptance of the revised Terms.
        </p>
        <h2 className="text-2xl font-bold mt-6">7. Limitation of Liability</h2>
        <p className="mb-4">
          To the extent permitted by law, BLNK LLC is not liable for any damages or losses arising from your use of SmokingIsBad, including data loss or device issues.
        </p>
        <h2 className="text-2xl font-bold mt-6">8. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or restrict access to SmokingIsBad if you violate these Terms of Use.
        </p>
        <p className="mb-4">
          If you have any questions or need assistance, please contact us at <strong>support@blnk.llc</strong>.
        </p>
      </div>
    </div>
  );
}
