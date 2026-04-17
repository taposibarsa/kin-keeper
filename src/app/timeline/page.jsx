"use client";

import { useContacts } from "@/context/ContactContext";
import { PiHandshake } from "react-icons/pi";
import { IoMdText } from "react-icons/io";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaVideo } from "react-icons/fa";

export default function TimelinePage() {
    const { timeline } = useContacts();

    const getIcon = (type) => {
        switch (type) {
            case "call":
                return <PiPhoneCallBold className="text-gray-600 text-lg" />;
            case "text":
                return <IoMdText className="text-gray-600 text-lg" />;
            case "video":
                return <FaVideo className="text-gray-600 text-lg" />;
            default:
                return <PiHandshake className="text-yellow-500 text-lg" />;
        }
    };

    return (
        <div className="bg-[#F7F8FA] min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Timeline
                </h1>

                {/* FILTER */}
                <select className="mb-6 border px-3 py-2 rounded-md text-sm text-gray-600">
                    <option>Filter timeline</option>
                </select>

                {/* LIST */}
                <div className="space-y-3">
                    {timeline.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white flex items-center gap-4 p-4 rounded-md shadow-sm"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                                {getIcon(item.type)}
                            </div>

                            <div>
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium capitalize">
                                        {item.type}
                                    </span>{" "}
                                    with {item.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}