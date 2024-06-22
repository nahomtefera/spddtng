export default function Loading({text="Loading", color="#000", width=16, border=4, height=16, noText}) {
    return(
        <div className="flex min-h-screen items-center justify-center flex-col gap-8">
            <div className={`h-${width} w-${height} animate-spin rounded-full border-${border} border-[#${color}] border-t-transparent`} />
            {!noText && (
                <div className="text-xl font-medium">
                    {text}
                </div>
            )}
        </div>
    )
}