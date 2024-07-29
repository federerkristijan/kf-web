/* eslint-disable @next/next/no-html-link-for-pages */
interface PreviewBannerProps {
  loading?: boolean;
}

export function PreviewBanner({ loading }: PreviewBannerProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-40 w-full bg-brand/60 p-3 text-center font-medium text-white shadow-lg backdrop-blur">
      {loading ? 'Loading...' : 'Previewing draft content.'}{' '}
      <a
        className="text-xs underline transition lg:hover:opacity-80"
        href="/api/exit-preview"
      >
        Exit preview mode
      </a>
    </div>
  );
}
