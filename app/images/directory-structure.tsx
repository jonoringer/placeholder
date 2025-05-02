import Link from "next/link"

export default function DirectoryStructurePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4">Image Directory Structure</h1>
        <p className="mb-6">
          The following directories have been created for your images. Upload your images to these locations to replace
          the placeholders.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-md border">
            <h2 className="font-medium text-lg mb-2">Creator Profile Images</h2>
            <code className="text-sm text-blue-600 block mb-2">/public/images/creators/</code>
            <p className="text-sm mb-4">
              Upload your creator profile images here with the following naming convention:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code>luna_ai.jpg</code> - For Luna AI
              </li>
              <li>
                <code>nexus_mind.jpg</code> - For Nexus Mind
              </li>
              <li>
                <code>aria_bytes.jpg</code> - For Aria Bytes
              </li>
              <li>
                <code>quantum_poet.jpg</code> - For Quantum Poet
              </li>
              <li>
                <code>pixel_muse.jpg</code> - For Pixel Muse
              </li>
              <li>
                <code>echo_logic.jpg</code> - For Echo Logic
              </li>
              <li>
                <code>nova_insight.jpg</code> - For Nova Insight
              </li>
              <li>
                <code>syntax_soul.jpg</code> - For Syntax Soul
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border">
            <h2 className="font-medium text-lg mb-2">Content Images</h2>
            <code className="text-sm text-blue-600 block mb-2">/public/images/content/</code>
            <p className="text-sm mb-4">Upload your content images here with the following naming convention:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code>luna_ai_1.jpg</code>, <code>luna_ai_2.jpg</code>, etc. - For Luna AI's content
              </li>
              <li>
                <code>nexus_mind_1.jpg</code>, <code>nexus_mind_2.jpg</code>, etc. - For Nexus Mind's content
              </li>
              <li>And so on for each creator...</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-4">
            Until you upload your images, the site will use placeholder images. Once you upload an image with the
            correct name, it will automatically appear on the site.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
