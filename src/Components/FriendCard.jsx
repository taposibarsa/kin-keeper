import Image from "next/image";
import Link from "next/link";

const statusConfig = {
  overdue: { label: "Overdue", className: "bg-[#EF4444] text-white" },
  "almost due": { label: "Almost Due", className: "bg-[#EFAD44] text-white" },
  "on-track": { label: "On-Track", className: "bg-[#244D3F] text-white" },
};

const FriendCard = ({ contact }) => {
  const { id, name, picture, days_since_contact, tags, status } = contact;
  const statusInfo = statusConfig[status] || { label: status, className: "bg-gray-100 text-gray-600" };

  return (
    <Link href={`/friends/${id}`}>
    <div className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center gap-2 shadow-sm">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image src={picture} alt={name} fill sizes="64px" className="object-cover" />
      </div>

      <p className="font-medium text-gray-800 text-sm text-center ">{name}</p>
      <span className="text-xs text-gray-400">{days_since_contact}d ago</span>

      {/* Tags - একটাই color সবার জন্য */}
      <div className="flex flex-wrap gap-1 py-1 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase bg-teal-100 text-teal-800"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status - conditional color */}
      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${statusInfo.className}`}>
        {statusInfo.label}
      </span>
    </div></Link>
  );
}
export default FriendCard;