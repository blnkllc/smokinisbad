/* eslint-disable react/no-unescaped-entities */
'use client'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black px-4">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <div className="max-w-4xl text-justify">
        <p className="mb-4"><strong>Effective Date:</strong> November 23, 2024</p>
        <p className="mb-4">
          BLNK LLC ("we," "our," or "us") respects your privacy and is committed to protecting it. This Privacy Policy explains how we handle your information when you use the SmokingIsBad app.
        </p>
        <h2 className="text-2xl font-bold mt-6">Information Collection</h2>
        <p className="mb-4">
          <strong>No Data Collection:</strong> SmokingIsBad does not collect, transmit, or share any personal data or usage data with us or any third parties.
        </p>
        <p className="mb-4">
          <strong>Local Storage:</strong> All information entered or generated within SmokingIsBad is stored locally on your iOS device. We do not have access to this data.
        </p>
        <h2 className="text-2xl font-bold mt-6">Data Usage</h2>
        <p className="mb-4">
          The data you input into SmokingIsBad is solely for your use and benefit. It remains on your device unless you explicitly back it up through your own system or share it externally.
        </p>
        <h2 className="text-2xl font-bold mt-6">Data Security</h2>
        <p className="mb-4">
          Since no data is transmitted to us, the security of your data is primarily dependent on the security of your device. We recommend securing your device with a passcode and regularly updating your iOS software.
        </p>
        <h2 className="text-2xl font-bold mt-6">Third-Party Services</h2>
        <p className="mb-4">
          SmokingIsBad does not integrate with third-party services or analytics tools that may collect your information.
        </p>
        <h2 className="text-2xl font-bold mt-6">Children's Privacy</h2>
        <p className="mb-4">
          SmokingIsBad is not intended for use by individuals under the age of 17. We do not knowingly collect data from anyone under this age.
        </p>
        <h2 className="text-2xl font-bold mt-6">Changes to this Privacy Policy</h2>
        <p className="mb-4">
          If we update this Privacy Policy in the future, we will notify you by updating the "Effective Date" above. Please review this page periodically to stay informed.
        </p>
        <p className="mb-4">
          If you have any questions or concerns, please contact us at <strong>support@blnk.llc</strong>.
        </p>
      </div>
    </div>
  );
}
