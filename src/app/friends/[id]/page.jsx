"use client";

import { useParams } from "next/navigation";
import { useContacts } from "@/context/ContactContext";
import Image from "next/image";
import { FiArchive, FiClock, FiTrash2 } from "react-icons/fi";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

export default function FriendDetails() {
    const { id } = useParams();
    const { contacts } = useContacts();

    const friend = contacts.find((c) => c.id == id);

    if (!friend) return <p className="text-center mt-20">Loading...</p>;

    return (
        <div className="bg-[#F7F8FA] max-w-5xl mx-auto py-14 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* LEFT PROFILE CARD */}
                <div>
                    <div className="bg-white rounded-md shadow-sm p-6 text-center">
                        <div className="w-20 h-20 mx-auto relative rounded-full overflow-hidden">
                            <Image src={friend.picture} alt={friend.name} fill className="object-cover" />
                        </div>

                        <h2 className="mt-3 text-[20px] font-semibold text-[#1F2937]">
                            {friend.name}
                        </h2>

                        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-red-500 text-white">
                            {friend.status === "overdue" ? "Overdue" : friend.status}
                        </span>

                        {/* TAG */}
                        <div className="mt-2">
                            <span className="text-[10px] px-3 py-1 rounded-full bg-green-100 text-green-700 uppercase">
                                {friend.tags[0]}
                            </span>
                        </div>

                        <p className="text-[16px] font-medium text-[#64748B] italic mt-1">
                            {friend.bio}
                        </p>

                        <p className="text-[16px] font-medium text-[#64748B]">
                            Preferred: email
                        </p>

                    </div>
                    <div className="bg-white rounded-md shadow-sm mt-3 text-center">
                        <button className="w-full flex justify-center items-center gap-2 py-4 text-sm hover:bg-gray-50">
                            <FiClock />
                            Snooze 2 weeks
                        </button>
                    </div>
                    <div className="bg-white rounded-md shadow-sm mt-3 text-center">
                        <button className="w-full flex justify-center items-center gap-2 py-4 text-sm hover:bg-gray-50">
                            <FiArchive />
                            Archive
                        </button>
                    </div>
                    <div className="bg-white rounded-md shadow-sm mt-3 text-center">
                        <button className="w-full text-red-500 flex justify-center items-center gap-2 py-4 text-sm hover:bg-gray-50">
                            <FiTrash2 />
                            Archive
                        </button>
                    </div>
                </div>







                {/* RIGHT SIDE */}
                <div className="md:col-span-2 space-y-4">

                    {/* TOP STATS */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-sm shadow-sm text-center py-8 px-4">
                            <p className="text-3xl font-semibold text-[#244D3F]">
                                {friend.days_since_contact}
                            </p>
                            <p className="mt-1 text-[16px] text-[#64748B]">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-4 rounded-sm shadow-sm text-center py-8 px-4">
                            <p className="text-3xl font-semibold text-[#244D3F]">
                                {friend.goal}
                            </p>
                            <p className="mt-1 text-[16px] text-[#64748B]">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-4 rounded-sm shadow-sm text-center py-8 px-4">
                            <p className="text-3xl font-semibold text-[#244D3F]">
                                {friend.next_due_date}
                            </p>
                            <p className="mt-1 text-[16px] text-[#64748B]">Next Due</p>
                        </div>
                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white p-5 rounded-sm shadow-sm flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-medium text-[#244D3F]">
                                Relationship Goal
                            </h3>
                            <p className="text-[16px] text-[#64748B] mt-1">
                                Connect every <span className="font-semibold text-black">{friend.goal} days</span>
                            </p>
                        </div>
                        <button className="text-[16px] bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-50">
                            Edit
                        </button>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white p-5 rounded-sm shadow-sm">
                        <h3 className="text-xl font-medium text-[#244D3F] mb-4">
                            Quick Check-In
                        </h3>

                        <div className="grid grid-cols-3 gap-4">
                            <button className="bg-gray-100 flex flex-col items-center justify-center text-center rounded-sm p-4 text-sm hover:bg-gray-50 ">
                                <PiPhoneCallBold className="text-xl text-gray-600 mb-1" /> 
                                <span>Text</span>
                            </button>
                            <button className="bg-gray-100 flex flex-col items-center justify-center text-center rounded-sm p-4 text-sm hover:bg-gray-50">
                                <IoMdText className="text-xl text-gray-600 mb-1" /> 
                                <span>Text</span>
                            </button>
                            <button className="bg-gray-100 flex flex-col items-center justify-center text-center rounded-sm p-4 text-sm hover:bg-gray-50">
                                <FaVideo className="text-xl text-gray-600 mb-1" /> 
                                <span>Text</span>
                            </button>
                        </div>
                    </div>

                    {/* RECENT INTERACTIONS */}
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-medium text-gray-700">
                                Recent Interactions
                            </h3>
                            <button className="text-xs border px-2 py-1 rounded hover:bg-gray-50">
                                Full History
                            </button>
                        </div>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>💬 Asked for career advice</span>
                                <span className="text-xs text-gray-400">Jan 28</span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>📞 Industry meetup</span>
                                <span className="text-xs text-gray-400">Jan 28</span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>🎥 Career advice</span>
                                <span className="text-xs text-gray-400">Jan 28</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}