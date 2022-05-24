import ExclamationCircleIcon from "@heroicons/react/outline/ExclamationCircleIcon";

interface Props {
  revokedAt: string;
  reason: string;
}

function RevokedBanner({ revokedAt, reason }: Props) {
  return (
    <div className="bg-red-100 border-l-red-500 border-l-4 py-4 px-4 flex flex-row items-center gap-4">
      <ExclamationCircleIcon className="hidden md:inline w-6 h-6 text-red-500 sm:hidden" />
      <div>
        <h2 className="text-sm font-bold text-gray-700">
          This certificate has been revoked by the issuer on {revokedAt}
        </h2>
        <p className="text-sm text-gray-800 mt-2">
          Reason for the revocation:{" "}
          <span className="text-gray-500">{reason}</span>
        </p>
      </div>
    </div>
  );
}

export default RevokedBanner;
