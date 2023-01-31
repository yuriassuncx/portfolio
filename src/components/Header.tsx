export function Header() {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <span className='flex flex-col cursor-pointer font-primary font-bold'>
                        <p className="text-3xl text-accent">Yuri</p>
                        <p className='text-2xl'>Assunção</p>
                    </span>

                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </header>
    )
}
