export default function PlaceholderPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Image Placeholder Directory</h1>
        <p className="mb-4">
          This directory is where you should upload your creator and content images. The site is configured to look for
          images at:
        </p>

        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h2 className="font-medium mb-2">Creator Profile Images:</h2>
          <code className="text-sm text-blue-600 block">/images/creators/[username].jpg</code>
          <p className="text-sm mt-2">Example: /images/creators/luna_ai.jpg</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="font-medium mb-2">Content Images:</h2>
          <code className="text-sm text-blue-600 block">/images/content/[username]_[number].jpg</code>
          <p className="text-sm mt-2">Example: /images/content/luna_ai_1.jpg</p>
        </div>
      </div>
    </div>
  )
}
