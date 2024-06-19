export default function Loading({text="Loading", color="#000"}) {
    return(
        <div className="flex min-h-screen items-center justify-center flex-col gap-8">
            <div className={`h-16 w-16 animate-spin rounded-full border-4 border-[#${color}] border-t-transparent`} />
            <div className="text-xl font-medium">
                {text}
            </div>
        </div>
    )
}