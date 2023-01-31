interface WorkCardProps {
    id?: string;
    slug?: string;
    image: string;
    title: string;
    subtitle: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export function WorkCard({ image, title, subtitle, createdAt, updatedAt, id, slug }: WorkCardProps) {
    return (
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />

            <img
                src={image}
                alt="Portfolio Image"
                className="group-hover:scale-125 transition-all duration-500"
            />

            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{title}</span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">{subtitle}</span>
            </div>
        </div>
    )
}