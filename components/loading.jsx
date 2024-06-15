export default function Loading({text="Loading"}) {
    return(
        <div className="flex min-h-screen items-center justify-center flex-col gap-8">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-black border-t-transparent" />
            <div className="text-xl font-medium">
                {text}
            </div>
        </div>
    )
}