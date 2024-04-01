"use client";

export default function Error() {
    return (
        <div className="flex justify-center items-center h-56 flex-col">
            <span className="text-2xl">The Hotel you are looking for was not found</span>
            <span
                className="text-yellow-600 underline cursor-pointer"
                onClick={() => {
                    window.location.href = "/";
                }}>
                Check other options
            </span>
        </div>
    );
}
